import { ShortcutItem } from '../types';

export const SHORTCUT_ITEMS: ShortcutItem[] = [
  // 1. 모양 복사 & 스타일 재활용
  {
    id: 'sc-shape-copy',
    category: 'style',
    categoryLabel: '모양 복사 & 스타일',
    name: '모양 복사하기 (글자/문단/셀배경)',
    keys: ['Alt', 'C'],
    description: '원본 글자에 커서를 두고 Alt+C로 글자/문단/셀 서식을 복사한 뒤, 적용할 영역을 드래그하고 Alt+C를 누르면 즉시 동일 서식이 복제됩니다.',
    mnemonicNote: 'Copy Format의 Alt+C (드래그하지 말고 클릭 후 누르기!)',
    efficiencyRating: 5
  },
  {
    id: 'sc-shape-fast-confirm',
    category: 'style',
    categoryLabel: '모양 복사 & 스타일',
    name: '모양 복사 대화상자 즉시 확인',
    keys: ['Alt', 'D'],
    description: 'Alt+C 창이 떴을 때 마우스로 확인을 누를 필요 없이 Alt+D를 누르면 0.1초 만에 확인 처리되어 작업 속도가 비약적으로 향상됩니다.',
    mnemonicNote: '대화상자 확인(Done) 단축키',
    efficiencyRating: 5
  },
  {
    id: 'sc-style-f6',
    category: 'style',
    categoryLabel: '모양 복사 & 스타일',
    name: '스타일 대화상자 호출',
    keys: ['F6'],
    description: '제목글씨체, 본문, 표 내부 스타일을 등록하고 단축키(Ctrl+1~Ctrl+0)로 즉시 재활용합니다.',
    mnemonicNote: 'F6 = 스타일 관리자',
    efficiencyRating: 5
  },
  {
    id: 'sc-style-default',
    category: 'style',
    categoryLabel: '모양 복사 & 스타일',
    name: '기본 바탕글 스타일 복귀',
    keys: ['Ctrl', '1'],
    description: '복잡한 서식이 적용된 문단을 가장 일반적인 기본 본문(바탕글) 스타일로 단 1초 만에 초기화 복귀합니다.',
    mnemonicNote: '1번 스타일 = 바탕글',
    efficiencyRating: 5
  },

  // 2. 들여쓰기 & 줄바꿈 & 쪽
  {
    id: 'sc-indent-shift-tab',
    category: 'paragraph',
    categoryLabel: '들여쓰기 & 정렬',
    name: '빠른 내어 쓰기 (문단 정렬)',
    keys: ['Shift', 'Tab'],
    description: '공문서 1. 가. 1) 등에서 둘째 줄 이하가 첫째 줄 시작점과 일치되도록 스페이스바 연타 없이 한 번에 자동 정렬합니다.',
    mnemonicNote: '문단 시작 위치에서 Shift+Tab',
    efficiencyRating: 5
  },
  {
    id: 'sc-indent-table-shift-tab',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '표 내부 빠른 내어 쓰기',
    keys: ['Ctrl', 'Shift', 'Tab'],
    description: '표(셀) 내부에서 빠른 내어쓰기를 적용할 때 누릅니다. (일반 Shift+Tab은 이전 셀로 이동하므로 주의)',
    mnemonicNote: '표 안에서는 Ctrl을 함께 누름',
    efficiencyRating: 5
  },
  {
    id: 'sc-soft-enter',
    category: 'paragraph',
    categoryLabel: '들여쓰기 & 정렬',
    name: '문단 내 강제 줄 바꾸기 (소프트 엔터)',
    keys: ['Shift', 'Enter'],
    description: '새 문단을 만들지 않고 같은 문단 속성을 유지한 채 줄만 바꿉니다. 빠른 내어쓰기 규칙이 깨지지 않고 연속 적용됩니다.',
    mnemonicNote: 'Shift + Enter = 같은 문단 내 줄바꿈',
    efficiencyRating: 5
  },
  {
    id: 'sc-page-f7',
    category: 'page',
    categoryLabel: '쪽 & 편집 용지',
    name: '편집 용지 설정',
    keys: ['F7'],
    description: '용지 여백(위, 아래, 좌, 우, 머리말, 꼬리말)을 일괄 조절하는 대화상자를 호출합니다.',
    mnemonicNote: 'F7 = 편집 용지',
    efficiencyRating: 5
  },
  {
    id: 'sc-force-page-break',
    category: 'page',
    categoryLabel: '쪽 & 편집 용지',
    name: '강제 페이지 나누기',
    keys: ['Ctrl', 'Shift', 'Enter'],
    description: '현재 커서 위치에서 다음 쪽으로 즉시 넘깁니다.',
    mnemonicNote: '다음 페이지로 점프',
    efficiencyRating: 4
  },

  // 3. 지우기 단축키
  {
    id: 'sc-del-prev-word',
    category: 'delete',
    categoryLabel: '초고속 텍스트 지우기',
    name: '앞 단어 지우기 (단어 단위 삭제)',
    keys: ['Ctrl', 'BackSpace'],
    description: '글자 하나씩 지우지 않고 커서 앞 단어 전체를 한 번에 싹 지웁니다.',
    mnemonicNote: 'Ctrl + BackSpace = 앞 단어 고속 삭제',
    efficiencyRating: 5
  },
  {
    id: 'sc-del-next-word',
    category: 'delete',
    categoryLabel: '초고속 텍스트 지우기',
    name: '한 단어 지우기 (뒤 단어 삭제)',
    keys: ['Ctrl', 'Delete'],
    description: '커서 뒤에 위치한 단어 하나를 한 번에 지웁니다. (동일 기능: Ctrl + T)',
    mnemonicNote: 'Ctrl + Delete = 뒤 단어 고속 삭제',
    efficiencyRating: 5
  },
  {
    id: 'sc-del-line',
    category: 'delete',
    categoryLabel: '초고속 텍스트 지우기',
    name: '한 줄 통째로 지우기',
    keys: ['Ctrl', 'Y'],
    description: '커서가 위치한 줄 전체를 단 한 번에 지웁니다.',
    mnemonicNote: 'Ctrl + Y = 한 줄 싹 지우기',
    efficiencyRating: 5
  },
  {
    id: 'sc-del-line-end',
    category: 'delete',
    categoryLabel: '초고속 텍스트 지우기',
    name: '커서 뒤 줄 끝까지 지우기',
    keys: ['Alt', 'Y'],
    description: '현재 커서 위치부터 해당 줄의 끝까지 모두 지웁니다.',
    mnemonicNote: 'Alt + Y = 줄 뒤 지우기',
    efficiencyRating: 4
  },
  {
    id: 'sc-del-forward',
    category: 'delete',
    categoryLabel: '초고속 텍스트 지우기',
    name: '뒤 글자 지우기',
    keys: ['Delete'],
    description: '커서 뒤에 있는 한 글자를 지웁니다.',
    mnemonicNote: '커서 뒤 글자 삭제',
    efficiencyRating: 4
  },

  // 4. 자간 & 장평 & 줄간격 (1페이지 압축 핵심)
  {
    id: 'sc-1',
    category: 'letter',
    categoryLabel: '자간 (Letter Spacing)',
    name: '자간 좁히기 (Narrow)',
    keys: ['Alt', 'Shift', 'N'],
    description: '선택 영역의 글자 사이 간격을 1%씩 줄입니다. 2줄로 삐져나온 단어를 당겨올 때 필수입니다.',
    mnemonicNote: 'Narrow(좁게)의 N',
    efficiencyRating: 5
  },
  {
    id: 'sc-2',
    category: 'letter',
    categoryLabel: '자간 (Letter Spacing)',
    name: '자간 넓히기 (Wide)',
    keys: ['Alt', 'Shift', 'W'],
    description: '선택 영역의 글자 사이 간격을 1%씩 늘립니다.',
    mnemonicNote: 'Wide(넓게)의 W',
    efficiencyRating: 4
  },
  {
    id: 'sc-3',
    category: 'scale',
    categoryLabel: '장평 (Character Width)',
    name: '장평 줄이기 (작게)',
    keys: ['Alt', 'Shift', 'J'],
    description: '글자의 가로 너비만 슬림하게 1%씩 줄입니다. 95% 장평 설정 시 왜곡 없이 문장 길이를 축소합니다.',
    mnemonicNote: 'J = 작게 (가로 축소)',
    efficiencyRating: 5
  },
  {
    id: 'sc-4',
    category: 'scale',
    categoryLabel: '장평 (Character Width)',
    name: '장평 늘리기 (크게)',
    keys: ['Alt', 'Shift', 'K'],
    description: '글자의 가로 너비만 1%씩 늘립니다.',
    mnemonicNote: 'K = 크게 (가로 확대)',
    efficiencyRating: 3
  },
  {
    id: 'sc-5',
    category: 'size',
    categoryLabel: '글자 크기 (Font Size)',
    name: '글자 크기 축소 (Reduce)',
    keys: ['Alt', 'Shift', 'R'],
    description: '선택된 글자의 크기를 1pt씩 줄입니다.',
    mnemonicNote: 'Reduce(작게)의 R',
    efficiencyRating: 4
  },
  {
    id: 'sc-6',
    category: 'size',
    categoryLabel: '글자 크기 (Font Size)',
    name: '글자 크기 확대 (Expand)',
    keys: ['Alt', 'Shift', 'E'],
    description: '선택된 글자의 크기를 1pt씩 키웁니다.',
    mnemonicNote: 'Enlarge/Expand(크게)의 E',
    efficiencyRating: 3
  },
  {
    id: 'sc-7',
    category: 'paragraph',
    categoryLabel: '줄 간격 (Line Spacing)',
    name: '줄 간격 줄이기 (좁게)',
    keys: ['Ctrl', 'Shift', 'Q'],
    description: '문단의 줄 간격을 10%씩 좁힙니다. (기본 160% → 140~150%로 최적화)',
    mnemonicNote: 'Q = 좁게 (Quickly tighten)',
    efficiencyRating: 5
  },
  {
    id: 'sc-8',
    category: 'paragraph',
    categoryLabel: '줄 간격 (Line Spacing)',
    name: '줄 간격 늘리기 (넓게)',
    keys: ['Ctrl', 'Shift', 'W'],
    description: '문단의 줄 간격을 10%씩 넓힙니다.',
    mnemonicNote: 'W = 넓게 (Wide)',
    efficiencyRating: 3
  },

  // 5. 표 & 셀 고속 편집
  {
    id: 'sc-table-singleline',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '표 셀 안에서 자간 자동 맞춤 (한 줄로 입력)',
    keys: ['P', '→', '셀', '→', '한 줄로 입력'],
    description: '표 셀 속성에서 [한 줄로 입력]을 체크하면 글자 수가 늘어나도 자동으로 자간을 줄여 1줄 안에 쏙 들어가게 해줍니다.',
    mnemonicNote: '셀 밖 줄바꿈 방지 필수 옵션',
    efficiencyRating: 5
  },
  {
    id: 'sc-11',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '표/셀 속성 대화상자',
    keys: ['P'],
    description: '표 또는 셀 안여백(위쪽/아래쪽 0.5mm 설정) 및 크기 고정 대화상자',
    mnemonicNote: 'Property (속성)의 P',
    efficiencyRating: 5
  },
  {
    id: 'sc-12',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 블록 지정',
    keys: ['F5'],
    description: '1번 누르면 현재 셀 선택, 3번 연타 시 표 전체 셀 일괄 선택',
    mnemonicNote: 'F5 기능키',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-border-c',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 테두리/배경 (각 셀마다 적용)',
    keys: ['C'],
    description: '선택한 셀들의 테두리와 배경색을 각 셀 단위로 변경합니다.',
    mnemonicNote: 'Cell (셀)의 C',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-border-b',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 테두리/배경 (하나의 영역으로 취급)',
    keys: ['B'],
    description: '선택된 전체 블록을 하나의 큰 영역으로 묶어 외곽 테두리나 배경을 지정합니다.',
    mnemonicNote: 'Background (배경)의 B',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-merge',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 합치기 (Merge)',
    keys: ['M'],
    description: '드래그하여 선택한 인접 셀들을 하나로 병합합니다.',
    mnemonicNote: 'Merge(병합)의 M',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-split',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 나누기 (Split)',
    keys: ['S'],
    description: '선택한 셀을 여러 행 또는 열로 분할합니다.',
    mnemonicNote: 'Split(분할)의 S',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-width',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 너비 같게 맞춤',
    keys: ['W'],
    description: '선택한 여러 열들의 너비를 균등하게 분배합니다.',
    mnemonicNote: 'Width(너비)의 W',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-height',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 높이 같게 맞춤',
    keys: ['H'],
    description: '선택한 여러 행들의 높이를 균등하게 맞춥니다.',
    mnemonicNote: 'Height(높이)의 H',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-sum',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 블록 합계 자동 계산',
    keys: ['Alt', 'Shift', 'S'],
    description: '숫자 셀들을 드래그한 후 누르면 맨 오른쪽 또는 맨 아래 끝 셀에 합계가 자동 입력됩니다.',
    mnemonicNote: 'Sum(합계)의 S',
    efficiencyRating: 5
  },
  {
    id: 'sc-table-product',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '셀 블록 곱셈 자동 계산',
    keys: ['Alt', 'Shift', 'P'],
    description: '숫자 셀들을 드래그한 후 누르면 끝 셀에 곱셈 결과가 자동 산출됩니다.',
    mnemonicNote: 'Product(곱셈)의 P',
    efficiencyRating: 4
  },
  {
    id: 'sc-table-autofill',
    category: 'table',
    categoryLabel: '표 편집 (Table)',
    name: '표 자동 채우기',
    keys: ['A'],
    description: '1, 2 또는 월, 화 등 규칙이 있는 셀과 빈칸을 드래그한 뒤 A를 누르면 자동 채우기가 완성됩니다.',
    mnemonicNote: 'Auto Fill의 A',
    efficiencyRating: 4
  },

  // 6. 글자 속성 & 초고속 색상 변경
  {
    id: 'sc-color-red',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '빨강 글자색 (Red)',
    keys: ['Ctrl', 'M, R'],
    description: '글자를 블록 지정 후 Ctrl을 누른 상태에서 M을 누르고 R을 누르면 즉시 빨간색으로 변경됩니다.',
    mnemonicNote: 'Ctrl + M 누르고 Red(R)',
    efficiencyRating: 5
  },
  {
    id: 'sc-color-blue',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '파랑 글자색 (Blue)',
    keys: ['Ctrl', 'M, B'],
    description: '글자를 블록 지정 후 Ctrl을 누른 채 M을 누르고 B를 누르면 파란색으로 변경됩니다.',
    mnemonicNote: 'Ctrl + M 누르고 Blue(B)',
    efficiencyRating: 5
  },
  {
    id: 'sc-color-black',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '검정 글자색 (Black/K)',
    keys: ['Ctrl', 'M, K'],
    description: '글자를 블록 지정 후 Ctrl 누른 채 M 누르고 K를 누르면 검정색으로 복귀합니다.',
    mnemonicNote: 'Ctrl + M 누르고 blacK(K)',
    efficiencyRating: 5
  },
  {
    id: 'sc-color-green',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '초록 글자색 (Green)',
    keys: ['Ctrl', 'M, G'],
    description: '글자를 블록 지정 후 Ctrl 누른 채 M 누르고 G를 누르면 초록색으로 변경됩니다.',
    mnemonicNote: 'Ctrl + M 누르고 Green(G)',
    efficiencyRating: 4
  },
  {
    id: 'sc-color-yellow',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '노랑 글자색 (Yellow)',
    keys: ['Ctrl', 'M, Y'],
    description: '글자를 블록 지정 후 Ctrl 누른 채 M 누르고 Y를 누르면 노란색으로 변경됩니다.',
    mnemonicNote: 'Ctrl + M 누르고 Yellow(Y)',
    efficiencyRating: 3
  },
  {
    id: 'sc-text-bold',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '글자 굵게 (Bold)',
    keys: ['Ctrl', 'B'],
    description: '선택 영역의 글씨를 굵게 토글합니다.',
    mnemonicNote: 'Bold의 B',
    efficiencyRating: 5
  },
  {
    id: 'sc-text-underline',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '밑줄 (Underline)',
    keys: ['Ctrl', 'U'],
    description: '선택 영역의 글씨 아래에 밑줄을 긋습니다.',
    mnemonicNote: 'Underline의 U',
    efficiencyRating: 4
  },
  {
    id: 'sc-text-italic',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '기울임꼴 (Italic)',
    keys: ['Ctrl', 'I'],
    description: '선택 영역의 글씨를 이탤릭체로 기울입니다.',
    mnemonicNote: 'Italic의 I',
    efficiencyRating: 3
  },
  {
    id: 'sc-strikethrough-combo',
    category: 'color',
    categoryLabel: '글자 서식 & 색상',
    name: '취소선 고속 콤보',
    keys: ['Alt', 'L', '→', 'E', '→', 'D'],
    description: '글자 모양(Alt+L) 진입 후 취소선 단축키 E를 누르고 D로 즉시 확인하여 마우스 없이 취소선을 긋습니다.',
    mnemonicNote: 'Alt+L.E.D 콤보',
    efficiencyRating: 4
  },

  // 7. 정렬 및 기본 단축키
  {
    id: 'sc-align-center',
    category: 'paragraph',
    categoryLabel: '들여쓰기 & 정렬',
    name: '가운데 정렬 (Center)',
    keys: ['Ctrl', 'Shift', 'C'],
    description: '문단을 가운데로 정렬합니다.',
    mnemonicNote: 'Center의 C',
    efficiencyRating: 4
  },
  {
    id: 'sc-align-left',
    category: 'paragraph',
    categoryLabel: '들여쓰기 & 정렬',
    name: '왼쪽 정렬 (Left)',
    keys: ['Ctrl', 'Shift', 'L'],
    description: '문단을 왼쪽으로 정렬합니다.',
    mnemonicNote: 'Left의 L',
    efficiencyRating: 4
  },
  {
    id: 'sc-align-right',
    category: 'paragraph',
    categoryLabel: '들여쓰기 & 정렬',
    name: '오른쪽 정렬 (Right)',
    keys: ['Ctrl', 'Shift', 'R'],
    description: '문단을 오른쪽으로 정렬합니다.',
    mnemonicNote: 'Right의 R',
    efficiencyRating: 4
  },
  {
    id: 'sc-13',
    category: 'paragraph',
    categoryLabel: '들여쓰기 & 정렬',
    name: '양쪽 정렬 (Justify)',
    keys: ['Ctrl', 'Shift', 'M'],
    description: '문서의 좌우 여백을 반듯하게 맞춥니다.',
    mnemonicNote: 'Middle/Margin 정렬',
    efficiencyRating: 4
  },
  {
    id: 'sc-block-f3',
    category: 'general',
    categoryLabel: '기본 편집 & 블록',
    name: '블록 선택 모드 확장',
    keys: ['F3'],
    description: 'F3을 누른 뒤 방향키를 누르면 블록이 지정되며, F3을 반복하여 누를 때마다 단어 → 문장 → 문단으로 범위가 넓어집니다.',
    mnemonicNote: 'F3 = 연속 블록 선택',
    efficiencyRating: 5
  },
  {
    id: 'sc-undo',
    category: 'general',
    categoryLabel: '기본 편집 & 블록',
    name: '실행 취소 (되돌리기)',
    keys: ['Ctrl', 'Z'],
    description: '직전 작업을 되돌립니다.',
    mnemonicNote: 'Undo',
    efficiencyRating: 5
  },
  {
    id: 'sc-redo',
    category: 'general',
    categoryLabel: '기본 편집 & 블록',
    name: '다시 실행',
    keys: ['Ctrl', 'Shift', 'Z'],
    description: '취소했던 작업을 다시 실행합니다.',
    mnemonicNote: 'Redo',
    efficiencyRating: 4
  },
  {
    id: 'sc-find',
    category: 'general',
    categoryLabel: '기본 편집 & 블록',
    name: '찾기 / 찾아 바꾸기',
    keys: ['Ctrl', 'F'],
    description: '문서 내 특정 단어를 검색하거나 일괄 치환합니다.',
    mnemonicNote: 'Find의 F',
    efficiencyRating: 4
  }
];

