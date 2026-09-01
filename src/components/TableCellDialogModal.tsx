import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface TableCellDialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  tableMarginY: number;
  hasEmptyTableLines: boolean;
  onApply: (tableMarginY: number, hasEmptyTableLines: boolean) => void;
}

export const TableCellDialogModal: React.FC<TableCellDialogModalProps> = ({
  isOpen,
  onClose,
  tableMarginY: initialMarginY,
  hasEmptyTableLines: initialEmptyLines,
  onApply
}) => {
  const [activeTab, setActiveTab] = useState<'cell' | 'table'>('cell');
  const [topMargin, setTopMargin] = useState(initialMarginY);
  const [bottomMargin, setBottomMargin] = useState(initialMarginY);
  const [leftMargin, setLeftMargin] = useState(1.8);
  const [rightMargin, setRightMargin] = useState(1.8);
  const [removeEmptyLines, setRemoveEmptyLines] = useState(!initialEmptyLines);

  if (!isOpen) return null;

  const handleSave = () => {
    onApply(topMargin, !removeEmptyLines);
    onClose();
  };

  const handleQuick05 = () => {
    setTopMargin(0.5);
    setBottomMargin(0.5);
    setLeftMargin(1.0);
    setRightMargin(1.0);
    setRemoveEmptyLines(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-[#f0f4f9] border-2 border-[#1b64da] rounded shadow-2xl overflow-hidden font-sans text-slate-800 text-sm">
        {/* Title */}
        <div className="bg-linear-to-r from-[#1b64da] to-[#2c7bef] text-white px-3 py-1.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5 font-medium tracking-tight">
            <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded font-mono font-bold">P</span>
            <span>표/셀 속성 (한글 워드프로세서)</span>
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
            onClick={() => setActiveTab('cell')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors ${
              activeTab === 'cell'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            셀(C)
          </button>
          <button
            onClick={() => setActiveTab('table')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t border-t border-x transition-colors ${
              activeTab === 'table'
                ? 'bg-white border-[#cbd5e1] text-[#1b64da] -mb-[1px]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            표(T)
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-white space-y-4">
          {/* Quick preset banner */}
          <div className="bg-amber-50 border border-amber-200 rounded p-2.5 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-amber-900">💡 선배들의 1페이지 표 압축 추천 설정</div>
              <div className="text-[11px] text-amber-700">위/아래 여백을 0.5mm로 설정하고 빈 엔터 제거</div>
            </div>
            <button
              onClick={handleQuick05}
              className="px-2.5 py-1 text-xs bg-amber-600 hover:bg-amber-700 text-white font-bold rounded shadow-xs transition-colors"
            >
              0.5mm 원클릭 적용
            </button>
          </div>

          {/* 안 여백 설정 */}
          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded">
            <div className="text-xs font-bold text-blue-900 mb-2.5 flex items-center justify-between">
              <span>안 여백 (Margin) 지정</span>
              <span className="text-[10px] text-blue-600 font-normal">단위: mm</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  위쪽(T) 여백:
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={topMargin}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      setTopMargin(val);
                    }}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-right font-mono text-xs focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-500">mm</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">추천: 0.5mm (기본 약 2.0mm)</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  아래쪽(B) 여백:
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={bottomMargin}
                    onChange={(e) => {
                      const val不易 = parseFloat(e.target.value) || 0;
                      setBottomMargin(val不易);
                    }}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-right font-mono text-xs focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-500">mm</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">추천: 0.5mm</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  왼쪽(L) 여백:
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={leftMargin}
                    onChange={(e) => setLeftMargin(parseFloat(e.target.value) || 0)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-right font-mono text-xs"
                  />
                  <span className="text-xs text-slate-500">mm</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  오른쪽(R) 여백:
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={rightMargin}
                    onChange={(e) => setRightMargin(parseFloat(e.target.value) || 0)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-right font-mono text-xs"
                  />
                  <span className="text-xs text-slate-500">mm</span>
                </div>
              </div>
            </div>
          </div>

          {/* 속성 옵션: 한 줄로 입력 & 빈칸 제거 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-blue-50/60 rounded border border-blue-200">
              <input
                type="checkbox"
                id="singleLineInputCheck"
                defaultChecked={true}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="singleLineInputCheck" className="text-xs text-blue-900 font-medium cursor-pointer flex items-center justify-between w-full">
                <span>한 줄로 입력 (긴 텍스트 입력 시 자동으로 자간을 줄여 1줄 유지)</span>
                <span className="text-[10px] text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded font-bold">실무 필수</span>
              </label>
            </div>

            <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
              <input
                type="checkbox"
                id="emptyLinesCheck"
                checked={removeEmptyLines}
                onChange={(e) => setRemoveEmptyLines(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="emptyLinesCheck" className="text-xs text-slate-700 font-medium cursor-pointer">
                표 내부 불필요한 엔터 줄바꿈 빈칸 삭제 (자동 정돈)
              </label>
            </div>
          </div>

          {/* Preview Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">표 셀 미리 보기:</label>
            <div className="border border-slate-300 rounded p-2 bg-slate-50">
              <table className="w-full border-collapse border border-slate-400 text-xs bg-white">
                <tbody>
                  <tr>
                    <td
                      style={{
                        paddingTop: `${topMargin * 3.77}px`,
                        paddingBottom: `${bottomMargin * 3.77}px`,
                        paddingLeft: `${leftMargin * 3.77}px`,
                        paddingRight: `${rightMargin * 3.77}px`
                      }}
                      className="border border-slate-300 font-medium bg-slate-100 w-1/3 text-center"
                    >
                      구분
                    </td>
                    <td
                      style={{
                        paddingTop: `${topMargin * 3.77}px`,
                        paddingBottom: `${bottomMargin * 3.77}px`,
                        paddingLeft: `${leftMargin * 3.77}px`,
                        paddingRight: `${rightMargin * 3.77}px`
                      }}
                      className="border border-slate-300 font-normal"
                    >
                      주요 내용 및 세부 추진 계획 {removeEmptyLines ? '' : '(↵ 빈 줄 있음)'}
                    </td>
                  </tr>
                </tbody>
              </table>
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
