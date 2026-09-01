export interface CurriculumSection {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  overview: string;
  keyPoints: string[];
  shortcuts: {
    label: string;
    keys: string[];
    description: string;
    mnemonic?: string;
  }[];
  dialogAccess?: {
    mouse: string;
    shortcut: string[];
    purpose: string;
  };
  warnings?: string[];
  proTips?: string[];
  images: {
    src: string;
    alt: string;
    caption: string;
    width?: number;
  }[];
  simulatorPreset?: {
    tracking: number; // letter spacing (%)
    scale: number;    // horizontal scale (%)
    lineHeight: number; // line spacing (%)
    fontSize: number; // pt
    tableMarginY: number; // mm
    hasEmptyTableLines: boolean;
    sampleText: string;
  };
}

export interface ShortcutItem {
  id: string;
  category: 'letter' | 'scale' | 'size' | 'paragraph' | 'table' | 'dialog' | 'delete' | 'style' | 'color' | 'general' | 'page';
  categoryLabel: string;
  name: string;
  keys: string[];
  description: string;
  mnemonicNote?: string;
  efficiencyRating: 1 | 2 | 3 | 4 | 5;
}

export interface PracticeMission {
  id: string;
  title: string;
  scenario: string;
  difficulty: '초급' | '중급' | '고급';
  targetGoal: string;
  initialState: {
    tracking: number;
    scale: number;
    fontSize: number;
    lineHeight: number;
    tableMarginY: number;
    hasEmptyTableLines: boolean;
    lastLineZeroLineHeight: boolean;
    content: string;
  };
  targetCriteria: {
    maxPages: number;
    maxLines: number;
    minLegibilityScore: number;
  };
  hints: string[];
  solutionExplanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  shortcutBadge?: string[];
}
