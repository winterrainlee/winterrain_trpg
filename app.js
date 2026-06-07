const pcProfiles = [
  {
    summary: "하루 - 동네 빵집 견습 / 손재주와 성실함 / 부탁을 거절하지 못함",
    name: "하루",
    gender: "여성",
    age: "19세",
    role: "동네 빵집 견습",
    background:
      "하루는 바닷가 작은 마을의 빵집에서 새벽 반죽과 배달을 돕는다. 마을 사람들의 입맛과 표정을 잘 기억하지만, 누군가 곤란하다고 말하면 자기 일정을 쉽게 뒤로 미룬다.",
    fields: [
      ["말투", "밝은 해요체. 바쁘면 문장이 짧아지고 손이 먼저 움직인다."],
      ["가치관", "작은 약속을 지키면 하루가 조금 덜 무너진다."],
      ["강점", "손재주, 성실함"],
      ["결함", "부탁을 거절하지 못함"],
    ],
    strongAbilities: ["DEX", "CON"],
    flawAbilities: ["CHA"],
    abilities: [
      ["STR 힘", "10", "+0"],
      ["DEX 민첩", "14", "+2"],
      ["CON 체력", "13", "+1"],
      ["INT 지능", "11", "+0"],
      ["WIS 통찰", "12", "+1"],
      ["CHA 매력", "10", "+0"],
    ],
    status: [
      ["건강", "72", "긴 아침 배달도 버틸 수 있음"],
      ["피로", "9", "새벽 일을 마쳤지만 아직 움직일 힘이 있음"],
      ["사기", "64", "마을 축제를 무사히 열고 싶어 함"],
    ],
    playerState: { hp: 72, fatigue: 9, morale: 64 },
    goals: [
      ["장기 목표", "마을 여름 축제를 무사히 열고 모두가 웃는 하루를 만든다"],
      ["단기 목표", "사라진 축제 안내판을 찾아 첫 배달 동선을 정리한다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["도겸", "빵집 사장", "든든한 어른 / 걱정", "투박하지만 다정한 반말", "12"],
      ["나리", "축제 준비 담당", "마찰 / 일정 압박", "빠르고 또렷한 해요체", "-6"],
      ["윤호", "항구 관리인", "정보통 / 장난", "느긋한 반말 섞인 말투", "4"],
    ],
    prologueMeta: {
      sceneTitle: "비어 있는 안내판 자리",
      date: "여름 축제 전날",
      time: "이른 아침",
      place: "솔비마을 빵집 앞 골목",
    },
    prologue:
      "이른 아침, 하루는 갓 구운 빵 상자를 들고 빵집 문을 나선다. 축제 안내판이 있어야 할 골목 입구는 텅 비어 있고, 바닥에는 누군가 급히 끌고 간 듯한 나무 자국이 남아 있다.",
  },
  {
    summary: "민서 - 마을 도서관 봉사자 / 기억력과 친화력 / 걱정이 많음",
    name: "민서",
    gender: "여성",
    age: "27세",
    role: "마을 도서관 봉사자",
    background:
      "민서는 오래된 도서관에서 반납 기록과 동네 소식 게시판을 챙긴다. 사람들의 취향과 지난 대화를 잘 기억하지만, 일이 꼬이면 먼저 최악의 경우를 떠올린다.",
    fields: [
      ["말투", "차분한 해요체. 불안할수록 확인 질문이 많아진다."],
      ["가치관", "기록은 사람을 묶어두기보다 다시 만나게 해준다."],
      ["강점", "기억력, 친화력"],
      ["결함", "걱정이 많음"],
    ],
    strongAbilities: ["INT", "CHA"],
    flawAbilities: ["CON"],
    abilities: [
      ["STR 힘", "9", "-1"],
      ["DEX 민첩", "11", "+0"],
      ["CON 체력", "10", "+0"],
      ["INT 지능", "15", "+2"],
      ["WIS 통찰", "12", "+1"],
      ["CHA 매력", "14", "+2"],
    ],
    status: [
      ["건강", "68", "큰 문제는 없지만 체력이 높지는 않음"],
      ["피로", "11", "자료 정리로 조금 지쳐 있음"],
      ["사기", "61", "걱정은 있지만 사람들을 돕고 싶어 함"],
    ],
    playerState: { hp: 68, fatigue: 11, morale: 61 },
    goals: [
      ["장기 목표", "흩어진 축제 준비 기록을 모아 마을 사람들이 서로 도울 수 있게 한다"],
      ["단기 목표", "도서관 게시판에서 사라진 일정표의 마지막 위치를 확인한다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["소라", "초등학생 독서회원", "작은 조력자 / 호기심", "빠른 반말", "10"],
      ["나리", "축제 준비 담당", "일정 공유자 / 압박", "빠르고 또렷한 해요체", "6"],
      ["태준", "헌책방 주인", "마찰 / 자료 보류", "느린 존댓말", "-6"],
    ],
    prologueMeta: {
      sceneTitle: "비어 있는 게시판",
      date: "여름 축제 전날",
      time: "오전 열 시",
      place: "솔비마을 도서관 로비",
    },
    prologue:
      "오전 열 시, 민서는 도서관 로비 게시판 앞에서 멈춘다. 축제 일정표가 사라진 자리에는 압정 네 개만 남아 있고, 반납함 위에는 누군가 두고 간 젖은 지도 조각이 놓여 있다.",
  },
  {
    summary: "도윤 - 자전거 배달원 / 기동력과 눈썰미 / 성급함",
    name: "도윤",
    gender: "남성",
    age: "22세",
    role: "자전거 배달원",
    background:
      "도윤은 마을 안쪽 골목과 항구길을 자전거로 오가며 가게 물건과 축제 준비물을 나른다. 빠른 길을 잘 찾고 작은 변화를 빨리 보지만, 기다리라는 말을 가장 어려워한다.",
    fields: [
      ["말투", "시원한 반말 섞인 해요체. 급하면 말보다 페달이 먼저 나간다."],
      ["가치관", "막힌 길도 돌아가면 결국 어딘가로 이어진다."],
      ["강점", "기동력, 눈썰미"],
      ["결함", "성급함"],
    ],
    strongAbilities: ["DEX", "CHA"],
    flawAbilities: ["WIS"],
    abilities: [
      ["STR 힘", "11", "+0"],
      ["DEX 민첩", "15", "+2"],
      ["CON 체력", "12", "+1"],
      ["INT 지능", "10", "+0"],
      ["WIS 통찰", "11", "+0"],
      ["CHA 매력", "14", "+2"],
    ],
    status: [
      ["건강", "74", "가벼운 넘어짐에는 익숙함"],
      ["피로", "8", "아직 몸이 가볍고 반응이 빠름"],
      ["사기", "66", "서두르고 싶지만 아직 무리하지 않으려 함"],
    ],
    playerState: { hp: 74, fatigue: 8, morale: 66 },
    goals: [
      ["장기 목표", "축제 준비물이 제시간에 제자리로 돌아가게 만든다"],
      ["단기 목표", "사라진 풍등 상자의 배달 경로를 역추적한다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["윤호", "항구 관리인", "길 정보 / 장난", "느긋한 반말", "8"],
      ["미라", "꽃집 주인", "배달 의뢰인 / 신뢰", "상냥하지만 빠른 존댓말", "9"],
      ["재현", "동네 친구", "마찰 / 경쟁심", "짧고 씩씩한 반말", "-6"],
    ],
    prologueMeta: {
      sceneTitle: "끊긴 배달 표식",
      date: "여름 축제 전날",
      time: "늦은 오전",
      place: "솔비마을 항구길 삼거리",
    },
    prologue:
      "도윤은 항구길 삼거리에서 자전거를 멈춘다. 풍등 상자를 표시하던 분필 화살표가 빗물에 반쯤 지워졌고, 길가 벤치 아래에는 배달표 한 장이 접힌 채 끼어 있다.",
  },
  {
    summary: "세아 - 임시 카페 매니저 / 조율력과 침착함 / 혼자 책임지려 함",
    name: "세아",
    gender: "여성",
    age: "34세",
    role: "임시 카페 매니저",
    background:
      "세아는 축제 기간 동안 빈 점포를 빌려 임시 카페를 맡았다. 사람과 물건의 흐름을 차분히 정리하지만, 문제가 생기면 도움을 청하기보다 자기 손으로 끝내려 한다.",
    fields: [
      ["말투", "단정한 해요체. 결정할 때는 짧고 분명해진다."],
      ["가치관", "좋은 자리는 혼자 만드는 게 아니라 사람들이 머물 수 있게 여는 것이다."],
      ["강점", "조율력, 침착함"],
      ["결함", "혼자 책임지려 함"],
    ],
    strongAbilities: ["WIS", "CHA"],
    flawAbilities: ["STR"],
    abilities: [
      ["STR 힘", "8", "-1"],
      ["DEX 민첩", "11", "+0"],
      ["CON 체력", "12", "+1"],
      ["INT 지능", "13", "+1"],
      ["WIS 통찰", "14", "+2"],
      ["CHA 매력", "15", "+2"],
    ],
    status: [
      ["건강", "70", "무리하지 않으면 안정적임"],
      ["피로", "13", "준비 막바지라 어깨가 무거움"],
      ["사기", "63", "손님을 맞을 준비를 끝내고 싶어 함"],
    ],
    playerState: { hp: 70, fatigue: 13, morale: 63 },
    goals: [
      ["장기 목표", "임시 카페를 마을 사람들이 쉬어갈 수 있는 축제 거점으로 만든다"],
      ["단기 목표", "없어진 컵 상자와 좌석 배치표를 찾아 개장 준비를 맞춘다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["도겸", "빵집 사장", "재료 공급자 / 신뢰", "투박하지만 다정한 반말", "10"],
      ["하루", "빵집 견습", "배달 협력자 / 걱정", "밝은 해요체", "7"],
      ["은채", "공방 주인", "마찰 / 일정 충돌", "느긋한 존댓말", "-7"],
    ],
    prologueMeta: {
      sceneTitle: "쌓이지 않은 컵",
      date: "여름 축제 전날",
      time: "오후 두 시",
      place: "솔비마을 임시 카페",
    },
    prologue:
      "오후 두 시, 세아는 임시 카페의 빈 선반 앞에서 발걸음을 멈춘다. 컵 상자는 도착하지 않았고, 테이블 위 좌석 배치표에는 누군가 연필로 새 동선을 그려 두었다.",
  },
  {
    summary: "준 - 등대지기 손자 / 관찰력과 책임감 / 혼자 앞서 나감",
    name: "준",
    gender: "남성",
    age: "16세",
    role: "등대지기 손자",
    background:
      "준은 할아버지를 도와 등대 주변 길과 날씨를 살핀다. 바다와 하늘의 작은 변화를 잘 알아차리지만, 자신이 먼저 해결해야 한다고 믿어 어른들에게 늦게 말하는 편이다.",
    fields: [
      ["말투", "짧은 반말 섞인 해요체. 중요한 걸 보면 목소리가 낮아진다."],
      ["가치관", "불빛은 멀리 있는 사람에게도 길을 알려줄 수 있다."],
      ["강점", "관찰력, 책임감"],
      ["결함", "혼자 앞서 나감"],
    ],
    strongAbilities: ["DEX", "WIS"],
    flawAbilities: ["CHA"],
    abilities: [
      ["STR 힘", "10", "+0"],
      ["DEX 민첩", "14", "+2"],
      ["CON 체력", "12", "+1"],
      ["INT 지능", "11", "+0"],
      ["WIS 통찰", "15", "+2"],
      ["CHA 매력", "9", "-1"],
    ],
    status: [
      ["건강", "71", "등대 계단을 오르내리는 데 익숙함"],
      ["피로", "10", "밤바람을 맞아 조금 졸리지만 버틸 수 있음"],
      ["사기", "60", "축제 불빛을 꼭 지키고 싶어 함"],
    ],
    playerState: { hp: 71, fatigue: 10, morale: 60 },
    goals: [
      ["장기 목표", "밤 축제의 등대 불빛과 바닷길 안전을 지킨다"],
      ["단기 목표", "사라진 예비 렌즈 상자를 찾아 등대 점검을 끝낸다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["광수", "등대지기", "할아버지 / 신뢰", "느리고 단단한 반말", "14"],
      ["윤호", "항구 관리인", "마찰 / 규정 우선", "느긋한 반말", "-5"],
      ["소라", "초등학생 독서회원", "동생 같은 이웃 / 호기심", "빠른 반말", "4"],
    ],
    prologueMeta: {
      sceneTitle: "흔들리는 등대 창고",
      date: "여름 축제 전날",
      time: "해질녘",
      place: "솔비마을 등대 창고",
    },
    prologue:
      "해질녘, 준은 등대 창고 문이 바람에 흔들리는 소리를 듣는다. 예비 렌즈 상자가 있어야 할 선반은 비어 있고, 창고 바닥에는 젖은 밧줄 끝이 바깥쪽으로 이어져 있다.",
  },
];

const abilityDefinitions = [
  ["STR", "STR 힘"],
  ["DEX", "DEX 민첩"],
  ["CON", "CON 체력"],
  ["INT", "INT 지능"],
  ["WIS", "WIS 통찰"],
  ["CHA", "CHA 매력"],
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function modLabel(mod) {
  return mod > 0 ? `+${mod}` : String(mod);
}

function abilityMod(score) {
  return Math.floor((score - 10) / 2);
}

function sumPositiveMods(mods) {
  return Object.values(mods).reduce((sum, mod) => sum + Math.max(mod, 0), 0);
}

function sumNegativeMods(mods) {
  return Object.values(mods).reduce((sum, mod) => sum + Math.min(mod, 0), 0);
}

function abilityIds() {
  return abilityDefinitions.map(([id]) => id);
}

function normalizeTaggedAbilities(values) {
  const validIds = new Set(abilityIds());
  return [...new Set(values || [])].filter((id) => validIds.has(id)).slice(0, 2);
}

function modsFromScores(scores) {
  return Object.fromEntries(abilityDefinitions.map(([id]) => [id, abilityMod(scores[id])]));
}

function validateAbilityBalance(mods, warnings = [], adjustments = []) {
  const values = Object.values(mods);
  const positiveSum = sumPositiveMods(mods);
  const negativeSum = sumNegativeMods(mods);
  const hasPositive = values.some((mod) => mod > 0);
  const hasNegative = values.some((mod) => mod < 0);

  return {
    hasPositive,
    hasNegative,
    positiveSum,
    negativeSum,
    valid: hasPositive && hasNegative && positiveSum <= 4 && negativeSum >= -4,
    warnings,
    adjustments,
  };
}

function generateAbilities(profile) {
  const strongAbilities = normalizeTaggedAbilities(profile.strongAbilities);
  const flawAbilities = normalizeTaggedAbilities(profile.flawAbilities);
  const strongSet = new Set(strongAbilities);
  const flawSet = new Set(flawAbilities);
  const scores = {};
  const generation = {};

  abilityDefinitions.forEach(([id]) => {
    const hasStrong = strongSet.has(id);
    const hasFlaw = flawSet.has(id);
    const base = randomInt(hasFlaw ? 9 : 8, 12);
    let adjustment = 0;
    let conflictRoll = null;

    if (hasStrong && hasFlaw) {
      conflictRoll = randomInt(1, 6);
      adjustment = conflictRoll >= 4 ? 1 : -1;
    } else if (hasStrong) {
      adjustment = 3;
    } else if (hasFlaw) {
      adjustment = -3;
    }

    scores[id] = base + adjustment;
    generation[id] = {
      base,
      adjustment,
      conflictRoll,
      strong: hasStrong,
      flaw: hasFlaw,
    };
  });

  const protectedIds = new Set([...strongAbilities, ...flawAbilities]);
  const neutralIds = abilityIds().filter((id) => !protectedIds.has(id));
  const adjustments = [];
  const warnings = [];
  let mods = modsFromScores(scores);

  while (sumPositiveMods(mods) > 4) {
    const target = neutralIds
      .filter((id) => mods[id] > 0)
      .sort((left, right) => scores[left] - scores[right] || abilityIds().indexOf(left) - abilityIds().indexOf(right))[0];

    if (!target) {
      warnings.push("양수 보정 합을 더 낮출 중립 능력치가 없습니다.");
      break;
    }

    scores[target] -= 1;
    adjustments.push({ type: "positiveSum", ability: target, delta: -1, score: scores[target] });
    mods = modsFromScores(scores);
  }

  while (sumNegativeMods(mods) < -4) {
    const target = neutralIds
      .filter((id) => mods[id] < 0)
      .sort((left, right) => scores[right] - scores[left] || abilityIds().indexOf(left) - abilityIds().indexOf(right))[0];

    if (!target) {
      warnings.push("음수 보정 합을 더 높일 중립 능력치가 없습니다.");
      break;
    }

    scores[target] += 1;
    adjustments.push({ type: "negativeSum", ability: target, delta: 1, score: scores[target] });
    mods = modsFromScores(scores);
  }

  const balance = validateAbilityBalance(mods, warnings, adjustments);

  if (!balance.hasPositive) {
    balance.warnings.push("양수 보정이 없습니다.");
  }

  if (!balance.hasNegative) {
    balance.warnings.push("음수 보정이 없습니다.");
  }

  balance.valid = balance.hasPositive && balance.hasNegative && balance.positiveSum <= 4 && balance.negativeSum >= -4;

  return {
    abilities: abilityDefinitions.map(([id, label]) => [label, String(scores[id]), modLabel(mods[id])]),
    scores,
    mods,
    balance,
    generation,
    strongAbilities,
    flawAbilities,
  };
}

function buildCharacterDraft(profile) {
  const generated = generateAbilities(profile);
  return {
    kind: "character",
    name: profile.name,
    gender: profile.gender,
    age: profile.age,
    role: profile.role,
    background: profile.background,
    fields: profile.fields,
    goals: profile.goals,
    npcs: profile.npcs,
    abilities: generated.abilities,
    abilityScores: generated.scores,
    mods: generated.mods,
    abilityBalance: generated.balance,
    abilityGeneration: generated.generation,
    strongAbilities: generated.strongAbilities,
    flawAbilities: generated.flawAbilities,
    status: profile.status,
  };
}

function buildPrologueDraft(profile) {
  return {
    kind: "prologue",
    shortTermGoal: profile.goals[1][1],
    ...profile.prologueMeta,
    summary: profile.prologue,
  };
}

const defaultSessionRules = {
  source: ["prompt/Core.md", "prompt/Setup.md", "prompt/StatusView.md"],
  checks: {
    formula: "1D20 + ability.mod >= DC",
    dcRange: { min: 10, max: 22 },
    abilitySource: "player.mods[ability]",
    difficultyMode: "easy",
    easyMode: {
      partialSuccessBias: true,
      preserveSmallWins: true,
      note: "쉬운 난이도에서는 실패해도 작은 성취나 다음 기회가 남고, 비용/시간/관계 부담으로 전환한다.",
    },
    resolutionOrder: ["criticalFailure", "criticalSuccess", "success", "partialSuccess", "failure"],
    resultBandsByDifficulty: {
      쉬움: [
        { key: "criticalSuccess", condition: "natural20 or total >= dc + 5", label: "대성공", effect: "목표 진행, 관계 신뢰, 준비 품질 중 하나를 크게 올린다." },
        { key: "success", condition: "total >= dc", label: "성공", effect: "의도한 행동이 성립하고 장면이 전진한다." },
        { key: "partialSuccess", condition: "dc - 4 <= total < dc", label: "부분 성공", effect: "필요한 진전은 얻되 피로, 시간, 관계, 일정 중 하나의 비용이 생긴다." },
        { key: "failure", condition: "dc - 8 <= total <= dc - 5", label: "실패", effect: "행동은 빗나가지만 세계의 반응과 다음 실마리는 남긴다." },
        { key: "criticalFailure", condition: "natural1 or total <= dc - 9", label: "대실패", effect: "상태 또는 관계에 뚜렷한 불이익을 주되, 일을 완전히 망치지 않고 회복 경로를 남긴다." },
      ],
      보통: [
        { key: "criticalSuccess", condition: "natural20 or total >= dc + 5", label: "대성공", effect: "목표 진행, 준비 품질, NPC 반응 중 하나를 크게 개선한다." },
        { key: "success", condition: "total >= dc", label: "성공", effect: "의도한 행동이 성립하고 장면이 전진한다." },
        { key: "partialSuccess", condition: "dc - 2 <= total < dc", label: "부분 성공", effect: "정보나 진전은 얻지만 분명한 비용이 생긴다." },
        { key: "failure", condition: "dc - 7 <= total <= dc - 3", label: "실패", effect: "행동은 실패하고 피로, 사기, 관계, 시간 중 하나에 불이익이 생긴다." },
        { key: "criticalFailure", condition: "natural1 or total <= dc - 8", label: "대실패", effect: "상태 또는 관계가 크게 악화되고 장면 압력이 상승한다." },
      ],
      어려움: [
        { key: "criticalSuccess", condition: "natural20 and total >= dc or total >= dc + 7", label: "대성공", effect: "위험한 상황을 뚫고 결정적 진전을 얻는다." },
        { key: "success", condition: "total >= dc", label: "성공", effect: "의도한 행동은 성립하지만 장면 압력은 유지될 수 있다." },
        { key: "partialSuccess", condition: "total == dc - 1", label: "부분 성공", effect: "최소한의 진전만 얻고 뚜렷한 비용이 따른다." },
        { key: "failure", condition: "dc - 6 <= total <= dc - 2", label: "실패", effect: "행동은 실패하고 다음 장면의 위험 또는 비용이 커진다." },
        { key: "criticalFailure", condition: "natural1 or total <= dc - 7", label: "대실패", effect: "상태, 관계, 위치, 시간 중 하나가 크게 악화된다." },
      ],
    },
    dcGuidelines: [
      { dc: 10, label: "쉬움", examples: "눈에 띄는 준비물 확인, 우호 NPC에게 기본 질문" },
      { dc: 13, label: "보통", examples: "시간 압박 속 동선 정리, 애매한 부탁 조율" },
      { dc: 16, label: "어려움", examples: "꼬인 동선 정리, 비협조적인 NPC 설득" },
      { dc: 19, label: "매우 어려움", examples: "마감 직전 큰 일정 충돌 해결" },
      { dc: 22, label: "극한", examples: "준비 없는 돌파, 여러 사람의 이해관계 동시 조율" },
    ],
  },
  status: {
    hp: {
      label: "건강",
      range: [0, 100],
      default: 70,
      deathAt: 0,
      bands: [
        { label: "위험", range: [0, 20], modifier: -2, appliesTo: "allChecks", note: "생존이 우선이다. 0이면 자동 사망하고 Ending 모듈로 이동한다." },
        { label: "중상", range: [21, 40], modifier: -1, appliesTo: "physicalChecks", note: "통증과 부상으로 이동, 저항, 힘쓰기가 불리하다." },
        { label: "불편", range: [41, 60], modifier: 0, appliesTo: "fictionOnly", note: "활동은 가능하지만 무리하면 피로와 추가 부상 위험이 커진다." },
        { label: "양호", range: [61, 80], modifier: 0, appliesTo: "allChecks", note: "일상/모험 장면을 안정적으로 수행할 수 있다." },
        { label: "건재", range: [81, 100], modifier: 1, appliesTo: "physicalChecks", note: "몸 상태가 좋아 이동, 버티기, 힘쓰기에 여유가 있다." },
      ],
      rule: "0이 되면 자동 사망하고 Ending 모듈로 이동한다.",
    },
    fatigue: {
      label: "피로",
      range: [0, 20],
      startingRange: [8, 12],
      bands: [
        { label: "상쾌", range: [0, 3], modifier: 1, appliesTo: "allChecks", note: "휴식이 충분해 전 판정에 여유가 있다." },
        { label: "보통", range: [4, 8], modifier: 0, appliesTo: "allChecks", note: "누적 부담이 낮아 별도 보정이 없다." },
        { label: "피곤", range: [9, 13], modifier: 0, appliesTo: "fictionOnly", note: "아직 움직일 수 있지만 장면 비용으로 피로가 쌓이기 쉽다." },
        { label: "탈진 직전", range: [14, 17], modifier: -1, appliesTo: "allChecks", note: "집중과 판단이 흐려져 전 판정이 불리하다." },
        { label: "한계", range: [18, 20], modifier: -2, appliesTo: "allChecks", hardModeTurnEndHpLoss: 5, note: "전 판정이 크게 불리하고 어려움 난이도에서는 턴 종료 시 건강 -5가 발생한다." },
      ],
      recovery: { rest: -3, camp: -6, medicine: -4, food: -1 },
    },
    morale: {
      label: "사기",
      range: [0, 100],
      default: 60,
      startingRange: [50, 70],
      bands: [
        { label: "무너짐", range: [0, 20], modifier: -2, appliesTo: "socialAndRiskChecks", note: "포기, 공포, 충동적 선택의 압력이 강하다." },
        { label: "위축", range: [21, 40], modifier: -1, appliesTo: "socialAndRiskChecks", note: "설득, 협상, 위험 감수 판단이 불리해진다." },
        { label: "보통", range: [41, 60], modifier: 0, appliesTo: "allChecks", note: "불안과 의욕이 균형을 이룬다." },
        { label: "의욕", range: [61, 80], modifier: 0, appliesTo: "fictionOnly", note: "움직일 마음은 있지만 무모한 고양 상태는 아니다." },
        { label: "고양", range: [81, 100], modifier: 1, appliesTo: "socialAndGoalChecks", note: "목표 추진, 설득, 격려 장면에 여유가 생긴다." },
      ],
      gain: { success: 5, goal: 10, npcPositive: 5, rest: 3, inspiration: 10 },
      loss: { failure: -5, npcNegative: -15, badEvent: -10, fear: -20 },
    },
  },
  goals: {
    shortGoalCompleteWhen: "player.goals.progress.shortPercent == 100",
    onShortGoalComplete: ["fatigue = min(fatigue, 10)", "completedShortGoals에 현재 단기 목표 기록", "새 단기 목표 생성", "shortPercent = 0"],
    mainGoalCompleteWhen: "player.goals.progress.mainComplete == true",
  },
  narrationConstraints: {
    hideNumbersInFiction: true,
    allowedNumericSurfaces: ["rollBlock", "statusSummary", "statusView"],
    turnOneSkipsRollBlock: true,
  },
};

const difficultyProfiles = {
  쉬움: {
    label: "쉬움",
    summary: "의도를 자주 확인하고, 실패해도 작은 성취와 다음 기회를 남깁니다.",
    checkText: "DC 10~22를 사용하되, 부분 성공 범위가 넓고 회복 가능한 비용을 우선합니다.",
    toneText: "세계가 바쁘고 문제가 생겨도 플레이는 작은 성취와 다음 기회를 자주 얻습니다.",
    statusText: "상태는 압박을 만들지만 플레이를 막지 않습니다. 피로 한계여도 건강 자동 감소는 없습니다.",
  },
  보통: {
    label: "보통",
    summary: "의도는 존중하되, 성공과 비용이 균형 있게 갈립니다.",
    checkText: "DC 10~22를 사용하고, 성공/부분 성공/실패의 비용을 표준 폭으로 적용합니다.",
    toneText: "실패하면 피로, 사기, 관계, 시간 중 하나에 분명한 부담이 생깁니다.",
    statusText: "상태는 판정 보정과 비용에 영향을 줍니다. 건강 감소는 위험 행동이나 명확한 결과 비용으로만 발생합니다.",
  },
  어려움: {
    label: "어려움",
    summary: "마스터가 더 빠르게 해석하고, 실패 비용과 누적 부담이 선명합니다.",
    checkText: "DC 10~22를 사용하되, 부분 성공 범위가 좁고 실패 비용이 크게 적용됩니다.",
    toneText: "시간 압박과 실패 비용이 선명하지만, 회복 경로와 작은 성취는 남깁니다.",
    statusText: "피로가 한계 단계면 턴 종료 시 건강 -5가 발생합니다. 건강 0은 게임 오버입니다.",
  },
};

function difficultyRows(mode) {
  const profile = difficultyProfiles[mode] || difficultyProfiles.보통;
  return [
    ["플레이 난이도", profile.label],
    ["판정 기준", profile.checkText],
    ["톤과 난이도", profile.toneText],
    ["상태 압박", profile.statusText],
  ];
}

function applyDifficultyToDraft(draft, mode) {
  const profile = difficultyProfiles[mode] || difficultyProfiles.보통;
  draft.difficultyMode = profile.label;
  draft.difficulty = difficultyRows(profile.label);
}

const genreGuideText =
  "장르는 플레이 규칙의 방향을 정합니다. 기본 예시는 생활/모험, 탐사, 추리·수사, 정치, 전쟁이며, seed에 로맨스, 호러, 학원물, 해저 도시, 중세 수도원처럼 원하는 장르나 배경을 추가로 요청할 수 있습니다.";

const defaultWorldContextText =
  "파도 소리가 창가에 나직이 머무는 곳, 여름의 열기가 기분 좋게 달궈진 작은 바닷가 마을 솔비에 오신 것을 환영합니다. 이곳의 아침은 짭조름한 바다 내음과 함께 골목마다 활기차게 울려 퍼지는 이웃들의 인사로 시작됩니다.\n\n" +
  "내일은 마을의 가장 큰 행사인 여름 축제가 열리는 날입니다. 마을 전체가 들뜬 마음으로 축제 준비에 분주하지만, 오늘따라 공기 중에는 묘한 긴장감이 감돕니다. 축제의 꽃이 될 소품이 어디론가 사라졌다는 다급한 목소리가 시장 어귀에서 들려오고, 지나가던 이웃은 당신의 손을 맞잡으며 꼭 좀 도와달라는 간곡한 부탁을 건넵니다.\n\n" +
  "거창한 운명을 결정지을 싸움은 없지만, 당신에게는 오늘 하루라는 소중한 시간이 주어져 있습니다. 누군가의 잃어버린 물건을 찾아주고, 엇갈린 약속을 바로잡으며, 마을의 평온한 축제를 지켜내는 것. 그것이 당신이 마주할 작지만 빛나는 과제들입니다.\n\n" +
  "서두르지 않아도 괜찮습니다. 때로는 길을 헤매기도 하고, 예상치 못한 실수로 당황할 수도 있겠지요. 하지만 따뜻한 햇살 아래 이웃들과 나누는 웃음과, 작은 문제를 하나씩 해결하며 얻는 성취감이 당신의 발걸음을 가볍게 만들어줄 것입니다. 자, 이제 솔비마을의 활기찬 거리로 걸어 들어가 보세요. 당신의 다정한 하루가 시작됩니다.";

const setupSteps = [
  {
    id: "frame",
    mark: "①",
    label: "세계 골격",
    kicker: "World Frame",
    placeholder: "장르, 시대, 참조 세계, 분위기, 핵심 갈등을 조정할 수 있습니다.",
    draft: {
      kind: "fields",
      genreGuide: genreGuideText,
      fields: [
        ["장르", "생활/모험"],
        ["시대/기술", "현대 소도시"],
        ["참조 세계", "바닷가 작은 마을 솔비마을"],
        ["분위기", "따뜻하지만 분주하고 작은 문제가 이어지는 분위기"],
        ["핵심 갈등", "여름 축제 전날 사라진 준비물과 엇갈린 부탁을 해결해야 하는 하루"],
      ],
    },
  },
  {
    id: "context",
    mark: "②",
    label: "세계 맥락",
    kicker: "World Context",
    placeholder: "권력 구조, 금기, 사회 분위기, 현재 긴장을 수정할 수 있습니다.",
    draft: {
      kind: "paragraph",
      text: defaultWorldContextText,
    },
  },
  {
    id: "pc",
    mark: "③",
    label: "PC 후보",
    kicker: "Player Character",
    placeholder: "후보를 더 평범하게, 더 정치적으로, 더 약하게 등 요청할 수 있습니다.",
    draft: {
      kind: "candidates",
      selectedIndex: 0,
      candidates: pcProfiles.map((profile) => profile.summary),
    },
  },
  {
    id: "character",
    mark: "④",
    label: "캐릭터 상세",
    kicker: "Character Detail",
    placeholder: "PC 배경, 말투, 능력치, 초기 상태, NPC 관계를 더 구체적으로 조정할 수 있습니다.",
    draft: buildCharacterDraft(pcProfiles[0]),
  },
  {
    id: "promise",
    mark: "⑤",
    label: "세션 규칙",
    kicker: "Session Rules",
    placeholder: "장기 목표, 장르 약속, 난이도, 게임 오버 조건을 조정할 수 있습니다.",
    draft: {
      kind: "promise",
      longTermGoal: pcProfiles[0].goals[0][1],
      title: "생활/모험",
      bullets: ["작은 문제는 해결 가능한 형태로 제시된다", "실패해도 회복 경로와 다음 기회가 남는다", "NPC 관계 변화가 플레이의 핵심 보상이다", "시간과 피로는 압박을 만들지만 플레이를 막지 않는다", "작은 성취는 세션에 남는다"],
      difficultyMode: "쉬움",
      difficulty: difficultyRows("쉬움"),
      gameOver: [
        ["자동 사망", "건강이 0이 되면 PC는 자동 사망하며 세션 종료 조건이 된다"],
        ["목표 달성", "장기 목표가 달성되면 세션 엔딩으로 이동한다"],
        ["중도 종료", "플레이어가 종료를 원하면 애프터 세션으로 이동한다"],
      ],
    },
  },
  {
    id: "prologue",
    mark: "⑥",
    label: "프롤로그",
    kicker: "Prologue Seed",
    placeholder: "첫 장면의 시간, 장소, 상황 압력, 단기 목표를 조정할 수 있습니다.",
    draft: buildPrologueDraft(pcProfiles[0]),
  },
];

const initialPrologueDraft = setupSteps.find((step) => step.id === "prologue").draft;

const setupState = {
  current: 0,
  selectedCandidateIndex: 0,
  steps: buildInitialSetupState(),
};

function buildInitialSetupState() {
  return setupSteps.map((step, index) => ({
    id: step.id,
    draft: step.draft,
    status: index === 0 ? "drafted" : "locked",
    revision: "",
    saved: false,
    confirmed: false,
    stale: false,
  }));
}

function buildWorldContextText({ seed, genre, era, place, tone, coreConflict, hasMystery, hasPolitical, hasScarcity }) {
  if (genre === "생활/모험" && place.includes("솔비마을") && !hasMystery && !hasPolitical && !hasScarcity) {
    return defaultWorldContextText;
  }

  const sourceSeed = seed || "플레이어가 아직 세계 seed를 입력하지 않았다.";
  const powerPressure = hasPolitical
    ? "공개 회의장에서는 모두가 원칙을 말하지만, 골목과 응접실에서는 오래된 빚과 체면, 조용한 약속이 더 큰 힘을 발휘합니다. 누구의 편을 들었는지보다 누구의 말을 끝까지 들어주었는지가 다음 문을 열 수도 있습니다."
    : "이곳의 질서는 큰 법보다 오래 알고 지낸 얼굴, 가게마다 쌓인 부탁, 오늘 하루를 망치고 싶지 않다는 조심스러운 합의로 유지됩니다.";
  const truthPressure = hasMystery
    ? "어딘가에는 분명히 감춰진 진실이 있습니다. 하지만 그 진실은 갑작스러운 폭로가 아니라, 당신이 직접 본 장소와 들은 말, 손끝에 닿은 기록 사이에서 천천히 모습을 드러냅니다."
    : "문제의 핵심은 거대한 음모보다 오늘 안에 풀어야 할 작은 엇갈림에 가깝습니다. 사라진 물건, 밀린 준비, 어긋난 동선, 말하지 못한 서운함이 당신의 발걸음을 다음 장소로 이끕니다.";
  const resourcePressure = hasScarcity
    ? "쓸 수 있는 것은 넉넉하지 않습니다. 식량, 전력, 산소, 시간처럼 손에 잡히는 제약이 선택의 무게를 만들고, 누군가를 돕는 순간 다른 곳의 여유가 조금 줄어듭니다."
    : "압박은 주로 시간, 피로, 관계에서 찾아옵니다. 조금 무리하면 몸과 마음이 지치고, 누군가의 부탁을 미루면 웃으며 넘기던 관계도 잠깐 흔들릴 수 있습니다.";

  return `${sourceSeed} 그 문장을 따라가면 당신이 도착하는 곳은 ${era}의 ${place}입니다. 이곳의 하루는 "${coreConflict}"라는 작은 긴장으로 이미 조금 기울어져 있습니다. 문을 열고 들어서면 가장 먼저 느껴지는 것은 ${tone}입니다. 낯선 장소라 해도 완전히 차갑지는 않고, 익숙한 장소라 해도 모든 일이 마음대로 풀리지는 않습니다.\n\n${powerPressure} ${truthPressure} ${resourcePressure} 그래서 이 세계에서 중요한 것은 단번에 모든 것을 해결하는 힘보다, 누구의 말을 먼저 들어줄지, 어떤 길을 돌아갈지, 피곤한 몸으로도 한 번 더 확인할지 같은 작고 구체적인 선택입니다.\n\n당신의 행동은 세계 전체를 한순간에 뒤집지는 않을지도 모릅니다. 대신 한 사람의 표정이 풀리고, 잃어버린 물건 하나가 제자리로 돌아가고, 닫혀 있던 문이 조금 열릴 수 있습니다. 실패해도 이야기는 끝나지 않습니다. 조금 늦어지고, 조금 지치고, 다시 설명해야 할 뿐입니다. 그 사이에서 이 세계는 당신이 남긴 작은 흔적을 기억하기 시작합니다.`;
}

function buildWorldDraftFromSeed(seed) {
  const text = seed.trim();
  const hasSliceOfLife = /생활|일상|마을|동네|축제|가게|관계|부탁|소소|회복/.test(text);
  const hasAdventure = /모험|여행|배달|길|탐험|바다|숲|언덕|섬/.test(text);
  const hasMystery = /추리|수사|사건|범인|단서/.test(text);
  const hasPolitical = /정치|권력|의회|협상|파벌|배신/.test(text);
  const hasThriller = /스릴러|위협|음모|배신|추적/.test(text);
  const hasMedieval = /중세|수도원|기사|영주|교단/.test(text);
  const hasNearFuture = /근미래|미래|사이버|우주|해저|도시/.test(text);
  const hasUnderwater = /해저|심해|수중/.test(text);
  const hasScarcity = /자원 부족|부족|고갈|식량|산소|전력/.test(text);
  const hasDark = /어둡|암울|불안|폐쇄|비극/.test(text);
  const wantsEasy = /쉬움|쉽|작은 승리|가볍|친절/.test(text);
  const wantsHard = /어려움|가혹|하드|위험|높은 난이도/.test(text);
  const place = hasUnderwater ? "근미래 해저 도시" : hasMedieval ? "현실 유럽 중세 수도원 변주" : "바닷가 작은 마을 솔비마을";
  const genreParts = [];
  if (hasSliceOfLife || (!hasMystery && !hasPolitical && !hasThriller)) genreParts.push("생활");
  if (hasAdventure || (!hasMystery && !hasPolitical && !hasThriller)) genreParts.push("모험");
  if (hasMedieval) genreParts.push("중세");
  if (hasNearFuture && !hasUnderwater) genreParts.push("근미래");
  if (hasUnderwater) genreParts.push("해저 도시");
  if (hasPolitical) genreParts.push("정치");
  if (hasMystery) genreParts.push("추리·수사");
  if (hasThriller) genreParts.push("스릴러");
  const genre = [...new Set(genreParts)].join("/") || "생활/모험";
  const tone = hasDark || hasThriller ? "불안과 압력이 있어도 작은 성취와 회복이 남는 분위기" : "따뜻함, 분주함, 회복이 함께 있는 분위기";
  const difficulty = wantsHard ? "어려움" : wantsEasy ? "쉬움" : "보통";
  const coreConflict = hasMystery
    ? "닫힌 공동체 안에서 사라진 기록, 숨겨진 동기, 의심스러운 죽음이 얽힌 사건"
    : hasPolitical || hasScarcity
      ? "부족한 자원, 파벌 간 이해관계, 배신 가능성이 플레이어의 선택을 압박하는 갈등"
    : "축제 준비, 엇갈린 부탁, 사라진 준비물, 관계 회복이 플레이어의 첫 선택을 압박한다";

  return {
    frame: {
      kind: "fields",
      genreGuide: genreGuideText,
      fields: [
        ["장르", genre],
        ["시대/기술", hasNearFuture ? "근미래" : hasMedieval ? "중세" : "현대 소도시"],
        ["참조 세계", place],
        ["분위기", tone],
        ["핵심 갈등", coreConflict],
      ],
    },
    context: {
      kind: "paragraph",
      text: buildWorldContextText({
        seed: text,
        genre,
        era: hasNearFuture ? "근미래" : hasMedieval ? "중세" : "현대 소도시",
        place,
        tone,
        coreConflict,
        hasMystery,
        hasPolitical,
        hasScarcity,
      }),
    },
    difficulty,
  };
}

const state = {
  player: {
    name: "하루",
    role: "동네 빵집 견습",
    goal: "마을 여름 축제를 무사히 열고 모두가 웃는 하루를 만든다",
    shortGoal: "사라진 축제 안내판을 찾아 첫 배달 동선을 정리한다",
    hp: 72,
    fatigue: 9,
    morale: 64,
  },
  world: {
    genre: "생활/모험",
    reference: "바닷가 작은 마을 솔비마을",
    promise: "생활/모험: 작은 목표, 회복 가능한 실패, 관계 변화",
  },
  npcs: ["도겸: 빵집 사장, 든든한 어른", "나리: 축제 준비 담당, 마찰 / 일정 압박", "윤호: 항구 관리인, 정보통"],
  prologueSeed: initialPrologueDraft.summary,
  prologueMeta: {
    sceneTitle: initialPrologueDraft.sceneTitle,
    date: initialPrologueDraft.date,
    time: initialPrologueDraft.time,
    place: initialPrologueDraft.place,
  },
  knownFacts: [],
  recentChange: "세션 준비 중",
  log: [],
  savedWorld: null,
  runtime: null,
  afterUnlocked: false,
};

const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");
const mobileStatusToggle = document.querySelector("#toggleMobileStatus");

function showTab(id) {
  if (id === "after" && !state.afterUnlocked) return;
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === id));
  views.forEach((view) => view.classList.toggle("is-active", view.id === id));
}

function renderTabLocks() {
  const afterTab = document.querySelector('[data-tab="after"]');
  const endSessionButton = document.querySelector("#endSession");
  afterTab.disabled = !state.afterUnlocked;
  afterTab.setAttribute("aria-disabled", String(!state.afterUnlocked));
  endSessionButton.disabled = !state.runtime;
}

function statusLabel(status) {
  return {
    locked: "대기",
    drafted: "초안",
    saved: "임시",
    confirmed: "확정",
    stale: "재확인",
  }[status];
}

function draftSection(title, content, className = "") {
  return `
    <section class="draft-section ${className}">
      <h4>${title}</h4>
      ${content}
    </section>
  `;
}

function statusRangeText(label) {
  const statusRules = defaultSessionRules.status;
  const ranges = {
    건강: statusRules.hp.range,
    피로: statusRules.fatigue.range,
    사기: statusRules.morale.range,
  };
  const range = ranges[label];
  return range ? `${range[0]}~${range[1]}` : "-";
}

function statusRuleForLabel(label) {
  const statusRules = defaultSessionRules.status;
  return {
    건강: statusRules.hp,
    피로: statusRules.fatigue,
    사기: statusRules.morale,
  }[label];
}

function statusRuleForKey(key) {
  return defaultSessionRules.status[key];
}

function clampStatusValue(key, value) {
  const rule = statusRuleForKey(key);
  const numericValue = Number(value);
  if (!rule || !Number.isFinite(numericValue)) return value;
  return Math.min(rule.range[1], Math.max(rule.range[0], numericValue));
}

function statusStageFor(label, value) {
  const rule = statusRuleForLabel(label);
  const numericValue = Number(value);
  if (!rule || !Number.isFinite(numericValue)) return null;
  return rule.bands?.find((band) => numericValue >= band.range[0] && numericValue <= band.range[1]) || null;
}

function statusStageText(label, value) {
  const stage = statusStageFor(label, value);
  return stage ? `${stage.label} ${stage.range[0]}~${stage.range[1]}` : "-";
}

function statusBandSummary(label) {
  const rule = statusRuleForLabel(label);
  return rule?.bands?.map((band) => `${band.label} ${band.range[0]}~${band.range[1]}`).join(" / ") || "-";
}

function renderDraft(draft, revision) {
  if (draft.kind === "fields") {
    return `${draftSection(
      "설정 항목",
      `${draft.genreGuide ? `<p class="system-note genre-guide">${draft.genreGuide}</p>` : ""}<dl class="draft-list">${draft.fields
        .map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`)
        .join("")}</dl>`,
    )}${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  if (draft.kind === "bullets") {
    return `${draftSection(draft.title, `<ul class="draft-bullets">${draft.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`)}${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  if (draft.kind === "promise") {
    const selectedDifficulty = draft.difficultyMode || Object.fromEntries(draft.difficulty || [])["플레이 난이도"] || "보통";
    return `
      <section class="draft-section">
        <h4>장기 목표</h4>
        <p class="draft-context">${draft.longTermGoal}</p>
      </section>
      <section class="draft-section">
        <h4>장르 약속</h4>
        <h5>${draft.title}</h5>
        <ul class="draft-bullets">${draft.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="draft-section">
        <h4>난이도</h4>
        <div class="difficulty-options" role="radiogroup" aria-label="플레이 난이도">
          ${Object.values(difficultyProfiles)
            .map(
              (profile) => `
                <label class="difficulty-option ${profile.label === selectedDifficulty ? "is-selected" : ""}">
                  <input type="radio" name="difficultyMode" value="${profile.label}" ${profile.label === selectedDifficulty ? "checked" : ""} />
                  <span>${profile.label}</span>
                  <small>${profile.summary}</small>
                </label>
              `,
            )
            .join("")}
        </div>
        <dl class="draft-list">${draft.difficulty.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join("")}</dl>
      </section>
      <section class="draft-section">
        <h4>게임 오버 조건</h4>
        <dl class="draft-list">${draft.gameOver.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join("")}</dl>
      </section>
      ${revision ? `<p class="revision-note">${revision}</p>` : ""}
    `;
  }

  if (draft.kind === "candidates") {
    return `${draftSection(
      "PC 후보",
      `<div class="candidate-list">${draft.candidates
        .map((candidate, index) => `<button type="button" data-candidate-index="${index}" class="${index === draft.selectedIndex ? "is-selected" : ""}">${index + 1}) ${candidate}</button>`)
        .join("")}</div>`,
    )}${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  if (draft.kind === "character") {
    return `
      <section class="draft-section">
        <h4>간단 소개</h4>
        <dl class="draft-list identity-list">
          <div><dt>이름</dt><dd>${draft.name}</dd></div>
          <div><dt>성별</dt><dd>${draft.gender}</dd></div>
          <div><dt>나이</dt><dd>${draft.age}</dd></div>
          <div><dt>역할</dt><dd>${draft.role}</dd></div>
        </dl>
        <p class="draft-context">${draft.background}</p>
      </section>
      <section class="draft-section">
        <h4>특성</h4>
        <dl class="draft-list character-fields">${draft.fields
          .map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`)
          .join("")}</dl>
      </section>
      <section class="draft-section">
        <h4>능력치</h4>
        <div class="ability-table">
          <div class="table-head"><span>능력</span><span>수치</span><span>보정</span></div>
          ${draft.abilities.map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}
        </div>
        <p class="balance-note">보정치 균형 검사 ${draft.abilityBalance.valid ? "통과" : "경고"}: 양수 합 +${draft.abilityBalance.positiveSum} / 음수 합 ${draft.abilityBalance.negativeSum}</p>
        ${
          draft.abilityBalance.warnings?.length
            ? `<p class="system-note">능력치 경고: ${draft.abilityBalance.warnings.join(" / ")}</p>`
            : ""
        }
        <p class="system-note">매턴 판정 시 1D20 주사위 값에 보정치를 더해 DC 10~22와 비교합니다. 난이도에 따라 같은 수치라도 성공, 부분 성공, 실패의 결과 폭이 달라집니다.</p>
      </section>
      <section class="draft-section">
        <h4>초기 상태</h4>
        <div class="status-table">
          <div class="table-head"><span>상태</span><span>수치</span><span>범위</span><span>단계</span><span>현재 의미</span></div>
          ${draft.status
            .map(([label, value, meaning]) => `<div><span>${label}</span><span>${value}</span><span>${statusRangeText(label)}</span><span>${statusStageText(label, value)}</span><span>${meaning}</span></div>`)
            .join("")}
        </div>
        <div class="status-guide">
          <p class="status-note"><strong>건강 0~100</strong>은 HP 개념입니다. 0이 되면 PC는 자동 사망하며 세션 종료 조건이 됩니다. 단계: ${statusBandSummary("건강")}</p>
          <p class="status-note"><strong>피로 0~20</strong>은 누적 부담입니다. 높아질수록 집중, 이동, 설득 같은 판정이 불리해질 수 있습니다. 단계: ${statusBandSummary("피로")}</p>
          <p class="status-note"><strong>사기 0~100</strong>은 마음의 버팀목입니다. 낮아질수록 공포, 포기, 충동적 선택의 압력이 커집니다. 단계: ${statusBandSummary("사기")}</p>
        </div>
      </section>
      <section class="draft-section">
        <h4>NPC</h4>
        <div class="npc-table with-speech">
          <div class="table-head"><span>이름</span><span>역할</span><span>관계·태그</span><span>말투</span><span>관계치</span></div>
          ${draft.npcs
            .map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`)
          .join("")}</div>
        <div class="status-guide">
          <p class="status-note"><strong>관계치 -20~20</strong>은 PC와 NPC의 초기 신뢰/거리감을 나타냅니다. 양수는 우호와 협력 가능성, 음수는 경계나 부담을 뜻합니다.</p>
        </div>
      </section>
      ${revision ? `<p class="revision-note">${revision}</p>` : ""}
    `;
  }

  if (draft.kind === "prologue") {
    return `
      ${renderPrologueReview(draft)}
      <section class="draft-section">
      <h4>프롤로그</h4>
      <dl class="draft-list prologue-fields">
        <div><dt>단기 목표</dt><dd>${draft.shortTermGoal}</dd></div>
        <div><dt>장면 제목</dt><dd>${draft.sceneTitle}</dd></div>
        <div><dt>날짜</dt><dd>${draft.date}</dd></div>
        <div><dt>시각</dt><dd>${draft.time}</dd></div>
        <div><dt>장소</dt><dd>${draft.place}</dd></div>
      </dl>
      </section>
      <section class="draft-section">
      <h4>전개</h4>
      <p class="draft-context prologue-summary">${draft.summary}</p>
      </section>
      ${revision ? `<p class="revision-note">${revision}</p>` : ""}
    `;
  }

  if (draft.kind === "table") {
    return `${draftSection(
      "표",
      `<div class="npc-table">${draft.rows
        .map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`)
        .join("")}</div>`,
    )}${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  return `<section class="draft-section world-context-section"><p class="draft-context">${draft.text}</p></section>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
}

function compactNpcs(npcs) {
  return npcs.map(([name, role, relationTags]) => `${name}(${role}, ${relationTags})`).join(" / ");
}

function renderPrologueReview(draft) {
  const frame = getDraftById("frame");
  const character = getDraftById("character");
  const promise = getDraftById("promise");
  const difficulty = Object.fromEntries(promise.difficulty);
  const gameOver = Object.fromEntries(promise.gameOver);

  return `
      <section class="draft-section review-section">
        <h4>설정 요약</h4>
        <dl class="draft-list review-list">
          <div><dt>장르</dt><dd>${fieldValue(frame.fields, "장르")}</dd></div>
          <div><dt>시대/배경</dt><dd>${fieldValue(frame.fields, "시대/기술")} / ${fieldValue(frame.fields, "참조 세계")}</dd></div>
          <div><dt>분위기</dt><dd>${fieldValue(frame.fields, "분위기")}</dd></div>
          <div><dt>핵심 갈등</dt><dd>${fieldValue(frame.fields, "핵심 갈등")}</dd></div>
          <div><dt>장기 목표</dt><dd>${promise.longTermGoal}</dd></div>
          <div><dt>단기 목표</dt><dd>${draft.shortTermGoal}</dd></div>
          <div><dt>난이도</dt><dd>${difficulty["플레이 난이도"]}</dd></div>
          <div><dt>게임 오버</dt><dd>${gameOver["자동 사망"]} / ${gameOver["목표 달성"]}</dd></div>
        </dl>
      </section>
      <section class="draft-section review-section">
        <h4>캐릭터 요약</h4>
        <dl class="draft-list review-list">
          <div><dt>이름</dt><dd>${character.name}</dd></div>
          <div><dt>성별/나이</dt><dd>${character.gender} / ${character.age}</dd></div>
          <div><dt>역할</dt><dd>${character.role}</dd></div>
          <div><dt>말투</dt><dd>${fieldValue(character.fields, "말투")}</dd></div>
          <div><dt>가치관</dt><dd>${fieldValue(character.fields, "가치관")}</dd></div>
          <div><dt>강점/결함</dt><dd>${fieldValue(character.fields, "강점")} / ${fieldValue(character.fields, "결함")}</dd></div>
          <div><dt>초기 상태</dt><dd>${character.status.map(([label, value]) => `${label} ${value}`).join(" / ")}</dd></div>
          <div><dt>핵심 NPC</dt><dd>${compactNpcs(character.npcs)}</dd></div>
        </dl>
      </section>
  `;
}

function renderSetup() {
  const currentStep = setupSteps[setupState.current];
  const currentState = setupState.steps[setupState.current];

  document.querySelector("#setupSteps").innerHTML = setupSteps
    .map((step, index) => {
      const itemState = setupState.steps[index];
      const classes = [
        index === setupState.current ? "is-current" : "",
        itemState.confirmed ? "is-confirmed" : "",
        itemState.stale ? "is-stale" : "",
        itemState.status === "locked" ? "is-locked" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `<li class="${classes}"><button type="button" data-step="${index}"><span>${step.mark}</span>${step.label}<em>${statusLabel(itemState.stale ? "stale" : itemState.confirmed ? "confirmed" : itemState.status)}</em></button></li>`;
    })
    .join("");

  document.querySelectorAll("#setupSteps button").forEach((button) => {
    button.addEventListener("click", () => {
      setupState.current = Number(button.dataset.step);
      if (setupState.steps[setupState.current].status === "locked") setupState.steps[setupState.current].status = "drafted";
      renderSetup();
    });
  });

  document.querySelector("#stepKicker").textContent = `${currentStep.mark} ${currentStep.kicker}`;
  document.querySelector("#stepTitle").textContent = currentStep.label;
  document.querySelector("#stepStatus").textContent = statusLabel(currentState.stale ? "stale" : currentState.confirmed ? "confirmed" : currentState.status);
  document.querySelector("#stepDraft").innerHTML = renderDraft(currentState.draft, currentState.revision);
  document.querySelectorAll("input[name='difficultyMode']").forEach((input) => {
    input.addEventListener("change", () => updateDifficultyMode(input.value));
  });
  document.querySelector("#revisionRequest").placeholder = currentStep.placeholder;
  document.querySelector("#revisionRequest").value = "";

  document.querySelectorAll("[data-candidate-index]").forEach((button) => {
    button.addEventListener("click", () => previewCandidate(Number(button.dataset.candidateIndex)));
  });

  const pcStepIndex = setupSteps.findIndex((step) => step.id === "pc");
  const characterStepIndex = setupSteps.findIndex((step) => step.id === "character");
  document.querySelector("#reselectPc").hidden = !(setupState.steps[pcStepIndex].confirmed && setupState.current === characterStepIndex);
  document.querySelector("#startSession").disabled = !setupState.steps.every((step) => step.confirmed && !step.stale);
}

function saveCurrentStep() {
  const current = setupState.steps[setupState.current];
  current.saved = true;
  if (!current.confirmed) current.status = "saved";
  current.stale = false;
  renderSetup();
}

function markLaterStepsStale(fromIndex) {
  for (let index = fromIndex + 1; index < setupState.steps.length; index += 1) {
    if (setupState.steps[index].confirmed || setupState.steps[index].status === "saved") {
      setupState.steps[index].stale = true;
      setupState.steps[index].revision = "앞 단계가 수정되어 재확인이 필요합니다. 내용을 검토한 뒤 다시 확정하세요.";
    }
  }
}

function updateDifficultyMode(mode) {
  const current = setupState.steps[setupState.current];
  if (!current?.draft || current.draft.kind !== "promise") return;
  applyDifficultyToDraft(current.draft, mode);
  current.status = "drafted";
  current.confirmed = false;
  current.stale = false;
  current.revision = `난이도를 ${current.draft.difficultyMode}(으)로 변경했습니다.`;
  markLaterStepsStale(setupState.current);
  renderSetup();
}

function applyWorldSeed() {
  const seed = document.querySelector("#worldSeed").value;
  const draft = buildWorldDraftFromSeed(seed);
  const frameStepIndex = setupSteps.findIndex((step) => step.id === "frame");
  const contextStepIndex = setupSteps.findIndex((step) => step.id === "context");
  const promiseStepIndex = setupSteps.findIndex((step) => step.id === "promise");

  setupSteps[frameStepIndex].draft = draft.frame;
  setupSteps[contextStepIndex].draft = draft.context;
  applyDifficultyToDraft(setupSteps[promiseStepIndex].draft, draft.difficulty);

  setupState.current = frameStepIndex;
  setupState.steps = buildInitialSetupState();
  state.savedWorld = null;
  renderSetup();
}

function applyCandidate(index) {
  const pcStepIndex = setupSteps.findIndex((step) => step.id === "pc");
  const characterStepIndex = setupSteps.findIndex((step) => step.id === "character");
  const promiseStepIndex = setupSteps.findIndex((step) => step.id === "promise");
  const prologueStepIndex = setupSteps.findIndex((step) => step.id === "prologue");
  const selected = pcProfiles[index];

  setupState.selectedCandidateIndex = index;
  setupState.steps[pcStepIndex].draft.selectedIndex = index;
  setupState.steps[characterStepIndex].draft = buildCharacterDraft(selected);
  setupState.steps[promiseStepIndex].draft.longTermGoal = selected.goals[0][1];
  setupState.steps[prologueStepIndex].draft = buildPrologueDraft(selected);

  state.player.role = selected.role;
  state.player.name = selected.name;
  state.player.goal = selected.goals[0][1];
  state.player.shortGoal = selected.goals[1][1];
  state.player.hp = selected.playerState.hp;
  state.player.fatigue = selected.playerState.fatigue;
  state.player.morale = selected.playerState.morale;
  state.npcs = selected.npcs.map(([name, role, relation]) => `${name}: ${role}, ${relation}`);
  state.prologueSeed = selected.prologue;
  state.prologueMeta = { ...selected.prologueMeta };
  setupState.steps[pcStepIndex].confirmed = true;
  setupState.steps[pcStepIndex].status = "confirmed";
  setupState.steps[pcStepIndex].stale = false;
  for (let stepIndex = characterStepIndex; stepIndex < setupState.steps.length; stepIndex += 1) {
    setupState.steps[stepIndex].status = stepIndex === characterStepIndex ? "drafted" : "locked";
    setupState.steps[stepIndex].confirmed = false;
    setupState.steps[stepIndex].saved = false;
    setupState.steps[stepIndex].stale = false;
    setupState.steps[stepIndex].revision = "";
  }
  setupState.current = characterStepIndex;
  renderState();
}

function previewCandidate(index) {
  const pcStepIndex = setupSteps.findIndex((step) => step.id === "pc");
  setupState.selectedCandidateIndex = index;
  setupState.steps[pcStepIndex].draft.selectedIndex = index;
  renderSetup();
}

function reselectCandidate() {
  const pcStepIndex = setupSteps.findIndex((step) => step.id === "pc");
  const characterStepIndex = setupSteps.findIndex((step) => step.id === "character");
  setupState.steps[pcStepIndex].confirmed = false;
  setupState.steps[pcStepIndex].status = "drafted";
  setupState.steps[pcStepIndex].stale = false;
  for (let stepIndex = characterStepIndex; stepIndex < setupState.steps.length; stepIndex += 1) {
    setupState.steps[stepIndex].status = "locked";
    setupState.steps[stepIndex].confirmed = false;
    setupState.steps[stepIndex].saved = false;
    setupState.steps[stepIndex].stale = false;
  }
  setupState.current = pcStepIndex;
  renderSetup();
}

function resetSetup() {
  if (!window.confirm("세계 골격부터 다시 시작합니다. 현재 초안과 저장 전 설정은 사라집니다.")) return;

  const firstProfile = pcProfiles[0];
  const pcStepIndex = setupSteps.findIndex((step) => step.id === "pc");
  const characterStepIndex = setupSteps.findIndex((step) => step.id === "character");
  const promiseStepIndex = setupSteps.findIndex((step) => step.id === "promise");
  const prologueStepIndex = setupSteps.findIndex((step) => step.id === "prologue");

  setupSteps[pcStepIndex].draft.selectedIndex = 0;
  setupSteps[characterStepIndex].draft = buildCharacterDraft(firstProfile);
  setupSteps[promiseStepIndex].draft.longTermGoal = firstProfile.goals[0][1];
  setupSteps[prologueStepIndex].draft = buildPrologueDraft(firstProfile);

  setupState.current = 0;
  setupState.selectedCandidateIndex = 0;
  setupState.steps = buildInitialSetupState();
  state.player.role = firstProfile.role;
  state.player.name = firstProfile.name;
  state.player.goal = firstProfile.goals[0][1];
  state.player.shortGoal = firstProfile.goals[1][1];
  state.player.hp = firstProfile.playerState.hp;
  state.player.fatigue = firstProfile.playerState.fatigue;
  state.player.morale = firstProfile.playerState.morale;
  state.npcs = firstProfile.npcs.map(([name, role, relation]) => `${name}: ${role}, ${relation}`);
  state.prologueSeed = firstProfile.prologue;
  state.prologueMeta = { ...firstProfile.prologueMeta };
  state.knownFacts = [];
  state.recentChange = "세션 준비 중";
  state.log = [];
  state.savedWorld = null;
  state.runtime = null;
  state.afterUnlocked = false;

  renderState();
  renderTabLocks();
  renderSetup();
}

function confirmCurrentStep() {
  if (setupSteps[setupState.current].id === "pc") {
    applyCandidate(setupState.selectedCandidateIndex);
    setupState.current = setupSteps.findIndex((step) => step.id === "character");
    renderSetup();
    return;
  }

  const current = setupState.steps[setupState.current];
  current.confirmed = true;
  current.status = "confirmed";
  current.stale = false;
  if (setupState.current < setupSteps.length - 1) {
    setupState.current += 1;
    if (setupState.steps[setupState.current].status === "locked") setupState.steps[setupState.current].status = "drafted";
  }
  renderSetup();
}

function reviseCurrentStep() {
  const input = document.querySelector("#revisionRequest");
  const request = input.value.trim();
  const current = setupState.steps[setupState.current];
  current.revision = request ? `요청 반영: ${request}` : "요청 반영: 현재 초안을 조금 더 정돈했습니다.";
  current.status = "drafted";
  current.confirmed = false;
  current.stale = false;
  markLaterStepsStale(setupState.current);
  renderSetup();
}

function getDraftById(id) {
  const index = setupSteps.findIndex((step) => step.id === id);
  return setupState.steps[index].draft;
}

function fieldValue(fields, label) {
  return fields.find(([term]) => term === label)?.[1] || "";
}

function initialGoalProgress(progressText) {
  const numbers = [...String(progressText).matchAll(/(\d+)%/g)].map((match) => Number(match[1]));
  return {
    shortPercent: numbers[0] || 0,
    completedShort: [],
    globalPercent: numbers[1] || 0,
    mainComplete: false,
  };
}

function activeDifficultyRules(difficulty) {
  return defaultSessionRules.checks.resultBandsByDifficulty[difficulty] || defaultSessionRules.checks.resultBandsByDifficulty["보통"];
}

function todayKey() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
}

function safeNamePart(value) {
  return String(value || "")
    .trim()
    .replace(/[^\p{L}\p{N}._ -]/gu, "_")
    .replace(/\s+/g, "_");
}

function characterName() {
  return state.player.name || "PC";
}

function worldSaveTitle() {
  const genre = fieldValue(getDraftById("frame").fields, "장르") || state.world.genre;
  return `${characterName()}-${todayKey()}-${genre}`;
}

function worldFileName() {
  return `${safeNamePart(worldSaveTitle())}.json`;
}

function saveId(title, savedAt) {
  return `${safeNamePart(title)}-${savedAt.slice(0, 10)}`;
}

function compileWorldJson() {
  const worldFrame = getDraftById("frame");
  const promise = getDraftById("promise");
  const character = getDraftById("character");
  const prologue = getDraftById("prologue");
  const now = new Date().toISOString();
  const difficulty = promise.difficultyMode || Object.fromEntries(promise.difficulty)["플레이 난이도"];

  const prologueStart = {
    shortTermGoal: prologue.shortTermGoal,
    sceneTitle: prologue.sceneTitle,
    date: prologue.date,
    time: prologue.time,
    place: prologue.place,
    summary: prologue.summary,
  };
  const initialKnownFacts = [prologueStart.summary];
  const title = worldSaveTitle();
  const id = saveId(title, now);
  const initialStatus = {
    hp: state.player.hp,
    fatigue: state.player.fatigue,
    morale: state.player.morale,
  };
  const abilityScores = character.abilityScores || Object.fromEntries(character.abilities.map(([label, score]) => [label.split(" ")[0], Number(score)]));
  const abilityMods = character.mods || Object.fromEntries(character.abilities.map(([label, , mod]) => [label.split(" ")[0], Number(mod)]));
  const runtime = {
    phase: "setup_ready",
    turn: 1,
    currentDate: prologueStart.date,
    currentTime: prologueStart.time,
    currentPlace: prologueStart.place,
    currentSceneTitle: prologueStart.sceneTitle,
    lastPlayedAt: null,
  };

  return {
    schemaVersion: 1,
    savedAt: now,
    title,
    saveMeta: {
      id,
      createdAt: now,
      updatedAt: now,
      displayTitle: title,
      phase: runtime.phase,
      turn: runtime.turn,
      playerName: character.name,
      genre: fieldValue(worldFrame.fields, "장르"),
      lastSceneTitle: prologueStart.sceneTitle,
      lastPlayedAt: null,
    },
    source: {
      worldSeed: document.querySelector("#worldSeed").value,
      confirmedStepIds: setupState.steps.filter((step) => step.confirmed && !step.stale).map((step) => step.id),
      staleStepIds: setupState.steps.filter((step) => step.stale).map((step) => step.id),
    },
    world: {
      genre: fieldValue(worldFrame.fields, "장르"),
      era: fieldValue(worldFrame.fields, "시대/기술"),
      referenceWorld: fieldValue(worldFrame.fields, "참조 세계"),
      tone: fieldValue(worldFrame.fields, "분위기"),
      coreConflict: fieldValue(worldFrame.fields, "핵심 갈등"),
      context: getDraftById("context").text,
      promiseCard: {
        longTermGoal: promise.longTermGoal,
        title: promise.title,
        promises: promise.bullets,
        difficulty: Object.fromEntries(promise.difficulty),
        gameOver: Object.fromEntries(promise.gameOver),
      },
    },
    rules: {
      ...defaultSessionRules,
      checks: {
        ...defaultSessionRules.checks,
        difficultyMode: difficulty,
        activeResultBands: activeDifficultyRules(difficulty),
      },
    },
    player: {
      name: character.name,
      gender: character.gender,
      age: character.age,
      role: character.role,
      background: character.background,
      speech: fieldValue(character.fields, "말투"),
      values: fieldValue(character.fields, "가치관"),
      strengths: fieldValue(character.fields, "강점"),
      flaws: fieldValue(character.fields, "결함"),
      abilities: abilityScores,
      mods: abilityMods,
      abilityBalance: character.abilityBalance,
      abilityGeneration: character.abilityGeneration,
      initialStatus,
      status: {
        ...initialStatus,
      },
      goals: {
        longTerm: promise.longTermGoal,
        shortTerm: prologue.shortTermGoal,
        progress: initialGoalProgress(fieldValue(character.goals, "진행 표시")),
      },
    },
    npcs: character.npcs.map(([name, role, relationTags, speech, relationshipScore]) => ({
      name,
      role,
      relationTags,
      speech,
      relationshipScore: Number(relationshipScore),
      initialRelationshipScore: Number(relationshipScore),
      currentStatus: "세션 시작 전",
      lastSeen: "",
      flags: [],
    })),
    masterOnly: {
      truthLocked: false,
      truth: {
        culprit: "",
        motive: "",
        method: "",
        timeline: [],
        lockedFacts: [],
      },
      clues: [],
      redHerrings: [],
      notes: "생활/모험 장르에서는 큰 숨겨진 진상보다 오늘의 문제, 관계 기대, 시간 압박, 회복 가능한 비용을 명확히 두는 것을 권장한다.",
    },
    prologueSeed: prologueStart.summary,
    prologue: prologueStart,
    runtime,
    session: {
      knownFacts: initialKnownFacts,
      recentChange: "세션 준비 중",
      log: [],
    },
  };
}

function renderState() {
  document.querySelector("#hp").textContent = state.player.hp;
  document.querySelector("#fatigue").textContent = state.player.fatigue;
  document.querySelector("#morale").textContent = state.player.morale;
  document.querySelector("#mobileHp").textContent = state.player.hp;
  document.querySelector("#mobileFatigue").textContent = state.player.fatigue;
  document.querySelector("#mobileMorale").textContent = state.player.morale;
  document.querySelector("#statusGoal").textContent = state.player.goal;
  document.querySelector("#knownFacts").textContent = renderKnownFacts(state.knownFacts);
  document.querySelector("#recentChange").textContent = state.recentChange;
}

function compactKnownFacts(facts) {
  return (facts || [])
    .map((fact) => String(fact).trim())
    .filter(Boolean)
    .slice(-5);
}

function renderKnownFacts(facts) {
  const recentFacts = compactKnownFacts(facts);
  return recentFacts.length ? recentFacts.join(" / ") : "PC가 확인한 정보 없음";
}

function factFromAction(action, resultLabel, index) {
  const factsByResult = {
    성공: [
      "부탁받은 일 하나가 다음 사람에게 이어질 길을 만들었다",
      "흩어진 준비물의 일부가 제자리로 돌아왔다",
      "NPC 한 명이 조금 더 마음을 열었다",
      "마을의 바쁜 동선 속에서 쓸 만한 빈 시간이 보인다",
      "작은 도움 하나가 주변 분위기를 누그러뜨렸다",
    ],
    "부분 성공": [
      "일은 조금 전진했지만 다른 부탁 하나가 함께 생겼다",
      "필요한 준비물 일부를 찾았지만 아직 빠진 것이 있다",
      "상대는 도와주려 하지만 자기 사정도 먼저 말한다",
      "시간은 조금 지났지만 다음으로 갈 방향은 보인다",
      "작은 성취와 작은 비용이 함께 남았다",
    ],
    실패: [
      "이 방법만으로는 부탁을 끝내기 어렵다",
      "상대가 미안해하지만 바로 도와주지는 못한다",
      "시간이 더 필요하고 피로가 조금 쌓인다",
      "준비물은 아직 찾지 못했지만 물어볼 사람이 생겼다",
      "지금 위치에서는 해결이 어렵고 다른 동선이 필요하다",
    ],
  };
  const pool = factsByResult[resultLabel] || factsByResult.실패;
  return pool[index % pool.length];
}

function renderPlayHeader(savedWorld, runtime) {
  const saveMeta = savedWorld?.saveMeta || {};
  const player = savedWorld?.player || {};
  const loadedTitle = saveMeta.displayTitle || savedWorld?.title || state.world.genre;
  const playerName = player.name || state.player.name || "PC";
  const sceneTitle = runtime.currentSceneTitle || "장면 대기";
  const turn = runtime.turn || 1;

  document.querySelector("#play-title").textContent = sceneTitle;
  document.querySelector("#playSceneMeta").textContent = `${loadedTitle} · ${playerName} · 턴 ${turn}`;
  document.querySelector("#sceneTimePlace").innerHTML = `
    <span>날짜 ${runtime.currentDate || "-"}</span>
    <span>시각 ${runtime.currentTime || "-"}</span>
    <span>장소 ${runtime.currentPlace || "-"}</span>
  `;
}

function beginSession() {
  const savedWorld = state.savedWorld?.world;
  state.knownFacts = compactKnownFacts(savedWorld?.session.knownFacts || [state.prologueSeed]);
  const prologue = savedWorld?.prologue || { ...state.prologueMeta, summary: state.prologueSeed };
  const runtime = savedWorld?.runtime || {
    turn: 1,
    currentDate: prologue.date,
    currentTime: prologue.time,
    currentPlace: prologue.place,
    currentSceneTitle: prologue.sceneTitle,
  };
  state.runtime = { ...runtime };
  state.recentChange = savedWorld?.session?.recentChange || "프롤로그가 시작되었다";
  state.log = savedWorld?.session?.log || [];
  state.afterUnlocked = false;

  renderPlayHeader(savedWorld, state.runtime);
  document.querySelector("#sceneText").textContent = `${prologue.summary} 이제 플레이어는 자유롭게 행동을 선언할 수 있다.`;
  document.querySelector("#rollStrip").textContent = "d20 대기";

  renderState();
  renderTabLocks();
  renderAfter();
  showTab("play");
}

function setMobileStatusOpen(open) {
  const statusPanel = document.querySelector(".status-panel");
  statusPanel.classList.toggle("is-mobile-open", open);
  mobileStatusToggle.setAttribute("aria-expanded", String(open));
  mobileStatusToggle.textContent = open ? "닫기" : "상태";
}

function loadWorldIntoSession(result) {
  const world = result.world;
  const player = world.player || {};
  const status = player.status || {};
  const goals = player.goals || {};

  state.savedWorld = { fileName: result.fileName, path: result.path, world };
  state.player.name = player.name || state.player.name;
  state.player.role = player.role || state.player.role;
  state.player.goal = goals.longTerm || state.player.goal;
  state.player.shortGoal = goals.shortTerm || state.player.shortGoal;
  state.player.hp = clampStatusValue("hp", status.hp ?? state.player.hp);
  state.player.fatigue = clampStatusValue("fatigue", status.fatigue ?? state.player.fatigue);
  state.player.morale = clampStatusValue("morale", status.morale ?? state.player.morale);
  state.npcs = (world.npcs || []).map((npc) => `${npc.name}: ${npc.role}, ${npc.relationTags || npc.currentStatus || ""}`);
  state.knownFacts = compactKnownFacts(world.session?.knownFacts);
  state.recentChange = world.session?.recentChange || "세계를 로드했다";
  state.log = world.session?.log || [];
  state.prologueSeed = world.prologueSeed || world.prologue?.summary || state.prologueSeed;
  state.prologueMeta = {
    sceneTitle: world.prologue?.sceneTitle || world.runtime?.currentSceneTitle || "장면 대기",
    date: world.prologue?.date || world.runtime?.currentDate || "-",
    time: world.prologue?.time || world.runtime?.currentTime || "-",
    place: world.prologue?.place || world.runtime?.currentPlace || "-",
  };

  beginSession();
}

function openWorldSaveDialog() {
  const dialog = document.querySelector("#worldSaveDialog");
  document.querySelector("#worldSavePrompt").textContent = `${worldSaveTitle()}로 저장하시겠습니까?`;
  document.querySelector("#worldSaveStatus").textContent = "";
  document.querySelector("#worldSaveStatus").classList.remove("is-error");
  dialog.hidden = false;
}

function closeWorldSaveDialog() {
  document.querySelector("#worldSaveDialog").hidden = true;
}

async function confirmWorldSave() {
  const button = document.querySelector("#confirmWorldSave");
  const status = document.querySelector("#worldSaveStatus");
  const world = compileWorldJson();

  button.disabled = true;
  status.classList.remove("is-error");
  status.textContent = "저장 중...";

  try {
    const response = await fetch("/api/worlds", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fileName: worldFileName(), world }),
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "저장 실패");

    state.savedWorld = { ...result, world };
    status.textContent = `${result.path}에 저장했습니다.`;
    closeWorldSaveDialog();
    beginSession();
  } catch (error) {
    status.classList.add("is-error");
    status.textContent = `저장 서버에 연결할 수 없습니다. 로컬에서는 node server.js로 실행해 주세요. (${error.message})`;
  } finally {
    button.disabled = false;
  }
}

function startSession() {
  if (!state.savedWorld) {
    openWorldSaveDialog();
    return;
  }

  beginSession();
}

function savePlaySession() {
  if (!state.savedWorld) {
    openWorldSaveDialog();
    return;
  }

  state.recentChange = "현재 세션 상태를 저장 대상으로 표시했다";
  renderState();
}

function endSession() {
  if (!state.runtime) return;

  state.afterUnlocked = true;
  state.recentChange = "이번 세션이 종료되었다";
  renderState();
  renderTabLocks();
  renderAfter();
  showTab("after");
}

function closeWorldLoadDialog() {
  document.querySelector("#worldLoadDialog").hidden = true;
}

async function loadWorldFile(fileName) {
  const status = document.querySelector("#worldLoadStatus");
  status.textContent = "불러오는 중...";

  try {
    const response = await fetch(`/api/worlds/${encodeURIComponent(fileName)}`);
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "로드 실패");

    closeWorldLoadDialog();
    loadWorldIntoSession(result);
  } catch (error) {
    status.textContent = `세계를 불러올 수 없습니다. (${error.message})`;
  }
}

async function openWorldLoad() {
  const dialog = document.querySelector("#worldLoadDialog");
  const list = document.querySelector("#worldLoadList");
  const status = document.querySelector("#worldLoadStatus");

  dialog.hidden = false;
  list.innerHTML = "";
  status.textContent = "저장된 세계를 찾는 중...";

  try {
    const response = await fetch("/api/worlds");
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "목록 조회 실패");

    if (!result.worlds.length) {
      status.textContent = "data/worlds 아래에 저장된 JSON이 없습니다.";
      return;
    }

    status.textContent = `${result.worlds.length}개의 저장된 세계`;
    list.innerHTML = result.worlds
      .map((world) => `
        <button class="world-load-item" type="button" data-world-file="${world.fileName}">
          <strong>${world.title}</strong>
          <span>${world.playerName || "PC"} · ${world.genre || "장르 미정"} · 턴 ${world.turn || 1} · ${world.lastSceneTitle || "장면 대기"}</span>
          <span>${world.fileName}</span>
        </button>
      `)
      .join("");

    document.querySelectorAll("[data-world-file]").forEach((button) => {
      button.addEventListener("click", () => loadWorldFile(button.dataset.worldFile));
    });
  } catch (error) {
    status.textContent = `저장 목록을 불러올 수 없습니다. 로컬에서는 node server.js로 실행해 주세요. (${error.message})`;
  }
}

function resolveAction(action) {
  const roll = Math.floor(Math.random() * 20) + 1;
  const success = roll >= 8;
  const partial = !success && roll >= 6;

  state.player.fatigue = clampStatusValue("fatigue", state.player.fatigue + (success ? 1 : 3));
  state.player.morale = clampStatusValue("morale", state.player.morale + (success ? 1 : partial ? 0 : -2));

  const resultLabel = success ? "성공" : partial ? "부분 성공" : "실패";
  const resultText = success
    ? "행동은 작은 성취를 남기고 다음 장면의 문을 연다."
    : partial
      ? "원하는 것을 전부 얻지는 못했지만, 작은 진전과 새로운 부탁이 남는다."
      : "길은 막히지 않았지만 비용이 생긴다. 피로가 늘고 일정은 조금 더 까다로워진다.";
  const nextTurn = (state.runtime?.turn || 1) + 1;
  const nextSceneTitle = success ? "작은 성취가 이어지는 순간" : partial ? "부탁이 겹치는 길목" : "비용이 생긴 다음 장면";

  state.recentChange = `${action}: ${resultLabel}`;
  state.knownFacts = compactKnownFacts([...state.knownFacts, factFromAction(action, resultLabel, state.log.length)]);
  state.log.push({ action, roll, resultLabel });
  state.runtime = {
    ...(state.runtime || {}),
    turn: nextTurn,
    currentSceneTitle: nextSceneTitle,
  };

  document.querySelector("#rollStrip").textContent = `d20 ${roll} / ${resultLabel}`;
  renderPlayHeader(state.savedWorld?.world, state.runtime);
  document.querySelector("#sceneText").textContent =
    `${action}. 주사위는 ${roll}을 가리켰다. ${resultText} ` +
    `이제 다음 상황은 방금 생긴 비용과 작은 성취를 함께 안고 이어진다.`;

  renderState();
  renderAfter();
}

function answerStatusQuestion(question) {
  const normalized = question.trim();
  if (!normalized) return "현재 상태, 목표, 알려진 정보, 최근 변화에 대해 물어볼 수 있습니다.";
  if (normalized.includes("목표")) return `장기 목표는 "${state.player.goal}", 현재 단기 목표는 "${state.player.shortGoal}"입니다.`;
  if (normalized.includes("정보") || normalized.includes("실마리") || normalized.includes("단서")) return `현재 알고 있는 정보는 ${renderKnownFacts(state.knownFacts)}입니다.`;
  if (normalized.includes("상태") || normalized.includes("피로") || normalized.includes("사기") || normalized.includes("HP")) {
    return `HP ${state.player.hp}(${statusStageText("건강", state.player.hp)}), 피로 ${state.player.fatigue}(${statusStageText("피로", state.player.fatigue)}), 사기 ${state.player.morale}(${statusStageText("사기", state.player.morale)})입니다.`;
  }
  if (normalized.includes("NPC") || normalized.includes("인물")) return `초기 주요 NPC는 ${state.npcs.join(", ")}입니다.`;
  if (normalized.includes("뭐") || normalized.includes("무엇") || normalized.includes("행동")) {
    return "상태창은 정답 행동을 고르지 않습니다. 현재 선택지는 주변 확인, NPC 질문, 직접 확인, 또는 자유 행동 선언입니다.";
  }
  return "확정된 상태 안에서는 답할 수 있지만, 숨겨진 진상이나 아직 발견하지 않은 정보는 말하지 않습니다.";
}

function renderAfter() {
  const choices = state.log.length
    ? state.log.map((item) => `<p>${item.action}: d20 ${item.roll}, ${item.resultLabel}</p>`).join("")
    : "<p>아직 기록된 선택이 없습니다.</p>";

  document.querySelector("#afterSummary").innerHTML = `
    <section>
      <h3>중요 선택</h3>
      ${choices}
    </section>
    <section>
      <h3>약속 카드</h3>
      <p>${state.world.promise}</p>
    </section>
    <section>
      <h3>다음 씨앗</h3>
      <p>${state.recentChange}</p>
      <p>${state.player.shortGoal}</p>
    </section>
  `;
}

tabs.forEach((tab) => tab.addEventListener("click", () => showTab(tab.dataset.tab)));
mobileStatusToggle.addEventListener("click", () => {
  const statusPanel = document.querySelector(".status-panel");
  setMobileStatusOpen(!statusPanel.classList.contains("is-mobile-open"));
});

document.querySelector("#applyWorldSeed").addEventListener("click", applyWorldSeed);
document.querySelector("#saveStep").addEventListener("click", saveCurrentStep);
document.querySelector("#reselectPc").addEventListener("click", reselectCandidate);
document.querySelector("#resetSetup").addEventListener("click", resetSetup);
document.querySelector("#reviseStep").addEventListener("click", reviseCurrentStep);
document.querySelector("#confirmStep").addEventListener("click", confirmCurrentStep);
document.querySelector("#startSession").addEventListener("click", startSession);
document.querySelector("#savePlay").addEventListener("click", savePlaySession);
document.querySelector("#worldLoad").addEventListener("click", openWorldLoad);
document.querySelector("#endSession").addEventListener("click", endSession);
document.querySelector("#cancelWorldSave").addEventListener("click", closeWorldSaveDialog);
document.querySelector("#confirmWorldSave").addEventListener("click", confirmWorldSave);
document.querySelector("#cancelWorldLoad").addEventListener("click", closeWorldLoadDialog);
document.querySelector("#refreshAfter").addEventListener("click", renderAfter);

document.querySelectorAll(".choices button").forEach((button) => {
  button.addEventListener("click", () => resolveAction(button.dataset.action));
});

document.querySelector("#actionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#freeAction");
  const action = input.value.trim();
  if (!action) return;
  resolveAction(action);
  input.value = "";
});

document.querySelector("#statusForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#statusQuestion");
  document.querySelector("#statusAnswer").textContent = answerStatusQuestion(input.value);
  input.value = "";
});

renderSetup();
renderState();
renderTabLocks();
