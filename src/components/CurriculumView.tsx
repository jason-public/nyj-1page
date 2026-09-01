import React, { useState } from 'react';
import { CURRICULUM_SECTIONS } from '../data/curriculum';
import { CurriculumSection } from '../types';
import {
  FileText,
  Minimize2,
  Scaling,
  Type,
  AlignJustify,
  Table,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  PlayCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface CurriculumViewProps {
  onOpenSimulatorWithPreset: (preset: NonNullable<CurriculumSection['simulatorPreset']>) => void;
  onOpenDialogModal: (type: 'font' | 'paragraph' | 'table') => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  onOpenSimulatorWithPreset,
  onOpenDialogModal
}) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(CURRICULUM_SECTIONS[0].id);

  const selectedSection =
    CURRICULUM_SECTIONS.find((s) => s.id === selectedSectionId) || CURRICULUM_SECTIONS[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Minimize2':
        return <Minimize2 className="w-5 h-5" />;
      case 'Scaling':
        return <Scaling className="w-5 h-5" />;
      case 'Type':
        return <Type className="w-5 h-5" />;
      case 'AlignJustify':
        return <AlignJustify className="w-5 h-5" />;
      case 'Table':
        return <Table className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner following Clean Minimalism archetype */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium mb-3 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>한글(HWP) 실무 압축 바이블</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
              1페이지 보고서 작성에 필요한 기능들
            </h1>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl">
              공문서, 사업기획서, 보고서에서 1줄이 애매하게 넘쳐 2페이지가 되는 문제를 해결합니다.
              자간, 장평, 줄간격, 표 안여백 조절 비법을 체계적으로 익혀보세요.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-col gap-2 shrink-0 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium">
              🎓 6개 강좌를 통한 마스터
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium">
              ⌨️ 단축키 즉시 실습
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium">
              🎯 1페이지 목표 자동 판정
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Navigation / Right Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Table of Contents */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 shadow-xs p-5 sticky top-24">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            학습 커리큘럼
          </h3>
          <div className="space-y-1.5">
            {CURRICULUM_SECTIONS.map((section) => {
              const isSelected = section.id === selectedSectionId;
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 text-blue-700 font-medium border border-blue-100 shadow-2xs'
                      : 'hover:bg-gray-50 text-gray-700 border border-transparent'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {getIcon(section.iconName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs font-bold truncate">
                        {section.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400 line-clamp-1">
                      {section.subtitle}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                      isSelected ? 'text-blue-600 translate-x-0.5' : 'text-gray-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Quick Dialog Simulator Buttons */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              한글 핵심 대화상자
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => onOpenDialogModal('font')}
                className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 rounded-xl font-medium text-center transition-colors cursor-pointer"
                title="Alt+L (자간/장평/크기)"
              >
                <span className="block text-[10px] text-gray-400 font-mono mb-0.5">Alt+L</span>
                <span className="font-semibold text-gray-700">글자 모양</span>
              </button>
              <button
                onClick={() => onOpenDialogModal('paragraph')}
                className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 rounded-xl font-medium text-center transition-colors cursor-pointer"
                title="Alt+T (줄간격)"
              >
                <span className="block text-[10px] text-gray-400 font-mono mb-0.5">Alt+T</span>
                <span className="font-semibold text-gray-700">문단 모양</span>
              </button>
              <button
                onClick={() => onOpenDialogModal('table')}
                className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 rounded-xl font-medium text-center transition-colors cursor-pointer"
                title="P (셀 여백 0.5mm)"
              >
                <span className="block text-[10px] text-gray-400 font-mono mb-0.5">P</span>
                <span className="font-semibold text-gray-700">표/셀 속성</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Section Detailed Guide */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section Header Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-md">
                {selectedSection.badge}
              </span>
              {selectedSection.simulatorPreset && (
                <button
                  onClick={() => onOpenSimulatorWithPreset(selectedSection.simulatorPreset!)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>시뮬레이터에서 실습</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {selectedSection.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-6">
              {selectedSection.overview}
            </p>

            {/* Key points checklist */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-6">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>핵심 요점 및 원리</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedSection.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keyboard Shortcuts Section */}
            {selectedSection.shortcuts.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  실무 필수 단축키
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSection.shortcuts.map((sc, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-50 border border-gray-200 rounded-xl"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-gray-800">{sc.label}</span>
                        <div className="flex items-center gap-1">
                          {sc.keys.map((k, kIdx) => (
                            <React.Fragment key={kIdx}>
                              <kbd className="kbd-key">{k}</kbd>
                              {kIdx < sc.keys.length - 1 && (
                                <span className="text-xs text-gray-400 font-bold">+</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2 leading-relaxed">{sc.description}</p>
                      {sc.mnemonic && (
                        <div className="text-[11px] font-medium text-blue-700 flex items-center gap-1">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>암기 비법: {sc.mnemonic}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dialog Access Info */}
            {selectedSection.dialogAccess && (
              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs text-gray-800 mb-6">
                <div className="font-bold text-blue-900 mb-2 flex items-center gap-1.5">
                  <span>대화상자로 정밀 설정하기</span>
                </div>
                <div className="space-y-1.5 text-gray-600">
                  <div>• <strong className="text-gray-800">마우스 접근:</strong> {selectedSection.dialogAccess.mouse}</div>
                  <div>• <strong className="text-gray-800">단축키:</strong> {selectedSection.dialogAccess.shortcut.join('+')}</div>
                  <div>• <strong className="text-gray-800">목적:</strong> {selectedSection.dialogAccess.purpose}</div>
                </div>
              </div>
            )}

            {/* Pro Tips & Warnings */}
            {selectedSection.proTips && selectedSection.proTips.length > 0 && (
              <div className="space-y-2.5 mb-4">
                {selectedSection.proTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs sm:text-sm text-amber-900 flex items-start gap-2.5"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedSection.warnings && selectedSection.warnings.length > 0 && (
              <div className="space-y-2.5 mb-4">
                {selectedSection.warnings.map((warn, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-rose-50/70 border border-rose-200/70 rounded-xl text-xs sm:text-sm text-rose-900 flex items-start gap-2.5"
                  >
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{warn}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reference Images Extracted from UpNote */}
          {selectedSection.images && selectedSection.images.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <span>📸 참고 시각 자료 및 화면 캡처</span>
                </h3>
                <span className="text-xs text-gray-400">한글(HWP) 실제 비교</span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {selectedSection.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col items-center p-4"
                  >
                    <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-2xs max-w-full overflow-x-auto flex justify-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="max-h-80 object-contain rounded"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-2.5 text-xs font-medium text-gray-600 text-center">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Reference Source Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 text-xs text-gray-500 flex items-center justify-between shadow-xs">
            <div>
              <span>참고 출처: UpNote 문서 및 푸른로즈 블로그 실무 노하우</span>
            </div>
            <a
              href="https://bluestella.tistory.com/118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
            >
              <span>원문 블로그 보기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
