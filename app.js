const pcProfiles = [
  {
    summary: "엘리안 - 젊은 필사 보조원 / 관찰력과 끈기 / 권위 앞에서 위축됨",
    role: "엘리안, 젊은 필사 보조원",
    background:
      "엘리안은 수도원 필사실에서 장부 정리와 필사 보조를 맡아 왔다. 그는 종소리, 잉크 냄새, 책상 배치처럼 남들이 지나치는 변화를 오래 기억하지만, 높은 직위의 수도사가 말하면 쉽게 물러선다.",
    fields: [
      ["말투", "조심스러운 해요체. 확신이 생기면 짧고 단단하게 말한다."],
      ["가치관", "진실은 공동체를 다치게 하더라도 기록되어야 한다."],
      ["강점", "관찰력, 끈기"],
      ["결함", "권위 앞에서 위축됨"],
    ],
    abilities: [
      ["STR 힘", "9", "-1"],
      ["DEX 민첩", "12", "+1"],
      ["CON 체력", "10", "+0"],
      ["INT 지능", "14", "+2"],
      ["WIS 통찰", "15", "+2"],
      ["CHA 매력", "11", "+0"],
    ],
    status: [
      ["건강 HP", "70", "부상 없음"],
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
    prologue:
      "저녁 종이 울린 뒤, 엘리안은 봉인된 필사실 앞에서 평소와 다른 잉크 얼룩과 사라진 장부 자리를 동시에 발견한다. 첫 선택은 현장, 종소리를 들은 사람들, 또는 기록 보관실 중 하나로 향한다.",
  },
  {
    summary: "마르타 - 약초원 관리인 / 실용성과 기억력 / 비밀을 혼자 짊어짐",
    role: "마르타, 약초원 관리인",
    background:
      "마르타는 수도원의 약초원과 병실을 오가며 사람들의 통증과 거짓말을 함께 보아 왔다. 누가 언제 다쳤고 어떤 냄새가 옷에 남는지 잘 기억하지만, 자신이 숨겨 온 작은 거래가 드러날까 봐 쉽게 마음을 열지 않는다.",
    fields: [
      ["말투", "담백한 해요체. 급하면 짧은 반말이 섞이고, 감정보다 처방을 먼저 말한다."],
      ["가치관", "살아 있는 사람을 먼저 구해야 진실도 의미가 있다."],
      ["강점", "실용성, 냄새와 증상 기억"],
      ["결함", "비밀을 혼자 짊어짐"],
    ],
    abilities: [
      ["STR 힘", "10", "+0"],
      ["DEX 민첩", "11", "+0"],
      ["CON 체력", "13", "+1"],
      ["INT 지능", "12", "+1"],
      ["WIS 통찰", "15", "+2"],
      ["CHA 매력", "10", "+0"],
    ],
    status: [
      ["건강 HP", "76", "잔병치레 없이 버틸 수 있음"],
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
    prologue:
      "저녁 종 뒤, 마르타는 병실에서 맡은 낯선 쓴 냄새가 봉인된 필사실 복도에도 남아 있음을 알아차린다. 첫 선택은 약재 창고, 병실 기록, 또는 필사실 앞의 발자국으로 향한다.",
  },
  {
    summary: "요한 - 외부 심부름꾼 / 발 빠름과 붙임성 / 규칙을 가볍게 봄",
    role: "요한, 외부 심부름꾼",
    background:
      "요한은 수도원 안팎의 심부름을 맡으며 문지기, 시장 상인, 하급 수도사와 두루 말을 텄다. 닫힌 문을 돌아가는 길을 잘 찾지만, 규칙을 가볍게 넘긴 전력이 있어 사건이 커지면 가장 먼저 의심받기 쉽다.",
    fields: [
      ["말투", "가벼운 반말 섞인 해요체. 농담으로 긴장을 누그러뜨리려 한다."],
      ["가치관", "닫힌 문보다 사람 입에서 진실이 먼저 샌다."],
      ["강점", "기동력, 붙임성"],
      ["결함", "규칙을 가볍게 봄"],
    ],
    abilities: [
      ["STR 힘", "11", "+0"],
      ["DEX 민첩", "15", "+2"],
      ["CON 체력", "12", "+1"],
      ["INT 지능", "10", "+0"],
      ["WIS 통찰", "11", "+0"],
      ["CHA 매력", "14", "+2"],
    ],
    status: [
      ["건강 HP", "72", "가벼운 상처는 익숙함"],
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
    prologue:
      "요한은 저녁 종 직후, 원래 닫혀 있어야 할 뒷문 빗장이 안쪽에서만 급히 걸린 흔적을 본다. 첫 선택은 뒷문 길, 문지기의 기억, 또는 시장에서 들어온 마지막 꾸러미로 향한다.",
  },
  {
    summary: "베네딕트 - 문서 보관인 / 기록 지식과 신중함 / 행동이 늦음",
    role: "베네딕트, 문서 보관인",
    background:
      "베네딕트는 오래된 장부와 봉인 문서의 분류 규칙을 누구보다 잘 안다. 그는 기록의 빈칸과 서체 변화를 읽어내지만, 모든 가능성을 확인하려다 결정적인 순간에 몸이 늦게 움직인다.",
    fields: [
      ["말투", "정중한 하십시오체. 생각이 길어질수록 문장이 조심스럽게 늘어난다."],
      ["가치관", "기록은 사람보다 오래 남으므로 함부로 고쳐서는 안 된다."],
      ["강점", "기록 지식, 신중함"],
      ["결함", "행동이 늦음"],
    ],
    abilities: [
      ["STR 힘", "8", "-1"],
      ["DEX 민첩", "9", "-1"],
      ["CON 체력", "11", "+0"],
      ["INT 지능", "16", "+3"],
      ["WIS 통찰", "14", "+2"],
      ["CHA 매력", "10", "+0"],
    ],
    status: [
      ["건강 HP", "68", "무리한 이동에는 약함"],
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
    prologue:
      "베네딕트는 봉인 장부 목록에서 존재해서는 안 되는 여백 번호 하나를 발견한다. 첫 선택은 색인함, 원장의 봉인 기록, 또는 마지막으로 장부를 열람한 사람의 서명으로 향한다.",
  },
  {
    summary: "리나 - 견습 서기 / 언변과 계산력 / 의심이 많음",
    role: "리나, 견습 서기",
    background:
      "리나는 숫자와 말의 빈틈을 빨리 잡아내는 견습 서기다. 후원금 계산과 식량 장부를 베껴 쓰며 수도원의 현실적인 균열을 보았지만, 쉽게 믿지 않는 성격 때문에 도움을 받을 순간에도 먼저 상대를 시험한다.",
    fields: [
      ["말투", "또렷한 해요체. 질문이 많고, 중요한 말 앞에서는 잠깐 멈춘다."],
      ["가치관", "숫자는 거짓말을 못 하지만 사람은 숫자를 숨길 수 있다."],
      ["강점", "언변, 계산력"],
      ["결함", "의심이 많음"],
    ],
    abilities: [
      ["STR 힘", "8", "-1"],
      ["DEX 민첩", "13", "+1"],
      ["CON 체력", "10", "+0"],
      ["INT 지능", "15", "+2"],
      ["WIS 통찰", "12", "+1"],
      ["CHA 매력", "14", "+2"],
    ],
    status: [
      ["건강 HP", "66", "큰 부상은 없지만 체력은 낮음"],
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
    prologue:
      "리나는 저녁 종 직후, 후원금 장부의 합계가 사라진 필사실 장부의 마지막 기록과 정확히 같은 금액만큼 어긋난다는 사실을 본다. 첫 선택은 계산표, 약초원 거래 기록, 또는 외부 후원 대리인의 편지로 향한다.",
  },
];

function buildCharacterDraft(profile) {
  return {
    kind: "character",
    background: profile.background,
    fields: profile.fields,
    abilities: profile.abilities,
    status: profile.status,
  };
}

function buildGoalsNpcDraft(profile) {
  return {
    kind: "goalsNpc",
    goals: profile.goals,
    npcs: profile.npcs,
  };
}

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
    id: "promise",
    mark: "③",
    label: "장르 약속",
    kicker: "Promise Card",
    placeholder: "보장받고 싶은 재미나 피하고 싶은 전개를 적어주세요.",
    draft: {
      kind: "bullets",
      title: "추리·수사",
      bullets: ["범인은 시작 전에 존재한다", "단서는 공정하게 배치된다", "우연이나 초자연으로 해결하지 않는다", "플레이어의 추론을 빼앗지 않는다", "작은 성취는 세션에 남는다"],
    },
  },
  {
    id: "pc",
    mark: "④",
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
    mark: "⑤",
    label: "캐릭터 상세",
    kicker: "Character Detail",
    placeholder: "PC 배경, 말투, 능력치, 초기 상태를 더 구체적으로 조정할 수 있습니다.",
    draft: buildCharacterDraft(pcProfiles[0]),
  },
  {
    id: "goals-npc",
    mark: "⑥",
    label: "목표와 NPC",
    kicker: "Goals / NPCs",
    placeholder: "목표의 방향, NPC 관계, 태도, 말투, 비밀스러운 압력을 조정할 수 있습니다.",
    draft: buildGoalsNpcDraft(pcProfiles[0]),
  },
  {
    id: "prologue",
    mark: "⑦",
    label: "프롤로그",
    kicker: "Prologue Seed",
    placeholder: "첫 장면의 장소, 사건 강도, 시작 선택지를 조정할 수 있습니다.",
    draft: {
      kind: "paragraph",
      text: pcProfiles[0].prologue,
    },
  },
];

const setupState = {
  current: 0,
  selectedCandidateIndex: 0,
  steps: setupSteps.map((step, index) => ({
    id: step.id,
    draft: step.draft,
    status: index === 0 ? "drafted" : "locked",
    revision: "",
    saved: false,
    confirmed: false,
  })),
};

const state = {
  player: {
    role: "엘리안, 젊은 필사 보조원",
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
  prologueSeed: setupSteps[6].draft.text,
  knownFacts: ["아직 첫 장면이 시작되지 않았다"],
  recentChange: "세션 준비 중",
  log: [],
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

  if (draft.kind === "candidates") {
    return `<div class="candidate-list">${draft.candidates
      .map((candidate, index) => `<button type="button" data-candidate-index="${index}" class="${index === draft.selectedIndex ? "is-selected" : ""}">${index + 1}) ${candidate}</button>`)
      .join("")}</div>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
  }

  if (draft.kind === "character") {
    return `
      <p class="draft-context">${draft.background}</p>
      <dl class="draft-list character-fields">${draft.fields
        .map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`)
        .join("")}</dl>
      <div class="ability-table">
        <div class="table-head"><span>능력</span><span>수치</span><span>보정</span></div>
        ${draft.abilities.map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}
      </div>
      <div class="status-table">
        <div class="table-head"><span>상태</span><span>값</span><span>현재 의미</span></div>
        ${draft.status.map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}
      </div>
      <p class="system-note">판정 기준: 1D20 + 보정치 ≥ DC 10~22. 장면 산문에서는 수치 대신 묘사로 표현합니다.</p>
      ${revision ? `<p class="revision-note">${revision}</p>` : ""}
    `;
  }

  if (draft.kind === "goalsNpc") {
    return `
      <dl class="draft-list">${draft.goals
        .map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`)
        .join("")}</dl>
      <div class="npc-table with-speech">${draft.npcs
        .map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`)
        .join("")}</div>
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
    button.addEventListener("click", () => selectCandidate(Number(button.dataset.candidateIndex)));
  });

  document.querySelector("#prevStep").disabled = setupState.current === 0;
  document.querySelector("#nextStep").textContent = setupState.current === setupSteps.length - 1 ? "프롤로그 준비" : "다음 단계로";
  document.querySelector("#nextStep").disabled = !currentState.confirmed;
  document.querySelector("#startSession").disabled = !setupState.steps.every((step) => step.confirmed);
}

function saveCurrentStep() {
  const current = setupState.steps[setupState.current];
  current.saved = true;
  if (!current.confirmed) current.status = "saved";
  renderSetup();
}

function selectCandidate(index) {
  const pcStepIndex = setupSteps.findIndex((step) => step.id === "pc");
  const characterStepIndex = setupSteps.findIndex((step) => step.id === "character");
  const goalsNpcStepIndex = setupSteps.findIndex((step) => step.id === "goals-npc");
  const prologueStepIndex = setupSteps.findIndex((step) => step.id === "prologue");
  const selected = pcProfiles[index];

  setupState.selectedCandidateIndex = index;
  setupState.steps[pcStepIndex].draft.selectedIndex = index;
  setupState.steps[characterStepIndex].draft = buildCharacterDraft(selected);
  setupState.steps[goalsNpcStepIndex].draft = buildGoalsNpcDraft(selected);
  setupState.steps[prologueStepIndex].draft = { kind: "paragraph", text: selected.prologue };

  state.player.role = selected.role;
  state.player.goal = selected.goals[0][1];
  state.player.shortGoal = selected.goals[1][1];
  state.player.hp = selected.playerState.hp;
  state.player.fatigue = selected.playerState.fatigue;
  state.player.morale = selected.playerState.morale;
  state.npcs = selected.npcs.map(([name, role, relation]) => `${name}: ${role}, ${relation}`);
  state.prologueSeed = selected.prologue;
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
  renderSetup();
}

function confirmCurrentStep() {
  if (setupSteps[setupState.current].id === "pc") {
    selectCandidate(0);
    return;
  }

  const current = setupState.steps[setupState.current];
  current.confirmed = true;
  current.status = "confirmed";
  renderSetup();
}

function reviseCurrentStep() {
  const input = document.querySelector("#revisionRequest");
  const request = input.value.trim();
  const current = setupState.steps[setupState.current];
  current.revision = request ? `수정 요청 반영: ${request}` : "수정 요청 반영: 현재 초안을 조금 더 정돈했습니다.";
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

function moveStep(delta) {
  const next = Math.max(0, Math.min(setupSteps.length - 1, setupState.current + delta));
  if (delta > 0 && setupState.current === setupSteps.length - 1) return;
  if (delta > 0 && !setupState.steps[setupState.current].confirmed) return;
  setupState.current = next;
  if (setupState.steps[next].status === "locked") setupState.steps[next].status = "drafted";
  renderSetup();
}

function renderState() {
  document.querySelector("#hp").textContent = state.player.hp;
  document.querySelector("#fatigue").textContent = state.player.fatigue;
  document.querySelector("#morale").textContent = state.player.morale;
  document.querySelector("#statusGoal").textContent = state.player.goal;
  document.querySelector("#knownFacts").textContent = state.knownFacts.join(" / ");
  document.querySelector("#recentChange").textContent = state.recentChange;
}

function startSession() {
  state.knownFacts = [state.world.promise, state.player.shortGoal, "프롤로그 seed가 준비되었다"];
  state.recentChange = "프롤로그가 시작되었다";
  state.log = [];

  document.querySelector("#sceneText").textContent =
    `${state.player.role}은 ${state.world.reference}의 첫 장면에 들어선다. ` +
    `${state.prologueSeed} 무엇을 먼저 확인할지 선택하거나 직접 행동을 선언할 수 있다.`;
  document.querySelector("#rollStrip").textContent = "d20 대기";

  renderState();
  renderAfter();
  showTab("play");
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

document.querySelector("#prevStep").addEventListener("click", () => moveStep(-1));
document.querySelector("#nextStep").addEventListener("click", () => moveStep(1));
document.querySelector("#saveStep").addEventListener("click", saveCurrentStep);
document.querySelector("#reviseStep").addEventListener("click", reviseCurrentStep);
document.querySelector("#confirmStep").addEventListener("click", confirmCurrentStep);
document.querySelector("#startSession").addEventListener("click", startSession);
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
