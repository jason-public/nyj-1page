import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface FontDialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  tracking: number;
  scale: number;
  fontSize: number;
  onApply: (tracking: number, scale: number, fontSize: number) => void;
}

export const FontDialogModal: React.FC<FontDialogModalProps> = ({
  isOpen,
  onClose,
  tracking: initialTracking,
  scale: initialScale,
  fontSize: initialFontSize,
  onApply
}) => {
  const [activeTab, setActiveTab] = useState<'basic' | 'expand'>('basic');
  const [tracking, setTracking] = useState(initialTracking);
  const [scale, setScale] = useState(initialScale);
  const [fontSize, setFontSize] = useState(initialFontSize);
  const [fontFamily, setFontFamily] = useState('함초롬바탕');

  if (!isOpen) return null;

  const handleSave = () => {
    onApply(tracking, scale, fontSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-[#f0f4f9] border-2 border-[#1b64da] rounded shadow-2xl overflow-hidden font-sans text-slate-800 text-sm">
        {/* Title bar resembling HWP dialog */}
        <div className="bg-linear-to-r from-[#1b64da] to-[#2c7bef] text-white px-3 py-1.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5 font-medium tracking-tight">
            <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded font-mono font-bold">Alt+L</span>
            <span>글자 모양 (한글 워드프로세서)</span>
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
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors ${
              activeTab === 'basic'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            기본(B)
          </button>
          <button
            onClick={() => setActiveTab('expand')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors ${
              activeTab === 'expand'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            확장(E)
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-white space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* 글꼴 & 기준 크기 */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">기준 크기(P):</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="5"
                  max="40"
                  step="0.5"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseFloat(e.target.value) || 10)}
                  className="w-full px-2 py-1 border border-slate-300 rounded text-right font-mono text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
                <span className="text-xs text-slate-500">pt</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">글꼴(F):</label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
              >
                <option value="함초롬바탕">함초롬바탕 (바탕체)</option>
                <option value="함초롬돋움">함초롬돋움 (고딕체)</option>
                <option value="맑은 고딕">맑은 고딕</option>
                <option value="나눔명조">나눔명조</option>
              </select>
            </div>
          </div>

          {/* 장평 & 자간 영역 (핵심 노하우 영역) */}
          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded">
            <div className="text-xs font-bold text-blue-900 mb-2 flex items-center justify-between">
              <span>⚡ 1페이지 압축 핵심 속성</span>
              <span className="text-[11px] text-blue-700 font-normal">단축키: Alt+Shift+N/W, Alt+Shift+J/K</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* 장평 */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>장평(W):</span>
                  <span className="font-mono text-blue-700">{scale}%</span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="130"
                  value={scale}
                  onChange={(e) => setScale(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <p className="text-[10px] text-slate-500 mt-0.5">권장: 93%~97% (기본 100%)</p>
              </div>

              {/* 자간 */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>자간(N):</span>
                  <span className="font-mono text-blue-700">{tracking > 0 ? `+${tracking}` : tracking}%</span>
                </div>
                <input
                  type="range"
                  min="-20"
                  max="20"
                  value={tracking}
                  onChange={(e) => setTracking(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <p className="text-[10px] text-slate-500 mt-0.5">권장: -3%~-7% (기본 0%)</p>
              </div>
            </div>
          </div>

          {/* Live Preview Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">미리 보기(V):</label>
            <div className="h-20 bg-slate-50 border border-slate-300 rounded p-2 flex items-center justify-center overflow-hidden">
              <span
                style={{
                  fontSize: `${fontSize * 1.3}px`,
                  letterSpacing: `${tracking * 0.15}px`,
                  transform: `scaleX(${scale / 100})`,
                  display: 'inline-block',
                  transformOrigin: 'center',
                  fontFamily: fontFamily === '함초롬바탕' || fontFamily === '나눔명조' ? '"Nanum Myeongjo", serif' : '"Noto Sans KR", sans-serif'
                }}
                className="text-slate-900 font-medium whitespace-nowrap transition-all duration-75"
              >
                한글 보고서 1페이지 압축 실습 123 가나다 ABC
              </span>
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
