---
name: pi-school
description: "Drive the Pi School course API (pi-school.ziki.boo) for student scrappy-operator-6313 — fetch lesson agentInstructions, check progress, update the student profile, and mark lessons/exercises complete. Use when the student mentions Pi School, asks to work on a lesson or exercise, asks about their progress, or wants to change their course profile (pace, depth, languages, etc.)."
---

# Pi School course driver

Student ID: `scrappy-operator-6313`. Origin: `https://pi-school.ziki.boo`.

Full API schema: `https://pi-school.ziki.boo/api/openapi.json`.
Agent-facing overview: `https://pi-school.ziki.boo/llms.txt`.

## Always pass the student ID

`GET /api/lessons` and `GET /api/lessons/{slug}` **must** include `?studentId=...`.
Without it the server assumes fast pace and silently omits quiz instructions.
Always fetch with the ID before teaching anything.

## Save JSON to disk, then parse with node

`python3` is blocked in this environment (kysec), so parse with `node`:

```bash
curl -sL "<url>" -o /tmp/r.json && node -e 'console.log(JSON.stringify(require("/tmp/r.json"),null,1))'
```

## Completing things

`PUT /api/progress/{studentId}` with `{"lessonSlug": "...", "source": "agent", "model": "<model-id>"}`.
Exercises use `exerciseSlug` instead of `lessonSlug` — mixing them up returns 400 `Unknown lesson slug`.
`source` must be `"agent"` for lessons that can only be completed through the agent.

Redoing something already done: `DELETE /api/progress/{studentId}` with the slug first, then proceed.
Full reset (keeps ID and profile): `DELETE` with `{"reset": true}`.

## Profile changes

`PUT /api/profile/{studentId}` accepts `pace`, `codingExperience`, `terminalComfort`,
`depthPreference`, `learningStyle`, `editor`, `aiTools`, `languages`, `os`.
The next lesson fetch reflects changes immediately — no restart needed.

## Teaching style

Read the profile first and honor it: `pace: "thorough"` means quizzes after each topic,
one question at a time, explain a wrong answer before continuing. `learningStyle: "examples"`
means lead with a concrete example before the abstraction.
Reference single commands and slash commands in inline code, not fenced blocks.
