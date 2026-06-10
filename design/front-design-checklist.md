# Front Design Checklist

Date: 2026-06-10

Source: TRPG 마스터/플레이어 관점 프론트엔드 리뷰에서 도출한 구현 항목.

Review context:

- 플레이어 1인이 사용하는 로컬 텍스트 RP 웹앱
- 플레이 흐름을 방해하지 않는 정보 배치가 핵심
- 설계 문서 `design/winterrain-rp-module-architecture-design.md` 기준

## Done

- [x] ④ 캐릭터 상세 정보 분리
  - 판정 공식 설명을 `<details>` "판정 규칙 보기"로 접음
  - 초기 상태 테이블에서 "범위" 컬럼 제거, "상태/수치/단계/현재 의미" 4컬럼으로 축소
  - 3개 상태 밴드 설명을 `<details>` "상태 단계 규칙 보기"로 접음
  - NPC 관계치 설명을 `<details>` "관계치 규칙 보기"로 접음
  - 균형 검사를 한 줄 요약으로 통합

## High Priority

- [x] 상태 패널 band 이름 표시
  - `#hp`, `#fatigue`, `#morale` 아래에 `<small class="band-label">`로 현재 band 라벨 표시
  - 모바일 상태 스트립에도 동일 적용
  - `renderState()`에서 `statusStageFor()` 재사용하여 값 갱신 시 band 라벨 동기화

- [x] 선택지/자유입력 시각 위계 조정 (방향 A+B 혼합)
  - `#actionForm`을 `.choices` 위로 이동, placeholder를 "이 상황에서 무엇을 하시겠습니까?"로 변경
  - 선택지를 둥근 칩 스타일(`border-radius: 14px`, 작은 폰트, muted 색상)로 축소
  - "예시 행동" 라벨(`<p class="choices-label">`)을 선택지 위에 추가

## Medium Priority

- [x] 세션 종료 버튼 격리
  - `.play-actions`에서 분리하여 `.play-actions-end` 영역으로 이동, `grid-column: 2` 우측 정렬
  - `.danger-action` 스타일 적용, 작은 크기 + opacity 0.7로 시각적 우선순위 낮춤
  - `confirm()` 다이얼로그 추가

- [x] 마스터 구상 중 로딩 UX
  - `#sceneText` 내부에 점 애니메이션 + "마스터가 장면을 구상 중입니다" 플레이버 텍스트 렌더
  - `setPlayLoading(on, options)` 함수로 로딩 상태 토글: 입력/선택지 비활성화, 인디케이터 표시
  - 새 장면 렌더 후에는 `restoreScene: false`로 로딩만 해제하여 최신 장면을 보존

- [x] 해석 확인 스트립 UI
  - `#interpretationStrip` 요소 추가: 해석 텍스트 + `[진행]`/`[다시 입력]` 버튼
  - `showInterpretation(action)` / `hideInterpretation()` 함수로 표시/숨김 제어
  - 쉬움/보통에서는 자유입력, 선택지 모두 해석 확인을 거쳐 `resolveAction`으로 진행
  - 어려움에서는 해석 확인 없이 바로 `resolveAction`으로 진행
  - 거부 시 입력으로 돌아가고 턴 소비 없음

## Low Priority

- [x] 태블릿 세로 모드 상태 패널 접근성
  - `.mobile-status-strip` 표시 breakpoint를 640px → 860px로 올림
  - 640px 내 중복 규칙 제거

- [x] 모바일 setup-steps 수평 스크롤 힌트
  - `mask-image: linear-gradient(to right, #000 85%, transparent 100%)` 적용
  - 오른쪽 끝 fade-out으로 추가 항목 존재를 시각적으로 암시

## Additional Changes (2026-06-10)

- [x] 세계 seed 입력 1단계 카드 이동
  - seed textarea와 적용 버튼을 setup-rail에서 제거
  - ① 세계 골격 선택 시에만 step-card 상단에 seed 입력 렌더
  - 장르 안내 텍스트를 seed 입력 위로 이동 (draft 렌더링에서 제거)
  - seed 값은 `setupState.worldSeed`에 저장하여 단계 전환 시 보존

- [x] 로딩 인디케이터 장면 묘사 블록 내부 렌더
  - 별도 `#loadingIndicator` 요소 제거
  - `setPlayLoading(true)` 시 `#sceneText` 내부에 로딩 메시지 렌더
  - 로딩 중 취소/복구가 필요한 경우에만 원래 장면 텍스트를 복원하고, 새 장면 렌더 뒤에는 복원하지 않음

- [x] 플레이어 추가 약속 기능
  - ⑤ 세션 규칙의 장르 약속 섹션에 최대 2개 커스텀 약속 추가 UI
  - `draft.customPromises` 배열로 관리, JSON 저장 시 `promiseCard.customPromises`에 별도 기록
  - 추가/삭제 인라인 UI, 2개 초과 시 입력 비활성화
