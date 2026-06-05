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
      candidates: [
        "엘리안 - 젊은 필사 보조원 / 관찰력과 끈기 / 권위 앞에서 위축됨",
        "마르타 - 약초원 관리인 / 실용성과 기억력 / 비밀을 혼자 짊어짐",
        "요한 - 외부 심부름꾼 / 발 빠름과 붙임성 / 규칙을 가볍게 봄",
        "베네딕트 - 문서 보관인 / 기록 지식과 신중함 / 행동이 늦음",
        "리나 - 견습 서기 / 언변과 계산력 / 의심이 많음",
      ],
    },
  },
  {
    id: "voice-goal",
    mark: "⑤",
    label: "말투와 목표",
    kicker: "Voice / Goals",
    placeholder: "PC 말투, 장기 목표, 단기 목표의 방향을 조정할 수 있습니다.",
    draft: {
      kind: "fields",
      fields: [
        ["PC 말투", "해요체"],
        ["장기 목표", "사라진 장부와 의문사의 진실을 밝힌다"],
        ["단기 목표", "봉인된 필사실 주변의 첫 단서를 확인한다"],
      ],
    },
  },
  {
    id: "npc",
    mark: "⑥",
    label: "주요 NPC",
    kicker: "Initial NPCs",
    placeholder: "NPC 관계, 태도, 말투, 비밀스러운 압력을 조정할 수 있습니다.",
    draft: {
      kind: "table",
      rows: [
        ["아벨 원장", "수도원장", "권위자 / 침묵", "0"],
        ["마르타", "약초원 관리인", "협력 가능 / 경계", "12"],
        ["토마스", "문지기", "불안 / 목격자", "-8"],
      ],
    },
  },
  {
    id: "status",
    mark: "⑦",
    label: "능력치와 상태",
    kicker: "Abilities / Status",
    placeholder: "PC가 더 약하거나 강하게 시작하길 원하면 적어주세요.",
    draft: {
      kind: "fields",
      fields: [
        ["강점", "관찰력, 끈기"],
        ["결함", "권위 앞에서 위축됨"],
        ["초기 상태", "HP 70 / 피로 10 / 사기 60"],
      ],
    },
  },
  {
    id: "prologue",
    mark: "⑧",
    label: "프롤로그",
    kicker: "Prologue Seed",
    placeholder: "첫 장면의 장소, 사건 강도, 시작 선택지를 조정할 수 있습니다.",
    draft: {
      kind: "paragraph",
      text:
        "저녁 종이 울린 뒤, 봉인된 필사실 앞에 있어야 할 작은 장부가 사라진다. " +
        "문은 잠겨 있고, 사람들은 서로 다른 시간을 기억한다. 첫 선택은 현장, 사람들의 반응, 또는 기록 보관실 중 하나로 향한다.",
    },
  },
];

const setupState = {
  current: 0,
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
  prologueSeed: setupSteps[7].draft.text,
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
    saved: "저장",
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
      .map((candidate, index) => `<button type="button" class="${index === 0 ? "is-selected" : ""}">${index + 1}) ${candidate}</button>`)
      .join("")}</div>${revision ? `<p class="revision-note">${revision}</p>` : ""}`;
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

  document.querySelector("#prevStep").disabled = setupState.current === 0;
  document.querySelector("#nextStep").textContent = setupState.current === setupSteps.length - 1 ? "프롤로그 준비" : "다음 단계";
  document.querySelector("#startSession").disabled = !setupState.steps.every((step) => step.confirmed);
}

function saveCurrentStep() {
  const current = setupState.steps[setupState.current];
  current.saved = true;
  if (!current.confirmed) current.status = "saved";
  renderSetup();
}

function confirmCurrentStep() {
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
  current.revision = request ? `수정 요청 반영: ${request}` : "수정 요청 반영: 현재 초안을 조금 더 정돈했습니다.";
  current.status = "drafted";
  current.confirmed = false;
  renderSetup();
}

function moveStep(delta) {
  const next = Math.max(0, Math.min(setupSteps.length - 1, setupState.current + delta));
  if (delta > 0 && setupState.current === setupSteps.length - 1) return;
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
