import React, { useState } from 'react';
import { X, Check, Sparkles, Shield, Palette, AlignLeft, Info } from 'lucide-react';

interface ParagraphDialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  lineHeight: number;
  onApply: (lineHeight: number) => void;
}

type TabKey = 'basic' | 'expand' | 'borderBg';

export const ParagraphDialogModal: React.FC<ParagraphDialogModalProps> = ({
  isOpen,
  onClose,
  lineHeight: initialLineHeight,
  onApply
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');

  // 기본(B) 탭 상태
  const [lineHeight, setLineHeight] = useState(initialLineHeight);
  const [align, setAlign] = useState<'justify' | 'left' | 'center' | 'right' | 'distribute'>('justify');
  const [leftMargin, setLeftMargin] = useState(0);
  const [rightMargin, setRightMargin] = useState(0);
  const [firstLineMode, setFirstLineMode] = useState<'normal' | 'indent' | 'outdent'>('normal');
  const [firstLineVal, setFirstLineVal] = useState(10);
  const [spaceBefore, setSpaceBefore] = useState(0);
  const [spaceAfter, setSpaceAfter] = useState(0);

  // 확장(E) 탭 상태
  const [breakUnitKorean, setBreakUnitKorean] = useState<'char' | 'word'>('char');
  const [breakUnitEnglish, setBreakUnitEnglish] = useState<'word' | 'hyphen' | 'char'>('word');
  const [protectWidow, setProtectWidow] = useState(true);
  const [keepWithNext, setKeepWithNext] = useState(false);
  const [keepLinesTogether, setKeepLinesTogether] = useState(false);
  const [bulletType, setBulletType] = useState<'none' | 'bullet' | 'number' | 'square'>('none');

  // 테두리/배경(B) 탭 상태
  const [borderType, setBorderType] = useState<'solid' | 'dashed' | 'dotted' | 'double' | 'none'>('solid');
  const [borderWidth, setBorderWidth] = useState<'0.1mm' | '0.2mm' | '0.5mm' | '1.0mm'>('0.2mm');
  const [borderColor, setBorderColor] = useState('#64748b');
  const [borders, setBorders] = useState<{ top: boolean; bottom: boolean; left: boolean; right: boolean }>({
    top: false,
    bottom: false,
    left: false,
    right: false
  });
  const [bgColor, setBgColor] = useState<'transparent' | '#f8fafc' | '#f1f5f9' | '#e0f2fe' | '#fef9c3' | '#ecfdf5'>('transparent');
  const [borderPadding, setBorderPadding] = useState(2);

  if (!isOpen) return null;

  const handleSave = () => {
    onApply(lineHeight);
    onClose();
  };

  const toggleAllBorders = (enable: boolean) => {
    setBorders({ top: enable, bottom: enable, left: enable, right: enable });
  };

  // Preview styling calculation
  const getBorderCSS = () => {
    if (borderType === 'none') return {};
    const style = borderType === 'dashed' ? 'dashed' : borderType === 'dotted' ? 'dotted' : borderType === 'double' ? 'double' : 'solid';
    const width = borderWidth === '0.1mm' ? '1px' : borderWidth === '0.2mm' ? '1.5px' : borderWidth === '0.5mm' ? '2.5px' : '3.5px';
    return {
      borderTop: borders.top ? `${width} ${style} ${borderColor}` : 'none',
      borderBottom: borders.bottom ? `${width} ${style} ${borderColor}` : 'none',
      borderLeft: borders.left ? `${width} ${style} ${borderColor}` : 'none',
      borderRight: borders.right ? `${width} ${style} ${borderColor}` : 'none',
      backgroundColor: bgColor !== 'transparent' ? bgColor : undefined,
      padding: (borders.top || borders.bottom || borders.left || borders.right || bgColor !== 'transparent') ? `${borderPadding * 2 + 4}px` : '4px',
      borderRadius: '3px'
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-[#f0f4f9] border-2 border-[#1b64da] rounded-lg shadow-2xl overflow-hidden font-sans text-slate-800 text-sm max-h-[92vh] flex flex-col">
        {/* Title Bar */}
        <div className="bg-linear-to-r from-[#1b64da] to-[#2c7bef] text-white px-3 py-2 flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-1.5 font-medium tracking-tight">
            <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded font-mono font-bold">Alt+T</span>
            <span className="font-semibold">문단 모양 (한글 워드프로세서)</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Headers */}
        <div className="bg-[#e4ebf5] border-b border-[#cbd5e1] px-3 pt-2 flex gap-1 select-none shrink-0">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors cursor-pointer ${
              activeTab === 'basic'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px] shadow-2xs font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
          >
            기본(B)
          </button>
          <button
            onClick={() => setActiveTab('expand')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors cursor-pointer ${
              activeTab === 'expand'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px] shadow-2xs font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
          >
            확장(E)
          </button>
          <button
            onClick={() => setActiveTab('borderBg')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors cursor-pointer ${
              activeTab === 'borderBg'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px] shadow-2xs font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
          >
            테두리/배경(B)
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="p-4 bg-white space-y-4 overflow-y-auto flex-1">
          {/* TAB 1: 기본(B) */}
          {activeTab === 'basic' && (
            <div className="space-y-4 animate-in fade-in-50 duration-100">
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
                      className={`py-1.5 px-2 text-xs rounded border text-center transition-colors cursor-pointer ${
                        align === item.id
                          ? 'bg-blue-50 border-blue-500 font-bold text-blue-800 ring-1 ring-blue-400'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div>{item.label}</div>
                      <div className="text-[9px] text-slate-400 font-mono">{item.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 여백 및 첫 줄 설정 */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">여백 (왼쪽/오른쪽):</span>
                  <div className="flex items-center gap-2">
                    <label className="text-[11px] text-slate-500">왼쪽</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={leftMargin}
                      onChange={(e) => setLeftMargin(parseInt(e.target.value) || 0)}
                      className="w-14 px-1.5 py-0.5 bg-white border border-slate-300 rounded text-right font-mono"
                    />
                    <span className="text-slate-500">pt</span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">첫 줄 들여쓰기:</span>
                  <div className="flex items-center gap-1.5">
                    <select
                      value={firstLineMode}
                      onChange={(e) => setFirstLineMode(e.target.value as any)}
                      className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-xs"
                    >
                      <option value="normal">보통</option>
                      <option value="indent">들여쓰기</option>
                      <option value="outdent">내어쓰기</option>
                    </select>
                    {firstLineMode !== 'normal' && (
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={firstLineVal}
                        onChange={(e) => setFirstLineVal(parseInt(e.target.value) || 10)}
                        className="w-12 px-1.5 py-0.5 bg-white border border-slate-300 rounded text-right font-mono"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* 핵심 줄 간격 조절 영역 */}
              <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-lg">
                <div className="text-xs font-bold text-blue-900 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>1페이지 압축의 핵심: 줄 간격</span>
                  </span>
                  <span className="text-[11px] text-blue-700 font-mono">Ctrl+Shift+Q/W</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>줄 간격(L):</span>
                    <span className="font-mono text-blue-700 font-bold text-sm">{lineHeight}%</span>
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
                      className="w-16 px-1.5 py-0.5 border border-slate-300 rounded text-right font-mono text-xs bg-white"
                    />
                    <span className="text-xs text-slate-500 font-mono">%</span>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="grid grid-cols-4 gap-1.5 mt-2.5">
                    {[
                      { val: 130, label: '130% (타이트)' },
                      { val: 140, label: '140% (실무추천)', highlight: true },
                      { val: 150, label: '150% (표준압축)' },
                      { val: 160, label: '160% (기본값)' }
                    ].map((btn) => (
                      <button
                        key={btn.val}
                        onClick={() => setLineHeight(btn.val)}
                        className={`py-1 text-[11px] rounded border text-center transition-colors cursor-pointer ${
                          lineHeight === btn.val
                            ? 'bg-blue-600 text-white font-bold border-blue-600'
                            : btn.highlight
                            ? 'bg-amber-50 border-amber-300 text-amber-900 font-medium hover:bg-amber-100'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 확장(E) */}
          {activeTab === 'expand' && (
            <div className="space-y-4 animate-in fade-in-50 duration-100">
              {/* Info Banner */}
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>확장 탭 실무 비법:</strong> 문단 끝 한 줄이 다음 페이지로 넘어갈 때, <strong>줄 나눔 기준</strong>과 <strong>문단 보호 옵션</strong>을 활용하면 결재 문서가 깔끔하게 1페이지로 유지됩니다.
                </div>
              </div>

              {/* 줄 나눔 기준 */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                <span className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                  <AlignLeft className="w-3.5 h-3.5 text-blue-600" />
                  <span>줄 나눔 기준 (Line Breaking Rules)</span>
                </span>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">한글 단위:</label>
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="koreanUnit"
                          checked={breakUnitKorean === 'char'}
                          onChange={() => setBreakUnitKorean('char')}
                          className="accent-blue-600"
                        />
                        <span>글자 (실무 압축 추천)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="koreanUnit"
                          checked={breakUnitKorean === 'word'}
                          onChange={() => setBreakUnitKorean('word')}
                          className="accent-blue-600"
                        />
                        <span>어절 (단어 단위 유지)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-medium mb-1">영어 단위:</label>
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="englishUnit"
                          checked={breakUnitEnglish === 'word'}
                          onChange={() => setBreakUnitEnglish('word')}
                          className="accent-blue-600"
                        />
                        <span>단어 (Word)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="englishUnit"
                          checked={breakUnitEnglish === 'hyphen'}
                          onChange={() => setBreakUnitEnglish('hyphen')}
                          className="accent-blue-600"
                        />
                        <span>하이픈 (Hyphenation)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="englishUnit"
                          checked={breakUnitEnglish === 'char'}
                          onChange={() => setBreakUnitEnglish('char')}
                          className="accent-blue-600"
                        />
                        <span>글자 (Letter)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* 문단 보호 & 줄 제어 */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5 mb-1.5">
                  <Shield className="w-3.5 h-3.5 text-blue-600" />
                  <span>문단 보호 및 배치 제어</span>
                </span>
                
                <label className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
                  <input
                    type="checkbox"
                    checked={protectWidow}
                    onChange={(e) => setProtectWidow(e.target.checked)}
                    className="accent-blue-600 rounded"
                  />
                  <span>외톨이 줄 보호 (Widow/Orphan Control)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
                  <input
                    type="checkbox"
                    checked={keepWithNext}
                    onChange={(e) => setKeepWithNext(e.target.checked)}
                    className="accent-blue-600 rounded"
                  />
                  <span>다음 문단과 함께 (제목 문단이 다음 장으로 분리되는 것 방지)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
                  <input
                    type="checkbox"
                    checked={keepLinesTogether}
                    onChange={(e) => setKeepLinesTogether(e.target.checked)}
                    className="accent-blue-600 rounded"
                  />
                  <span>문단 보호 (문단 중간에서 페이지가 나뉘지 않음)</span>
                </label>
              </div>

              {/* 글머리표 / 문단 번호 */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <span className="font-semibold text-slate-700 block mb-1.5">글머리표 / 번호 서식:</span>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: 'none', label: '없음' },
                    { id: 'bullet', label: '● 글머리표' },
                    { id: 'number', label: '1. 문단번호' },
                    { id: 'square', label: '■ 네모표' }
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBulletType(b.id as any)}
                      className={`py-1 px-1.5 rounded border text-center transition-colors cursor-pointer ${
                        bulletType === b.id
                          ? 'bg-blue-50 border-blue-500 font-bold text-blue-800'
                          : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 테두리/배경(B) */}
          {activeTab === 'borderBg' && (
            <div className="space-y-4 animate-in fade-in-50 duration-100">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-3 text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-blue-600" />
                  <span>문단 테두리 선 설정</span>
                </span>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] text-slate-500 font-medium mb-1">종류(K):</label>
                    <select
                      value={borderType}
                      onChange={(e) => setBorderType(e.target.value as any)}
                      className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-xs"
                    >
                      <option value="solid">실선 (─)</option>
                      <option value="dashed">파선 (---)</option>
                      <option value="dotted">점선 (···)</option>
                      <option value="double">이중선 (═)</option>
                      <option value="none">선 없음</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-500 font-medium mb-1">굵기(W):</label>
                    <select
                      value={borderWidth}
                      onChange={(e) => setBorderWidth(e.target.value as any)}
                      className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-xs"
                    >
                      <option value="0.1mm">0.1 mm</option>
                      <option value="0.2mm">0.2 mm</option>
                      <option value="0.5mm">0.5 mm</option>
                      <option value="1.0mm">1.0 mm</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-500 font-medium mb-1">선 색상:</label>
                    <div className="flex items-center gap-1 mt-1">
                      {['#64748b', '#0f172a', '#2563eb', '#dc2626', '#16a34a'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setBorderColor(c)}
                          className={`w-5 h-5 rounded-full border transition-transform cursor-pointer ${
                            borderColor === c ? 'scale-125 ring-2 ring-blue-400' : 'border-slate-300'
                          }`}
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 테두리 위치 토글 버튼 */}
                <div>
                  <label className="block text-[11px] text-slate-500 font-medium mb-1.5">테두리 위치 지정:</label>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => toggleAllBorders(true)}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-300 rounded text-xs font-medium cursor-pointer"
                    >
                      모두 둘레
                    </button>
                    <button
                      onClick={() => toggleAllBorders(false)}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-300 rounded text-xs font-medium cursor-pointer"
                    >
                      없음
                    </button>
                    {(['top', 'bottom', 'left', 'right'] as const).map((pos) => {
                      const labels = { top: '위', bottom: '아래', left: '왼쪽', right: '오른쪽' };
                      return (
                        <button
                          key={pos}
                          onClick={() => setBorders((prev) => ({ ...prev, [pos]: !prev[pos] }))}
                          className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                            borders[pos]
                              ? 'bg-blue-600 text-white font-bold border-blue-600'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {labels[pos]} {borders[pos] ? '✓' : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 배경 면 색 설정 */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                <span className="font-bold text-slate-800 block">문단 배경 채우기 (면 색):</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {[
                    { color: 'transparent', label: '투명(없음)' },
                    { color: '#f8fafc', label: '연회색' },
                    { color: '#e0f2fe', label: '연파랑' },
                    { color: '#fef9c3', label: '연노랑' },
                    { color: '#ecfdf5', label: '연녹색' }
                  ].map((bg) => (
                    <button
                      key={bg.color}
                      onClick={() => setBgColor(bg.color as any)}
                      className={`px-3 py-1.5 rounded border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                        bgColor === bg.color
                          ? 'border-blue-600 bg-white ring-2 ring-blue-300 font-bold text-blue-900'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300"
                        style={{ backgroundColor: bg.color === 'transparent' ? '#ffffff' : bg.color }}
                      />
                      <span>{bg.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Real-Time Preview Box */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              문단 미리 보기 (실시간 반영):
            </label>
            <div className="h-28 bg-slate-50 border border-slate-300 rounded-lg p-3 overflow-hidden text-xs text-slate-800 font-hwp-myeongjo flex flex-col justify-center transition-all">
              <div
                style={{
                  lineHeight: `${lineHeight}%`,
                  textAlign: align === 'justify' ? 'justify' : align === 'left' ? 'left' : align === 'center' ? 'center' : 'right',
                  paddingLeft: `${leftMargin}px`,
                  paddingRight: `${rightMargin}px`,
                  textIndent: firstLineMode === 'indent' ? `${firstLineVal}px` : firstLineMode === 'outdent' ? `-${firstLineVal}px` : '0px',
                  ...getBorderCSS()
                }}
              >
                {bulletType === 'bullet' && '● '}
                {bulletType === 'number' && '1. '}
                {bulletType === 'square' && '■ '}
                첫 번째 줄: 회사에서 각종 보고서를 작성하다 보면 애매하게 1페이지를 넘어갈 때가 있습니다.<br />
                {bulletType === 'bullet' && '● '}
                {bulletType === 'number' && '2. '}
                {bulletType === 'square' && '■ '}
                두 번째 줄: 줄 간격을 160%에서 140%로 줄여주면 한 페이지에 4~6줄을 더 담을 수 있습니다.<br />
                {bulletType === 'bullet' && '● '}
                {bulletType === 'number' && '3. '}
                {bulletType === 'square' && '■ '}
                세 번째 줄: 결재권자가 한눈에 읽기 편한 깔끔한 레이아웃을 완성합니다.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#eef2f8] border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-2 shrink-0 select-none">
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            설정 버튼을 누르면 시뮬레이터 줄간격 및 서식에 즉시 적용됩니다.
          </span>
          <div className="flex items-center gap-2 ml-auto">
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
    </div>
  );
};

