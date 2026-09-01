import React, { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  ArrowRight,
  Layers,
  AlignLeft,
  Table,
  Eraser,
  Palette,
  ExternalLink,
  Keyboard,
  Info,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const FastGuideView: React.FC = () => {
  // Interactive Alt+C shape copy playground state
  const [copiedFormat, setCopiedFormat] = useState<{
    fontFamily: string;
    fontSize: number;
    color: string;
    fontWeight: string;
    tracking: number;
    scale: number;
  } | null>(null);

  const [targetTextStyle, setTargetTextStyle] = useState({
    fontFamily: 'Noto Sans KR',
    fontSize: 14,
    color: '#334155',
    fontWeight: 'normal',
    tracking: 0,
    scale: 100
  });

  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Interactive Shift+Tab indent toggle state
  const [isIndentApplied, setIsIndentApplied] = useState(true);

  // Interactive Table single-line toggle state
  const [isSingleLineMode, setIsSingleLineMode] = useState(true);
  const [sampleCellText, setSampleCellText] = useState('대한민국 기획재정부 예산총괄과 특별기획단');

  const sourceStyle = {
    fontFamily: 'Nanum Myeongjo',
    fontSize: 16,
    color: '#1d4ed8', // blue-700
    fontWeight: 'bold',
    tracking: -3,
    scale: 95
  };

  const handleCopySourceFormat = () => {
    setCopiedFormat({ ...sourceStyle });
    setCopyFeedback('원본의 글자/문단 서식이 복사되었습니다! (Alt+C & Alt+D)');
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const handleApplyCopiedFormat = () => {
    if (!copiedFormat) {
      setCopyFeedback('먼저 원본 서식을 [Alt+C 서식 복사] 버튼으로 복사해주세요.');
      setTimeout(() => setCopyFeedback(null), 2000);
      return;
    }
    setTargetTextStyle({ ...copiedFormat });
    setCopyFeedback('선택한 영역에 서식이 적용되었습니다! (Alt+C)');
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const handleResetTargetFormat = () => {
    setTargetTextStyle({
      fontFamily: 'Noto Sans KR',
      fontSize: 14,
      color: '#334155',
      fontWeight: 'normal',
      tracking: 0,
      scale: 100
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Main Hero Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-xs font-semibold text-blue-700 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>한글 실무 특강</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-3">
          [한글] 초고속 문서 작성 필수 기능
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          마우스와 키보드를 오가고 아이콘을 찾아 클릭하는 불필요한 동선을 없애고,
          <strong>키보드만으로 어지간한 실무 문서 작업을 3배 빠르게 처리</strong>하는 핵심 비법을 체계적으로 정리했습니다.
        </p>
      </div>

      {/* Section 0: 여는 글 */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
          <Keyboard className="w-5 h-5 text-blue-600" />
          <h2>여는 글 : 왜 단축키 중심 작업이 필수인가?</h2>
        </div>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>
            문서를 작성할 때 단축키보다는 마우스를 사용하시는 분들이 생각보다 많습니다. 그런데,{' '}
            <strong className="text-gray-900 bg-amber-50 px-1 py-0.5 rounded border border-amber-200">
              마우스와 키보드를 오가고 상단 메뉴 아이콘을 클릭하는 과정이 상당히 많은 시간을 잡아먹습니다.
            </strong>
          </p>
          <p>
            단축키의 의의는 이런 불필요한 손 이동 시간을 완전히 줄여주는 데 있습니다.
            각종 단축키들을 익혀두고 문서 작성 시마다 <strong>의식적으로 활용</strong>하면 마우스에 손을 대지 않고도 키보드만으로 신속하게 고품질 보고서를 완성할 수 있습니다.
          </p>
        </div>

        {/* Speed Comparison Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl border border-red-100 bg-red-50/50 text-xs space-y-1.5">
            <span className="font-bold text-red-700 flex items-center gap-1">
              ❌ 마우스 중심 작업 (평균 4~8초 소요)
            </span>
            <p className="text-gray-600 leading-relaxed">
              마우스 이동 → 상단 메뉴 클릭 → 하위 메뉴 탐색 → 옵션 창 클릭 → 확인 버튼 조준 클릭
            </p>
          </div>
          <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 text-xs space-y-1.5">
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              ✅ 단축키 중심 작업 (단 0.2~0.5초 소요)
            </span>
            <p className="text-gray-600 leading-relaxed">
              손가락 단축키 입력 즉시 반영 (예: 모양 복사 <kbd className="kbd-key text-[10px]">Alt</kbd>+<kbd className="kbd-key text-[10px]">C</kbd>, 확인 <kbd className="kbd-key text-[10px]">Alt</kbd>+<kbd className="kbd-key text-[10px]">D</kbd>)
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: 글자/문단 모양의 재활용 (모양 복사 & 스타일) */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
          <Layers className="w-5 h-5 text-blue-600" />
          <h2>비법 1. 글자/문단 모양의 재활용 (모양 복사 & 스타일)</h2>
        </div>

        {/* 1-(1) 모양 복사하기 기능 (Alt+C) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
              <span>모양 복사하기 기능 (단축키: Alt + C)</span>
            </h3>
            <div className="flex items-center gap-1">
              <kbd className="kbd-key text-xs">Alt</kbd>
              <span className="text-xs text-gray-400 font-bold">+</span>
              <kbd className="kbd-key text-xs">C</kbd>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2">
            <div className="font-semibold text-gray-900 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-600" />
              <span>기능 설명 및 활용 처</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
              <li>스타일로 지정하긴 번거롭지만, 특정 글자/문단의 모양을 그대로 다른 곳에 복사하고 싶을 때</li>
              <li>표의 <strong>셀 테두리 및 배경색</strong>을 다른 셀로 고속 복제하고 싶을 때</li>
            </ul>
          </div>

          {/* 사용 방법 4단계 */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">사용 방법 (0.5초 콤보)</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                <strong className="text-gray-900 font-semibold flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">①</span>
                  원본 글자 클릭 (드래그 X)
                </strong>
                <p className="text-gray-600 text-xs">
                  서식을 따올 글자에 커서를 둡니다. (드래그하지 않고 단순히 클릭하는 것이 포인트!)
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                <strong className="text-gray-900 font-semibold flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">②</span>
                  Alt + C 누르고 Alt + D 로 확인
                </strong>
                <p className="text-gray-600 text-xs">
                  <kbd className="kbd-key text-[10px]">Alt</kbd>+<kbd className="kbd-key text-[10px]">C</kbd>를 누르고, 창이 뜨면 <kbd className="kbd-key text-[10px]">Alt</kbd>+<kbd className="kbd-key text-[10px]">D</kbd>를 눌러 마우스 없이 즉시 확인합니다.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                <strong className="text-gray-900 font-semibold flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">③</span>
                  적용할 대상 드래그
                </strong>
                <p className="text-gray-600 text-xs">
                  서식을 적용할 문장이나 단어, 또는 표의 셀들을 마우스나 <kbd className="kbd-key text-[10px]">F3</kbd>으로 드래그합니다.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                <strong className="text-gray-900 font-semibold flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">④</span>
                  Alt + C 눌러 즉시 붙여넣기
                </strong>
                <p className="text-gray-600 text-xs">
                  다시 <kbd className="kbd-key text-[10px]">Alt</kbd>+<kbd className="kbd-key text-[10px]">C</kbd>를 누르면 즉시 적용됩니다. (한 번 복사한 서식은 여러 번 붙여넣기 가능)
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Live Demo Box for Alt+C */}
          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                모양 복사 (Alt+C) 인터랙티브 체험
              </span>
              {copyFeedback && (
                <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded animate-pulse">
                  {copyFeedback}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Source Box */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">[원본 서식 글자]</span>
                  <span>명조 16pt · 파랑 · 굵게 · 자간 -3%</span>
                </div>
                <div
                  className="p-3 bg-gray-50 rounded-lg border border-dashed border-blue-300 select-all"
                  style={{
                    fontFamily: sourceStyle.fontFamily,
                    fontSize: `${sourceStyle.fontSize}px`,
                    color: sourceStyle.color,
                    fontWeight: sourceStyle.fontWeight,
                    letterSpacing: `${sourceStyle.tracking * 0.05}em`
                  }}
                >
                  ■ 2026년도 주요 정책 추진 계획 및 성과 보고서
                </div>
                <button
                  onClick={handleCopySourceFormat}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>1. 원본 서식 복사하기 (Alt+C 시뮬레이션)</span>
                </button>
              </div>

              {/* Target Box */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">[적용 대상 텍스트]</span>
                  <button onClick={handleResetTargetFormat} className="text-gray-400 hover:text-gray-600 text-[11px] underline">초기화</button>
                </div>
                <div
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300"
                  style={{
                    fontFamily: targetTextStyle.fontFamily,
                    fontSize: `${targetTextStyle.fontSize}px`,
                    color: targetTextStyle.color,
                    fontWeight: targetTextStyle.fontWeight,
                    letterSpacing: `${targetTextStyle.tracking * 0.05}em`
                  }}
                >
                  ▲ 하반기 부서별 세부 실행 과제 및 예산 배정 현황
                </div>
                <button
                  onClick={handleApplyCopiedFormat}
                  className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>2. 복사한 서식 붙여넣기 (Alt+C 적용)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 1-(2) 여러 번 사용할 스타일 지정 후 단축키 재활용 (F6) */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              <span>스타일 지정 후 단축키로 초고속 재활용 (단축키: F6)</span>
            </h3>
            <div className="flex items-center gap-1">
              <kbd className="kbd-key text-xs">F6</kbd>
            </div>
          </div>

          {/* Screenshot Image Display */}
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
            <img
              src="/images/guide/style_f6_guide.png"
              alt="한글 F6 스타일 대화상자 가이드"
              className="w-full object-contain max-h-96 mx-auto"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-white border-t border-gray-200 text-center text-xs text-gray-500">
              ▲ 한글 F6 스타일 대화상자 (1번: 새 스타일 등록 / 2번: 수정 / 3번: 현재 위치 모양 덮어쓰기 / 화살표: 단축키 순서 조절)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
              <strong className="text-gray-900 font-semibold block text-sm">💡 기능 핵심 요약</strong>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs leading-relaxed">
                <li>제목 글씨체, 본문 글씨체, 표 내부 글씨체를 사전 저장하여 즉시 적용</li>
                <li>
                  <strong className="text-gray-900">Ctrl + 1</strong> 을 누르면 언제든지 기본 <strong>바탕글 스타일</strong>로 1초 만에 복귀
                </li>
                <li>모양 복사와 달리 스타일은 글자 모양과 문단 모양이 함께 지정되어 문서 통일성 유지</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
              <strong className="text-gray-900 font-semibold block text-sm">📌 적용 및 수정 방법</strong>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs leading-relaxed">
                <li>원하는 서식의 글자를 쓴 후 <kbd className="kbd-key text-[10px]">F6</kbd>을 누릅니다.</li>
                <li><strong>1번 버튼(+)</strong>을 눌러 새 스타일로 생성</li>
                <li>화살표 버튼으로 원하는 단축키 번호(<kbd className="kbd-key text-[10px]">Ctrl</kbd>+<kbd className="kbd-key text-[10px]">1~9</kbd>) 위치로 이동</li>
                <li>수정 시에는 <strong>3번 버튼</strong>을 눌러 현재 위치 서식을 한 번에 덮어쓸 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 들여쓰기 쉽게 하기 (공문서 2칸 들여쓰기 & Shift+Tab / Shift+Enter) */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
          <AlignLeft className="w-5 h-5 text-blue-600" />
          <h2>비법 2. 들여쓰기 쉽게 하기 (공문서 원칙 & 빠른 내어쓰기 Shift+Tab)</h2>
        </div>

        {/* 2-(1) 공문서 들여쓰기 원칙 */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
            <span>공문서 작성 시 문단 들여쓰기 원칙 (1. 가. 1) 가) 순서)</span>
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            공문서 작성 시 항목 계층(1. → 가. → 1) → 가))에 따라 아래와 같이 매 단계 <strong>2칸(Space 2번)씩 들여쓰기</strong>를 해야 합니다.
          </p>

          {/* Screenshot Image Display */}
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
            <img
              src="/images/guide/indent_rule_guide.png"
              alt="공문서 두 칸씩 들여쓰기 원칙"
              className="w-full object-contain max-h-72 mx-auto"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-white border-t border-gray-200 text-center text-xs text-gray-500">
              ▲ 공문서 들여쓰기 계층 구조: 항목 번호마다 2칸씩 들여쓰기 규칙
            </div>
          </div>
        </div>

        {/* 2-(2) 빠른 내어쓰기 Shift+Tab */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              <span>스페이스바 연타 금지! 빠른 내어쓰기 (단축키: Shift + Tab)</span>
            </h3>
            <div className="flex items-center gap-1">
              <kbd className="kbd-key text-xs">Shift</kbd>
              <span className="text-xs text-gray-400 font-bold">+</span>
              <kbd className="kbd-key text-xs">Tab</kbd>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            여러 줄에 걸친 문장에서 둘째 줄 여백을 맞추기 위해 <strong>스페이스바를 수십 번 연타하면 글자 수정 시 줄바꿈이 전부 어긋납니다.</strong>
            본문 시작 글자 바로 앞에 커서를 두고 <kbd className="kbd-key text-xs">Shift</kbd>+<kbd className="kbd-key text-xs">Tab</kbd>을 누르면 둘째 줄 이하가 자동으로 칼같이 정렬됩니다.
          </p>

          {/* Screenshot Image Display */}
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
            <img
              src="/images/guide/shift_tab_guide.png"
              alt="문단 들여쓰기 및 Shift+Enter 줄바꿈 예시"
              className="w-full object-contain max-h-80 mx-auto"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-white border-t border-gray-200 text-center text-xs text-gray-500">
              ▲ Shift+Tab 내어쓰기 및 Shift+Enter(문단 내 줄바꿈) 적용 실제 예시
            </div>
          </div>

          {/* Key Pro-Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs space-y-1.5 text-amber-950">
              <strong className="font-bold flex items-center gap-1 text-amber-900">
                ⚠️ 표 내부에서 내어쓰기 할 때
              </strong>
              <p className="leading-relaxed">
                표 안에서 그냥 Shift+Tab을 누르면 <strong>이전 셀로 커서가 이동</strong>합니다.
                반드시 <kbd className="kbd-key text-[10px]">Ctrl</kbd> + <kbd className="kbd-key text-[10px]">Shift</kbd> + <kbd className="kbd-key text-[10px]">Tab</kbd> 을 누르세요!
              </p>
            </div>

            <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-xs space-y-1.5 text-blue-950">
              <strong className="font-bold flex items-center gap-1 text-blue-900">
                💡 문단 내 줄 바꾸기 (소프트 엔터)
              </strong>
              <p className="leading-relaxed">
                Enter 대신 <kbd className="kbd-key text-[10px]">Shift</kbd> + <kbd className="kbd-key text-[10px]">Enter</kbd> 를 누르면 새 문단을 만들지 않고 같은 문단 규칙을 유지하며 줄을 바꿀 수 있습니다.
              </p>
            </div>
          </div>

          {/* Interactive Indent Simulator Box */}
          <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">
                실시간 비교 : Shift + Tab 내어쓰기 적용 효과
              </span>
              <button
                onClick={() => setIsIndentApplied(!isIndentApplied)}
                className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                  isIndentApplied
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isIndentApplied ? 'Shift+Tab 적용됨 (칼각 정렬)' : '미적용 상태 (스페이스바 방식)'}
              </button>
            </div>

            <div className="p-4 bg-white rounded-lg border border-gray-200 font-mono text-xs leading-relaxed">
              <div className="text-gray-900">
                가. 2026년도 사업 계획 수립에 관한 세부 지침 및 검토 의견
              </div>
              <div
                className={`transition-all duration-300 text-gray-700 ${
                  isIndentApplied ? 'pl-6 text-blue-900 font-semibold' : 'pl-0 text-red-600'
                }`}
              >
                {isIndentApplied
                  ? '↳ 각 부서별 추진 목표 및 핵심 성과 지표(KPI)를 구체적으로 설정하여 기한 내 제출 요망'
                  : '각 부서별 추진 목표 및 핵심 성과 지표(KPI)를 구체적으로 설정하여 기한 내 제출 요망 (앞머리 어긋남)'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 표(셀) 안에서 자동으로 자간 조절되게 하기 ('한 줄로 입력') */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
          <Table className="w-5 h-5 text-blue-600" />
          <h2>비법 3. 표(셀) 안에서 자동으로 자간 조절되게 하기 ('한 줄로 입력')</h2>
        </div>

        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            표에 소속 부서나 직책, 담당자명을 입력할 때 글자가 조금만 길어지면 줄바꿈이 발생해 표의 높이가 불필요하게 늘어납니다.
            이때 <strong className="text-gray-900">[한 줄로 입력]</strong> 옵션을 켜두면 한컴오피스가 <strong>셀 너비에 맞춰 자간을 자동으로 줄여</strong> 글자가 항상 한 줄 안에 완벽히 들어가도록 조절합니다.
          </p>

          {/* Screenshot Image Display */}
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
            <img
              src="/images/guide/table_singleline_guide.png"
              alt="표 안에서 자간 자동 조절되게 하기 - 한 줄로 입력"
              className="w-full object-contain max-h-72 mx-auto"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-white border-t border-gray-200 text-center text-xs text-gray-500">
              ▲ 표/셀 속성(단축키: P) → [셀] 탭 → 속성 → [한 줄로 입력] 체크 설정 화면
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs sm:text-sm space-y-2">
            <strong className="text-gray-900 font-semibold block">설정 방법 순서</strong>
            <ol className="list-decimal list-inside space-y-1 text-gray-600">
              <li>표의 셀을 클릭하거나 블록 지정한 후 단축키 <kbd className="kbd-key text-[10px]">P</kbd> 를 누릅니다.</li>
              <li>상단 탭에서 <strong>[셀]</strong> 탭을 클릭합니다.</li>
              <li>속성 영역의 <strong>[한 줄로 입력]</strong> 체크박스를 선택한 후 설정을 누릅니다.</li>
            </ol>
          </div>

          {/* Interactive Single Line Demo */}
          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                표 셀 '한 줄로 입력' 실시간 비교 인터랙션
              </span>
              <button
                onClick={() => setIsSingleLineMode(!isSingleLineMode)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                  isSingleLineMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isSingleLineMode ? '✓ 한 줄로 입력 [켜짐]' : '✕ 일반 입력 [꺼짐]'}
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-600 block">셀 텍스트 테스트 입력:</label>
              <input
                type="text"
                value={sampleCellText}
                onChange={(e) => setSampleCellText(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-blue-600 text-gray-800"
                placeholder="긴 텍스트를 입력해보세요..."
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 w-24 text-gray-700">구분</th>
                    <th className="border border-gray-300 p-2 w-48 text-gray-700">소속 부서 / 직책 (고정 너비)</th>
                    <th className="border border-gray-300 p-2 text-gray-700">담당 업무</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center text-gray-600">총괄</td>
                    <td className="border border-gray-300 p-2 w-48 bg-blue-50/30 overflow-hidden">
                      <div
                        className={`transition-all ${
                          isSingleLineMode
                            ? 'whitespace-nowrap overflow-hidden text-ellipsis font-medium text-blue-900'
                            : 'whitespace-normal text-gray-800'
                        }`}
                        style={{
                          letterSpacing: isSingleLineMode && sampleCellText.length > 15 ? '-0.06em' : 'normal',
                          transform: isSingleLineMode && sampleCellText.length > 20 ? 'scaleX(0.92)' : 'none',
                          transformOrigin: 'left'
                        }}
                      >
                        {sampleCellText || '내용 없음'}
                      </div>
                    </td>
                    <td className="border border-gray-300 p-2 text-gray-600">2026년도 전체 종합 예산 편성 및 집행 관리</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-gray-500">
              * [한 줄로 입력]이 켜지면 셀 너비를 초과하는 긴 텍스트도 줄바꿈 없이 자간과 장평을 압축하여 1줄을 유지합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 완벽 실무 단축키 마스터 카드 모음 */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
          <Palette className="w-5 h-5 text-blue-600" />
          <h2>비법 4. 실무 고속 작업 단축키 완벽 사전</h2>
        </div>

        {/* 4 Cards Grid: Delete / Color / Table / Basic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: 고속 텍스트 지우기 */}
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
            <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
              <Eraser className="w-4 h-4 text-red-600" />
              <span>초고속 지우기 단축키</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-700">앞 단어 통째로 지우기</span>
                <div className="flex items-center gap-1">
                  <kbd className="kbd-key text-[10px]">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="kbd-key text-[10px]">BackSpace</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-700">뒤 단어 통째로 지우기</span>
                <div className="flex items-center gap-1">
                  <kbd className="kbd-key text-[10px]">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="kbd-key text-[10px]">Delete</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-700 font-semibold text-red-700">한 줄 통째로 지우기</span>
                <div className="flex items-center gap-1">
                  <kbd className="kbd-key text-[10px]">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="kbd-key text-[10px]">Y</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-700">커서 뒤 줄 끝까지 지우기</span>
                <div className="flex items-center gap-1">
                  <kbd className="kbd-key text-[10px]">Alt</kbd>
                  <span>+</span>
                  <kbd className="kbd-key text-[10px]">Y</kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 글자색 고속 콤보 (Ctrl + M) */}
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
            <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
              <Palette className="w-4 h-4 text-purple-600" />
              <span>글자색 초고속 변경 콤보 (Ctrl 누른 채 M 누르고 색상키)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                <span className="text-red-600 font-bold">빨강색</span>
                <kbd className="kbd-key text-[10px]">Ctrl+M, R</kbd>
              </div>
              <div className="p-2 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                <span className="text-blue-600 font-bold">파랑색</span>
                <kbd className="kbd-key text-[10px]">Ctrl+M, B</kbd>
              </div>
              <div className="p-2 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                <span className="text-gray-900 font-bold">검정색</span>
                <kbd className="kbd-key text-[10px]">Ctrl+M, K</kbd>
              </div>
              <div className="p-2 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                <span className="text-green-600 font-bold">초록색</span>
                <kbd className="kbd-key text-[10px]">Ctrl+M, G</kbd>
              </div>
              <div className="p-2 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                <span className="text-amber-500 font-bold">노랑색</span>
                <kbd className="kbd-key text-[10px]">Ctrl+M, Y</kbd>
              </div>
              <div className="p-2 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                <span className="text-purple-600 font-bold">자주색</span>
                <kbd className="kbd-key text-[10px]">Ctrl+M, D</kbd>
              </div>
            </div>
          </div>

          {/* Card 3: 표/셀 단축키 */}
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
            <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
              <Table className="w-4 h-4 text-blue-600" />
              <span>표/셀 속성 및 계산 단축키</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">셀 선택 (반복 시 전체)</span>
                <kbd className="kbd-key text-[10px]">F5</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">표/셀 속성 대화상자</span>
                <kbd className="kbd-key text-[10px]">P</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">각 셀마다 테두리/배경</span>
                <kbd className="kbd-key text-[10px]">C (Cell)</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">하나의 셀로 테두리/배경</span>
                <kbd className="kbd-key text-[10px]">B (BackGround)</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">셀 합치기 / 나누기</span>
                <div className="flex gap-1">
                  <kbd className="kbd-key text-[10px]">M</kbd>
                  <kbd className="kbd-key text-[10px]">S</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">셀 너비 / 높이 같게</span>
                <div className="flex gap-1">
                  <kbd className="kbd-key text-[10px]">W</kbd>
                  <kbd className="kbd-key text-[10px]">H</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700 font-semibold text-blue-700">블록 합계 자동 계산</span>
                <kbd className="kbd-key text-[10px]">Alt + Shift + S (Sum)</kbd>
              </div>
            </div>
          </div>

          {/* Card 4: 기본 작업 & 정렬 */}
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
            <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>정렬 및 기본 편집</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">블록 연속 확장</span>
                <kbd className="kbd-key text-[10px]">F3</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">편집 용지 설정</span>
                <kbd className="kbd-key text-[10px]">F7</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">양쪽 정렬 / 가운데 정렬</span>
                <div className="flex gap-1">
                  <kbd className="kbd-key text-[10px]">Ctrl+Shift+M</kbd>
                  <kbd className="kbd-key text-[10px]">Ctrl+Shift+C</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">강제 페이지 나누기</span>
                <kbd className="kbd-key text-[10px]">Ctrl + Shift + Enter</kbd>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">실행 취소 / 다시 실행</span>
                <div className="flex gap-1">
                  <kbd className="kbd-key text-[10px]">Ctrl+Z</kbd>
                  <kbd className="kbd-key text-[10px]">Ctrl+Shift+Z</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-gray-200">
                <span className="text-gray-700">글자 굵게 / 밑줄 / 기울임</span>
                <div className="flex gap-1">
                  <kbd className="kbd-key text-[10px]">Ctrl+B</kbd>
                  <kbd className="kbd-key text-[10px]">Ctrl+U</kbd>
                  <kbd className="kbd-key text-[10px]">Ctrl+I</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Attribution Card */}
      <div className="p-4 rounded-xl border border-gray-200 bg-white text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span>본 특강 가이드는 <strong>푸른로즈</strong> 님의 실무 한글 노하우를 바탕으로 제작되었습니다.</span>
        </div>
        <a
          href="https://bluestella.tistory.com/114"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
        >
          <span>원문 출처 보기</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
