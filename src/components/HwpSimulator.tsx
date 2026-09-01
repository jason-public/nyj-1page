import React, { useState, useEffect, useRef } from 'react';
import {
  Sliders,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Zap,
  Info,
  Maximize2,
  Table as TableIcon
} from 'lucide-react';
import { FontDialogModal } from './FontDialogModal';
import { ParagraphDialogModal } from './ParagraphDialogModal';
import { TableCellDialogModal } from './TableCellDialogModal';

export interface SimulatorState {
  tracking: number; // letter spacing (%)
  scale: number;    // horizontal scale (%)
  fontSize: number; // pt
  lineHeight: number; // line spacing (%)
  tableMarginY: number; // mm
  hasEmptyTableLines: boolean;
  lastLineZeroHeight: boolean;
  selectedTemplate: string;
}

const TEMPLATES = [
  {
    id: 'official-doc',
    title: '공공기관 공문서 (1줄 넘침)',
    description: '결재 전 마지막 1줄이 2페이지로 넘어간 전형적인 공문서',
    initial: {
      tracking: 0,
      scale: 100,
      fontSize: 10,
      lineHeight: 165,
      tableMarginY: 2.5,
      hasEmptyTableLines: true,
      lastLineZeroHeight: false
    }
  },
  {
    id: 'project-proposal',
    title: '2026 신규 사업 기획서',
    description: '표 내부 빈칸과 기본 줄간격으로 2페이지로 부푼 제안서',
    initial: {
      tracking: 0,
      scale: 100,
      fontSize: 10.5,
      lineHeight: 160,
      tableMarginY: 2.8,
      hasEmptyTableLines: true,
      lastLineZeroHeight: false
    }
  },
  {
    id: 'promotion-notice',
    title: '고객 프로모션 안내문 (인쇄용)',
    description: '2장 출력 시 인쇄 비용이 2배가 되는 단면 안내문',
    initial: {
      tracking: 0,
      scale: 100,
      fontSize: 10,
      lineHeight: 170,
      tableMarginY: 2.0,
      hasEmptyTableLines: false,
      lastLineZeroHeight: false
    }
  }
];

export const HwpSimulator: React.FC = () => {
  const [state, setState] = useState<SimulatorState>({
    tracking: 0,
    scale: 100,
    fontSize: 10,
    lineHeight: 165,
    tableMarginY: 2.5,
    hasEmptyTableLines: true,
    lastLineZeroHeight: false,
    selectedTemplate: 'official-doc'
  });

  const [shortcutFeedback, setShortcutFeedback] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'font' | 'paragraph' | 'table' | null>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const [heightRatio, setHeightRatio] = useState<number>(105);

  // Trigger feedback
  const showFeedback = (text: string) => {
    setShortcutFeedback(text);
    setTimeout(() => {
      setShortcutFeedback((prev) => (prev === text ? null : prev));
    }, 1500);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting if focus is in an input field
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
        return;
      }

      // Alt + Shift + N: 자간 축소 (Narrow)
      if (e.altKey && e.shiftKey && (e.key === 'N' || e.key === 'n' || e.code === 'KeyN')) {
        e.preventDefault();
        setState((prev) => {
          const next = Math.max(-20, prev.tracking - 1);
          showFeedback(`Alt+Shift+N (자간 축소: ${next}%)`);
          return { ...prev, tracking: next };
        });
      }
      // Alt + Shift + W: 자간 확대 (Wide)
      else if (e.altKey && e.shiftKey && (e.key === 'W' || e.key === 'w' || e.code === 'KeyW')) {
        e.preventDefault();
        setState((prev) => {
          const next = Math.min(20, prev.tracking + 1);
          showFeedback(`Alt+Shift+W (자간 확대: ${next}%)`);
          return { ...prev, tracking: next };
        });
      }
      // Alt + Shift + J: 장평 축소 (작게)
      else if (e.altKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.code === 'KeyJ')) {
        e.preventDefault();
        setState((prev) => {
          const next不易 = Math.max(70, prev.scale - 1);
          showFeedback(`Alt+Shift+J (장평 축소: ${next不易}%)`);
          return { ...prev, scale: next不易 };
        });
      }
      // Alt + Shift + K: 장평 확대 (크게)
      else if (e.altKey && e.shiftKey && (e.key === 'K' || e.key === 'k' || e.code === 'KeyK')) {
        e.preventDefault();
        setState((prev) => {
          const next = Math.min(130, prev.scale + 1);
          showFeedback(`Alt+Shift+K (장평 확대: ${next}%)`);
          return { ...prev, scale: next };
        });
      }
      // Alt + Shift + R: 글자 크기 축소 (Reduce)
      else if (e.altKey && e.shiftKey && (e.key === 'R' || e.key === 'r' || e.code === 'KeyR')) {
        e.preventDefault();
        setState((prev) => {
          const next = Math.max(6, Math.round((prev.fontSize - 0.5) * 10) / 10);
          showFeedback(`Alt+Shift+R (글자 크기: ${next}pt)`);
          return { ...prev, fontSize: next };
        });
      }
      // Alt + Shift + E: 글자 크기 확대 (Expand)
      else if (e.altKey && e.shiftKey && (e.key === 'E' || e.key === 'e' || e.code === 'KeyE')) {
        e.preventDefault();
        setState((prev) => {
          const next = Math.min(24, Math.round((prev.fontSize + 0.5) * 10) / 10);
          showFeedback(`Alt+Shift+E (글자 크기: ${next}pt)`);
          return { ...prev, fontSize: next };
        });
      }
      // Ctrl + Shift + Q: 줄 간격 축소
      else if (e.ctrlKey && e.shiftKey && (e.key === 'Q' || e.key === 'q' || e.code === 'KeyQ')) {
        e.preventDefault();
        setState((prev) => {
          const next = Math.max(80, prev.lineHeight - 10);
          showFeedback(`Ctrl+Shift+Q (줄 간격 축소: ${next}%)`);
          return { ...prev, lineHeight: next };
        });
      }
      // Ctrl + Shift + W: 줄 간격 확대
      else if (e.ctrlKey && e.shiftKey && (e.key === 'W' || e.key === 'w' || e.code === 'KeyW')) {
        e.preventDefault();
        setState((prev) => {
          const next = Math.min(250, prev.lineHeight + 10);
          showFeedback(`Ctrl+Shift+W (줄 간격 확대: ${next}%)`);
          return { ...prev, lineHeight: next };
        });
      }
      // Alt + L: 글자 모양 대화상자
      else if (e.altKey && (e.key === 'l' || e.key === 'L' || e.code === 'KeyL')) {
        e.preventDefault();
        setActiveModal('font');
        showFeedback('Alt+L (글자 모양 대화상자)');
      }
      // Alt + T: 문단 모양 대화상자
      else if (e.altKey && (e.key === 't' || e.key === 'T' || e.code === 'KeyT')) {
        e.preventDefault();
        setActiveModal('paragraph');
        showFeedback('Alt+T (문단 모양 대화상자)');
      }
      // P: 표/셀 속성 대화상자 (if not ctrl/alt)
      else if (!e.ctrlKey && !e.altKey && !e.shiftKey && (e.key === 'p' || e.key === 'P' || e.code === 'KeyP')) {
        setActiveModal('table');
        showFeedback('P (표/셀 속성 대화상자)');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Calculate simulated height ratio (100% is 1 A4 page capacity)
  useEffect(() => {
    let base = 100;

    // Line height contribution: 160% is standard 0% offset. (140% gives -6%, 165% gives +2%)
    base += ((state.lineHeight - 160) / 160) * 22;

    // Tracking contribution: -5% gives -4% height relief due to line-wrapping pull
    base += (state.tracking / 100) * 35;

    // Scale contribution: 95% gives -4% height relief
    base += ((state.scale - 100) / 100) * 40;

    // Font size contribution: 10pt is standard
    base += ((state.fontSize - 10) / 10) * 25;

    // Table margin: 0.5mm vs 2.5mm
    base += (state.tableMarginY - 0.5) * 2.8;

    // Empty table lines
    if (state.hasEmptyTableLines) base += 5.5;

    // Last line 0% height
    if (state.lastLineZeroHeight) base -= 4.0;

    setHeightRatio(Math.max(50, Math.round(base * 10) / 10));
  }, [state]);

  const isOnePage = heightRatio <= 100;

  const applyGoldenPreset = () => {
    setState((prev) => ({
      ...prev,
      tracking: -4,
      scale: 95,
      lineHeight: 145,
      fontSize: 10,
      tableMarginY: 0.5,
      hasEmptyTableLines: false,
      lastLineZeroHeight: false
    }));
    showFeedback('✨ 황금 1페이지 압축 프리셋 (자간-4%, 장평95%, 줄간격145%, 표0.5mm) 적용 완료!');
  };

  const resetPreset = () => {
    const tmpl = TEMPLATES.find((t) => t.id === state.selectedTemplate) || TEMPLATES[0];
    setState({
      ...tmpl.initial,
      selectedTemplate: tmpl.id
    });
    showFeedback('🔄 기본값으로 초기화되었습니다.');
  };

  const handleTemplateSelect不易 = (id: string) => {
    const tmpl = TEMPLATES.find((t) => t.id === id);
    if (tmpl) {
      setState({
        ...tmpl.initial,
        selectedTemplate: id
      });
      showFeedback(`📄 [${tmpl.title}] 템플릿 불러옴`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Toast Feedback for Shortcut */}
      {shortcutFeedback && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-blue-500 animate-bounce">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>{shortcutFeedback}</span>
        </div>
      )}

      {/* Simulator Header & Status Dashboard */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-md border border-blue-100">
                실시간 HWP 시뮬레이터
              </span>
              <span className="text-xs text-gray-500">
                단축키 <kbd className="kbd-key">Alt+Shift+N</kbd>, <kbd className="kbd-key">Alt+Shift+J</kbd>, <kbd className="kbd-key">Ctrl+Shift+Q</kbd> 지원
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              한글 보고서 1페이지 실시간 압축 작업대
            </h2>
          </div>

          {/* Template Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-xs font-medium text-gray-500 shrink-0">샘플 문서:</span>
            {TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => handleTemplateSelect不易(tmpl.id)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-colors shrink-0 cursor-pointer ${
                  state.selectedTemplate === tmpl.id
                    ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tmpl.title}
              </button>
            ))}
          </div>
        </div>

        {/* 1-Page Status Gauge */}
        <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Status Indicator */}
          <div
            className={`p-3.5 rounded-xl border flex items-center gap-3 transition-colors ${
              isOnePage
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                : 'bg-rose-50/70 border-rose-200 text-rose-900'
            }`}
          >
            {isOnePage ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            )}
            <div>
              <div className="text-xs font-bold">
                {isOnePage ? '1페이지 압축 완료 (인쇄 적합)' : '2페이지 초과 (결재 반려 위험)'}
              </div>
              <div className="text-[11px] text-gray-600 mt-0.5">
                {isOnePage
                  ? '모든 본문이 1페이지 100% 안에 완벽 수납되었습니다.'
                  : '마지막 줄 또는 표가 경계선을 초과하여 2장이 인쇄됩니다.'}
              </div>
            </div>
          </div>

          {/* Capacity Gauge Bar */}
          <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
            <div className="flex justify-between text-xs font-medium text-gray-700 mb-1.5">
              <span>A4 1페이지 용량 게이지</span>
              <span className={`font-mono font-bold ${isOnePage ? 'text-emerald-600' : 'text-rose-600'}`}>
                {heightRatio}% / 100%
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden relative">
              <div
                className={`h-full rounded-full transition-all duration-200 ${
                  isOnePage ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
                style={{ width: `${Math.min(100, (heightRatio / 120) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>여유 공간</span>
              <span className="font-semibold text-gray-600">100% (1페이지 한계선)</span>
              <span>초과</span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={applyGoldenPreset}
              className="flex-1 py-2.5 px-3.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>황금 1페이지 압축 (원클릭)</span>
            </button>
            <button
              onClick={resetPreset}
              className="p-2.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 rounded-xl transition-colors cursor-pointer"
              title="기본값 복원"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Workspace: Left Controls Toolbar / Right Virtual HWP A4 Paper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Controls Panel */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-5 sticky top-20">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              <span>서식 파라미터 조절</span>
            </div>
            <span className="text-[11px] text-gray-400">단축키 즉시 연동</span>
          </div>

          {/* 1. 자간 (Alt+Shift+N/W) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-800">1. 자간 (Tracking)</span>
                <kbd className="kbd-key text-[10px]">Alt+Shift+N/W</kbd>
              </div>
              <span className="font-mono font-bold text-blue-700">
                {state.tracking > 0 ? `+${state.tracking}` : state.tracking}%
              </span>
            </div>
            <input
              type="range"
              min="-15"
              max="15"
              value={state.tracking}
              onChange={(e) => setState({ ...state, tracking: parseInt(e.target.value) })}
              className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400">
              <span>-15%</span>
              <span className="text-blue-600 font-medium">추천: -3% ~ -5%</span>
              <span>+15%</span>
            </div>
          </div>

          {/* 2. 장평 (Alt+Shift+J/K) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-800">2. 장평 (Scale)</span>
                <kbd className="kbd-key text-[10px]">Alt+Shift+J/K</kbd>
              </div>
              <span className="font-mono font-bold text-blue-700">{state.scale}%</span>
            </div>
            <input
              type="range"
              min="80"
              max="120"
              value={state.scale}
              onChange={(e) => setState({ ...state, scale: parseInt(e.target.value) })}
              className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400">
              <span>80%</span>
              <span className="text-blue-600 font-medium">황금 비율: 95%</span>
              <span>120%</span>
            </div>
          </div>

          {/* 3. 줄 간격 (Ctrl+Shift+Q/W) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-800">3. 줄 간격</span>
                <kbd className="kbd-key text-[10px]">Ctrl+Shift+Q/W</kbd>
              </div>
              <span className="font-mono font-bold text-blue-700">{state.lineHeight}%</span>
            </div>
            <input
              type="range"
              min="100"
              max="200"
              step="5"
              value={state.lineHeight}
              onChange={(e) => setState({ ...state, lineHeight: parseInt(e.target.value) })}
              className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400">
              <span>100%</span>
              <span className="text-blue-600 font-medium">실무 추천: 140~150%</span>
              <span>기본 160%</span>
            </div>
          </div>

          {/* 4. 표 안여백 & 빈칸 (P 키) */}
          <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <TableIcon className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold text-gray-800">4. 표 셀 위/아래 여백</span>
                <kbd className="kbd-key text-[10px]">P</kbd>
              </div>
              <span className="font-mono font-bold text-blue-700">{state.tableMarginY} mm</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={state.tableMarginY}
              onChange={(e) => setState({ ...state, tableMarginY: parseFloat(e.target.value) })}
              className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400">
              <span>0mm</span>
              <span className="text-blue-600 font-medium">비법: 0.5mm</span>
              <span>기본 2.5mm</span>
            </div>

            <div className="pt-2.5 border-t border-gray-200 flex items-center justify-between">
              <label className="text-xs text-gray-700 flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={state.hasEmptyTableLines}
                  onChange={(e) => setState({ ...state, hasEmptyTableLines: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 border-gray-300"
                />
                <span>표 내부 불필요한 빈 엔터 남김</span>
              </label>
            </div>
          </div>

          {/* 5. 마지막 줄 0% 매직 옵션 */}
          <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100">
            <label className="text-xs text-gray-800 font-semibold flex items-center justify-between cursor-pointer select-none">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>마지막 줄 간격 0% 적용</span>
              </span>
              <input
                type="checkbox"
                checked={state.lastLineZeroHeight}
                onChange={(e) => setState({ ...state, lastLineZeroHeight: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 border-gray-300"
              />
            </label>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              마지막 1줄을 윗페이지 맨 밑으로 자연스럽게 흡수시키는 실무 팁입니다.
            </p>
          </div>

          {/* Open Dialog buttons */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <button
              onClick={() => setActiveModal('font')}
              className="py-2 px-1 text-center bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 transition-colors cursor-pointer"
            >
              글자모양(Alt+L)
            </button>
            <button
              onClick={() => setActiveModal('paragraph')}
              className="py-2 px-1 text-center bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 transition-colors cursor-pointer"
            >
              문단모양(Alt+T)
            </button>
            <button
              onClick={() => setActiveModal('table')}
              className="py-2 px-1 text-center bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 transition-colors cursor-pointer"
            >
              표속성(P)
            </button>
          </div>
        </div>

        {/* Right Virtual A4 Paper Container */}
        <div className="lg:col-span-8 flex flex-col items-center">
          {/* Paper Ruler Bar */}
          <div className="w-full max-w-2xl bg-[#e2e8f0] border border-slate-300 rounded-t-lg h-6 flex items-center px-4 justify-between text-[10px] text-slate-500 font-mono select-none">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>A4 세로 (210 × 297 mm) - 한글(HWP) 가상 뷰어</span>
            </div>
            <span>여백: 좌20 우20 상20 하15</span>
          </div>

          {/* A4 Paper Canvas */}
          <div
            ref={paperRef}
            className="w-full max-w-2xl bg-white hwp-paper-shadow border-x border-b border-slate-300 p-8 sm:p-12 relative transition-all duration-150 font-hwp-myeongjo select-text"
            style={{
              minHeight: '840px',
              letterSpacing: `${state.tracking * 0.12}px`,
              fontSize: `${state.fontSize * 1.35}px`,
              lineHeight: `${state.lineHeight}%`
            }}
          >
            {/* 1-Page Cut Boundary Line (visual guide) */}
            <div
              className={`absolute left-0 right-0 border-b-2 border-dashed z-20 pointer-events-none transition-all ${
                isOnePage ? 'border-emerald-400' : 'border-rose-500'
              }`}
              style={{ top: '780px' }}
            >
              <div
                className={`absolute right-4 -top-6 text-[11px] font-bold px-2 py-0.5 rounded shadow-xs font-sans ${
                  isOnePage
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-600 text-white animate-bounce'
                }`}
              >
                {isOnePage ? '✓ 1페이지 한계선 이내 (합격)' : '⚠️ 1페이지 컷 라인 (초과됨)'}
              </div>
            </div>

            {/* Document Header */}
            <div className="border-b-2 border-slate-900 pb-3 mb-5 flex justify-between items-end font-sans">
              <div>
                <div className="text-xs text-slate-500 font-medium">문서번호 : 2026-기획-0419호</div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-hwp-gothic mt-1">
                  {state.selectedTemplate === 'official-doc' && '2026년도 신규 공공사업 추진 계획 및 주요 협력방안(안)'}
                  {state.selectedTemplate === 'project-proposal' && '스마트 행정 서비스 혁신 및 업무 자동화 사업 계획서'}
                  {state.selectedTemplate === 'promotion-notice' && '2026 하반기 시민 참여형 디지털 역량 강화 프로모션 안내문'}
                </h1>
              </div>
              <div className="text-xs text-slate-600 text-right font-medium hidden sm:block">
                기안일자: 2026. 09. 01.<br />
                기안자: 총괄기획팀
              </div>
            </div>

            {/* Section 1: Overview */}
            <div className="mb-4">
              <h2 className="text-sm font-bold text-slate-900 font-hwp-gothic mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-3.5 bg-blue-700 inline-block" />
                1. 추진 배경 및 개요
              </h2>
              <p
                style={{
                  transform: `scaleX(${state.scale / 100})`,
                  transformOrigin: 'left'
                }}
                className="text-slate-800 text-justify"
              >
                급변하는 디지털 행정 환경에 선제적으로 대응하고, 대시민 행정 서비스의 만족도와 신속성을 동시에 향상시키기 위한 통합 실행 계획입니다. 각종 보고서 및 공문서 작성을 한 페이지로 압축하여 결재 프로세스를 대폭 간소화합니다.
              </p>
            </div>

            {/* Section 2: Table Content */}
            <div className="mb-4">
              <h2 className="text-sm font-bold text-slate-900 font-hwp-gothic mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-3.5 bg-blue-700 inline-block" />
                2. 주요 세부 실행 과제 및 일정
              </h2>
              <table className="w-full border-collapse border border-slate-700 text-xs text-slate-900 font-hwp-gothic">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-700 font-bold text-center">
                    <th
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 w-1/4"
                    >
                      구분
                    </th>
                    <th
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 w-1/2"
                    >
                      세부 추진 내용
                    </th>
                    <th
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 w-1/4"
                    >
                      목표 일정
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 text-center font-medium bg-slate-50"
                    >
                      기반 구축
                    </td>
                    <td
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 px-2"
                    >
                      현장 의견 수렴 및 시범 시스템 인프라 구축
                      {state.hasEmptyTableLines && (
                        <div className="text-slate-400 font-mono text-[10px]">
                          ↵ (불필요한 빈 엔터 줄바꿈 존재)
                        </div>
                      )}
                    </td>
                    <td
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 text-center"
                    >
                      1분기
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 text-center font-medium bg-slate-50"
                    >
                      통합 운영
                    </td>
                    <td
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 px-2"
                    >
                      관계 기관 간 전산망 연계 및 표준 서식 공유
                      {state.hasEmptyTableLines && (
                        <div className="text-slate-400 font-mono text-[10px]">
                          ↵ (불필요한 빈 엔터 줄바꿈 존재)
                        </div>
                      )}
                    </td>
                    <td
                      style={{
                        paddingTop: `${state.tableMarginY * 3.77}px`,
                        paddingBottom: `${state.tableMarginY * 3.77}px`
                      }}
                      className="border border-slate-400 text-center"
                    >
                      2분기~3분기
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 3: Expected Outcomes */}
            <div className="mb-4">
              <h2 className="text-sm font-bold text-slate-900 font-hwp-gothic mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-3.5 bg-blue-700 inline-block" />
                3. 기대 효과 및 행정 사항
              </h2>
              <ul
                style={{
                  transform: `scaleX(${state.scale / 100})`,
                  transformOrigin: 'left'
                }}
                className="space-y-1 text-slate-800 list-disc list-inside"
              >
                <li>보고서의 시각적 명확성 확보로 임원 보고 시간 40% 단축</li>
                <li>양면 및 추가 페이지 인쇄 비용 연간 1,200만원 절감</li>
                <li>공문서 표준 서식 준수율 100% 달성 및 시민 피드백 즉시 반영</li>
              </ul>
            </div>

            {/* Section 4: Final Conclusion (the overflow culprit) */}
            <div
              className={`p-3 rounded-lg border transition-all ${
                isOnePage
                  ? 'bg-emerald-50/50 border-emerald-200'
                  : 'bg-rose-50/70 border-rose-300'
              }`}
              style={{
                lineHeight: state.lastLineZeroHeight ? '60%' : undefined
              }}
            >
              <div className="text-xs font-bold text-slate-900 font-sans mb-1 flex items-center justify-between">
                <span>[종합 검토의견]</span>
                <span className="text-[10px] font-mono text-slate-500">
                  {state.lastLineZeroHeight ? '줄간격 0% 압축 적용됨' : '일반 줄간격'}
                </span>
              </div>
              <p
                style={{
                  transform: `scaleX(${state.scale / 100})`,
                  transformOrigin: 'left'
                }}
                className="text-slate-800 text-xs leading-normal text-justify"
              >
                상기 계획에 따라 관계 부서와의 긴밀한 사전 협의를 거쳐 차질 없이 사업을 집행할 예정이며, 세부 실행 결과는 익월 월간 보고회에서 종합 보고드리고자 합니다. 본 안건에 대하여 원안대로 재가하여 주시기 바랍니다.
              </p>
            </div>

            {/* Footer stamp representation */}
            <div className="mt-8 text-center text-xs font-bold text-slate-700 tracking-widest font-sans">
              ― 끝 ―
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <FontDialogModal
        isOpen={activeModal === 'font'}
        onClose={() => setActiveModal(null)}
        tracking={state.tracking}
        scale={state.scale}
        fontSize={state.fontSize}
        onApply={(t, s, f) => {
          setState((prev不易) => ({ ...prev不易, tracking: t, scale: s, fontSize: f }));
          showFeedback('글자 모양 설정 적용 완료!');
        }}
      />

      <ParagraphDialogModal
        isOpen={activeModal === 'paragraph'}
        onClose={() => setActiveModal(null)}
        lineHeight={state.lineHeight}
        onApply={(lh) => {
          setState((prev) => ({ ...prev, lineHeight: lh }));
          showFeedback('문단 모양 설정 적용 완료!');
        }}
      />

      <TableCellDialogModal
        isOpen={activeModal === 'table'}
        onClose={() => setActiveModal(null)}
        tableMarginY={state.tableMarginY}
        hasEmptyTableLines={state.hasEmptyTableLines}
        onApply={(margin, hasEmpty) => {
          setState((prev) => ({ ...prev, tableMarginY: margin, hasEmptyTableLines: hasEmpty }));
          showFeedback('표/셀 속성 설정 적용 완료!');
        }}
      />
    </div>
  );
};
