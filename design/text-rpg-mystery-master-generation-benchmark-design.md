# Text RPG Mystery Master Generation Benchmark Design

Date: 2026-06-04
Project: `text-rpg-master-bench`
Model axis: `gemma4e4b-unsloth`, `gemma-4-12b-it-ud-q4-k-xl`, `gemma-4-26b-a4b-it-q5-k-m`
Runtime axis: direct local model endpoints, no OpenClaw/Hermes harness

## Purpose

이 벤치는 1인 텍스트 롤플레잉에서 모델이 마스터로 사용할 수 있는 초기 플롯과 텍스트를 생성할 수 있는지 비교한다.

테스트 장르는 고정한다.

```text
배경: 중세 수도원
장르: 추리극
플레이 형태: 1인 텍스트 롤플레잉
마스터 역할: 세계관과 상황을 만들고, 플레이어가 선택할 수 있는 주인공 후보와 시작 시나리오를 준비한다.
```

핵심 질문:

- E4B가 짧은 창작/후보 생성에는 충분한가?
- 12B가 26B보다 느리더라도 더 좋은 로컬 단독 창작 후보가 될 수 있는가?
- 26B가 여전히 플롯 구조, 장르 적합성, 진행 가능성에서 가장 안정적인가?

## Non-Goals

- 실제 장기 RPG 세션을 진행하지 않는다.
- OpenClaw, Hermes, tool call, file write workflow를 평가하지 않는다.
- 사실 고증의 정확성을 주 평가 축으로 삼지 않는다.
- 외부 자료 검색이나 세계관 확장을 하지 않는다.
- 폭력/선정성/고어 묘사를 강화하는 모델을 선호하지 않는다.
- 모델이 만든 답변을 그대로 채택하지 않는다. 이 벤치는 후보 비교용이다.

## Fixture

단일 seed fixture로 시작한다.

```json
{
  "case_id": "medieval-monastery-mystery",
  "language": "ko",
  "setting": "중세 수도원",
  "genre": "추리극",
  "play_mode": "1인 텍스트 롤플레잉",
  "tasks": [
    {
      "id": "world_background",
      "instruction": "롤플레잉의 배경을 500자 이내로 생성한다."
    },
    {
      "id": "protagonist_candidates",
      "instruction": "이 세계관에 어울리는 주인공 캐릭터 후보 5명을 설정한다. 각 후보는 이름, 성별, 나이, 직업/신분, 배경, 가치관, 성격, 장점, 단점을 포함한다. 후보들은 서로 뚜렷하게 달라야 한다."
    },
    {
      "id": "opening_scenario_for_candidate_3",
      "instruction": "후보 3을 주인공으로 삼은 시작 시나리오를 1000자 이내로 생성한다."
    }
  ]
}
```

## Models

| Label | Model | Expected endpoint | Notes |
| --- | --- | --- | --- |
| `e4b` | `gemma4e4b-unsloth` | `http://127.0.0.1:8002/v1` | Existing oMLX small local baseline. |
| `gemma12b-xl` | `gemma-4-12b-it-ud-q4-k-xl` | temporary llama.cpp endpoint, e.g. `http://127.0.0.1:8093/v1` | Downloaded GGUF candidate. Start isolated server for the run. |
| `gemma26b-q5` | `gemma-4-26b-a4b-it-q5-k-m` | `http://127.0.0.1:8083/v1` | Current local assistant/helper baseline. |

All calls should use direct OpenAI-compatible `/v1/chat/completions`.

## Harness

### Invocation Shape

The benchmark should call each model directly, not through OpenClaw.

Recommended model parameters:

```text
temperature: 0.8
top_p: 0.95
max_tokens:
  world_background: 512
  protagonist_candidates: 1600
  opening_scenario_for_candidate_3: 1400
```

Use one fresh conversation per model. The three tasks should be chained in the same conversation so task 3 can refer to the model's own candidate 3.

```text
system prompt
  -> task 1 background request
  -> task 1 model output
  -> task 2 protagonist candidates request, with task 1 included in context
  -> task 2 model output
  -> task 3 candidate 3 opening scenario request, with task 1 and task 2 included in context
  -> task 3 model output
```

### System Prompt Contract

Use a stable system prompt for all models:

```text
너는 1인 텍스트 롤플레잉의 마스터 준비를 돕는 한국어 작가다.
장르는 추리극이고, 배경은 중세 수도원이다.
출력은 플레이 시작 전 준비물이어야 한다.
설명은 선명하고 구체적이어야 하지만 과도하게 장황하지 않아야 한다.
플레이어의 선택 여지를 남기고, 사건의 진상은 전부 공개하지 않는다.
현대 수사기법, 총기, 전자기기, 현대 법의학을 사용하지 않는다.
고어, 선정적 묘사, 노골적인 폭력은 피한다.
```

### Task Prompts

Task 1:

```text
중세 수도원 배경의 1인 텍스트 롤플레잉 추리극을 위한 배경을 만들어줘.
500자 이내.
필수 포함:
- 수도원의 이름 또는 별칭
- 최근 발생한 수상한 사건
- 플레이어가 조사하고 싶어지는 갈등
- 중세 수도원 분위기
금지:
- 진범 공개
- 현대 수사기법
```

Task 2:

```text
위 세계관에 어울리는 주인공 캐릭터 후보 5명을 만들어줘.
각 후보는 다음 필드를 포함해야 해:
- 이름
- 성별
- 나이
- 직업/신분
- 배경
- 가치관
- 성격
- 장점
- 단점

후보들은 서로 뚜렷하게 달라야 한다.
직업/신분, 조사 동기, 성격, 사회적 위치가 겹치지 않게 해줘.
```

Task 3:

```text
방금 만든 후보 3을 주인공으로 삼아 시작 시나리오를 만들어줘.
1000자 이내.
필수 포함:
- 후보 3의 관점에서 시작되는 장면
- 첫 번째 이상 징후 또는 단서
- 선택 가능한 다음 행동 3개
- 진상을 완전히 밝히지 않는 미스터리 훅
금지:
- 진범 공개
- 플레이어의 행동을 대신 확정
- 현대적 표현이나 도구
```

## Output Artifacts

The implementation should write:

- JSONL raw transcript: one row per model, containing task outputs and timings.
- CSV summary: one row per model with scores, length checks, pass/fail, latency.
- Optional markdown report: model-by-model qualitative comparison.

Suggested result path:

```text
benchmarks/results/text-rpg-master/medieval-monastery-mystery/<timestamp>/
```

Suggested report path:

```text
benchmarks/reports/text-rpg-master-medieval-monastery-mystery-<date>.md
```

## Bench 2: 2000s Japan Desert Island Honkaku Plot

Date added: 2026-06-05
Case ID: `2000s-japan-desert-island-honkaku-plot`

Bench 2 changes the output target from playable opening material to a compact master-facing plot.

```text
배경: 2000년대 일본의 무인도
장르: 본격 추리
플레이 형태: 1인 텍스트 롤플레잉
산출물: 마스터가 참고할 수 있는 사건 플롯
최대 길이: 1500자
```

### Bench 2 Purpose

- 모델이 본격 추리 TRPG용 사건 구조를 한 번에 만들 수 있는지 본다.
- 배경, 피해자, 범인, 탐정 제외 등장인물, 실행 방법, 단서를 빠짐없이 정리하는지 본다.
- 실행 방법이 실제 물리 법칙과 2000년대 일본의 생활/통신 환경 안에서 수행 가능한지 본다.
- 단서가 범인과 범행 방법을 공정하게 추론할 수 있을 만큼 배치되는지 본다.

### Bench 2 Non-Goals

- 실제 플레이 로그를 진행하지 않는다.
- 장기 캠페인 설정이나 캐릭터 빌드를 평가하지 않는다.
- 현대 스마트폰, 클라우드, CCTV, 드론, SNS 중심 해결을 허용하지 않는다.
- 초능력, 꿈, 환각, 유령, 우연에만 의존하는 트릭은 실패로 본다.

### Bench 2 Fixture

```json
{
  "case_id": "2000s-japan-desert-island-honkaku-plot",
  "language": "ko",
  "setting": "2000년대 일본의 무인도",
  "genre": "본격 추리",
  "play_mode": "1인 텍스트 롤플레잉"
}
```

Fixture path:

```text
benchmarks/fixtures/text_rpg_master_2000s_japan_desert_island_honkaku_plot.json
```

Task contract path:

```text
benchmarks/implementation/tasks/text_rpg_master_2000s_japan_desert_island_honkaku_plot_tasks.json
```

### Bench 2 Prompt Contract

```text
2000년대 일본의 무인도를 배경으로 한 본격 추리 TRPG의 플롯을 작성해줘.
최대 1500자.
반드시 아래 항목을 모두 포함해줘:
- 배경
- 피해자
- 범인
- 범인/피해자/탐정 제외 등장인물 3~5명
- 실행 방법
- 단서

조건:
- 실행 방법은 실제로 수행 가능해야 한다.
- 2000년대 일본 배경에 맞게 스마트폰, 클라우드, CCTV 중심 해결은 쓰지 않는다.
- 본격 추리답게 플레이어가 단서로 범행 방법과 범인을 추론할 수 있어야 한다.
- 범인, 피해자, 탐정은 제외하고 별도 등장인물은 3~5명만 제시한다.
- 마스터용 플롯이므로 범인과 실행 방법은 공개해도 된다.
```

### Bench 2 Automated Checks

- non-empty output
- <= 1500 Korean characters, excluding surrounding whitespace
- contains required section labels: `배경`, `피해자`, `범인`, `등장인물`, `실행 방법`, `단서`
- contains setting signals for 2000s Japan / desert island
- contains honkaku mystery signals such as clue, alibi, trick, motive, deduction
- includes 3 to 5 other characters excluding culprit, victim, and detective
- names victim and culprit explicitly
- includes concrete method terms such as time, movement, lock, lure, tool, trace, door/window, boat, phone, electricity, weather
- rejects impossible-method terms such as magic, teleportation, ghosts, dream reveal, or all-purpose hallucination
- rejects modern forbidden terms such as smartphone, cloud, black box, drone, SNS, GPS tracking, real-time location sharing, face recognition, or CCTV

## Automated Checks

The harness should score mechanical criteria first.

Task 1 checks:

- non-empty Korean output
- <= 500 Korean characters, excluding surrounding whitespace
- contains monastery/place signal
- contains suspicious incident signal
- contains conflict/investigation signal
- does not reveal culprit with explicit phrases like `진범은`, `범인은`
- no obvious modern terms: `CCTV`, `DNA`, `스마트폰`, `총`, `경찰서`, `법의학`

Task 2 checks:

- exactly 5 candidate sections or parseable candidate objects
- each candidate includes all required fields
- candidate 3 is present and identifiable
- at least 4 distinct occupation/status values
- at least 4 distinct personality/value patterns
- candidates include meaningful strengths and weaknesses
- no duplicate names

Task 3 checks:

- non-empty Korean output
- <= 1000 Korean characters, excluding surrounding whitespace
- references candidate 3 by name or role
- includes first clue/abnormal sign
- includes exactly or at least 3 next-action options
- does not reveal culprit
- no modern terms
- does not force the player's next choice

## Human/LLM-Assisted Rubric

Because this is a creative writing benchmark, automated checks are not enough. A human reviewer should score each model from 1 to 5 on:

| Axis | Meaning |
| --- | --- |
| Genre fit | Feels like a medieval monastery mystery, not generic fantasy. |
| Playability | Gives the player concrete hooks and actionable next steps. |
| Mystery discipline | Creates intrigue without prematurely revealing the answer. |
| Character diversity | Five candidates differ in role, motive, class position, temperament, and weakness. |
| Character usability | Candidate 3 can naturally drive a solo RPG opening. |
| Prose quality | Korean prose is vivid, controlled, and not bloated. |
| Continuity | Task 2 and task 3 remain consistent with task 1. |
| Master usefulness | Output can be used by a solo RPG master with light editing. |

Optional weighted score:

```text
total = mechanical_pass_bonus
      + genre_fit * 1.2
      + playability * 1.4
      + mystery_discipline * 1.4
      + character_diversity * 1.2
      + character_usability * 1.0
      + prose_quality * 1.0
      + continuity * 1.2
      + master_usefulness * 1.6
```

## Success Criteria

A model is a strong candidate if:

- all mechanical checks pass,
- task 1 and task 3 respect length limits,
- character candidates are structurally complete,
- candidate diversity is clearly visible,
- opening scenario gives at least 3 playable next actions,
- no culprit is revealed,
- no modern investigative tools appear,
- human average score is >= 4.0/5,
- total wall time is acceptable for offline preparation.

Latency interpretation:

| Latency | Interpretation |
| --- | --- |
| <= 60s total | Good for interactive setup. |
| 60-180s total | Acceptable for offline prep. |
| 180-360s total | Slow but usable if quality is clearly higher. |
| > 360s total | Too slow unless used as rare batch generation. |

## Rejection Criteria

- Reveals the culprit or complete truth in setup.
- Produces generic fantasy adventure rather than monastery mystery.
- Character candidates differ only superficially.
- Candidate 3 is unusable or inconsistent with the opening scenario.
- Ignores length limits by more than 20%.
- Uses modern investigative methods or modern setting elements.
- Produces text that is too vague for a master to run.
- Repeatedly collapses into plot summary without player-facing choices.

## Decision Keywords

- `ADOPT_E4B_RPG_DRAFT_FAST`
- `ADOPT_12B_RPG_MASTER_PREP`
- `KEEP_26B_RPG_QUALITY_BASELINE`
- `SPLIT_E4B_FAST_IDEATION_12B_SCENARIO`
- `NO_LOCAL_RPG_MASTER_FOR_NOW`

## Implementation Notes

- Start with one round per model. Add repeated rounds only after the first qualitative report.
- Keep raw output intact; do not auto-rewrite before scoring.
- For E4B, use the existing active oMLX endpoint if it exposes `gemma4e4b-unsloth`.
- For 12B, start a one-model temporary llama.cpp server and shut it down after the run.
- For 26B, use the existing `8083` llama.cpp endpoint and include `chat_template_kwargs.enable_thinking=false` if needed for stable direct calls.
- Do not run OpenClaw/Hermes commands.
