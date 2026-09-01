/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, TabType } from './components/Header';
import { CurriculumView } from './components/CurriculumView';
import { FastGuideView } from './components/FastGuideView';
import { HwpSimulator } from './components/HwpSimulator';
import { MissionView } from './components/MissionView';
import { ShortcutCheatsheet } from './components/ShortcutCheatsheet';
import { QuizView } from './components/QuizView';
import { FontDialogModal } from './components/FontDialogModal';
import { ParagraphDialogModal } from './components/ParagraphDialogModal';
import { TableCellDialogModal } from './components/TableCellDialogModal';
import { PRACTICE_MISSIONS } from './data/missions';
import { CurriculumSection } from './types';
import { Sparkles, BookOpen, ExternalLink, Keyboard, Heart } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('guide');
  const [completedMissions, setCompletedMissions] = useState<string[]>(['mission-1']);
  const [activeGlobalModal, setActiveGlobalModal] = useState<'font' | 'paragraph' | 'table' | null>(null);

  // Dialog default values for stand-alone modal preview
  const [modalTracking, setModalTracking] = useState(-4);
  const [modalScale, setModalScale] = useState(95);
  const [modalFontSize, setModalFontSize] = useState(10);
  const [modalLineHeight, setModalLineHeight] = useState(145);
  const [modalTableMarginY, setModalTableMarginY] = useState(0.5);
  const [modalEmptyTableLines, setModalEmptyTableLines] = useState(false);

  const handleCompleteMission = (missionId: string) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions([...completedMissions, missionId]);
    }
  };

  const handleOpenSimulatorWithPreset = (preset: NonNullable<CurriculumSection['simulatorPreset']>) => {
    setCurrentTab('simulator');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <div>
        {/* Top Sticky Header */}
        <Header
          currentTab={currentTab}
          onTabChange={setCurrentTab}
          completedMissionsCount={completedMissions.length}
          totalMissionsCount={PRACTICE_MISSIONS.length}
        />

        {/* Main Content Body */}
        <main className="animate-in fade-in duration-200">
          {currentTab === 'curriculum' && (
            <CurriculumView
              onOpenSimulatorWithPreset={handleOpenSimulatorWithPreset}
              onOpenDialogModal={(type) => setActiveGlobalModal(type)}
            />
          )}

          {currentTab === 'guide' && <FastGuideView />}

          {currentTab === 'simulator' && <HwpSimulator />}

          {currentTab === 'missions' && (
            <MissionView
              completedMissions={completedMissions}
              onCompleteMission={handleCompleteMission}
            />
          )}

          {currentTab === 'shortcuts' && <ShortcutCheatsheet />}

          {currentTab === 'quiz' && <QuizView />}
        </main>
      </div>

      {/* Global HWP Dialog Simulators (callable from curriculum or anywhere) */}
      <FontDialogModal
        isOpen={activeGlobalModal === 'font'}
        onClose={() => setActiveGlobalModal(null)}
        tracking={modalTracking}
        scale={modalScale}
        fontSize={modalFontSize}
        onApply={(t, s, f) => {
          setModalTracking(t);
          setModalScale(s);
          setModalFontSize(f);
        }}
      />

      <ParagraphDialogModal
        isOpen={activeGlobalModal === 'paragraph'}
        onClose={() => setActiveGlobalModal(null)}
        lineHeight={modalLineHeight}
        onApply={(lh) => setModalLineHeight(lh)}
      />

      <TableCellDialogModal
        isOpen={activeGlobalModal === 'table'}
        onClose={() => setActiveGlobalModal(null)}
        tableMarginY={modalTableMarginY}
        hasEmptyTableLines={modalEmptyTableLines}
        onApply={(margin, empty) => {
          setModalTableMarginY(margin);
          setModalEmptyTableLines(empty);
        }}
      />

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                한
              </div>
              <span className="font-semibold text-slate-800">
                아래한글 보고서 1페이지 압축 학습 플랫폼
              </span>
              <span>• UpNote 실무 노하우 기반 제작</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 text-slate-600">
                단축키: <kbd className="kbd-key text-[10px]">Alt+Shift+N/J</kbd>, <kbd className="kbd-key text-[10px]">Ctrl+Shift+Q</kbd>, <kbd className="kbd-key text-[10px]">P</kbd>
              </span>
              <a
                href="https://bluestella.tistory.com/118"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>참고 원문 블로그</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

