import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface ParagraphDialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  lineHeight: number;
  onApply: (lineHeight: number) => void;
}

export const ParagraphDialogModal: React.FC<ParagraphDialogModalProps> = ({
  isOpen,
  onClose,
  lineHeight: initialLineHeight,
  onApply
}) => {
  const [lineHeight, setLineHeight] = useState(initialLineHeight);
  const [align, setAlign] = useState<'justify' | 'left' | 'center' | 'right'>('justify');

  if (!isOpen) return null;

  const handleSave = () => {
    onApply(lineHeight);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-[#f0f4f9] border-2 border-[#1b64da] rounded shadow-2xl overflow-hidden font-sans text-slate-800 text-sm">
        {/* Title */}
        <div className="bg-linear-to-r from-[#1b64da] to-[#2c7bef] text-white px-3 py-1.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5 font-medium tracking-tight">
            <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded font-mono font-bold">Alt+T</span>
            <span>문단 모양 (한글 워드프로세서)</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-0.5 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-[#e4ebf5] border-b border-[#cbd5e1] px-3 pt-2 flex gap-1 select-none">
          <button className="px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px]">
            기본(B)
          </button>
          <button className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900">
            확장(E)
          </button>
          <button className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900">
            테두리/배경(B)
          </button>
        </div>

        {/* Content */}
        <div className="p-4 bg-white space-y-4">
          {/* 정렬 방식 */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">정렬 방식:</label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { id: 'justify', label: '양쪽 정렬', note: 'Ctrl+Shift+M' },
                { id: 'left', label: '왼쪽 정렬', note: 'Ctrl+Shift+L' },
                { id: 'center', label: '가운데 정렬', note: 'Ctrl+Shift+C' },
                { id: 'right', label: '오른쪽 정렬', note: 'Ctrl+Shift+R' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAlign(item.id as any)}
                  className={`py-1.5 px-2 text-xs rounded border text-center transition-colors ${
                    align === item.id
                      ? 'bg-blue-100 border-blue-500 font-bold text-blue-800'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>{item.label}</div>
                  <div className="text-[9px] text-slate-400 font-mono">{item.note}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 줄 간격 조절 영역 */}
          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded">
            <div className="text-xs font-bold text-blue-900 mb-2 flex items-center justify-between">
              <span>⚡ 1페이지 압축의 핵심: 줄 간격</span>
              <span className="text-[11px] text-blue-700 font-normal">단축키: Ctrl+Shift+Q/W</span>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>줄 간격(L):</span>
                <span className="font-mono text-blue-700 font-bold">{lineHeight}%</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="100"
                  max="200"
                  step="5"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <input
                  type="number"
                  min="50"
                  max="300"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(parseInt(e.target.value) || 160)}
                  className="w-16 px-1.5 py-0.5 border border-slate-300 rounded text-right font-mono text-xs"
                />
                <span className="text-xs text-slate-500">%</span>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>타이트함 (130%)</span>
                <span className="text-blue-600 font-semibold">실무 추천 (140%~150%)</span>
                <span>기본값 (160%)</span>
              </div>
            </div>
          </div>

          {/* Preview Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">문단 미리 보기:</label>
            <div className="h-24 bg-slate-50 border border-slate-300 rounded p-2.5 overflow-hidden text-xs text-slate-800 font-hwp-myeongjo">
              <div style={{ lineHeight: `${lineHeight}%` }}>
                첫 번째 줄: 회사에서 각종 보고서를 작성하다 보면 애매하게 1페이지를 넘어갈 때가 있습니다.<br />
                두 번째 줄: 줄 간격을 160%에서 140%로 줄여주면 한 페이지에 4~6줄을 더 담을 수 있습니다.<br />
                세 번째 줄: 결재권자가 한눈에 읽기 편한 깔끔한 레이아웃을 완성합니다.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#eef2f8] border-t border-slate-200 px-4 py-2.5 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded border border-slate-300 transition-colors"
          >
            취소 (Esc)
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#1b64da] hover:bg-[#1553b7] rounded shadow-xs flex items-center gap-1 transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            설정 (Enter)
          </button>
        </div>
      </div>
    </div>
  );
};
