import React, { useState } from 'react';
import { X, Check, Sparkles, Sliders, Type } from 'lucide-react';

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
  const [textColor, setTextColor] = useState('#0f172a');
  const [shadeColor, setShadeColor] = useState('transparent');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [underline, setUnderline] = useState<'none' | 'bottom' | 'top'>('none');
  const [shadow, setShadow] = useState<'none' | 'drop' | 'continuous'>('none');
  const [relativeSize, setRelativeSize] = useState(100);
  const [charPosition, setCharPosition] = useState(0);

  if (!isOpen) return null;

  const handleSave = () => {
    onApply(tracking, scale, fontSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-[#f0f4f9] border-2 border-[#1b64da] rounded shadow-2xl overflow-hidden font-sans text-slate-800 text-sm max-h-[92vh] flex flex-col">
        {/* Title bar resembling HWP dialog */}
        <div className="bg-linear-to-r from-[#1b64da] to-[#2c7bef] text-white px-3 py-1.5 flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-1.5 font-medium tracking-tight">
            <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded font-mono font-bold">Alt+L</span>
            <span>글자 모양 (한글 워드프로세서)</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-0.5 rounded transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-[#e4ebf5] border-b border-[#cbd5e1] px-3 pt-2 flex gap-1 select-none shrink-0">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors cursor-pointer ${
              activeTab === 'basic'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px] font-bold shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            기본(B)
          </button>
          <button
            onClick={() => setActiveTab('expand')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors cursor-pointer ${
              activeTab === 'expand'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px] font-bold shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            확장(E)
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-white space-y-4 overflow-y-auto flex-1">
          {activeTab === 'basic' ? (
            <div className="space-y-4 animate-in fade-in-50 duration-100">
              <div className="grid grid-cols-2 gap-4">
                {/* 기준 크기 */}
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
                    <span className="text-xs text-slate-500 font-mono">pt</span>
                  </div>
                </div>

                {/* 글꼴 */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">글꼴(F):</label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none bg-white"
                  >
                    <option value="함초롬바탕">함초롬바탕 (바탕체)</option>
                    <option value="함초롬돋움">함초롬돋움 (고딕체)</option>
                    <option value="맑은 고딕">맑은 고딕</option>
                    <option value="나눔명조">나눔명조</option>
                  </select>
                </div>
              </div>

              {/* 속성 버튼들 (굵게, 기울임, 밑줄 등) */}
              <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded">
                <span className="text-xs text-slate-600 font-semibold mr-1">글자 속성:</span>
                <button
                  onClick={() => setIsBold(!isBold)}
                  className={`w-7 h-7 rounded border font-bold text-xs cursor-pointer ${
                    isBold ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-800 border-slate-300'
                  }`}
                >
                  B
                </button>
                <button
                  onClick={() => setIsItalic(!isItalic)}
                  className={`w-7 h-7 rounded border italic font-serif text-xs cursor-pointer ${
                    isItalic ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-800 border-slate-300'
                  }`}
                >
                  I
                </button>
                <button
                  onClick={() => setUnderline(underline === 'bottom' ? 'none' : 'bottom')}
                  className={`w-7 h-7 rounded border underline text-xs cursor-pointer ${
                    underline === 'bottom' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-800 border-slate-300'
                  }`}
                >
                  U
                </button>
              </div>

              {/* 장평 & 자간 영역 (핵심 노하우 영역) */}
              <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-lg">
                <div className="text-xs font-bold text-blue-900 mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>1페이지 압축 핵심: 장평 & 자간</span>
                  </span>
                  <span className="text-[10px] text-blue-700 font-mono">Alt+Shift+N/W, Alt+Shift+J/K</span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  {/* 장평 */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>장평(W):</span>
                      <span className="font-mono text-blue-700 font-bold">{scale}%</span>
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
                      <span className="font-mono text-blue-700 font-bold">{tracking > 0 ? `+${tracking}` : tracking}%</span>
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
            </div>
          ) : (
            /* 확장(E) 탭 내용 */
            <div className="space-y-4 animate-in fade-in-50 duration-100">
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded text-xs text-blue-900 leading-relaxed">
                <strong>글자 모양 확장 팁:</strong> 상대 크기 및 글자 위치(위 첨자/아래 첨자), 그림자 효과를 통해 각주나 화학식, 강조 문구를 정밀하게 조절합니다.
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 border border-slate-200 rounded text-xs">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">상대 크기(R):</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="50"
                      max="200"
                      step="5"
                      value={relativeSize}
                      onChange={(e) => setRelativeSize(parseInt(e.target.value) || 100)}
                      className="w-20 px-2 py-1 bg-white border border-slate-300 rounded text-right font-mono"
                    />
                    <span className="text-slate-500">%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">글자 위치(O):</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="-100"
                      max="100"
                      step="5"
                      value={charPosition}
                      onChange={(e) => setCharPosition(parseInt(e.target.value) || 0)}
                      className="w-20 px-2 py-1 bg-white border border-slate-300 rounded text-right font-mono"
                    />
                    <span className="text-slate-500">%</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-2">
                <span className="font-semibold text-slate-700 block">그림자 효과(S):</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: '없음' },
                    { id: 'drop', label: '비연속 그림자' },
                    { id: 'continuous', label: '연속 그림자' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setShadow(s.id as any)}
                      className={`py-1.5 px-2 rounded border text-center transition-colors cursor-pointer ${
                        shadow === s.id
                          ? 'bg-blue-50 border-blue-500 text-blue-800 font-bold'
                          : 'bg-white border-slate-300 text-slate-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Live Preview Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">미리 보기(V):</label>
            <div className="h-20 bg-slate-50 border border-slate-300 rounded p-2 flex items-center justify-center overflow-hidden">
              <span
                style={{
                  fontSize: `${fontSize * (relativeSize / 100) * 1.3}px`,
                  letterSpacing: `${tracking * 0.15}px`,
                  transform: `scaleX(${scale / 100}) translateY(${-(charPosition * 0.2)}px)`,
                  display: 'inline-block',
                  transformOrigin: 'center',
                  fontWeight: isBold ? 'bold' : 'normal',
                  fontStyle: isItalic ? 'italic' : 'normal',
                  textDecoration: underline === 'bottom' ? 'underline' : 'none',
                  textShadow: shadow === 'drop' ? '2px 2px 2px rgba(0,0,0,0.3)' : shadow === 'continuous' ? '1px 1px 0 #94a3b8, 2px 2px 0 #64748b' : 'none',
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
        <div className="bg-[#eef2f8] border-t border-slate-200 px-4 py-2.5 flex items-center justify-end gap-2 shrink-0">
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded border border-slate-300 transition-colors cursor-pointer"
          >
            취소 (Esc)
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#1b64da] hover:bg-[#1553b7] rounded shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>설정 (Enter)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

