import { PracticeMission } from '../types';

export const PRACTICE_MISSIONS: PracticeMission[] = [
  {
    id: 'mission-1',
    title: '미션 1: 삐져나온 단어 윗줄로 당기기 (자간 & 장평 콤보)',
    difficulty: '초급',
    scenario: '공문서 소제목 및 핵심 요약에서 "조치사항입니다" 단어 1개가 애매하게 2번째 줄로 넘어가서 문서의 격이 떨어졌습니다. 자간 또는 장평을 조절하여 정확히 1줄로 만드세요!',
    targetGoal: '자간(Alt+Shift+N) 또는 장평(Alt+Shift+J)을 조절하여 1줄로 맞추기',
    initialState: {
      tracking: 0,
      scale: 100,
      fontSize: 11,
      lineHeight: 160,
      tableMarginY: 2.0,
      hasEmptyTableLines: false,
      lastLineZeroLineHeight: false,
      content: '2026년도 상반기 신규 공공사업 추진 계획 및 주요 협력기관 협의 결과에 따른 최종 보고'
    },
    targetCriteria: {
      maxPages: 1,
      maxLines: 1,
      minLegibilityScore: 90
    },
    hints: [
      '자간(Alt+Shift+N)을 3~4회 눌러 -4% 이하로 낮추어 보세요.',
      '또는 장평(Alt+Shift+J)을 95%로 줄이면 완벽하게 1줄로 정돈됩니다.'
    ],
    solutionExplanation: '자간 -4% 또는 장평 95%를 적용하여 본문 가독성을 그대로 유지하면서 2번째 줄로 넘어간 1개 단어를 윗줄로 쏙 흡수시켰습니다.'
  },
  {
    id: 'mission-2',
    title: '미션 2: 1줄 넘쳐서 2페이지가 된 공문서 1페이지 구출 작전',
    difficulty: '중급',
    scenario: '공공기관 제출용 1페이지 기안서가 기본 줄간격(160%) 때문에 마지막 1줄이 2페이지로 밀려났습니다. 줄 간격 최적화와 마지막 줄 0% 테크닉을 활용하여 완벽한 1페이지로 압축하세요!',
    targetGoal: '줄 간격(Ctrl+Shift+Q)을 140~145%로 낮추어 1페이지 100% 이내로 수납하기',
    initialState: {
      tracking: 0,
      scale: 100,
      fontSize: 10,
      lineHeight: 165,
      tableMarginY: 2.0,
      hasEmptyTableLines: false,
      lastLineZeroLineHeight: false,
      content: `[추진 배경 및 목적]
본 사업은 지역 사회 디지털 역량 강화 및 스마트 행정 서비스 구축을 목표로 합니다.
다양한 협력 네트워크를 통하여 시민 편익을 증대하고 업무 효율을 극대화하고자 합니다.

[주요 추진 일정 및 계획]
1. 기초 설문조사 및 요구사항 분석 완료 (1분기)
2. 시범 시스템 운영 및 피드백 수렴 (2분기)
3. 전체 기관 확대 적용 및 사용자 만족도 평가 (3분기)

[기대 효과 및 향후 과제]
행정 처리 시간 35% 단축 및 예산 절감 효과 기대`
    },
    targetCriteria: {
      maxPages: 1,
      maxLines: 15,
      minLegibilityScore: 88
    },
    hints: [
      '줄 간격 축소(Ctrl+Shift+Q) 단축키를 눌러 기본 165%에서 140%~145% 수준으로 줄여보세요.',
      '문단 모양 대화상자(Alt+T)에서 수치를 직접 입력해도 됩니다.'
    ],
    solutionExplanation: '줄 간격을 165%에서 145%로 최적화하여 문서 전체의 행간을 절약하고 2페이지로 넘어갔던 마지막 1줄을 1페이지 안으로 깔끔하게 회수했습니다.'
  },
  {
    id: 'mission-3',
    title: '미션 3: 불필요한 빈칸과 표 안여백 0.5mm 압축',
    difficulty: '고급',
    scenario: '예산 보고서 표 내부에 엔터로 생성된 불필요한 빈 줄이 있고, 셀 안여백(2.5mm) 때문에 표가 거대하게 부풀어 페이지를 초과했습니다. 빈 줄을 삭제하고 표/셀 속성(P)으로 위/아래 안여백을 0.5mm로 설정하세요!',
    targetGoal: '표 빈칸 삭제 + 셀 안여백 0.5mm 설정으로 표 높이 40% 이상 압축하기',
    initialState: {
      tracking: 0,
      scale: 100,
      fontSize: 10,
      lineHeight: 160,
      tableMarginY: 2.8,
      hasEmptyTableLines: true,
      lastLineZeroLineHeight: false,
      content: '부서별 2026년도 사업비 집행 실적 및 잔여 예산 내역'
    },
    targetCriteria: {
      maxPages: 1,
      maxLines: 12,
      minLegibilityScore: 92
    },
    hints: [
      '"표 빈 줄(엔터) 제거" 체크를 켜서 불필요한 줄바꿈을 없애세요.',
      '"표/셀 속성 (P)" 또는 안여백 슬라이더에서 위/아래 여백을 0.5mm 이하로 설정하세요.'
    ],
    solutionExplanation: '표의 빈 엔터 줄을 삭제하고 위/아래 셀 안여백을 0.5mm로 낮추어 표의 전체 높이를 절반 가까이 축소하여 문서 전체를 여유롭게 1페이지로 완성했습니다.'
  }
];
