# Text RPG Detective Reveal Scene Benchmark Design

Date: 2026-06-05
Project: `text-rpg-master-bench`
Bench: 3
Case source: `/Users/kioku/Documents/Winterrain/40_Archives/49 기타/텍스트 롤플레잉/플레이 로그/로마 공화정 추리극 로그 1.md`
Runtime axis: direct local model endpoints, no OpenClaw/Hermes harness

## Purpose

이 벤치는 1인 텍스트 RPG에서 플레이어 탐정이 스스로 범인을 확정한 턴을 모델이 장면으로 잘 받아칠 수 있는지 평가한다.

Bench 1/2가 "준비물 생성"이었다면, Bench 3은 실제 플레이 중 GM 응답에 가깝다. 핵심은 모델이 탐정의 추리를 빼앗지 않고, 플레이어가 이미 도달한 결론을 무대 위 사건으로 연출하는 능력이다.

고정 장면:

```text
배경: 기원전 63년 로마 공화정, 팔라티노 언덕과 원로원 정치
사건: 원로원 의원 루쿨루스 독살, 밀실 트릭, 카틸리나 음모
탐정: 가이우스 세르빌리우스
범인: 푸블리우스 코르넬리우스 렌툴루스 수라
배후: 루키우스 세르기우스 카틸리나
장면: 탐정이 증거를 연결해 렌툴루스를 범인으로 확정하고, 공개 고발 직전 또는 고발 순간에 들어간다.
```

## Non-Goals

- 새로운 범인이나 다른 진상을 만들지 않는다.
- 플레이어 대신 추리 결론을 새로 도출하지 않는다.
- 원본 플레이 로그 전체를 fixture로 복사하지 않는다.
- 사건 종결, 자백, 판결, 후일담까지 한 번에 처리하지 않는다.
- 역사 해설이나 설정 설명을 장황하게 늘리지 않는다.
- 현대 수사기법, 현대 법정극 문법, 경찰 절차극 어휘로 바꾸지 않는다.

## Source Use

첨부 로그는 개인 플레이 기록이므로 benchmark fixture에는 원본 전체를 복사하지 않는다. 대신 다음 정보를 사람이 검토해 요약한 synthetic fixture를 둔다.

- 사건 배경과 탐정
- 범인과 배후
- 확정에 필요한 핵심 증거
- 직전 장면 상태
- 플레이어가 이미 말한 추리/선언
- GM이 연출해야 하는 톤과 금지 행동

Suggested fixture path:

```text
benchmarks/fixtures/text_rpg_detective_reveal_roman_republic_case.json
```

## Fixture Shape

```json
{
  "case_id": "roman-republic-detective-reveal",
  "language": "ko",
  "setting": "기원전 63년 로마 공화정",
  "genre": "정치 추리극",
  "play_mode": "1인 텍스트 롤플레잉",
  "detective": {
    "name": "가이우스 세르빌리우스",
    "role": "젊은 원로원 의원",
    "style": "신중하고 체계적이며, 증거를 축적한 뒤 공개 대결보다 일격을 선호한다"
  },
  "truth": {
    "victim": "마르쿠스 리키니우스 루쿨루스",
    "culprit": "푸블리우스 코르넬리우스 렌툴루스 수라",
    "backer": "루키우스 세르기우스 카틸리나",
    "method": "와인 독살 후 청동 고리와 삼끈으로 서재 빗장을 조작해 밀실처럼 위장"
  },
  "known_evidence": [
    "P.C.L. 각인이 있는 청동 고리와 삼끈",
    "서재 창문 쇠창살과 빗장 조작 가능성",
    "뒷문 나무 조각과 문지기 매수 정황",
    "렌툴루스가 제11시에 뒷문으로 초대된 사실",
    "아코니툼 독극물 흔적",
    "시리아 회계 장부의 횡령 흔적",
    "카틸리나를 언급한 위협 서판"
  ],
  "scene_state": {
    "location": "원로원 의사당 또는 고발 직전의 회랑",
    "participants": ["탐정", "키케로", "렌툴루스", "원로원 의원들", "경비병"],
    "pressure": "원로원 전체가 정치적 파장을 의식하고 있으며, 고발이 실패하면 탐정의 정치 생명이 끝날 수 있다"
  },
  "player_turn": "나는 이제 범인이 렌툴루스라고 확신한다. 청동 고리의 P.C.L. 각인과 뒷문 조작, 제11시 초대 사실을 연결해 원로원 앞에서 그를 지목한다."
}
```

## Task

Single-turn generation.

```text
첨부된 사건 요약과 플레이어 턴을 바탕으로, 탐정이 범인을 확정하고 원로원 앞에서 지목하는 장면을 GM 응답으로 연출해줘.

조건:
- 900~1400자.
- 탐정의 추리를 빼앗지 말고, 플레이어가 선언한 결론을 장면화한다.
- 범인은 렌툴루스, 배후는 카틸리나로 유지한다.
- 청동 고리 P.C.L., 뒷문 조작, 제11시 초대, 독살, 위협 서판 중 최소 4개를 자연스럽게 언급한다.
- 원로원 정치극의 긴장감과 로마 공화정 분위기를 살린다.
- 렌툴루스와 키케로, 원로원 군중의 반응을 포함한다.
- 마지막에는 다음 플레이어 선택 또는 발언 여지를 남긴다.

금지:
- 탐정 대신 새로운 추리 과정을 장황하게 설명하기.
- 플레이어가 하지 않은 행동을 확정하기.
- 렌툴루스 자백, 체포, 판결까지 한 번에 처리하기.
- 새로운 진범, 새로운 핵심 증거, 현대 수사기법 추가하기.
- "사건의 진상은..." 식으로 요약 보고서처럼 끝내기.
```

## Harness

Use direct `/v1/chat/completions` calls.

Recommended parameters:

```text
temperature: 0.75
top_p: 0.95
max_tokens: 1800
chat_template_kwargs.enable_thinking: false
```

The benchmark can reuse `benchmark_text_rpg_master_generation.py` if a new task id is added, or use a smaller reveal-scene-specific script. Reuse is preferred if the evaluator is kept simple.

Suggested result path:

```text
benchmarks/results/text-rpg-master/roman-republic-detective-reveal/<timestamp>/
```

Suggested report path:

```text
benchmarks/reports/text-rpg-master-roman-republic-detective-reveal-<date>.md
```

Suggested generated-output report path:

```text
benchmarks/reports/text-rpg-master-roman-republic-detective-reveal-generated-outputs-<date>.md
```

## Automated Checks

Mechanical checks should not overrule human reading, but they catch obvious failures.

- non-empty output
- 900 to 1400 Korean characters, excluding surrounding whitespace
- includes `렌툴루스`
- includes `카틸리나`
- includes `키케로`
- includes at least one crowd/political setting signal: `원로원`, `의사당`, `의원`, `집정관`, `토가`
- includes at least 4 evidence signals:
  - `청동 고리`
  - `P.C.L.`
  - `뒷문`
  - `제11시`
  - `독`
  - `아코니툼`
  - `위협 서판`
  - `카틸리나는 배신자를 용서하지 않는다`
  - `빗장`
  - `삼끈`
- includes reaction signals for at least 2 groups:
  - culprit reaction: `렌툴루스` near `얼굴`, `침묵`, `분노`, `창백`, `반박`, `떨`
  - ally reaction: `키케로` near `시선`, `고개`, `집정관`, `명령`, `묵`
  - senate reaction: `원로원`, `의원들`, `소란`, `웅성`, `정적`, `술렁`
- leaves player agency with a next-action hook:
  - `어떻게 말하겠습니까`
  - `무엇을 제시합니까`
  - `다음 말`
  - `당신의 선택`
  - a clear prompt for the detective's next utterance
- does not contain forced-resolution terms:
  - `자백했다`
  - `체포되었다`
  - `사형 선고`
  - `만장일치`
  - `사건은 해결되었다`
- does not add a different culprit name as the actual culprit.

## Human Rubric

Score each item 1~5.

| Rubric | Question |
| --- | --- |
| `scene_drama` | 장면이 눈앞에 보이는가, 원로원 정치극의 긴장감이 있는가? |
| `player_agency` | 탐정의 결론을 빼앗지 않고 플레이어의 선언을 받쳐주는가? |
| `evidence_integration` | 단서가 목록처럼 나열되지 않고 장면 속 발화/반응으로 녹아드는가? |
| `continuity` | 렌툴루스, 카틸리나, 청동 고리, 독살, 뒷문 조작 등 원 사건과 충돌하지 않는가? |
| `gm_usefulness` | 실제 플레이 중 그대로 읽거나 조금 고쳐 쓸 수 있는가? |
| `stopping_discipline` | 자백/체포/판결까지 과하게 진행하지 않고 다음 턴 여지를 남기는가? |
| `style_fit` | 로마 공화정 말기 분위기와 한국어 문체가 잘 맞는가? |
| `latency_acceptability` | 대기 연출을 포함한 웹앱 UX에서 받아들일 만한 생성 시간인가? |

## Rejection Criteria

Hard fail if any of the following happens.

- 범인을 렌툴루스가 아닌 다른 인물로 바꾼다.
- 탐정의 선언을 무시하고 새로운 수사 장면으로 되돌린다.
- 렌툴루스 자백, 체포, 판결까지 자동으로 끝낸다.
- 핵심 증거를 새로 날조해 기존 사건 해결을 대체한다.
- 현대 법정/경찰/과학수사 문법으로 장면을 바꾼다.
- 요약 보고서처럼 쓰고 장면 연출을 하지 않는다.

## Expected Model Differences

- E4B: 짧고 반응 빠른 장면은 가능하겠지만, 로마 정치극의 질감과 증거 통합이 얕아질 수 있다.
- 26B Q5: 안정적인 장면 구성과 정치극 연출이 기대되며, latency도 12B보다 나을 가능성이 있다.
- 12B XL: Bench 1/2 human readback에서 TRPG 문체 선호가 확인되었으므로 가장 중요한 후보. 느리더라도 `마스터가 고민 중입니다...` loading state로 흡수 가능한지 함께 평가한다.

## Decision Use

Bench 3는 TRPG 웹앱의 핵심 인터랙션 후보를 고르는 데 사용한다.

Decision labels:

- `PREFER_12B_FOR_REVEAL_SCENE_STYLE`
- `KEEP_26B_FOR_FAST_REVEAL_BASELINE`
- `USE_E4B_ONLY_FOR_SHORT_TRANSITIONS`
- `NO_LOCAL_MODEL_FOR_LIVE_REVEAL`

If 12B wins human preference again, the RPG interface should treat 12B as the preferred master prose model for climactic scenes, even if it is not the fastest model.
