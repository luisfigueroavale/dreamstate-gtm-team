# File work

The seats stay in Grok Bot, with the one routine. Claude Code or Codex runs the packet. Consent is in [rules.md](rules.md).

## The packet

A seat passes four fields. The Chief of Staff runs them as one task.

| Field | Meaning |
|---|---|
| Goal | What finished looks like |
| Inputs | Pages, rows, or files to use |
| Skill | Bare `skills_get` id |
| Guardrails | What must not happen |

Example: goal, five X posts about a price change. Inputs, the Product Information page and three posts the owner already accepted. Skill, `x-posts`. Guardrails, no publish and no new numbers.

## How it runs

- One git worktree per task, inside tmux.
- Of the two subscriptions, use the one with more of its weekly allowance left.
- Content and design run on the owner's Mac. Product and outbound code run on the always-on server over SSH. Logins stay on that server. Do not ask for tokens in chat.
- The owner can attach to the session.
- Return the path, the branch, or the pull request. Production, a merge, and a deploy wait for a yes on that action.
- If Claude Code and Codex are both unavailable, the seat does the work itself under the same guardrails.

`skills_get` takes the bare id. Read `skills/dreamstate/SKILL.md` from the plugin repo. Do not call `skills_get` with `dreamstate`.
