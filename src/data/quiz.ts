import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: '한글(HWP)에서 선택한 영역의 글자 사이 간격(자간)을 좁히는 단축키는 무엇일까요?',
    options: [
      'Alt + Shift + N (Narrow)',
      'Alt + Shift + W (Wide)',
      'Ctrl + Shift + Q',
      'Alt + Shift + J'
    ],
    correctIndex: 0,
    explanation: '자간을 줄이는 단축키는 Alt + Shift + N (Narrow: 좁게) 입니다. 반대로 넓히는 단축키는 Alt + Shift + W (Wide: 넓게) 입니다.',
    shortcutBadge: ['Alt', 'Shift', 'N']
  },
  {
    id: 'q2',
    question: '글자의 높이는 그대로 두고 가로 너비(장평)를 슬림하게 줄이는 단축키는 무엇일까요?',
    options: [
      'Alt + Shift + K',
      'Alt + Shift + J (작게)',
      'Alt + Shift + R',
      'Ctrl + Shift + W'
    ],
    correctIndex: 1,
    explanation: '장평을 줄이는 단축키는 Alt + Shift + J (작게) 입니다. 늘리는 단축키는 Alt + Shift + K (크게) 입니다.',
    shortcutBadge: ['Alt', 'Shift', 'J']
  },
  {
    id: 'q3',
    question: '문서의 줄 간격을 기본 160%에서 10%씩 빠르게 줄여주는 단축키는?',
    options: [
      'Alt + Shift + R',
      'Ctrl + Shift + Q',
      'Ctrl + Shift + W',
      'Alt + T'
    ],
    correctIndex: 1,
    explanation: '줄 간격을 좁히는 단축키는 Ctrl + Shift + Q 입니다. 넓히는 단축키는 Ctrl + Shift + W 입니다.',
    shortcutBadge: ['Ctrl', 'Shift', 'Q']
  },
  {
    id: 'q4',
    question: '표의 높이를 줄이기 위해 셀을 선택한 후 누르는 [표/셀 속성] 대화상자 단축키는?',
    options: [
      'F7',
      'Alt + L',
      'P (Property)',
      'Ctrl + N, T'
    ],
    correctIndex: 2,
    explanation: '표 또는 셀을 선택한 상태에서 단축키 P 를 누르면 [표/셀 속성] 대화상자가 바로 열립니다.',
    shortcutBadge: ['P']
  },
  {
    id: 'q5',
    question: '표의 크기를 극적으로 줄이기 위해 [표/셀 속성]에서 추천하는 셀 위/아래 안여백 수치는?',
    options: [
      '3.0 mm',
      '2.0 mm',
      '0.5 mm 이하',
      '5.0 mm'
    ],
    correctIndex: 2,
    explanation: '기본 안여백(약 2~3mm) 대신 위/아래 여백을 0.5mm로 설정하면 글자 크기를 줄이지 않고도 표 높이를 대폭 압축할 수 있습니다.',
    shortcutBadge: ['위/아래 0.5mm']
  },
  {
    id: 'q6',
    question: '문서 맨 마지막 줄이 애매하게 다음 페이지 첫 줄로 넘어갈 때 사용할 수 있는 비법은?',
    options: [
      '폰트 크기를 무조건 5pt로 바꾼다.',
      '문서 전체 여백을 전부 0으로 만든다.',
      '마지막 줄만 블록 지정 후 줄 간격을 0% 또는 50%로 설정한다.',
      '내용을 임의로 삭제한다.'
    ],
    correctIndex: 2,
    explanation: '마지막 줄만 선택하여 줄 간격을 0%로 지정하면 윗 페이지 맨 하단 여백 공간에 깔끔하게 흡수되어 1페이지로 완성됩니다.',
    shortcutBadge: ['마지막 줄 0%']
  },
  {
    id: 'q7',
    question: '특정 글자나 문단의 서식을 그대로 따와서 다른 곳에 붙여넣는 [모양 복사하기] 단축키는?',
    options: [
      'Ctrl + C',
      'Alt + C',
      'Shift + C',
      'Ctrl + Shift + C'
    ],
    correctIndex: 1,
    explanation: '원본 글자에 커서를 두고 Alt + C 를 누르면 글자/문단/셀 서식이 복사되며, 적용할 텍스트를 드래그한 뒤 다시 Alt + C를 누르면 즉시 복제 적용됩니다.',
    shortcutBadge: ['Alt', 'C']
  },
  {
    id: 'q8',
    question: '표(셀) 내부에서 둘째 줄 이하를 깔끔하게 정렬하기 위한 [빠른 내어쓰기] 단축키는?',
    options: [
      'Shift + Tab',
      'Ctrl + Tab',
      'Ctrl + Shift + Tab',
      'Alt + Tab'
    ],
    correctIndex: 2,
    explanation: '일반 본문에서는 Shift + Tab이지만, 표 내부에서 그냥 Shift+Tab을 누르면 이전 셀로 커서가 이동하므로 반드시 Ctrl + Shift + Tab을 눌러야 합니다.',
    shortcutBadge: ['Ctrl', 'Shift', 'Tab']
  },
  {
    id: 'q9',
    question: '표의 셀 안에서 긴 텍스트 입력 시 줄바꿈 없이 자간을 자동 축소하여 1줄로 유지해주는 표 속성은?',
    options: [
      '셀 크기 고정',
      '한 줄로 입력',
      '글자처럼 취급',
      '자동 줄 바꿈'
    ],
    correctIndex: 1,
    explanation: '표/셀 속성(P)의 [셀] 탭에서 [한 줄로 입력]을 체크하면 긴 단어나 부서명을 입력해도 자동으로 자간을 줄여 1줄 안에 들어가게 해줍니다.',
    shortcutBadge: ['한 줄로 입력']
  },
  {
    id: 'q10',
    question: '글자를 블록 지정한 후 마우스 없이 글자색을 [빨강색]으로 즉시 변경하는 단축키 콤보는?',
    options: [
      'Ctrl + R',
      'Alt + R',
      'Ctrl + M, R',
      'Shift + R'
    ],
    correctIndex: 2,
    explanation: 'Ctrl을 누른 채로 M을 누르고 R을 누르면 즉시 빨간색 글자색으로 변경됩니다. (파랑: Ctrl+M,B / 검정: Ctrl+M,K)',
    shortcutBadge: ['Ctrl + M, R']
  }
];
