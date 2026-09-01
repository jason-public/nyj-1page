import React, { useState } from 'react';
import { PRACTICE_MISSIONS } from '../data/missions';
import { PracticeMission } from '../types';
import {
  Target,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ChevronRight,
  RotateCcw,
  Sliders,
  Award
} from 'lucide-react';

interface MissionViewProps {
  completedMissions: string[];
  onCompleteMission: (missionId: string) => void;
}

export const MissionView: React.FC<MissionViewProps> = ({
  completedMissions,
  onCompleteMission
}) => {
  const [selectedMissionId, setSelectedMissionId] = useState<string>(PRACTICE_MISSIONS[0].id);
  const currentMission =
    PRACTICE_MISSIONS.find((m) => m.id === selectedMissionId) || PRACTICE_MISSIONS[0];

  const [tracking, setTracking] = useState(currentMission.initialState.tracking);
  const [scale, setScale] = useState(currentMission.initialState.scale);
  const [lineHeight, setLineHeight] = useState(currentMission.initialState.lineHeight);
  const [tableMarginY, setTableMarginY] = useState(currentMission.initialState.tableMarginY);
  const [hasEmptyTableLines, setHasEmptyTableLines] = useState(currentMission.initialState.hasEmptyTableLines);
  const [showHint, setShowHint] = useState(false);

  // Switch mission
  const handleSelectMission = (m: PracticeMission) => {
    setSelectedMissionId(m.id);
    setTracking(m.initialState.tracking);
    setScale(m.initialState.scale);
    setLineHeight(m.initialState.lineHeight);
    setTableMarginY(m.initialState.tableMarginY);
    setHasEmptyTableLines(m.initialState.hasEmptyTableLines);
    setShowHint(false);
  };

  const handleResetMission = () => {
    setTracking(currentMission.initialState.tracking);
    setScale(currentMission.initialState.scale);
    setLineHeight(currentMission.initialState.lineHeight);
    setTableMarginY(currentMission.initialState.tableMarginY);
    setHasEmptyTableLines(currentMission.initialState.hasEmptyTableLines);
    setShowHint(false);
  };

  // Evaluate mission success
  let isSuccess = false;
  if (currentMission.id === 'mission-1') {
    // 자간 <= -3 or 장평 <= 96
    isSuccess = tracking <= -3 || scale <= 96;
  } else if (currentMission.id === 'mission-2') {
    // 줄간격 <= 145 or (줄간격 <= 150 and tracking <= -2)
    isSuccess = lineHeight <= 145 || (lineHeight <= 150 && tracking <= -2);
  } else if (currentMission.id === 'mission-3') {
    // 표 빈줄 제거 + 여백 <= 0.8
    isSuccess = !hasEmptyTableLines && tableMarginY <= 0.8;
  }

  const isAlreadyCompleted = completedMissions.includes(currentMission.id);

  const handleVerify = () => {
    if (isSuccess) {
      onCompleteMission(currentMission.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-xs font-semibold text-blue-700 mb-2">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            실전 1페이지 압축 퀘스트
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">단계별 실무 해결 챌린지</h2>
          <p className="text-sm text-gray-500 mt-1">
            실무에서 자주 마주치는 1줄 넘침·표 부풂 문제 상황을 단축키와 파라미터로 직접 해결해 보세요.
          </p>
        </div>

        <div className="bg-gray-50 px-5 py-3.5 rounded-xl border border-gray-200 text-center shrink-0">
          <div className="text-xs font-medium text-gray-500">완료한 퀘스트</div>
          <div className="text-2xl font-bold font-mono text-gray-900 mt-0.5">
            {completedMissions.length} / {PRACTICE_MISSIONS.length}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Mission List Selection (Left) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
            퀘스트 목록
          </div>
          {PRACTICE_MISSIONS.map((m) => {
            const isCompleted = completedMissions.includes(m.id);
            const isSelected = m.id === selectedMissionId;
            return (
              <button
                key={m.id}
                onClick={() => handleSelectMission(m)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 border-blue-300 shadow-xs'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                      m.difficulty === '초급'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : m.difficulty === '중급'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {m.difficulty}
                  </span>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      완료됨
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{m.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{m.targetGoal}</p>
              </button>
            );
          })}
        </div>

        {/* Mission Workspace (Right) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            {/* Mission Target Header */}
            <div className="border-b border-gray-100 pb-4 mb-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-medium px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-md">
                  {currentMission.difficulty} 퀘스트
                </span>
                <button
                  onClick={handleResetMission}
                  className="text-xs text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  미션 초기화
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{currentMission.title}</h2>
              <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950 leading-relaxed">
                <strong className="font-semibold">상황 설명:</strong> {currentMission.scenario}
              </div>
            </div>

            {/* Interactive Challenge Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* 자간 */}
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between text-xs font-medium text-gray-700 mb-1.5">
                  <span>자간 (Alt+Shift+N/W):</span>
                  <span className="font-mono font-bold text-blue-700">{tracking}%</span>
                </div>
                <input
                  type="range"
                  min="-15"
                  max="10"
                  value={tracking}
                  onChange={(e) => setTracking(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* 장평 */}
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between text-xs font-medium text-gray-700 mb-1.5">
                  <span>장평 (Alt+Shift+J/K):</span>
                  <span className="font-mono font-bold text-blue-700">{scale}%</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="110"
                  value={scale}
                  onChange={(e) => setScale(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* 줄 간격 */}
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between text-xs font-medium text-gray-700 mb-1.5">
                  <span>줄 간격 (Ctrl+Shift+Q/W):</span>
                  <span className="font-mono font-bold text-blue-700">{lineHeight}%</span>
                </div>
                <input
                  type="range"
                  min="110"
                  max="180"
                  step="5"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* 표 여백 & 엔터 */}
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                <div className="flex justify-between text-xs font-medium text-gray-700">
                  <span>표 셀 위/아래 여백 (P 키):</span>
                  <span className="font-mono font-bold text-blue-700">{tableMarginY} mm</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value={tableMarginY}
                  onChange={(e) => setTableMarginY(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                />
                <label className="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={!hasEmptyTableLines}
                    onChange={(e) => setHasEmptyTableLines(!e.target.checked)}
                    className="w-3.5 h-3.5 text-blue-600 rounded border-gray-300"
                  />
                  <span>표 내부 불필요한 빈 엔터 줄바꿈 삭제하기</span>
                </label>
              </div>
            </div>

            {/* Mission Live Preview Box */}
            <div className="mb-6">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>실시간 문서 렌더링 결과</span>
                <span className="text-[11px] text-gray-400 normal-case tracking-normal">가로 폭 100% 기준</span>
              </div>
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl font-hwp-myeongjo relative overflow-hidden">
                {currentMission.id === 'mission-1' && (
                  <div
                    style={{
                      letterSpacing: `${tracking * 0.12}px`,
                      fontSize: '15px'
                    }}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs"
                  >
                    <div
                      style={{
                        transform: `scaleX(${scale / 100})`,
                        transformOrigin: 'left'
                      }}
                      className="font-bold text-gray-900 leading-snug"
                    >
                      {currentMission.initialState.content}
                    </div>
                  </div>
                )}

                {currentMission.id === 'mission-2' && (
                  <div
                    style={{
                      letterSpacing: `${tracking * 0.12}px`,
                      lineHeight: `${lineHeight}%`,
                      fontSize: '13px'
                    }}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs whitespace-pre-line text-gray-800"
                  >
                    <div
                      style={{
                        transform: `scaleX(${scale / 100})`,
                        transformOrigin: 'left'
                      }}
                    >
                      {currentMission.initialState.content}
                    </div>
                  </div>
                )}

                {currentMission.id === 'mission-3' && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs space-y-2">
                    <div className="font-bold text-xs text-gray-900 font-sans">
                      {currentMission.initialState.content}
                    </div>
                    <table className="w-full border-collapse border border-gray-300 text-xs font-sans">
                      <thead>
                        <tr className="bg-gray-100">
                          <th
                            style={{
                              paddingTop: `${tableMarginY * 3.77}px`,
                              paddingBottom: `${tableMarginY * 3.77}px`
                            }}
                            className="border border-gray-300 px-2 py-1"
                          >
                            사업명
                          </th>
                          <th
                            style={{
                              paddingTop: `${tableMarginY * 3.77}px`,
                              paddingBottom: `${tableMarginY * 3.77}px`
                            }}
                            className="border border-gray-300 px-2 py-1"
                          >
                            예산 배정액
                          </th>
                          <th
                            style={{
                              paddingTop: `${tableMarginY * 3.77}px`,
                              paddingBottom: `${tableMarginY * 3.77}px`
                            }}
                            className="border border-gray-300 px-2 py-1"
                          >
                            집행 잔액
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              paddingTop: `${tableMarginY * 3.77}px`,
                              paddingBottom: `${tableMarginY * 3.77}px`
                            }}
                            className="border border-gray-300 px-2 text-center"
                          >
                            디지털 역량 강화
                            {hasEmptyTableLines && (
                              <div className="text-[10px] text-rose-500 font-mono">↵ [빈 줄 남음]</div>
                            )}
                          </td>
                          <td
                            style={{
                              paddingTop: `${tableMarginY * 3.77}px`,
                              paddingBottom: `${tableMarginY * 3.77}px`
                            }}
                            className="border border-gray-300 px-2 text-right"
                          >
                            50,000,000원
                          </td>
                          <td
                            style={{
                              paddingTop: `${tableMarginY * 3.77}px`,
                              paddingBottom: `${tableMarginY * 3.77}px`
                            }}
                            className="border border-gray-300 px-2 text-right text-emerald-600 font-bold"
                          >
                            12,500,000원
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Hint & Verification */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showHint ? '힌트 접기' : '힌트 보기'}</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
                    isSuccess
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-gray-100 text-gray-600 border border-gray-200'
                  }`}
                >
                  {isSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>1페이지 목표 달성!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-gray-400" />
                      <span>아직 목표치에 미달함</span>
                    </>
                  )}
                </div>

                <button
                  onClick={handleVerify}
                  disabled={!isSuccess}
                  className={`px-5 py-2.5 rounded-xl text-xs font-medium shadow-xs transition-colors flex items-center gap-1.5 ${
                    isSuccess
                      ? 'bg-gray-900 hover:bg-gray-800 text-white cursor-pointer'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>{isAlreadyCompleted ? '퀘스트 완료 유지' : '미션 완료 도장 받기'}</span>
                </button>
              </div>
            </div>

            {/* Hint dropdown box */}
            {showHint && (
              <div className="mt-4 p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900 space-y-1">
                <div className="font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>힌트 안내</span>
                </div>
                {currentMission.hints.map((h, idx) => (
                  <div key={idx}>• {h}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
