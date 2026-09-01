import React from 'react';
import { X, FileText, CheckCircle2, Layout, Zap, ArrowRight, Lightbulb, BookOpen } from 'lucide-react';

interface OnePageReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab?: (tab: 'guide' | 'curriculum' | 'simulator') => void;
}

export const OnePageReportModal: React.FC<OnePageReportModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTab
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden font-sans text-gray-800 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-4 flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-white/10 rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-snug">
                1페이지 보고서 완벽 가이드
              </h2>
              <p className="text-xs text-blue-100">
                의사결정권자의 시간을 아끼는 한 장 완결형 보고서 작성 원칙
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-gray-700">
          {/* Section 1: 왜 1페이지 보고서인가? */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1.5">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span>왜 의사결정권자는 1페이지 보고서를 원할까요?</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed break-keep">
              임원과 관리자는 하루에도 수십 편의 문서를 검토합니다. <strong>페이지를 넘기지 않고 단 한눈에 현황, 원인, 핵심 제안, 기대 효과</strong>를 파악할 수 있는 1페이지 보고서는 의사결정 속도를 3배 이상 단축시킵니다.
            </p>
          </div>

          {/* Section 2: 1페이지 보고서의 4대 핵심 작성 원칙 */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1페이지 보고서 4대 작성 원칙</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-xs sm:text-sm mb-1 text-blue-700">
                  1. 두괄식 결론 선행 (Bottom-line First)
                </div>
                <p className="text-xs text-gray-600 leading-relaxed break-keep">
                  서론을 길게 쓰지 않고 첫 줄 개요에서 결론과 추진 과제를 명확히 제시합니다.
                </p>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-xs sm:text-sm mb-1 text-indigo-700">
                  2. 넘버링 & 불렛 계층 구조
                </div>
                <p className="text-xs text-gray-600 leading-relaxed break-keep">
                  <strong>□ 대제목 → ○ 중제목 → - 소제목 → · 세부내용</strong>의 표준 공문서 계층을 준수합니다.
                </p>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-xs sm:text-sm mb-1 text-emerald-700">
                  3. 텍스트 압축 서식 (미세 튜닝)
                </div>
                <p className="text-xs text-gray-600 leading-relaxed break-keep">
                  자간(-5%), 장평(95%), 줄간격(140~150%) 조절로 글자 가독성은 지키며 줄 수를 3~6줄 압축합니다.
                </p>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-xs sm:text-sm mb-1 text-amber-700">
                  4. 표 안여백 & 빈 줄 제거
                </div>
                <p className="text-xs text-gray-600 leading-relaxed break-keep">
                  표 셀 상/하 여백을 0.5mm로 설정하고 문단 끝 불필요한 엔터를 제거해 1페이지로 밀착시킵니다.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: 표준 1페이지 보고서 레이아웃 구조 */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Layout className="w-4 h-4 text-blue-600" />
              <span>표준 1페이지 보고서 프레임워크 (목차 구성)</span>
            </h3>
            <div className="border border-gray-200 rounded-xl overflow-hidden text-xs">
              <div className="bg-gray-100 px-3.5 py-2 font-bold text-gray-700 border-b border-gray-200">
                문서 제목 (16pt 고딕 볼드 + 박스 또는 밑줄)
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                <div className="px-3.5 py-2.5 flex items-start gap-3">
                  <span className="font-bold text-blue-700 w-24 shrink-0">Ⅰ. 추진 배경</span>
                  <span className="text-gray-600">왜 이 보고서가 작성되었는지 배경 및 현황 문제점 요약 (2~3줄)</span>
                </div>
                <div className="px-3.5 py-2.5 flex items-start gap-3">
                  <span className="font-bold text-blue-700 w-24 shrink-0">Ⅱ. 주요 내용</span>
                  <span className="text-gray-600">핵심 대책 및 실행 방안 (표 또는 3개 항목으로 핵심 수치와 함께 정리)</span>
                </div>
                <div className="px-3.5 py-2.5 flex items-start gap-3">
                  <span className="font-bold text-blue-700 w-24 shrink-0">Ⅲ. 기대 효과</span>
                  <span className="text-gray-600">도입 시 정량적·정성적 기대 성과 (비용 절감, 효율 향상 등)</span>
                </div>
                <div className="px-3.5 py-2.5 flex items-start gap-3">
                  <span className="font-bold text-blue-700 w-24 shrink-0">Ⅳ. 향후 일정</span>
                  <span className="text-gray-600">단계별 실행 일정 및 소요 예산, 담당 부서</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: 추천 학습 링크 */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="font-bold text-xs sm:text-sm text-gray-900">
                1초 만에 1페이지로 만드는 실전 단축키가 궁금하신가요?
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                시뮬레이터와 비법 강의를 통해 직접 조작해볼 수 있습니다.
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {onNavigateToTab && (
                <>
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateToTab('curriculum');
                    }}
                    className="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-100 text-xs font-semibold text-gray-700 rounded-lg transition-colors cursor-pointer"
                  >
                    압축 비법 보기
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateToTab('simulator');
                    }}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white rounded-lg transition-colors shadow-2xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>시뮬레이터 체험</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-5 py-3 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
