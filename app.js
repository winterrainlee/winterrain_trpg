const state = {
  setup: {
    seed: "중세 수도원 추리. 어둡지만 플레이 난이도는 쉽고, 작은 승리는 남았으면 좋겠다.",
    confirmed: false,
  },
  world: {
    genre: "초안 대기",
    tech: "초안 대기",
    reference: "초안 대기",
    tone: "초안 대기",
    conflict: "초안 대기",
    context: "",
    promise: "장르 약속 카드가 아직 없습니다.",
  },
  player: {
    role: "아직 선택되지 않음",
    goal: "아직 확정되지 않음",
    shortGoal: "아직 확정되지 않음",
    hp: 70,
    fatigue: 10,
    morale: 60,
  },
  npcs: [],
  prologueSeed: "프롤로그 seed가 아직 없습니다.",
  knownFacts: ["아직 첫 장면이 시작되지 않았다"],
  recentChange: "세션 대기 중",
  log: [],
};

const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");

function showTab(id) {
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === id));
  views.forEach((view) => view.classList.toggle("is-active", view.id === id));
}

function inferDraft(seed) {
  const isMystery = /추리|수사|탐정|미스터리/.test(seed);
  const isPolitics = /정치|궁정|원로원|권력|협상/.test(seed);
  const isWar = /전쟁|군단|전선|토탈워/.test(seed);
  const isExploration = /탐사|유적|저택|던전|개척/.test(seed);
  const hasMonastery = /수도원|필사|수사|고해/.test(seed);
  const isDark = /어둡|암울|느와르|비극|쓸쓸/.test(seed);
  const easy = /쉽|쉬운|작은 승리|희망/.test(seed);

  const genre = isMystery
    ? "중세 종교 추리"
    : isPolitics
      ? "정치극"
      : isWar
        ? "전쟁 지휘극"
        : isExploration
          ? "탐사"
          : "생활/모험";
  const setting = hasMonastery ? "중세 수도원" : "사용자 seed 기반 세계";

  return {
    genre,
    tech: hasMonastery ? "중세" : "seed 기반 시대",
    reference: hasMonastery ? "현실 유럽 중세 수도원 변주" : "사용자 seed 변주",
    tone: isDark ? (easy ? "어둡지만 작은 승리가 남는 분위기" : "차분하고 어두운 분위기") : "차분하고 회복 가능한 분위기",
    conflict: isMystery
      ? "닫힌 공동체 안에서 사라진 기록과 의문스러운 죽음의 진실"
      : "작은 선택이 관계와 세계의 방향을 바꾸는 첫 사건",
    context:
      `${setting}은 겉으로는 질서가 유지되지만, 내부에는 오래된 침묵과 이해관계가 쌓여 있다. ` +
      `최근 사라진 기록 하나가 사람들의 태도를 바꾸기 시작했고, 주인공은 그 틈에서 첫 단서를 붙잡는다. ` +
      `세계는 압박을 주지만 플레이는 막히지 않으며, 실패는 길을 닫기보다 비용과 새로운 압력으로 남는다.`,
    promise: isMystery
      ? "추리·수사: 범인 있음, 공정 단서, 우연 해결 금지, 플레이어 추론 존중, 작은 성취 보존"
      : "기본 약속: 회복 가능한 실패, 관계 변화, 작은 성취, 다음 행동 여지 보존",
    candidates: [
      "1) 엘리안 - 젊은 필사 보조원 / 진실 우선 / 관찰력, 끈기 / 권위 앞에서 위축됨",
      "2) 마르타 - 약초원 관리인 / 생명 보호 / 실용성, 기억력 / 비밀을 혼자 짊어짐",
      "3) 요한 - 수도원 외부 심부름꾼 / 자유 지향 / 발 빠름, 붙임성 / 규칙을 가볍게 봄",
      "4) 베네딕트 - 늙은 문서 보관인 / 질서 중시 / 기록 지식, 신중함 / 행동이 늦음",
      "5) 리나 - 귀족 가문의 견습 서기 / 명예 회복 / 언변, 계산력 / 의심이 많음",
    ],
    selectedCandidate: "엘리안, 젊은 필사 보조원",
    mainGoal: isMystery ? "사라진 장부와 의문사의 진실을 밝힌다" : "첫 사건을 해결하고 자신의 자리를 만든다",
    shortGoal: hasMonastery ? "봉인된 필사실 주변의 첫 단서를 확인한다" : "첫 장면의 이상 징후를 확인한다",
    npcs: ["아벨 원장: 침묵하는 권위자", "마르타: 약초원 관리인", "토마스: 불안한 문지기"],
    prologueSeed:
      `${setting}의 저녁 종이 울린 뒤, 봉인된 방 앞에 있어야 할 작은 장부가 사라진다. ` +
      `문은 잠겨 있고, 몇몇 사람은 서로 다른 시간을 기억한다. 첫 선택은 현장, 사람들의 반응, 또는 기록 보관실 중 하나로 향한다.`,
  };
}

function renderSetupDraft(draft) {
  document.querySelector("#draftGenre").textContent = draft.genre;
  document.querySelector("#draftTech").textContent = draft.tech;
  document.querySelector("#draftReference").textContent = draft.reference;
  document.querySelector("#draftTone").textContent = draft.tone;
  document.querySelector("#draftConflict").textContent = draft.conflict;
  document.querySelector("#draftContext").textContent = draft.context;
  document.querySelector("#promiseDraft").textContent = draft.promise;
  document.querySelector("#draftMainGoal").textContent = draft.mainGoal;
  document.querySelector("#draftShortGoal").textContent = draft.shortGoal;
  document.querySelector("#draftNpcs").textContent = draft.npcs.join(" / ");
  document.querySelector("#prologueSeed").textContent = draft.prologueSeed;

  document.querySelector("#pcDraft").innerHTML = draft.candidates
    .map((candidate, index) => `<button type="button" class="${index === 0 ? "is-selected" : ""}" data-candidate="${candidate}">${candidate}</button>`)
    .join("");

  document.querySelectorAll("#pcDraft button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#pcDraft button").forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");
      state.player.role = button.dataset.candidate.split(" - ")[0].replace(/^\d+\)\s*/, "");
    });
  });
}

function draftSetup() {
  const seed = document.querySelector("#worldSeed").value.trim() || state.setup.seed;
  const draft = inferDraft(seed);

  state.setup.seed = seed;
  state.setup.confirmed = true;
  state.world = {
    genre: draft.genre,
    tech: draft.tech,
    reference: draft.reference,
    tone: draft.tone,
    conflict: draft.conflict,
    context: draft.context,
    promise: draft.promise,
  };
  state.player.role = draft.selectedCandidate;
  state.player.goal = draft.mainGoal;
  state.player.shortGoal = draft.shortGoal;
  state.npcs = draft.npcs;
  state.prologueSeed = draft.prologueSeed;
  state.recentChange = "세계 생성 초안이 확정 대기 중";

  renderSetupDraft(draft);
  renderState();
  renderAfter();
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
  if (!state.setup.confirmed) draftSetup();

  state.knownFacts = [
    `${state.world.genre} 장르 약속이 확정되었다`,
    state.world.conflict,
    state.player.shortGoal,
  ];
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
      <p>${state.world.tone}</p>
    </section>
    <section>
      <h3>다음 씨앗</h3>
      <p>${state.recentChange}</p>
      <p>${state.player.shortGoal}</p>
    </section>
  `;
}

tabs.forEach((tab) => tab.addEventListener("click", () => showTab(tab.dataset.tab)));

document.querySelector("#draftSetup").addEventListener("click", draftSetup);
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

renderState();
