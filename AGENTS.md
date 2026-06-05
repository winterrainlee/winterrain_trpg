# AGENTS.md

## Project

Winterrain TRPG is a design-first project for a local-model, single-player text RPG runtime and benchmarks.

The core architecture is: deterministic app code owns state, rolls, validation, logs, and persistence; local models only draft setup material and player-facing master prose.

## Start Here

- Read `design/winterrain-rp-module-architecture-design.md` before architecture, schema, runtime, UI, or model-routing work.
- Read `design/text-rpg-mystery-master-generation-benchmark-design.md` before Bench 1/2 work.
- Read `design/text-rpg-detective-reveal-scene-benchmark-design.md` before reveal-scene or Bench 3 work.
- Keep this root file small. Put detailed future rules near the code or docs they govern.

## Working Rules

- State assumptions before coding when requirements are unclear.
- Ask before choosing between materially different interpretations.
- Prefer the smallest change that satisfies the request.
- Do not add speculative features, abstractions, dependencies, or configurability.
- Touch only files required by the task. Do not refactor adjacent code unless asked.
- Match existing style and terminology, especially the Korean design vocabulary.
- Remove only unused code created by your own change.
- Define a short verification target for non-trivial work, then run the relevant check.

## Project Invariants

- Do not let model output mutate canonical game state directly.
- Keep `SessionStore`, `RuleEngine`, `StateApplier`, status rendering, and logs deterministic by default.
- Treat prompts as contracts/reference material, not as one giant runtime prompt.
- Compile small task-specific prompts for model calls.
- Validate model prose for POV leaks, hidden-truth exposure, forced resolution, state-mutation claims, and length/choice expectations.
- In mystery play, lock culprit, method, motive, timeline, and core evidence before play or before the case starts.
- In detective reveal turns, do not steal the player's conclusion; stage the declared conclusion and leave room for the next player action.
- Preserve the initial implementation target: `E4B + 26B`. Keep 12B as a later RP prose profile unless the user explicitly changes the plan.

## Benchmarks

- Use direct local OpenAI-compatible `/v1/chat/completions` endpoints for benchmark work.
- Do not route benchmark calls through OpenClaw or Hermes unless explicitly requested.
- Preserve raw model outputs before scoring or rewriting.
- Use automated checks only as guardrails; creative quality still needs human reading.

## Verification

- If there is no test harness yet, verify with focused script output, schema validation, or a small fixture run.
- For documentation-only edits, verify links, filenames, and that the guidance matches the current `design/` documents.
- Report any check that could not be run.
