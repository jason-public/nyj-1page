import React from 'react';
import { BookOpen, MonitorPlay, Target, Keyboard, HelpCircle, Sparkles, Zap, FileText } from 'lucide-react';

export type TabType = 'curriculum' | 'guide' | 'simulator' | 'missions' | 'shortcuts' | 'quiz';

interface HeaderProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  completedMissionsCount: number;
  totalMissionsCount: number;
  onOpenExplanation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  completedMissionsCount,
  totalMissionsCount,
  onOpenExplanation
}) => {
  const tabs = [
    {
      id: 'guide' as TabType,
      label: '초고속 작성 필수기능',
      icon: Zap
    },
    {
      id: 'curriculum' as TabType,
      label: '1페이지 압축 비법',
      icon: BookOpen
    },
    {
      id: 'simulator' as TabType,
      label: '실시간 HWP 시뮬레이터',
      icon: MonitorPlay,
      badge: '단축키 지원'
    },
    {
      id: 'missions' as TabType,
      label: '실전 압축 퀘스트',
      icon: Target,
      badge: `${completedMissionsCount}/${totalMissionsCount} 완료`
    },
    {
      id: 'shortcuts' as TabType,
      label: '단축키 치트시트',
      icon: Keyboard
    },
    {
      id: 'quiz' as TabType,
      label: '스피드 퀴즈',
      icon: HelpCircle
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand matching Clean Minimalism design */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-base leading-none">한</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-gray-800 tracking-tight">
                  아래한글 <span className="text-blue-600">1페이지</span> 보고서 작성 비법
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  실무 비법 수록
                </span>
              </div>
              <p className="text-xs text-gray-500 hidden sm:block">
                보고서 1페이지 압축을 위한 자간·장평·줄간격·표 여백 단축키 실전 학습
              </p>
            </div>
          </div>

          {/* Header Action & Progress */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenExplanation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 border border-blue-200 font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-2xs cursor-pointer shrink-0"
              title="1페이지 보고서 완벽 가이드 및 작성 원칙"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>1페이지 보고서 설명</span>
            </button>

            {/* Quick Mission Progress Badge */}
            <div className="hidden lg:flex items-center gap-3 bg-gray-50 px-3.5 py-1.5 rounded-lg border border-gray-200 text-xs">
              <span className="text-gray-500 font-medium">퀘스트 진척도</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(completedMissionsCount / totalMissionsCount) * 100}%` }}
                  />
                </div>
                <span className="font-semibold font-mono text-gray-700 text-xs">
                  {completedMissionsCount}/{totalMissionsCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs with clean minimalist styling */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-1 scrollbar-none border-t border-gray-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

