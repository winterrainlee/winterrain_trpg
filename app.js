const pcProfiles = [
  {
    summary: "엘리안 - 젊은 필사 보조원 / 관찰력과 끈기 / 권위 앞에서 위축됨",
    name: "엘리안",
    gender: "남성",
    age: "19세",
    role: "젊은 필사 보조원",
    background:
      "엘리안은 수도원 필사실에서 장부 정리와 필사 보조를 맡아 왔다. 그는 종소리, 잉크 냄새, 책상 배치처럼 남들이 지나치는 변화를 오래 기억하지만, 높은 직위의 수도사가 말하면 쉽게 물러선다.",
    fields: [
      ["말투", "조심스러운 해요체. 확신이 생기면 짧고 단단하게 말한다."],
      ["가치관", "진실은 공동체를 다치게 하더라도 기록되어야 한다."],
      ["강점", "관찰력, 끈기"],
      ["결함", "권위 앞에서 위축됨"],
    ],
    strongAbilities: ["INT", "WIS"],
    flawAbilities: ["CHA"],
    abilities: [
      ["STR 힘", "9", "-1"],
      ["DEX 민첩", "12", "+1"],
      ["CON 체력", "10", "+0"],
      ["INT 지능", "14", "+2"],
      ["WIS 통찰", "15", "+2"],
      ["CHA 매력", "11", "+0"],
    ],
    status: [
      ["건강", "70", "부상 없음"],
      ["피로", "10", "긴장했지만 움직일 수 있음"],
      ["사기", "60", "불안 속에서도 진실을 알고 싶어 함"],
    ],
    playerState: { hp: 70, fatigue: 10, morale: 60 },
    goals: [
      ["장기 목표", "사라진 장부와 의문사의 진실을 밝힌다"],
      ["단기 목표", "봉인된 필사실 주변의 첫 단서를 확인한다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["아벨 원장", "수도원장", "권위자 / 침묵", "낮고 느린 명령형", "0"],
      ["마르타", "약초원 관리인", "협력 가능 / 경계", "실용적인 반말 섞인 해요체", "12"],
      ["토마스", "문지기", "불안 / 목격자", "말끝을 흐리는 짧은 문장", "-8"],
    ],
    prologueMeta: {
      sceneTitle: "봉인된 필사실 앞",
      date: "성 마티아 축일",
      time: "저녁 종 직후",
      place: "수도원 동쪽 회랑, 봉인된 필사실 앞",
    },
    prologue:
      "저녁 종이 울린 뒤, 엘리안은 봉인된 필사실 앞에 서 있다. 문은 잠겨 있지만 평소와 다른 잉크 얼룩이 바닥에 남아 있고, 있어야 할 작은 장부의 자리가 비어 있다.",
  },
  {
    summary: "마르타 - 약초원 관리인 / 실용성과 기억력 / 비밀을 혼자 짊어짐",
    name: "마르타",
    gender: "여성",
    age: "32세",
    role: "약초원 관리인",
    background:
      "마르타는 수도원의 약초원과 병실을 오가며 사람들의 통증과 거짓말을 함께 보아 왔다. 누가 언제 다쳤고 어떤 냄새가 옷에 남는지 잘 기억하지만, 자신이 숨겨 온 작은 거래가 드러날까 봐 쉽게 마음을 열지 않는다.",
    fields: [
      ["말투", "담백한 해요체. 급하면 짧은 반말이 섞이고, 감정보다 처방을 먼저 말한다."],
      ["가치관", "살아 있는 사람을 먼저 구해야 진실도 의미가 있다."],
      ["강점", "실용성, 냄새와 증상 기억"],
      ["결함", "비밀을 혼자 짊어짐"],
    ],
    strongAbilities: ["CON", "WIS"],
    flawAbilities: ["CHA"],
    abilities: [
      ["STR 힘", "10", "+0"],
      ["DEX 민첩", "11", "+0"],
      ["CON 체력", "13", "+1"],
      ["INT 지능", "12", "+1"],
      ["WIS 통찰", "15", "+2"],
      ["CHA 매력", "10", "+0"],
    ],
    status: [
      ["건강", "76", "잔병치레 없이 버틸 수 있음"],
      ["피로", "16", "밤새 병실을 돌본 여파가 있음"],
      ["사기", "55", "진실보다 피해를 줄이는 쪽으로 기울어 있음"],
    ],
    playerState: { hp: 76, fatigue: 16, morale: 55 },
    goals: [
      ["장기 목표", "장부와 죽음이 약초원 기록과 어떻게 연결되는지 밝힌다"],
      ["단기 목표", "최근 처방 기록과 사라진 약재 목록을 대조한다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["아벨 원장", "수도원장", "은혜를 준 권위자 / 부담", "조용히 빚을 상기시키는 말투", "-4"],
      ["엘리안", "필사 보조원", "기록 협력자 / 보호 욕구", "조심스러운 해요체", "10"],
      ["루카", "병실 수도사", "같은 비밀을 아는 사람 / 압박", "상냥하지만 캐묻는 말투", "-12"],
    ],
    prologueMeta: {
      sceneTitle: "쓴 냄새가 남은 복도",
      date: "성 마티아 축일",
      time: "저녁 종이 그친 뒤",
      place: "수도원 병실과 봉인된 필사실 사이의 복도",
    },
    prologue:
      "저녁 종 뒤, 마르타는 병실에서 맡은 낯선 쓴 냄새가 봉인된 필사실 복도에도 남아 있음을 알아차린다. 복도는 이미 조용해졌지만, 냄새는 아직 사라지지 않았고 누군가 급히 지나간 흔적이 희미하다.",
  },
  {
    summary: "요한 - 외부 심부름꾼 / 발 빠름과 붙임성 / 규칙을 가볍게 봄",
    name: "요한",
    gender: "남성",
    age: "24세",
    role: "외부 심부름꾼",
    background:
      "요한은 수도원 안팎의 심부름을 맡으며 문지기, 시장 상인, 하급 수도사와 두루 말을 텄다. 닫힌 문을 돌아가는 길을 잘 찾지만, 규칙을 가볍게 넘긴 전력이 있어 사건이 커지면 가장 먼저 의심받기 쉽다.",
    fields: [
      ["말투", "가벼운 반말 섞인 해요체. 농담으로 긴장을 누그러뜨리려 한다."],
      ["가치관", "닫힌 문보다 사람 입에서 진실이 먼저 샌다."],
      ["강점", "기동력, 붙임성"],
      ["결함", "규칙을 가볍게 봄"],
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
      ["건강", "72", "가벼운 상처는 익숙함"],
      ["피로", "8", "아직 몸이 가볍고 반응이 빠름"],
      ["사기", "64", "위험을 장난처럼 밀고 나갈 기세"],
    ],
    playerState: { hp: 72, fatigue: 8, morale: 64 },
    goals: [
      ["장기 목표", "누가 수도원 안팎의 길을 이용해 장부를 빼냈는지 밝힌다"],
      ["단기 목표", "문지기와 심부름 동선을 맞춰 빈 시간을 찾는다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["토마스", "문지기", "말이 통하는 어른 / 목격자", "걱정 많은 짧은 문장", "8"],
      ["아벨 원장", "수도원장", "감시자 / 불신", "차갑고 단정한 존댓말", "-15"],
      ["니코", "시장 연락책", "가벼운 빚 / 바깥 소문", "빠르고 장난스러운 말투", "6"],
    ],
    prologueMeta: {
      sceneTitle: "급히 잠긴 뒷문",
      date: "성 마티아 축일",
      time: "저녁 종 직후",
      place: "수도원 북쪽 뒷문과 바깥 흙길",
    },
    prologue:
      "요한은 저녁 종 직후, 원래 닫혀 있어야 할 수도원 뒷문 앞에 멈춰 선다. 빗장은 안쪽에서 급히 걸린 흔적이 있고, 바깥 흙길에는 아직 마르지 않은 발자국이 끊겨 있다.",
  },
  {
    summary: "베네딕트 - 문서 보관인 / 기록 지식과 신중함 / 행동이 늦음",
    name: "베네딕트",
    gender: "남성",
    age: "46세",
    role: "문서 보관인",
    background:
      "베네딕트는 오래된 장부와 봉인 문서의 분류 규칙을 누구보다 잘 안다. 그는 기록의 빈칸과 서체 변화를 읽어내지만, 모든 가능성을 확인하려다 결정적인 순간에 몸이 늦게 움직인다.",
    fields: [
      ["말투", "정중한 하십시오체. 생각이 길어질수록 문장이 조심스럽게 늘어난다."],
      ["가치관", "기록은 사람보다 오래 남으므로 함부로 고쳐서는 안 된다."],
      ["강점", "기록 지식, 신중함"],
      ["결함", "행동이 늦음"],
    ],
    strongAbilities: ["INT", "WIS"],
    flawAbilities: ["STR", "DEX"],
    abilities: [
      ["STR 힘", "8", "-1"],
      ["DEX 민첩", "9", "-1"],
      ["CON 체력", "11", "+0"],
      ["INT 지능", "16", "+3"],
      ["WIS 통찰", "14", "+2"],
      ["CHA 매력", "10", "+0"],
    ],
    status: [
      ["건강", "68", "무리한 이동에는 약함"],
      ["피로", "14", "긴장하면 집중이 길어지는 대신 몸이 굳음"],
      ["사기", "58", "기록을 지켜야 한다는 책임감이 큼"],
    ],
    playerState: { hp: 68, fatigue: 14, morale: 58 },
    goals: [
      ["장기 목표", "조작된 기록과 진짜 장부의 계보를 복원한다"],
      ["단기 목표", "봉인 문서 목록에서 빠진 색인 번호를 확인한다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["아벨 원장", "수도원장", "상관 / 문서 봉인권자", "느리고 단호한 명령형", "2"],
      ["엘리안", "필사 보조원", "제자 같은 동료 / 신뢰", "조심스러운 해요체", "14"],
      ["세라", "외부 감찰관", "기록을 요구하는 압력 / 경계", "건조한 공식 어투", "-10"],
    ],
    prologueMeta: {
      sceneTitle: "비어 있는 색인 번호",
      date: "성 마티아 축일",
      time: "늦은 저녁",
      place: "수도원 기록 보관실",
    },
    prologue:
      "베네딕트는 늦은 저녁 기록 보관실에서 봉인 장부 목록을 펼쳐 두고 있다. 목록 한가운데에는 존재해서는 안 되는 여백 번호가 남아 있고, 마지막 열람 서명란은 누군가 일부러 흐린 듯 번져 있다.",
  },
  {
    summary: "리나 - 견습 서기 / 언변과 계산력 / 의심이 많음",
    name: "리나",
    gender: "여성",
    age: "21세",
    role: "견습 서기",
    background:
      "리나는 숫자와 말의 빈틈을 빨리 잡아내는 견습 서기다. 후원금 계산과 식량 장부를 베껴 쓰며 수도원의 현실적인 균열을 보았지만, 쉽게 믿지 않는 성격 때문에 도움을 받을 순간에도 먼저 상대를 시험한다.",
    fields: [
      ["말투", "또렷한 해요체. 질문이 많고, 중요한 말 앞에서는 잠깐 멈춘다."],
      ["가치관", "숫자는 거짓말을 못 하지만 사람은 숫자를 숨길 수 있다."],
      ["강점", "언변, 계산력"],
      ["결함", "의심이 많음"],
    ],
    strongAbilities: ["INT", "CHA"],
    flawAbilities: ["STR", "CON"],
    abilities: [
      ["STR 힘", "8", "-1"],
      ["DEX 민첩", "13", "+1"],
      ["CON 체력", "10", "+0"],
      ["INT 지능", "15", "+2"],
      ["WIS 통찰", "12", "+1"],
      ["CHA 매력", "14", "+2"],
    ],
    status: [
      ["건강", "66", "큰 부상은 없지만 체력은 낮음"],
      ["피로", "12", "머리는 맑지만 몸은 쉽게 지침"],
      ["사기", "62", "의심이 오히려 앞으로 나아가게 함"],
    ],
    playerState: { hp: 66, fatigue: 12, morale: 62 },
    goals: [
      ["장기 목표", "후원금 장부와 사라진 필사실 장부의 숫자 불일치를 밝힌다"],
      ["단기 목표", "최근 지출 내역과 식량 배급표를 비교한다"],
      ["진행 표시", "단기 0% / 전체 0%"],
    ],
    npcs: [
      ["마르타", "약초원 관리인", "숫자가 맞지 않는 거래처 / 의심", "실용적인 해요체", "-2"],
      ["베네딕트", "문서 보관인", "검산을 맡긴 선배 / 신뢰", "정중한 하십시오체", "9"],
      ["오스카", "외부 후원 대리인", "돈의 흐름 / 위험", "매끄러운 존댓말", "-14"],
    ],
    prologueMeta: {
      sceneTitle: "맞지 않는 합계",
      date: "성 마티아 축일",
      time: "저녁 종 직후",
      place: "수도원 작은 회계실",
    },
    prologue:
      "리나는 저녁 종 직후, 작은 회계실 책상 위에 후원금 장부와 식량 배급표를 나란히 펼쳐 둔다. 합계는 사라진 필사실 장부의 마지막 기록과 정확히 같은 금액만큼 어긋나 있다.",
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

function scoreForMod(mod) {
  if (mod > 0) return randomInt(10 + mod * 2, 11 + mod * 2);
  if (mod < 0) return randomInt(10 + mod * 2, 11 + mod * 2);
  return randomInt(10, 11);
}

function sumPositiveMods(mods) {
  return Object.values(mods).reduce((sum, mod) => sum + Math.max(mod, 0), 0);
}

function sumNegativeMods(mods) {
  return Object.values(mods).reduce((sum, mod) => sum + Math.min(mod, 0), 0);
}

function abilitiesByAdjustmentPriority(profile, direction) {
  const protectedAbilities = new Set(direction === "positive" ? profile.strongAbilities : profile.flawAbilities);
  return [
    ...abilityDefinitions.map(([id]) => id).filter((id) => !protectedAbilities.has(id)),
    ...abilityDefinitions.map(([id]) => id).filter((id) => protectedAbilities.has(id)),
  ];
}

function buildRandomMods(profile) {
  const strongAbilities = new Set(profile.strongAbilities);
  const flawAbilities = new Set(profile.flawAbilities);
  const mods = {};

  abilityDefinitions.forEach(([id]) => {
    if (strongAbilities.has(id)) {
      mods[id] = randomInt(0, 2);
    } else if (flawAbilities.has(id)) {
      mods[id] = randomInt(-2, 0);
    } else {
      mods[id] = randomInt(-1, 1);
    }
  });

  if (!Object.values(mods).some((mod) => mod > 0)) {
    mods[profile.strongAbilities[0]] = 1;
  }

  if (!Object.values(mods).some((mod) => mod < 0)) {
    mods[profile.flawAbilities[0]] = -1;
  }

  while (sumPositiveMods(mods) > 4) {
    const target = abilitiesByAdjustmentPriority(profile, "positive").find((id) => mods[id] > 0);
    if (!target) break;
    mods[target] -= 1;
  }

  while (sumNegativeMods(mods) < -4) {
    const target = abilitiesByAdjustmentPriority(profile, "negative").find((id) => mods[id] < 0);
    if (!target) break;
    mods[target] += 1;
  }

  return mods;
}

function validateAbilityBalance(abilities) {
  const mods = abilities.map(([, , mod]) => Number(mod));
  const positiveSum = mods.reduce((sum, mod) => sum + Math.max(mod, 0), 0);
  const negativeSum = mods.reduce((sum, mod) => sum + Math.min(mod, 0), 0);

  return {
    hasPositive: mods.some((mod) => mod > 0),
    hasNegative: mods.some((mod) => mod < 0),
    positiveSum,
    negativeSum,
    valid: mods.some((mod) => mod > 0) && mods.some((mod) => mod < 0) && positiveSum <= 4 && negativeSum >= -4,
  };
}

function generateAbilities(profile) {
  const mods = buildRandomMods(profile);
  const abilities = abilityDefinitions.map(([id, label]) => [label, String(scoreForMod(mods[id])), modLabel(mods[id])]);
  const balance = validateAbilityBalance(abilities);

  if (!balance.valid) {
    throw new Error("Ability balance rule failed");
  }

  return { abilities, balance };
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
    abilityBalance: generated.balance,
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
    abilitySource: "player.abilities[*].mod",
    difficultyMode: "easy",
    easyMode: {
      partialSuccessBias: true,
      preserveCoreClues: true,
      note: "쉬운 난이도에서는 실패해도 핵심 단서가 완전히 사라지지 않고, 비용/시간/상태 부담으로 전환한다.",
    },
    resolutionOrder: ["criticalFailure", "criticalSuccess", "success", "partialSuccess", "failure"],
    resultBandsByDifficulty: {
      쉬움: [
        { key: "criticalSuccess", condition: "natural20 or total >= dc + 5", label: "대성공", effect: "목표 진행 또는 단서 품질을 크게 올린다." },
        { key: "success", condition: "total >= dc", label: "성공", effect: "의도한 행동이 성립하고 장면이 전진한다." },
        { key: "partialSuccess", condition: "dc - 4 <= total < dc", label: "부분 성공", effect: "핵심 정보는 얻되 피로, 시간, 관계, 위험 중 하나의 비용이 생긴다." },
        { key: "failure", condition: "dc - 8 <= total <= dc - 5", label: "실패", effect: "행동은 빗나가지만 세계의 반응과 다음 실마리는 남긴다." },
        { key: "criticalFailure", condition: "natural1 or total <= dc - 9", label: "대실패", effect: "상태 또는 관계에 뚜렷한 불이익을 주되, 추리의 필수 단서는 파괴하지 않는다." },
      ],
      보통: [
        { key: "criticalSuccess", condition: "natural20 or total >= dc + 5", label: "대성공", effect: "목표 진행, 단서 품질, NPC 반응 중 하나를 크게 개선한다." },
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
      { dc: 10, label: "쉬움", examples: "명백한 흔적 확인, 우호 NPC에게 기본 질문" },
      { dc: 13, label: "보통", examples: "압박 속 조사, 애매한 말투의 거짓 감지" },
      { dc: 16, label: "어려움", examples: "감춰진 단서 연결, 적대 NPC 설득" },
      { dc: 19, label: "매우 어려움", examples: "위험한 잠입, 결정적 모순 포착" },
      { dc: 22, label: "극한", examples: "준비 없는 돌파, 강한 권위자 앞 정면 폭로" },
    ],
  },
  status: {
    hp: {
      label: "건강",
      range: [0, 100],
      default: 70,
      deathAt: 0,
      rule: "0이 되면 자동 사망하고 Ending 모듈로 이동한다.",
    },
    fatigue: {
      label: "피로",
      range: [0, 20],
      startingRange: [8, 12],
      bands: [
        { range: [0, 5], modifier: 1, appliesTo: "allChecks", note: "휴식이 충분해 전 판정 +1" },
        { range: [6, 14], modifier: 0, appliesTo: "allChecks", note: "보정 없음" },
        { range: [15, 18], modifier: -1, appliesTo: "allChecks", note: "피로 누적으로 전 판정 -1" },
        { range: [19, 20], modifier: -1, appliesTo: "allChecks", turnEndHpLoss: 5, note: "전 판정 -1, 턴 종료 시 건강 -5" },
      ],
      recovery: { rest: -3, camp: -6, medicine: -4, food: -1 },
    },
    morale: {
      label: "사기",
      range: [0, 100],
      default: 60,
      startingRange: [50, 70],
      bands: [
        { range: [80, 100], modifier: 1, appliesTo: "allChecks", note: "기세가 올라 전 판정 +1" },
        { range: [21, 79], modifier: 0, appliesTo: "allChecks", note: "보정 없음" },
        { range: [0, 20], modifier: -1, appliesTo: "allChecks", note: "위축되어 전 판정 -1" },
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

const setupSteps = [
  {
    id: "frame",
    mark: "①",
    label: "세계 골격",
    kicker: "World Frame",
    placeholder: "장르, 시대, 참조 세계, 분위기, 핵심 갈등을 조정할 수 있습니다.",
    draft: {
      kind: "fields",
      fields: [
        ["장르", "중세 종교 추리"],
        ["시대/기술", "중세"],
        ["참조 세계", "현실 유럽 중세 수도원 변주"],
        ["분위기", "어둡지만 작은 승리가 남는 분위기"],
        ["핵심 갈등", "닫힌 공동체 안에서 사라진 장부와 의문스러운 죽음"],
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
      text:
        "수도원은 오래된 필사본과 약초 기록으로 명성을 얻었지만, 외부 영주와 교단의 후원 사이에서 조용히 균열이 생기고 있다. " +
        "최근 봉인된 필사실의 장부가 사라졌고, 몇몇 수도사는 서로 다른 시간의 종소리를 기억한다. " +
        "세계는 폐쇄적이지만 플레이어의 작은 발견과 신뢰 형성은 오래 남는다.",
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
      title: "추리·수사",
      bullets: ["범인은 시작 전에 존재한다", "단서는 공정하게 배치된다", "우연이나 초자연으로 해결하지 않는다", "플레이어의 추론을 빼앗지 않는다", "작은 성취는 세션에 남는다"],
      difficulty: [
        ["플레이 난이도", "쉬움"],
        ["판정 기준", "DC 10~22를 사용하되, 쉬운 난이도에서는 부분 성공과 단서 보존을 넉넉히 적용한다"],
        ["톤과 난이도", "세계는 어둡더라도 플레이는 자주 작은 성취를 얻을 수 있다"],
      ],
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
  }));
}

function buildWorldDraftFromSeed(seed) {
  const text = seed.trim();
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
  const place = hasUnderwater ? "근미래 해저 도시" : hasMedieval ? "현실 유럽 중세 수도원 변주" : "사용자 seed 기반의 원형 세계";
  const genreParts = [];
  if (hasMedieval) genreParts.push("중세");
  if (hasNearFuture && !hasUnderwater) genreParts.push("근미래");
  if (hasUnderwater) genreParts.push("해저 도시");
  if (hasPolitical) genreParts.push("정치");
  if (hasMystery) genreParts.push("추리·수사");
  if (hasThriller) genreParts.push("스릴러");
  const genre = genreParts.length ? genreParts.join(" ") : "사용자 정의 모험";
  const tone = hasDark || hasThriller ? "불안과 압력이 강하지만 작은 성취가 남는 분위기" : "긴장과 회복이 함께 있는 분위기";
  const difficulty = wantsHard ? "어려움" : wantsEasy ? "쉬움" : "보통";
  const coreConflict = hasMystery
    ? "닫힌 공동체 안에서 사라진 기록, 숨겨진 동기, 의심스러운 죽음이 얽힌 사건"
    : hasPolitical || hasScarcity
      ? "부족한 자원, 파벌 간 이해관계, 배신 가능성이 플레이어의 선택을 압박하는 갈등"
    : "아직 말로 정리되지 않은 욕망과 위기가 플레이어의 첫 선택을 압박한다";

  return {
    frame: {
      kind: "fields",
      fields: [
        ["장르", genre],
        ["시대/기술", hasNearFuture ? "근미래" : hasMedieval ? "중세" : "seed에서 구체화 필요"],
        ["참조 세계", place],
        ["분위기", tone],
        ["핵심 갈등", coreConflict],
      ],
    },
    context: {
      kind: "paragraph",
      text:
        `${text || "아직 seed가 비어 있다."} 이 seed를 바탕으로 세계는 첫 장면 전부터 압력을 품고 있다. ` +
        `${hasMystery ? "사건의 진실은 플레이 전에 잠겨야 하며, 단서는 플레이어가 공정하게 발견할 수 있어야 한다. " : "AI 마스터는 사용자의 다음 요청을 통해 장르 약속을 더 좁혀야 한다. "}` +
        `${tone} 세계 설정은 플레이를 제한하기보다 기대를 만들고, 이후 단계의 PC 후보와 프롤로그는 이 골격을 기준으로 제안된다.`,
    },
    difficulty,
  };
}

const state = {
  player: {
    name: "엘리안",
    role: "젊은 필사 보조원",
    goal: "사라진 장부와 의문사의 진실을 밝힌다",
    shortGoal: "봉인된 필사실 주변의 첫 단서를 확인한다",
    hp: 70,
    fatigue: 10,
    morale: 60,
  },
  world: {
    genre: "중세 종교 추리",
    reference: "현실 유럽 중세 수도원 변주",
    promise: "추리·수사: 범인 있음, 공정 단서, 플레이어 추론 존중",
  },
  npcs: ["아벨 원장: 침묵하는 권위자", "마르타: 약초원 관리인", "토마스: 불안한 문지기"],
  prologueSeed: initialPrologueDraft.summary,
  prologueMeta: {
    sceneTitle: initialPrologueDraft.sceneTitle,
    date: initialPrologueDraft.date,
    time: initialPrologueDraft.time,
    place: initialPrologueDraft.place,
  },
  knownFacts: ["아직 첫 장면이 시작되지 않았다"],
  recentChange: "세션 준비 중",
  log: [],
  savedWorld: null,
};

const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");

function showTab(id) {
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === id));
  views.forEach((view) => view.classList.toggle("is-active", view.id === id));
}

function statusLabel(status) {
  return {
    locked: "대기",
    drafted: "초안",
    saved: "임시",
    confirmed: "확정",
  }[status];
}

function renderDraft(draft, revision) {
  if (draft.kind === "fields") {
    return `<dl class="draft-list">${draft.fields
      .map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`)
      .join("")}</dl>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  if (draft.kind === "bullets") {
    return `<h4>${draft.title}</h4><ul class="draft-bullets">${draft.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  if (draft.kind === "promise") {
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
    return `<div class="candidate-list">${draft.candidates
      .map((candidate, index) => `<button type="button" data-candidate-index="${index}" class="${index === draft.selectedIndex ? "is-selected" : ""}">${index + 1}) ${candidate}</button>`)
      .join("")}</div>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
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
        <p class="balance-note">보정치 균형 검사 통과: 양수 합 +${draft.abilityBalance.positiveSum} / 음수 합 ${draft.abilityBalance.negativeSum}</p>
        <p class="system-note">매턴 판정 시 1D20 주사위 값에 보정치를 더해 DC 10~22와 비교합니다. 난이도에 따라 같은 수치라도 성공, 부분 성공, 실패의 결과 폭이 달라집니다.</p>
      </section>
      <section class="draft-section">
        <h4>초기 상태</h4>
        <div class="status-table">
          <div class="table-head"><span>상태</span><span>수치</span><span>현재 의미</span></div>
          ${draft.status.map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}
        </div>
        <div class="status-guide">
          <p class="status-note"><strong>건강</strong>은 HP 개념입니다. 0이 되면 PC는 자동 사망하며 세션 종료 조건이 됩니다.</p>
          <p class="status-note"><strong>피로</strong>는 누적 부담입니다. 높아질수록 집중, 이동, 설득 같은 판정이 불리해질 수 있습니다.</p>
          <p class="status-note"><strong>사기</strong>는 마음의 버팀목입니다. 낮아질수록 공포, 포기, 충동적 선택의 압력이 커집니다.</p>
        </div>
      </section>
      <section class="draft-section">
        <h4>NPC</h4>
        <div class="npc-table with-speech">
          <div class="table-head"><span>이름</span><span>역할</span><span>관계·태그</span><span>말투</span><span>관계치</span></div>
          ${draft.npcs
            .map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`)
          .join("")}</div>
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
    return `<div class="npc-table">${draft.rows
      .map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`)
      .join("")}</div>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  return `<p class="draft-context">${draft.text}</p>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
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
        itemState.status === "locked" ? "is-locked" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `<li class="${classes}"><button type="button" data-step="${index}"><span>${step.mark}</span>${step.label}<em>${statusLabel(itemState.confirmed ? "confirmed" : itemState.status)}</em></button></li>`;
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
  document.querySelector("#stepStatus").textContent = statusLabel(currentState.confirmed ? "confirmed" : currentState.status);
  document.querySelector("#stepDraft").innerHTML = renderDraft(currentState.draft, currentState.revision);
  document.querySelector("#revisionRequest").placeholder = currentStep.placeholder;
  document.querySelector("#revisionRequest").value = "";

  document.querySelectorAll("[data-candidate-index]").forEach((button) => {
    button.addEventListener("click", () => previewCandidate(Number(button.dataset.candidateIndex)));
  });

  const pcStepIndex = setupSteps.findIndex((step) => step.id === "pc");
  const characterStepIndex = setupSteps.findIndex((step) => step.id === "character");
  document.querySelector("#reselectPc").hidden = !(setupState.steps[pcStepIndex].confirmed && setupState.current === characterStepIndex);
  document.querySelector("#startSession").disabled = !setupState.steps.every((step) => step.confirmed);
}

function saveCurrentStep() {
  const current = setupState.steps[setupState.current];
  current.saved = true;
  if (!current.confirmed) current.status = "saved";
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
  setupSteps[promiseStepIndex].draft.difficulty = [
    ["플레이 난이도", draft.difficulty],
    ["판정 기준", `DC 10~22를 사용하되, ${draft.difficulty} 난이도에 맞는 대성공/성공/부분 성공/실패/대실패 기준을 적용한다`],
    ["톤과 난이도", draft.difficulty === "어려움" ? "세계의 압력과 실패 비용이 선명하지만, 핵심 단서는 공정하게 남긴다" : "세계가 어둡더라도 플레이는 작은 성취와 다음 실마리를 자주 얻을 수 있다"],
  ];

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
  for (let stepIndex = characterStepIndex; stepIndex < setupState.steps.length; stepIndex += 1) {
    setupState.steps[stepIndex].status = stepIndex === characterStepIndex ? "drafted" : "locked";
    setupState.steps[stepIndex].confirmed = false;
    setupState.steps[stepIndex].saved = false;
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
  for (let stepIndex = characterStepIndex; stepIndex < setupState.steps.length; stepIndex += 1) {
    setupState.steps[stepIndex].status = "locked";
    setupState.steps[stepIndex].confirmed = false;
    setupState.steps[stepIndex].saved = false;
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
  state.knownFacts = ["아직 첫 장면이 시작되지 않았다"];
  state.recentChange = "세션 준비 중";
  state.log = [];
  state.savedWorld = null;

  renderState();
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
  for (let index = setupState.current + 1; index < setupState.steps.length; index += 1) {
    if (setupState.steps[index].confirmed || setupState.steps[index].status === "saved") {
      setupState.steps[index].status = "drafted";
      setupState.steps[index].confirmed = false;
      setupState.steps[index].revision = "앞 단계가 수정되어 재확인이 필요합니다.";
    }
  }
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
  const difficulty = Object.fromEntries(promise.difficulty)["플레이 난이도"];

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
      confirmedStepIds: setupState.steps.filter((step) => step.confirmed).map((step) => step.id),
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
      abilities: Object.fromEntries(
        character.abilities.map(([label, score, mod]) => [label.split(" ")[0], { label, score: Number(score), mod: Number(mod) }]),
      ),
      abilityBalance: character.abilityBalance,
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
      notes: "추리·수사 장르에서는 플레이 시작 전 범인, 동기, 방법, 핵심 단서 배치를 잠그는 것을 권장한다.",
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
  document.querySelector("#statusGoal").textContent = state.player.goal;
  document.querySelector("#knownFacts").textContent = state.knownFacts.join(" / ");
  document.querySelector("#recentChange").textContent = state.recentChange;
}

function beginSession() {
  const savedWorld = state.savedWorld?.world;
  state.knownFacts = savedWorld?.session.knownFacts || [state.prologueSeed];
  const prologue = savedWorld?.prologue || { ...state.prologueMeta, summary: state.prologueSeed };
  const runtime = savedWorld?.runtime || {
    turn: 1,
    currentDate: prologue.date,
    currentTime: prologue.time,
    currentPlace: prologue.place,
    currentSceneTitle: prologue.sceneTitle,
  };
  state.recentChange = "프롤로그가 시작되었다";
  state.log = [];

  document.querySelector("#sceneText").textContent =
    `[턴 ${runtime.turn}] ${runtime.currentSceneTitle}. ${runtime.currentDate}, ${runtime.currentTime}, ${runtime.currentPlace}. ` +
    `${prologue.summary} 이제 플레이어는 자유롭게 행동을 선언할 수 있다.`;
  document.querySelector("#rollStrip").textContent = "d20 대기";

  renderState();
  renderAfter();
  showTab("play");
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

function resolveAction(action) {
  const roll = Math.floor(Math.random() * 20) + 1;
  const success = roll >= 8;
  const partial = !success && roll >= 6;

  state.player.fatigue = Math.min(99, state.player.fatigue + (success ? 1 : 3));
  state.player.morale = Math.max(0, state.player.morale + (success ? 1 : partial ? 0 : -2));

  const resultLabel = success ? "성공" : partial ? "부분 성공" : "실패";
  const resultText = success
    ? "행동은 의미 있는 정보를 남기고 다음 장면의 문을 연다."
    : partial
      ? "원하는 것을 전부 얻지는 못했지만, 작은 단서와 새로운 압력이 남는다."
      : "길은 막히지 않았지만 비용이 생긴다. 피로가 늘고 상황은 조금 더 까다로워진다.";

  state.recentChange = `${action}: ${resultLabel}`;
  state.knownFacts.push(`${action} 판정 결과 ${resultLabel}`);
  state.knownFacts = state.knownFacts.slice(-4);
  state.log.push({ action, roll, resultLabel });

  document.querySelector("#rollStrip").textContent = `d20 ${roll} / ${resultLabel}`;
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
  if (normalized.includes("정보") || normalized.includes("단서")) return `현재 알고 있는 정보는 ${state.knownFacts.join(", ")}입니다.`;
  if (normalized.includes("상태") || normalized.includes("피로") || normalized.includes("사기") || normalized.includes("HP")) {
    return `HP ${state.player.hp}, 피로 ${state.player.fatigue}, 사기 ${state.player.morale}입니다.`;
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

document.querySelector("#applyWorldSeed").addEventListener("click", applyWorldSeed);
document.querySelector("#saveStep").addEventListener("click", saveCurrentStep);
document.querySelector("#reselectPc").addEventListener("click", reselectCandidate);
document.querySelector("#resetSetup").addEventListener("click", resetSetup);
document.querySelector("#reviseStep").addEventListener("click", reviseCurrentStep);
document.querySelector("#confirmStep").addEventListener("click", confirmCurrentStep);
document.querySelector("#startSession").addEventListener("click", startSession);
document.querySelector("#cancelWorldSave").addEventListener("click", closeWorldSaveDialog);
document.querySelector("#confirmWorldSave").addEventListener("click", confirmWorldSave);
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
