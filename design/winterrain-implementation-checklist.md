# Winterrain Implementation Checklist

Date: 2026-06-05

Purpose: track the unfinished implementation work against `design/winterrain-rp-module-architecture-design.md`.

Initial prototype genre:

```text
생활/모험
```

Reason:

- 정보 기획 부담이 낮다.
- hidden truth나 복잡한 faction state 없이도 세션 루프를 검증할 수 있다.
- 작은 목표, 관계 변화, 회복 가능한 실패를 통해 deterministic state engine을 먼저 안정화할 수 있다.

## P0 - 1부 Setup Contract And Safety

- [x] [1부] Switch default dummy data and seed logic from mystery to 생활/모험.
- [x] [1부] Document and implement deterministic ability generation rules.
- [x] [1부] Expand `SetupState` design with all six setup steps and an explicit `currentStep` enum.
- [x] [1부] Specify `SessionCompiler` mapping from each confirmed setup step to `SessionState`.
  - `worldFrame` to genre, era, tone, core conflict, and promise context
  - `worldContext` to `world.context`
  - `pcCandidates` to selected candidate metadata only
  - `characterDetail` to player, mods, status, and NPC relationship network
  - `sessionRules` to promise card, difficulty, and game-over rules
  - `prologue` to short-term goal, scene metadata, and first scene seed
- [x] [1부] Add explicit setup dependency staleness behavior.
  - represent stale dependent steps separately from ordinary draft/saved/confirmed state
  - show a warning badge when an earlier confirmed step changes
  - block or warn before prologue start if required confirmed steps are stale
- [x] [1부] Clarify `worldContext` ownership and storage.
  - keep ② 세계 맥락 as `world.context`
  - do not merge it silently into `world.coreConflict`
- [x] [1부] Define how `⑥ 프롤로그` creates or accepts the short-term goal.
  - derive an initial suggestion from long-term goal, selected PC, and first scene
  - allow player revision before confirmation
  - store the confirmed value in `player.goals.shortTerm`

## P1 - 2부 Canonical State And Deterministic Engine

- [ ] [1부->2부] Make saved `SessionState` the canonical play state after prologue start.
- [ ] [2부] Add real play-session save/update behavior instead of only marking the state as save target.
- [ ] [1부/2부] Split deterministic modules out of `app.js`.
  - `SessionCompiler`
  - `SessionStore`
  - `RuleEngine`
  - `StateApplier`
  - `StatusView`
- [ ] [2부] Replace temporary `resolveAction()` with the deterministic turn pipeline.
- [ ] [2부] Keep turn resolution logs split between objective `sceneDC` and PC `statusModifier`.
  - LLM/App interprets intent, action, target, approach, and risk
  - app calculates `sceneDC = baseDC + npcRelationDC + npcTagDC + scenePressureDC`
  - app calculates `rollTotal = d20 + abilityMod + statusModifier`
  - NPC relationship affects DC, not PC ability/status modifiers
- [ ] [2부] Apply ability modifiers, DC, difficulty result bands, fatigue, and morale rules in `RuleEngine`.
- [ ] [2부] Implement status role boundaries in `RuleEngine` and `StateApplier`.
  - morale affects difficulty/modifiers but never directly triggers game over
  - fatigue stage `한계` causes `hp -5` at turn end only in `difficultyMode == "어려움"`
  - `hp <= 0` immediately triggers game over and routes to Ending
- [ ] [2부] Add `ScenePlanner` input/output contract before `MasterProse`.
  - input includes current scene, action interpretation, resolution, state delta, NPC reaction, and constraints
  - output includes next scene seed, continuity, player-facing beats, and state candidates
- [ ] [2부] Constrain `MasterProse` output length and choices.
  - scene text should be 6-10 sentences and no more than 800 Korean characters
  - choices are exactly three example actions, each no longer than 20 Korean characters
  - free input remains the primary play path
- [ ] [2부] Store turn logs, timeline entries, known facts, recent change, and world changes in canonical JSON.
  - validate `knownFactsAdded` before appending to `session.knownFacts`
  - store accepted per-turn facts in `turnLog.knownFactsAdded`
- [ ] [2부] Keep status rendering deterministic and limited to PC-known state.

## P2 - 1부 UX And Genre Profile Polish

- [ ] [1부] Make `설정 초기화` safer in the setup UI.
  - hide, collapse, or move it away from the main step list after progress has begun
  - keep confirmation dialog as the final guard
- [ ] [1부] Add visible revision-request guidance beyond placeholder text.
  - show short examples for tone, difficulty, relationships, and scene pressure
  - keep revisions scoped to the current step
- [x] [1부] Add player-facing difficulty explanation in `⑤ 세션 규칙`.
  - explain success frequency, failure cost, and intent-confirmation behavior
  - keep tone and difficulty as separate choices
- [ ] [1부/2부] Add 생활/모험 genre profile contracts.
  - progress object
  - pressure object
  - at least one non-villain `마찰 NPC` in the initial NPC network
  - failure meanings
  - validator expectations
- [ ] [1부/2부/3부] Add UI verification targets for desktop, iPad 11-inch, and iPhone 13 mini.

## P3 - Model Routes And Benchmarks

- [ ] [1부/2부/3부] Add model route scaffolding without letting model output mutate state directly.
  - 26B QAT setup draft route
  - 26B QAT master prose route
  - 26B QAT reveal/ending/after-session prose route where a large model is needed
  - E4B status assistant route
  - E4B compact draft, short transition, and brief fallback route
  - optional critic verifier route
- [ ] [1부/2부/3부] Remove 12B and 12B QAT from runtime model-profile planning.
- [ ] [1부/2부] Implement Bench 1/2/3 harnesses with direct local `/v1/chat/completions`.
- [ ] [1부/2부] Preserve raw benchmark outputs before scoring or rewriting.

## Later Genre Work

- [ ] Add 탐사 support with `siteTruth`, `locationMap`, `discoveries`, `hazards`, and `access`.
- [ ] Add 추리 support with `truthLock`, culprit, method, motive, timeline, core evidence, red herrings, and revelation conditions.
- [ ] Add 추리/수사 NPC friction rules where friction NPCs can become suspects or antagonistic witnesses only under truth-lock constraints.
- [ ] Add 정치 support with faction map, leverage, public narrative, reputation, and risk exposure.
- [ ] Add 정치 NPC friction rules where friction NPCs can become active adversaries through faction state.
- [ ] Add 전쟁 support only after the smaller deterministic loop is stable.
  - include allied NPCs and enemy NPCs as separate network surfaces
  - require at least one allied `마찰 NPC`
  - keep allied friction grounded in command conflict, supply priority, morale pressure, field judgment, or competing mission priorities
