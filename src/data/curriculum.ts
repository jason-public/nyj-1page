import { CurriculumSection } from '../types';

export const CURRICULUM_SECTIONS: CurriculumSection[] = [
  {
    id: 'intro',
    title: '개요: 왜 보고서를 1페이지로 만들어야 하는가?',
    subtitle: '회사 및 공공기관 실무에서 1페이지 원칙의 중요성',
    iconName: 'FileText',
    badge: '필독 노하우',
    overview: `회사에서 각종 보고서를 작성하다 보면 애매하게 1페이지를 넘어가는 경우가 많아, 이를 한 페이지로 줄여야 할 때가 있습니다.

특히 공공기관으로 공문을 보낸다거나, 각종 프로모션 안내문이라던가 2페이지가 되는 순간 결재선이 복잡해지고 소요 인쇄/발송 비용이 증가하는 등의 문제로 한 페이지로 줄일 방법을 찾게 되는 경우가 꽤 많습니다.

이러한 문제 상황 때마다 선배들과 팀장님들로부터 전수받은 핵심 비법들을 체계적으로 학습해 보세요!`,
    keyPoints: [
      '결재권자의 시선 집중: 한눈에 핵심을 파악할 수 있어 의사결정 속도가 2배 빨라집니다.',
      '인쇄 및 발송 비용 절감: 양면 인쇄나 2장 인쇄로 인한 불필요한 예산 낭비를 방지합니다.',
      '가독성 균형 유지: 무작정 폰트 크기만 줄이면 가독성을 해치므로 자간, 장평, 줄간격, 표 여백의 복합 조절이 핵심입니다.'
    ],
    shortcuts: [
      {
        label: '글자 모양 대화상자',
        keys: ['Alt', 'L'],
        description: '자간, 장평, 글자 크기, 글꼴을 수치로 정밀하게 조절',
        mnemonic: 'L = Letter (글자 모양)'
      },
      {
        label: '문단 모양 대화상자',
        keys: ['Alt', 'T'],
        description: '줄 간격, 문단 여백, 들여쓰기 정밀 설정',
        mnemonic: 'T = Typography (문단 모양)'
      },
      {
        label: '표/셀 속성 대화상자',
        keys: ['P'],
        description: '셀 내부 안여백(위/아래 여백 0.5mm 설정) 접근',
        mnemonic: 'P = Property (속성)'
      }
    ],
    images: [
      {
        src: '/images/spacing_scale_compare.png',
        alt: '자간, 장평 조절 종합 비교',
        caption: '자간(Letter Spacing)과 장평(Horizontal Scale) 조절을 통한 2줄 문장 1줄 압축 예시'
      }
    ]
  },
  {
    id: 'letter-spacing',
    title: '1. 자간(Letter Spacing) 조절 마스터',
    subtitle: '글자와 글자 사이의 간격을 줄여 2줄을 1줄로 압축하기',
    iconName: 'Minimize2',
    badge: '단축키: Alt+Shift+N/W',
    overview: `문자의 간격(자간)을 좁혀서 문단 끝에 애매하게 1~2글자만 다음 줄로 넘어간 경우, 이를 완벽하게 이전 줄로 당겨 올리는 가장 안전하고 시각적인 왜곡이 적은 방법입니다.`,
    keyPoints: [
      '기능 소개: 문자와 문자 사이의 빈 간격(Tracking)을 줄이는 기능입니다.',
      '효과: -1% ~ -5% 정도의 미세한 자간 축소만으로도 다음 줄로 밀려난 단어를 윗줄로 깔끔하게 당겨올 수 있습니다.',
      '단축키 암기 비법: N은 Narrow(좁게), W는 Wide(넓게)의 약어입니다.'
    ],
    shortcuts: [
      {
        label: '자간 줄이기 (Narrow)',
        keys: ['Alt', 'Shift', 'N'],
        description: '선택한 영역의 글자 간격을 1%씩 좁힙니다.',
        mnemonic: 'N = Narrow (좁게)'
      },
      {
        label: '자간 늘리기 (Wide)',
        keys: ['Alt', 'Shift', 'W'],
        description: '선택한 영역의 글자 간격을 1%씩 넓힙니다.',
        mnemonic: 'W = Wide (넓게)'
      },
      {
        label: '글자모양 대화창 호출',
        keys: ['Alt', 'L'],
        description: '자간 수치를 직접 숫자로 정확하게 지정할 때 사용합니다.'
      }
    ],
    dialogAccess: {
      mouse: '조절할 영역 드래그 → 우클릭 → 글자 모양(L)',
      shortcut: ['Alt', 'L'],
      purpose: '자간/장평을 정확한 수치(예: 자간 -5%)로 일괄 통일시킬 때 필요'
    },
    warnings: [
      '⚠️ 주의사항: 자간을 너무 많이 줄이면(-10% 이하) 글자끼리 서로 겹쳐서 가독성이 급격히 저하됩니다.',
      '실무 권장 자간 범위: -3% ~ -7% 사이가 가장 자연스럽고 읽기 편합니다.'
    ],
    proTips: [
      '💡 프로 팁: 문장 전체를 줄이기보다 줄바꿈이 일어나는 특정 문단만 블록 지정한 뒤 Alt+Shift+N을 3~4회 연타하세요!'
    ],
    images: [
      {
        src: '/images/letter_spacing.png',
        alt: '자간만 줄인 글씨 비교',
        caption: '자간(Letter Spacing)만 줄였을 때 글자 폭은 유지되면서 사이 간격만 좁혀진 모습'
      }
    ],
    simulatorPreset: {
      tracking: -5,
      scale: 100,
      lineHeight: 160,
      fontSize: 10,
      tableMarginY: 2.0,
      hasEmptyTableLines: false,
      sampleText: '애매하게 다음 줄로 한 단어만 넘어가는 현상을 자간 줄이기(Alt+Shift+N)로 즉시 해결할 수 있습니다.'
    }
  },
  {
    id: 'scale-width',
    title: '2. 장평(Horizontal Scale) 조절 마스터',
    subtitle: '글자의 가로 너비(폭)를 줄여 공간 대폭 절약하기',
    iconName: 'Scaling',
    badge: '단축키: Alt+Shift+J/K',
    overview: `장평은 글자의 높이(세로 크기)는 그대로 유지하면서 글자의 좌우 너비(가로 비율)만 줄이거나 늘리는 기능입니다. 자간 조절과 함께 사용할 때 최고의 압축 시너지를 발휘합니다.`,
    keyPoints: [
      '기능 소개: 문자의 좌우 너비 비율(기본값 100%)을 조절하는 기능입니다.',
      '효과: 장평을 95%~97% 수준으로 미세하게 줄이면 육안으로는 글씨 왜곡을 거의 눈치채지 못하면서도 문서 길이를 획기적으로 줄일 수 있습니다.',
      '단축키 암기 비법: J는 작게(줄이기), K는 크게(늘리기)로 기억하세요.'
    ],
    shortcuts: [
      {
        label: '장평 줄이기 (작게)',
        keys: ['Alt', 'Shift', 'J'],
        description: '선택한 영역의 글자 가로 폭을 1%씩 줄입니다.',
        mnemonic: 'J = 작게 (축소)'
      },
      {
        label: '장평 늘리기 (크게)',
        keys: ['Alt', 'Shift', 'K'],
        description: '선택한 영역의 글자 가로 폭을 1%씩 늘립니다.',
        mnemonic: 'K = 크게 (확대)'
      },
      {
        label: '글자모양 대화창',
        keys: ['Alt', 'L'],
        description: '기본 장평(100%)을 95% 또는 90%로 정밀 입력할 때 사용'
      }
    ],
    dialogAccess: {
      mouse: '조절할 영역 드래그 → 우클릭 → 글자 모양',
      shortcut: ['Alt', 'L'],
      purpose: '장평 95% 통일 등 문서 전체 일관성 부여'
    },
    warnings: [
      '⚠️ 주의사항: 너무 과도하게 줄이면(85% 미만) 글자가 홀쭉해져서 찌그러진 느낌을 주어 문서의 완성도를 해칩니다.',
      '실무 권장 황금 장평: 93% ~ 97%가 가장 이상적인 슬림 비율입니다.'
    ],
    proTips: [
      '💡 황금 조합: 자간 -4% + 장평 95%를 조합하면 본문 3~4줄의 문단이 무조건 1줄 이상 압축됩니다!'
    ],
    images: [
      {
        src: '/images/scale_width.png',
        alt: '장평만 줄인 글씨 비교',
        caption: '장평(Character Width)만 줄였을 때 글자 모양의 세로 비율은 유지되고 좌우 폭만 슬림해진 모습'
      }
    ],
    simulatorPreset: {
      tracking: 0,
      scale: 95,
      lineHeight: 160,
      fontSize: 10,
      tableMarginY: 2.0,
      hasEmptyTableLines: false,
      sampleText: '글자의 좌우 비율인 장평을 95%로 조절하여 가독성을 해치지 않고 효율적으로 공간을 확보합니다.'
    }
  },
  {
    id: 'font-size',
    title: '3. 글씨 크기 조절 시 주의점과 단축키',
    subtitle: '크기 조절은 최후의 수단! 단축키와 실무 권장 가이드',
    iconName: 'Type',
    badge: '단축키: Alt+Shift+R/E',
    overview: `글씨 크기를 줄이면 분량을 가장 빠르게 줄일 수 있지만, 문서의 위계 구조와 인쇄 시 가독성을 해치므로 남용하는 것은 권장하지 않습니다. 먼저 자간/장평과 줄간격을 조절한 후 미세 조정으로 사용하는 것이 좋습니다.`,
    keyPoints: [
      '실무 조언: 폰트 크기 변경은 모양을 해치고 가독성이 떨어지므로 1차 선택으로는 권장하지 않습니다.',
      '가급적 자간/장평을 먼저 조절하고, 본문 폰트 크기는 9.5pt ~ 10pt 선을 지키는 것이 좋습니다.',
      '단축키 암기 비법: R은 Reduce(작게), E는 Expand/Enlarge(크게)의 약어로 외우면 쉽습니다.'
    ],
    shortcuts: [
      {
        label: '글씨 작게 (Reduce)',
        keys: ['Alt', 'Shift', 'R'],
        description: '글자 크기를 1pt 또는 0.5pt씩 줄입니다.',
        mnemonic: 'R = Reduce (축소)'
      },
      {
        label: '글씨 크게 (Expand)',
        keys: ['Alt', 'Shift', 'E'],
        description: '글자 크기를 1pt 또는 0.5pt씩 키웁니다.',
        mnemonic: 'E = Enlarge/Expand (확대)'
      }
    ],
    warnings: [
      '⚠️ 본문 최소 글자 크기: 9pt 이하로 내려가면 출력물에서 고령자나 결재권자가 읽기 힘들어집니다.'
    ],
    proTips: [
      '💡 표 안의 참고 내용이나 주석(* 표시 등)만 선별하여 8.5pt~9pt로 낮추면 본문 품격을 유지하면서 공간을 절약할 수 있습니다.'
    ],
    images: []
  },
  {
    id: 'line-spacing',
    title: '4. 줄 간격(Line Spacing) 최적화 노하우',
    subtitle: '페이지당 입력 가능한 줄 수를 비약적으로 늘리기',
    iconName: 'AlignJustify',
    badge: '단축키: Ctrl+Shift+Q/W',
    overview: `한글(HWP)의 기본 줄 간격은 보통 160%로 설정되어 있습니다. 이를 140%~150% 수준으로 줄여주면 한 페이지에 담을 수 있는 총 줄 수가 4~6줄 이상 대폭 증가합니다.`,
    keyPoints: [
      '기능 소개: 윗줄과 아랫줄 사이의 행간 여백을 축소하는 기능입니다.',
      '효과: 문서 전체의 줄 간격을 160%에서 145%~150%로만 조절해도 2페이지로 넘어간 내용 전체가 1페이지 안으로 쏙 들어옵니다.',
      '단축키 암기 비법: Q는 좁게(Quick/Quarter), W는 넓게(Wide)로 기억하세요.'
    ],
    shortcuts: [
      {
        label: '줄 간격 좁게 (Q)',
        keys: ['Ctrl', 'Shift', 'Q'],
        description: '선택한 문단의 줄 간격을 10%씩 좁힙니다.',
        mnemonic: 'Q = 좁게 (줄이기)'
      },
      {
        label: '줄 간격 넓게 (W)',
        keys: ['Ctrl', 'Shift', 'W'],
        description: '선택한 문단의 줄 간격을 10%씩 넓힙니다.',
        mnemonic: 'W = 넓게 (늘리기)'
      },
      {
        label: '문단 모양 대화상자',
        keys: ['Alt', 'T'],
        description: '줄 간격을 145%, 150% 등 정확한 퍼센트로 입력'
      }
    ],
    dialogAccess: {
      mouse: '조절할 영역 드래그 → 서식 툴바 줄간격 드롭다운 또는 우클릭 → 문단 모양',
      shortcut: ['Alt', 'T'],
      purpose: '줄 간격 및 문단 위/아래 여백 세부 조절'
    },
    proTips: [
      '💡 마법의 비기 (마지막 줄 팁): 문서 맨 마지막 줄(또는 마지막 빈 줄)이 애매하게 다음 페이지 첫 줄로 넘어갈 때, 그 마지막 줄만 블록 지정 후 줄 간격을 "0%" 또는 "50%"로 설정해 보세요! 바로 윗 페이지 하단에 완벽하게 흡수됩니다.'
    ],
    images: [
      {
        src: '/images/line_height_compare.png',
        alt: '줄 간격 줄이기 전, 후 비교',
        caption: '줄 간격 160%에서 130%로 축소 시 페이지 여백 확보 비교'
      },
      {
        src: '/images/line_height_menu.png',
        alt: '줄간격 수정 툴바 메뉴',
        caption: '한글 상단 서식 툴바에서 160% → 140% 등으로 즉시 변경하는 메뉴'
      }
    ],
    simulatorPreset: {
      tracking: 0,
      scale: 100,
      lineHeight: 140,
      fontSize: 10,
      tableMarginY: 2.0,
      hasEmptyTableLines: false,
      sampleText: '줄 간격을 160%에서 140%로 최적화하여 1페이지 내에 모든 보고서 항목을 완벽하게 배치합니다.'
    }
  },
  {
    id: 'table-padding',
    title: '5. 표(Table) 여백 제거 및 셀 안여백 압축',
    subtitle: '부풀어 오른 표의 숨은 빈칸과 셀 안여백 0.5mm 초기화 비법',
    iconName: 'Table',
    badge: '단축키: P (표/셀 속성)',
    overview: `보고서에서 표가 차지하는 공간은 생각보다 거대합니다. 특히 표 안의 불필요한 엔터 줄바꿈과 기본 셀 안여백(위/아래 여백) 때문에 표가 불필요하게 커져서 페이지가 넘어가는 주원인이 됩니다.`,
    keyPoints: [
      '1단계 - 빈칸(엔터) 제거: 표 맨 윗줄이나 아랫줄에 사용자가 실수로 친 엔터 줄바꿈이 있는지 확인하고 삭제합니다. 같은 줄의 다른 셀에 숨겨진 엔터도 모두 지워야 표 높이가 줄어듭니다.',
      '2단계 - 셀 내부 안여백 초기화: 글자 크기가 아무리 작아도 "안여백"이 기본값(약 2mm~3mm)으로 잡혀 있으면 표는 절대 줄어들지 않습니다.',
      '3단계 - 위/아래 여백 0.5mm 설정: 셀 속성에서 위/아래 여백을 0.5mm 또는 0mm로 설정하면 표 높이가 30~50% 이상 즉시 압축됩니다.'
    ],
    shortcuts: [
      {
        label: '표/셀 속성 대화상자 호출',
        keys: ['P'],
        description: '표 또는 셀을 선택한 상태에서 단축키 P를 누르면 즉시 표/셀 속성창이 뜹니다.',
        mnemonic: 'P = Property (표/셀 속성)'
      },
      {
        label: '셀 블록 지정',
        keys: ['F5'],
        description: '표 안에서 F5를 누르면 해당 셀이 블록 지정됩니다 (F5 세 번 누르면 표 전체 블록).'
      }
    ],
    dialogAccess: {
      mouse: '해당 셀 누른 후 → 우클릭 → 표/셀 속성',
      shortcut: ['P'],
      purpose: '셀 탭 → 안여백(위쪽, 아래쪽)을 0.5mm로 일괄 수정'
    },
    warnings: [
      '⚠️ 핵심 주의사항: 글자의 크기가 아무리 작아도 "안여백"이 존재하면 표는 일정 수준 이상 절대 작아지지 않습니다!'
    ],
    proTips: [
      '💡 표 전체 셀 선택 팁: 표 안에서 F5 키를 3번 연타하면 표의 모든 셀이 한 번에 선택됩니다. 이 상태에서 P 키를 누르고 위/아래 여백을 0.5mm로 통일하세요!'
    ],
    images: [
      {
        src: '/images/table_empty_lines.png',
        alt: '표 빈칸 제거 전후 비교',
        caption: '표 내부의 불필요한 엔터(줄바꿈) 제거 전과 후의 높이 비교'
      },
      {
        src: '/images/table_cell_padding.png',
        alt: '셀 내부 여백 지정 대화상자',
        caption: '표/셀 속성(P) 대화상자에서 셀 안 여백(위쪽/아래쪽 0.5mm) 설정 화면'
      }
    ],
    simulatorPreset: {
      tracking: -2,
      scale: 96,
      lineHeight: 140,
      fontSize: 10,
      tableMarginY: 0.5,
      hasEmptyTableLines: false,
      sampleText: '표 내부 불필요한 엔터를 제거하고 안여백을 0.5mm로 설정하여 컴팩트한 완성형 표를 만듭니다.'
    }
  },
  {
    id: 'summary-checklist',
    title: '6. 보고서 1페이지 압축 실전 5단계 체크리스트',
    subtitle: '실무자가 결재 올리기 전 30초 만에 확인하는 황금 루틴',
    iconName: 'CheckCircle2',
    badge: '실무 치트시트',
    overview: `보고서가 2페이지로 넘어갔을 때 다음 5단계 순서대로 진행하면 99%의 문서를 가독성 손상 없이 완벽한 1페이지로 압축할 수 있습니다.`,
    keyPoints: [
      '1단계 [표 빈 줄 검사]: 표 내부에 의미 없는 엔터(줄바꿈)가 있는지 확인하고 삭제',
      '2단계 [표 안여백 압축]: 표 전체 선택(F5×3) 후 P 키 → 위/아래 안여백 0.5mm로 설정',
      '3단계 [줄 간격 최적화]: 본문 전체 블록 지정 후 Ctrl+Shift+Q로 140~150% 조절',
      '4단계 [끝 단어 자간 조절]: 1~2글자만 삐져나온 문단 선택 후 Alt+Shift+N으로 당기기',
      '5단계 [마지막 줄 매직 0%]: 그래도 1줄이 넘친다면 마지막 줄만 줄간격 0%로 강제 흡수'
    ],
    shortcuts: [
      {
        label: '1단계: 표 속성',
        keys: ['P'],
        description: '위/아래 안여백 0.5mm 설정'
      },
      {
        label: '2단계: 줄 간격 축소',
        keys: ['Ctrl', 'Shift', 'Q'],
        description: '160% → 140~150%'
      },
      {
        label: '3단계: 자간 축소',
        keys: ['Alt', 'Shift', 'N'],
        description: '삐져나온 단어 윗줄로 당기기'
      },
      {
        label: '4단계: 장평 슬림화',
        keys: ['Alt', 'Shift', 'J'],
        description: '95% 수준으로 날씬하게 조절'
      }
    ],
    images: []
  }
];
