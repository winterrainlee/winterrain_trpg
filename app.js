const state = {
  world: {
    genre: "추리",
    setting: "중세 수도원",
    tone: "bleak_noir",
    difficulty: "easy",
    failureCost: "low",
    promise: "fair clues, small wins",
  },
  player: {
    role: "젊은 필사 보조원",
    goal: "봉인된 필사실에서 사라진 장부의 행방을 찾는다",
    hp: 70,
    fatigue: 10,
    morale: 60,
  },
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

function readWorldForm() {
  state.world.genre = document.querySelector("#genre").value;
  state.world.setting = document.querySelector("#setting").value.trim() || "미정";
  state.world.tone = document.querySelector("#tone").value;
  state.world.difficulty = document.querySelector("#difficulty").value;
  state.world.failureCost = document.querySelector("#failureCost").value;
  state.world.promise = document.querySelector("#promise").value;
  state.player.role = document.querySelector("#protagonist").value.trim() || "이름 없는 주인공";
  state.player.goal = document.querySelector("#goal").value.trim() || "첫 목표를 찾는다";
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
  readWorldForm();
  state.knownFacts = [
    `${state.world.setting}의 규칙과 금기가 플레이를 제한한다`,
    `${state.world.genre} 장르의 약속은 ${state.world.promise}`,
  ];
  state.recentChange = "세계 생성이 확정되었다";
  state.log = [];

  document.querySelector("#sceneText").textContent =
    `${state.player.role}은 ${state.world.setting}의 첫 문턱에 서 있다. ` +
    `${state.world.tone}의 공기는 조용하지만, 목표는 분명하다. ` +
    `${state.player.goal}. 지금 제시된 상황은 아직 결론이 아니라 출발점이다. ` +
    `무엇을 먼저 확인할지 선택하거나 직접 행동을 선언할 수 있다.`;
  document.querySelector("#rollStrip").textContent = "d20 대기";

  renderState();
  renderAfter();
  showTab("play");
}

function resolveAction(action) {
  const roll = Math.floor(Math.random() * 20) + 1;
  const success = roll >= (state.world.difficulty === "easy" ? 8 : state.world.difficulty === "normal" ? 11 : 14);
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
  if (normalized.includes("목표")) return `현재 목표는 "${state.player.goal}"입니다.`;
  if (normalized.includes("정보") || normalized.includes("단서")) return `현재 알고 있는 정보는 ${state.knownFacts.join(", ")}입니다.`;
  if (normalized.includes("상태") || normalized.includes("피로") || normalized.includes("사기") || normalized.includes("HP")) {
    return `HP ${state.player.hp}, 피로 ${state.player.fatigue}, 사기 ${state.player.morale}입니다.`;
  }
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
      <p>${state.world.tone} / ${state.world.difficulty} / 실패 비용 ${state.world.failureCost}</p>
    </section>
    <section>
      <h3>다음 씨앗</h3>
      <p>${state.recentChange}</p>
      <p>다음 장면은 최근 판정의 비용과 작은 성취를 함께 반영해야 합니다.</p>
    </section>
  `;
}

tabs.forEach((tab) => tab.addEventListener("click", () => showTab(tab.dataset.tab)));

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
