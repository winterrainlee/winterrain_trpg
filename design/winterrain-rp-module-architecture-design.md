# Winterrain TRPG Architecture Design

Date: 2026-06-05

Source references:

- GPTs prompt references: `prompt/Core.md`, `prompt/Setup.md`, `prompt/StatusView.md`, `prompt/Ending.md`
- Benchmark designs:
  - `design/text-rpg-mystery-master-generation-benchmark-design.md`
  - `design/text-rpg-detective-reveal-scene-benchmark-design.md`

Current implementation decision:

```text
IMPLEMENT_E4B_PLUS_26B_FIRST
KEEP_12B_AS_RP_PROSE_TARGET
PROMPT_DIR_IS_REFERENCE_ONLY
```

`prompt/` is GPTs-oriented reference material and is intentionally ignored by git. The webapp should translate those contracts into app modules instead of depending on prompt files at runtime.

## Product Shape

Winterrain TRPG is not a freeform AI chat RP tool. It is a webapp for preparing, playing, and reviewing a single-player TRPG session.

The session has three parts:

```text
1부 세계 생성
2부 세션 플레이
3부 애프터 세션
```

Core product principle:

```text
장르는 플레이 규칙을 정하고, 세계관은 그 규칙에 감정과 몰입을 입힌다.
```

The user does not merely enter a setting. In 1부, the user and AI master co-create the small session rulebook: genre, world frame, play promises, PC, goals, NPCs, and prologue seed. In 2부, the app runs the game loop. In 3부, the app turns the session log into meaning and next-session material.

## Why This Is Not One Giant Prompt

The old ChatGPT Project prompt set works as a monolithic play contract, but a local webapp needs stricter ownership boundaries.

- Deterministic app code owns canonical state, rolls, effects, validation, logs, persistence, and export.
- Local models draft setup material and write player-facing prose.
- Model output never directly mutates canonical game state.
- Long prompt blocks should become small step-specific prompt contracts.
- Setup drafts remain drafts until the user confirms them.

## High-Level Flow

```mermaid
flowchart LR
  A["1부 세계 생성<br/>Setup Wizard"] --> B["Compile confirmed setup<br/>into SessionState"]
  B --> C["2부 세션 플레이<br/>Turn Loop"]
  C --> D["3부 애프터 세션<br/>Review and Next Seed"]
  D -->|continue same campaign| A

  A -.-> M1["Draft route<br/>26B setup drafts<br/>E4B compact fallback"]
  C -.-> M2["Prose route<br/>26B master prose<br/>12B later rp_prose profile"]
  C -.-> M3["Status Q&A route<br/>E4B status assistant"]
  D -.-> M4["Summary route<br/>26B or E4B aftertalk"]
```

## Core Modules

| Module | Owner | Model? | Role |
| --- | --- | ---: | --- |
| `SetupWizard` | App + LLM | Yes | 1부 단계 진행, draft/confirmed 분리, 수정 요청 반영 |
| `SetupPromptCompiler` | App | No | `Setup.md` 계약을 단계별 작은 prompt로 변환 |
| `SetupStateStore` | App | No | seed, step draft, confirmed step, revision history 저장 |
| `SessionCompiler` | App | No | confirmed setup만 `SessionState`로 변환 |
| `SessionStore` | App | No | 세션 JSON, 턴 로그, world changes 저장 |
| `RuleEngine` | App | No | 판정, DC, 피로/사기, 목표 진행, 엔딩 조건 |
| `ScenePlanner` | App + optional LLM | Optional | 다음 장면 seed, required/forbidden beats 생성 |
| `MasterProse` | 26B first, 12B later | Yes | 플레이어용 장면 산문 생성 |
| `StatusView` | App | No | 상태창 deterministic 렌더링 |
| `StatusAssistant` | E4B | Yes | 허용된 상태 slice 안에서 질문 답변 |
| `StateApplier` | App | No | effects와 선택 결과를 canonical state에 반영 |
| `CriticVerifier` | App + optional model | Optional | POV, hidden truth, forced resolution, state mutation claim 검증 |
| `AfterSession` | App + optional LLM | Optional | 로그 기반 회고, 약속 카드 검토, 다음 seed 제안 |

## Data Model

Two states must stay separate.

### SetupState

`SetupState` is not the game state. It is a draft workspace for 1부.

```json
{
  "seed": "",
  "currentStep": "worldFrame",
  "steps": {
    "worldFrame": {
      "status": "drafted",
      "draft": {},
      "confirmed": null,
      "revisionHistory": []
    }
  }
}
```

Step status:

```text
locked
drafted
saved
confirmed
```

Rules:

- `draft` may be regenerated or revised freely.
- `saved` preserves a work-in-progress draft but does not commit it to canonical setup.
- `confirmed` is the only value used by `SessionCompiler`.
- Before prologue starts, the user must approve saving the compiled setup as `[캐릭터명]-[날짜]-[장르].json`.
- The saved JSON is the canonical base for play; LLM output can propose prose or effects but cannot mutate this file by claim.
- The user can go backward to revise a confirmed step, but that should mark dependent later steps as potentially stale in a future implementation.

### SessionState

`SessionState` begins only after 1부 is confirmed and prologue starts.

```json
{
  "world": {
    "genre": "",
    "techLevel": "",
    "referenceWorld": "",
    "tone": "",
    "coreConflict": "",
    "promiseCard": {
      "type": "",
      "toggles": {},
      "promises": []
    },
    "context": ""
  },
  "rules": {
    "source": ["prompt/Core.md", "prompt/Setup.md", "prompt/StatusView.md"],
    "checks": {
      "formula": "1D20 + ability.mod >= DC",
      "dcRange": {"min": 10, "max": 22},
      "difficultyMode": "easy",
      "easyMode": {
        "partialSuccessBias": true,
        "preserveCoreClues": true
      },
      "resolutionOrder": ["criticalFailure", "criticalSuccess", "success", "partialSuccess", "failure"],
      "activeResultBands": [],
      "resultBandsByDifficulty": {
        "쉬움": [
          {"key": "criticalSuccess", "condition": "natural20 or total >= dc + 5"},
          {"key": "success", "condition": "total >= dc"},
          {"key": "partialSuccess", "condition": "dc - 4 <= total < dc"},
          {"key": "failure", "condition": "dc - 8 <= total <= dc - 5"},
          {"key": "criticalFailure", "condition": "natural1 or total <= dc - 9"}
        ],
        "보통": [
          {"key": "criticalSuccess", "condition": "natural20 or total >= dc + 5"},
          {"key": "success", "condition": "total >= dc"},
          {"key": "partialSuccess", "condition": "dc - 2 <= total < dc"},
          {"key": "failure", "condition": "dc - 7 <= total <= dc - 3"},
          {"key": "criticalFailure", "condition": "natural1 or total <= dc - 8"}
        ],
        "어려움": [
          {"key": "criticalSuccess", "condition": "natural20 and total >= dc or total >= dc + 7"},
          {"key": "success", "condition": "total >= dc"},
          {"key": "partialSuccess", "condition": "total == dc - 1"},
          {"key": "failure", "condition": "dc - 6 <= total <= dc - 2"},
          {"key": "criticalFailure", "condition": "natural1 or total <= dc - 7"}
        ]
      },
      "dcGuidelines": []
    },
    "status": {
      "hp": {"range": [0, 100], "default": 70, "deathAt": 0},
      "fatigue": {"range": [0, 20], "startingRange": [8, 12], "bands": [], "recovery": {}},
      "morale": {"range": [0, 100], "default": 60, "startingRange": [50, 70], "bands": [], "gain": {}, "loss": {}}
    },
    "goals": {
      "shortGoalCompleteWhen": "player.goals.progress.shortPercent == 100",
      "mainGoalCompleteWhen": "player.goals.progress.mainComplete == true"
    },
    "narrationConstraints": {
      "hideNumbersInFiction": true,
      "allowedNumericSurfaces": ["rollBlock", "statusSummary", "statusView"],
      "turnOneSkipsRollBlock": true
    }
  },
  "player": {
    "name": "",
    "background": "",
    "values": [],
    "traits": {"strengths": [], "flaws": []},
    "abilities": {"STR": 0, "DEX": 0, "CON": 0, "INT": 0, "WIS": 0, "CHA": 0},
    "mods": {"STR": 0, "DEX": 0, "CON": 0, "INT": 0, "WIS": 0, "CHA": 0},
    "status": {"hp": 70, "fatigue": 10, "morale": 60},
    "goals": {
      "main": "",
      "short": "",
      "mainComplete": false,
      "progress": {"shortPercent": 0, "completedShort": [], "globalPercent": 0}
    },
    "speech": ""
  },
  "npcs": {},
  "prologue": {
    "sceneTitle": "",
    "date": "",
    "time": "",
    "place": "",
    "summary": ""
  },
  "timeline": [],
  "summary": {
    "daysPassed": 0,
    "turnsTotal": 0,
    "npcCount": 0,
    "worldChanges": []
  }
}
```

Compatibility note:

- Internal names can be readable webapp names.
- When needed, adapters can compile to old `wf/ps/np/tl/su` prompt shapes.
- The old GPTs prompt schema is reference material, not the runtime storage format.

## 1부 세계 생성 UX

1부 is a session-zero style wizard. The player should feel that the session is being shaped with an AI master, not that a static setup form is being filled.

Current shell layout:

```text
left rail:
  world seed
  [세계 seed 적용]
  ① 세계 골격
  ② 세계 맥락
  ③ PC 후보
  ④ 캐릭터 상세
  ⑤ 세션 규칙
  ⑥ 프롤로그
  [설정 초기화]

right stage:
  current step draft
  request input + [수정 반영]
  right-aligned [임시 저장] [설정 확정]
```

### Setup Steps

| Step | Purpose | Output |
| --- | --- | --- |
| `① 세계 골격` | seed를 장르, 시대, 참조 세계, 톤, 핵심 갈등으로 정리 | `worldFrame` draft |
| `② 세계 맥락` | 정치/문화/권력/현재 긴장 상태를 1~2단락으로 구체화 | `worldContext` draft |
| `③ PC 후보` | 세계에 맞는 PC 후보 5명 제안 | temporary candidates |
| `④ 캐릭터 상세` | 선택한 PC의 배경, 가치관, 말투, 능력치, 보정치, 건강/피로/사기, 핵심 NPC를 확정 | `player.background`, `player.speech`, `player.abilities`, `player.status`, `npcs` |
| `⑤ 세션 규칙` | 장기 목표, 장르 약속, 난이도, 게임 오버 조건을 프롤로그 직전 확정 | `player.goals.longTerm`, `promiseCard`, `difficulty`, `gameOver` |
| `⑥ 프롤로그` | 단기 목표와 첫 장면의 제목, 날짜, 시각, 장소, 상황 압력을 간략히 준비 | `player.goals.shortTerm`, `prologue` |

### Setup Wizard Flow

```mermaid
flowchart TD
  A["World seed input"] --> B["Current setup step"]
  B --> C["Build draft<br/>dummy now, 26B later"]
  C --> D["Show draft on right stage"]
  D --> E{"Player action"}
  E -->|"수정 요청"| F["Revise current draft"]
  F --> D
  E -->|"임시 저장"| G["Save draft<br/>status = saved"]
  G --> D
  E -->|"설정 확정"| H["Commit step confirmed"]
  E -->|"PC 후보 선택"| P["Mark selected candidate<br/>stay on PC 후보"]
  P --> B
  H --> I{"All steps confirmed?"}
  I -->|No| J["Auto-open next step"]
  J --> B
  I -->|Yes| K["Enable 프롤로그 시작"]
  K --> L["SessionCompiler creates SessionState"]
```

### Setup Rules

- Setup is allowed to be conversational and revisable.
- `세계 seed 적용` converts the user's seed into the first world frame/context draft and marks setup from `① 세계 골격` as unconfirmed again.
- A revision request updates only the current step draft.
- `임시 저장` preserves the draft but does not make it canonical.
- `설정 확정` copies the draft into confirmed setup state and automatically opens the next step.
- In `③ PC 후보`, choosing a candidate only marks the selected card. `설정 확정` commits the candidate and opens `④ 캐릭터 상세`.
- `PC 다시 선택` is visible only in `④ 캐릭터 상세`, where the user can still naturally reject the selected PC before session rules and prologue are locked.
- `설정 초기화` is a global destructive action in the left rail. It returns setup to `① 세계 골격`, clears unconfirmed setup state, and requires confirmation.
- `④ 캐릭터 상세` owns the player's deeper background, speech style, values, strengths/flaws, six abilities, modifiers, health/fatigue/morale, and the initial relationship network.
- `⑤ 세션 규칙` locks the long-term goal, genre promises, play difficulty, and game-over conditions immediately before prologue.
- `⑥ 프롤로그` owns the short-term goal together with the first scene seed.
- A confirmed step becomes the source for later prompts.
- The app should expose progress clearly through circled-number navigation and per-step status.
- `프롤로그 시작` should remain disabled until all required setup steps are confirmed.
- Future implementation should mark dependent later steps stale when an earlier confirmed step changes.

## 2부 세션 플레이 UX

The default rule loop is intentionally simple.

```text
세계 설정 후, 상황이 제시된다
-> 선택지를 고르거나 직접 행동을 만든다
-> 행동의 결과를 주사위로 판정한다
-> 판정을 반영하여 다음 상황을 만든다
```

The webapp should show the main play panel and status panel together.

```text
main play panel:
  narrative
  current time/location
  roll result
  choices
  free action input

status panel:
  HP / fatigue / morale
  current goal
  known facts
  recent change
  allowed status Q&A
```

### Turn Pipeline

```mermaid
flowchart TD
  A["Player chooses option<br/>or declares free action"] --> B["Command Router"]
  B -->|status question| SQ["StatusAssistant route"]
  SQ --> SF["Allowed state slice filter"]
  SF --> SA["E4B status answer"]
  SA --> SR["Render in status panel"]

  B -->|END| ER["EndingRenderer"]
  ER --> AS["AfterSession"]

  B -->|normal action| C["RuleEngine<br/>infer check, DC, roll"]
  C --> D["Effect Planner<br/>success, partial, fail, cost"]
  D --> E["ScenePlanner<br/>next scene seed"]
  E --> F["PromptCompiler<br/>small MasterProse input"]
  F --> G["MasterProse<br/>26B first"]
  G --> H["CriticVerifier"]
  H --> I["Render narrative and choices"]
  I --> J["StateApplier"]
  J --> K["SessionStore<br/>timeline append"]
  K --> L["StatusView refresh"]
```

Rules:

- Roll and effects are decided before prose generation.
- Prose sees `roll_result`, but cannot override it.
- `MasterProse` returns visible text, choices, and short summary.
- World/NPC change candidates are suggestions only and must be validated.
- The app writes canonical state and timeline.

## Status Panel

Status is a play aid, not a second master.

Role:

```text
현재 상태 제시 + 게임 허용 범위 안에서 유저 질문에 답변
```

Allowed:

- summarize canonical state
- explain known information
- answer questions about HP, fatigue, morale, goals, known clues, NPC relationships, and recent logs
- restate available options without choosing for the player

Forbidden:

- reveal hidden truth
- infer undiscovered clues
- recommend the single correct action
- progress the scene
- mutate state

Routing:

| Surface | Owner | Model route |
| --- | --- | --- |
| Main play prose | `MasterProse` | 26B first, 12B later for `rp_prose` profile |
| Status rendering | App | deterministic |
| Status Q&A | `StatusAssistant` | E4B is sufficient |
| State changes | `StateApplier` | app only |

## 3부 애프터 세션

After session is part of play. It is where the player sees what the session meant and what can continue.

After session should summarize:

- important choices
- roll outcomes and durable consequences
- goal progress
- NPC and faction changes
- world changes
- promise-card fit
- next-session seeds

```mermaid
flowchart TD
  A["Session log"] --> B["Deterministic summary builder"]
  B --> C["PromiseCard review"]
  B --> D["World/NPC changes"]
  B --> E["Open threads"]
  C --> F["AfterSession prose<br/>optional 26B/E4B"]
  D --> F
  E --> F
  F --> G["Next-session seed"]
  G --> H{"Continue?"}
  H -->|Yes| I["Return to setup or next act setup"]
  H -->|No| J["Export / archive"]
```

## Hard Invariants

These are app-level constraints, not only prompt instructions.

1. Single PC limited third-person perspective.
2. NPCs may only speak from their own knowledge.
3. PC/NPC speech style must follow confirmed speech settings.
4. Model output does not mutate numeric or canonical state.
5. Model output must not claim it saved files or updated state.
6. Stored truth, world frame, promise card, and confirmed setup cannot drift silently.
7. Genre promise card is fixed during a session unless the user explicitly starts a new setup/act transition.
8. Basic ending triggers are `hp <= 0`, `mainComplete == true`, and player `END`.
9. World tone and play difficulty are separate.
10. Mystery truth must be locked before play or before the mystery case begins.

## Prompt Compilation

Do not send all reference prompts every turn. Compile small prompts.

### Setup Draft Prompt

Each setup step should receive:

```json
{
  "seed": "",
  "confirmedPriorSteps": {},
  "currentStep": "",
  "revisionRequest": "",
  "outputContract": {}
}
```

The model returns a step draft only. The app stores it as draft until the user confirms.

### MasterProse Input

```json
{
  "rules": {
    "pov": "single_pc_limited_third_person",
    "npcKnowledge": "direct_knowledge_only",
    "speech": "use_confirmed_speech_styles",
    "noStateMutationClaims": true,
    "stopBeforeResolutionUnlessEnding": true
  },
  "world": {
    "genre": "",
    "tone": "",
    "referenceWorld": "",
    "promiseCard": "",
    "contextSummary": ""
  },
  "player": {
    "name": "",
    "background": "",
    "values": [],
    "traits": [],
    "speech": "",
    "currentGoal": ""
  },
  "turn": {
    "number": 0,
    "location": "",
    "previousChoice": "",
    "roll": {"ability": "", "formula": "", "success": true, "summary": ""},
    "sceneSeed": "",
    "effectsPreview": {},
    "requiredBeats": [],
    "forbiddenBeats": []
  }
}
```

### MasterProse Output

```json
{
  "title": "",
  "visibleText": "",
  "choices": ["", "", ""],
  "shortSummary": "",
  "worldChangeCandidates": [],
  "npcChangeCandidates": []
}
```

The app may accept `visibleText`, `choices`, and `shortSummary` directly. All candidates require validation.

## Runtime Model Profiles

Local deployment should treat large-model choice as a service profile, not a cheap per-turn switch.

| Profile | Loaded models | Use case |
| --- | --- | --- |
| `fast_stable` | E4B + 26B | Initial implementation. E4B for status/short text, 26B for setup and master prose. |
| `rp_prose` | E4B + 12B | Later profile for stronger RP prose, reveal scenes, and endings. |

Initial default:

```text
fast_stable = E4B + 26B
```

Model routing:

| Task | Preferred | Fallback | Notes |
| --- | --- | --- | --- |
| Setup step draft | 26B | E4B compact draft | 1부 wizard |
| Setup revision | 26B | E4B for small edits | Must update draft only |
| Status Q&A | E4B | App deterministic response | Use allowed state slice |
| Short transition | E4B | active large model | Low-stakes turns |
| Normal master prose | 26B | E4B brief prose | Initial default |
| Mystery clue scene | 26B | E4B short draft | Truth must stay locked |
| Detective reveal | 26B first | 12B in later profile | Reuse Bench 3 criteria |
| Ending prose | 26B | E4B brief epilogue | App appends deterministic result |
| After session summary | App + E4B/26B | App only | Must ground in logs |

## Tone And Difficulty

World tone and play difficulty are separate. A setting can be oppressive, tragic, noir, or politically dangerous while the play loop still gives frequent success, partial success, and small durable changes.

| Axis | Meaning | Example values |
| --- | --- | --- |
| `worldTone` | Emotional and genre atmosphere | hopeful, realistic, noir, bleak, tragic |
| `playDifficulty` | How often player actions succeed | easy, normal, hard |
| `failureCost` | How much failure hurts PC, NPCs, or world | low, medium, high |
| `hopeGuarantee` | Whether small wins survive pressure | none, small_wins, hopeful_resistance |

Recommended modes:

| Mode | Contract |
| --- | --- |
| `hopeful_resistance` | Dark setting, softened failures, small durable gains survive. |
| `realist_pressure` | Costs matter, partial success is common, story keeps moving. |
| `tragic_pressure` | High failure cost; use only when explicitly chosen. |

Runtime rule when `worldTone` is dark but `playDifficulty` is easy:

- keep institutional pressure visible
- prefer success or partial success over dead-end failure
- make costs indirect and manageable
- preserve at least one small concrete gain per major arc
- avoid total negation unless the player opted into `tragic_pressure`

## Genre Profiles

Genre determines what play means. Setting determines how that play feels alive.

| Genre | Core fantasy | Primary state | Typical pressure | Prototype fit |
| --- | --- | --- | --- | --- |
| 생활/모험 | 일상 속 사건, 작은 성취, 관계 변화 | goals, NPC relations, light resources | fatigue, time, social friction | Good first |
| 탐사 | 숨겨진 장소와 비밀 해금 | locationMap, siteTruth, discoveries, hazards, access | locked areas, resource/time pressure | Good second |
| 추리 | 단서, 모순, 범인/수법 추론 | truthLock, clues, knownBy, suspicion, records | false leads, source risk, evidence decay | Later |
| 정치 | 세력 사이 신용/명분/거래 축적 | factions, leverage, publicNarrative, reputation, riskExposure | faction distrust, debt/favor chains | Later |
| 전쟁 | 전선/보급/사기/명령 판단 | fronts, forces, supply, morale, commanders | attrition, fog of war, logistics | Later |

Genre promise cards:

| Card | Default promise |
| --- | --- |
| 생활/모험 | small wins, recoverable setbacks, relationship beats |
| 탐사 | core secret exists, discovery is rewarded, curiosity matters |
| 추리 | truth exists, fair clues, no pure accident/luck solution unless opted in |
| 정치 | factions act proactively, deals have costs, public narrative matters |
| 전쟁 | logistics and morale matter, fog of war exists, orders have delay |

### Mystery Rule

Mystery is fair only when the answer exists before play.

Minimum `truthLock`:

```json
{
  "culprit": "",
  "victim": "",
  "method": "",
  "motive": "",
  "timeline": [],
  "coreEvidence": [],
  "redHerrings": [],
  "revelationConditions": []
}
```

The model may improvise scenes, NPC reactions, atmosphere, minor clues, and discovery routes, but not culprit, method, motive, or core evidence.

### Political / Strategic Rule

Political play needs persistent pressure objects:

- `factions`
- `leverage`
- `publicNarrative`
- `reputation`
- `riskExposure`
- `records`
- `unresolvedThreads`

One action can mean different things to different audiences.

## Turn Types

Define turn type before model call.

```text
setup
prologue
normal_scene
investigation
dialogue
combat_or_danger
political_pressure
exploration
detective_reveal
short_transition
ending
aftertalk
```

For `detective_reveal`, reuse Bench 3 criteria:

- do not steal player conclusion
- keep culprit/truth fixed
- integrate known evidence
- include NPC/crowd reaction
- stop before confession/arrest/verdict unless ending turn

## Storage And Logs

Store three layers.

1. Setup workspace:
   - seed
   - step drafts
   - confirmed setup values
   - revision history

2. Canonical session state:
   - world/player/npc/timeline/summary
   - deterministic, compact, queryable

3. Narrative transcript:
   - rendered turn text
   - player input
   - selected choices
   - model id, latency, prompt version
   - validation warnings

This allows replay, export, after-session review, and model comparison without trusting model claims.

## Validation

Minimum validators:

- `setupRequiredFields`: current setup step has required draft fields
- `setupDependencyStale`: later confirmed steps may be stale after earlier changes
- `povLeak`: impossible knowledge or hidden truth exposure
- `forcedResolution`: premature confession/arrest/verdict
- `stateMutationClaim`: "상태를 갱신했다", "저장했다" style claims
- `speechStyle`: PC/NPC speech style drift
- `promiseCard`: genre promises and forbidden beats
- `toneDifficultyContract`: bleak tone does not imply harsh play unless chosen
- `lengthProfile`: per turn type
- `choiceCount`: 2~4 choices unless freeform-only

Validation results should be visible in dev/debug UI, not normal play UI.

## Webapp Interface

Primary navigation:

- `1부 세계`: setup wizard shell
- `2부 플레이`: main play panel + status panel
- `3부 애프터`: session summary, promise-card review, next seed, export/replay

1부 current shell:

- left rail with seed and circled-number steps
- right top navigation: previous, save, next
- step draft card
- revision request box
- revise and confirm actions
- prologue start disabled until setup is confirmed

2부 current shell:

- narrative area
- roll result strip
- choice buttons
- free action input
- status panel with deterministic state and allowed Q&A

Avoid exposing raw JSON in normal play. Add export under advanced menu later.

## Benchmarks To Add

1. `setup-step-draft`
   - seed + prior confirmed steps -> one setup step draft.

2. `setup-revision-discipline`
   - revision request updates only current draft and preserves confirmed prior steps.

3. `normal-turn-continuity`
   - player action -> roll -> prose without hidden knowledge.

4. `status-render-deterministic`
   - app-rendered status matches canonical state.

5. `detective-reveal-round2`
   - compact stored setup + current player declaration only.

6. `ending-with-promise-card`
   - ending reveals culprit/motive/method/evidence when mystery promises require it.

## Adoption Plan

Phase 1:

- Keep GPTs prompts as reference docs only.
- Build static setup wizard shell with dummy data.
- Add SetupState shape and step navigation behavior.
- Build deterministic status view and simple turn log.

Phase 2:

- Implement setup step draft API route with 26B.
- Add setup revision route.
- Compile confirmed setup into `SessionState`.
- Add validators for setup required fields and stale dependencies.

Phase 3:

- Implement normal turn pipeline with deterministic roll/effects.
- Add E4B/26B routing.
- Add status Q&A with allowed state slice.

Phase 4:

- Add optional 12B `rp_prose` profile.
- Add reveal/ending validators and human preference reports.
- Add session export/import, replayable logs, and after-session review.

## Current RP Model Judgment

Current local benchmark read:

```text
E4B: short transitions, status Q&A, fast compact drafts
26B: stable fast baseline for setup and master prose
12B: preferred RP prose target for plot, atmosphere, and climactic scenes
```

12B should not be treated as an agentic worker. Its best role is master prose generation under deterministic app control.

Operational target:

```text
initial = E4B + 26B
later rp_prose = E4B + 12B
```

The first milestone should prove that setup wizard flow, state separation, turn pipeline, validation, and UI interaction work correctly. After that, the same pipeline can be rerun under the `rp_prose` profile to recover stronger 12B writing style.
