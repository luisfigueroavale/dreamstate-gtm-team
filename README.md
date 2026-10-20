# Dreamstate GTM desk

A Grok Bot team that runs outbound and content on [Dreamstate](https://trydreamstate.com). Grok Bot holds the seats, one content room, and a single weekday rollup. Dreamstate holds the workspace: company memory, workbooks, sequences, mailboxes, the inbox, social drafts, CRM, and measured credits. File work happens in a local repo, through Claude Code or Codex, following Dreamstate skills.

Thirteen seats. Twelve specialists plus a Chief of Staff. One Content Room. One routine, weekdays at 08:20.

## Why the work sits in Dreamstate

Dreamstate is one HTTP MCP server. The bot signs in through the browser. Nobody pastes an API key into chat.

Thirteen controls reach the packs the workspace is allowed to use:

`whoami`, `packs_list`, `packs_get`, `packs_route`, `skills_list`, `skills_get`, `tools_search`, `tools_get`, `tools_run`, `runs_get`, `runs_list`, `runs_events`, `runs_cancel`.

The packs are `crm`, `integrations`, `knowledge`, `senders`, `sequence`, `social`, `tables`, `tasks`, `unibox`, `visibility`, `workflow`, `workspace`.

A goal is routed with `packs_route`, the pack is opened with `packs_get`, and the exact input is read with `tools_get` before `tools_run`. Quotes come back in rows and credits. Company Context, in the `knowledge` pack, is the second brain inside the workspace: Product Information, Ideal Customer, Competitor Analysis, and Tone of Voice. Playbooks live as skills. The public skill set for Claude Code, Codex, and Grok Build is [luisfigueroavale/dreamstate-plugins](https://github.com/luisfigueroavale/dreamstate-plugins). A skill grants no extra permission. `skills_get` loads the workspace copy, and that copy is the one the seat follows.

This desk is stricter than the server default. Every paid or outward step is priced with a dry run. The owner sees the row count and the credit estimate first, including quotes under 25 rows. The owner approves the named object before a send, a public post, an enrollment, a launch, a charge, or a deletion.

## Connect the MCP

Endpoint: `https://mcp.trydreamstate.com/mcp`

Claude Code:

```sh
claude mcp add --transport http dreamstate https://mcp.trydreamstate.com/mcp
```

The same connection as a project file (this repo includes it as [`.mcp.json`](.mcp.json)):

```json
{
  "mcpServers": {
    "dreamstate": {
      "type": "http",
      "url": "https://mcp.trydreamstate.com/mcp"
    }
  }
}
```

The first tool call opens a browser sign-in. Approve that prompt. Do not paste a token.

To give Claude Code, Codex, or Grok Build the skill files:

```sh
npx @trydreamstate/cli install
```

Or one agent at a time, from the plugin repo:

```sh
claude plugin marketplace add luisfigueroavale/dreamstate-plugins
claude plugin install dreamstate@dreamstate

codex plugin marketplace add luisfigueroavale/dreamstate-plugins
codex plugin add dreamstate@dreamstate

grok plugin install luisfigueroavale/dreamstate-plugins
```

That plugin's own manifest points at `https://mcp.trydreamstate.com`. This desk uses the MCP path above, `https://mcp.trydreamstate.com/mcp`.

## How a work packet moves

A specialist stays in one lane. Two leads set the order, hand work out, and accept the result: Outbound Lead, and Head of Content. They leave the specialist's craft alone. When the work is a file, a workbook, a sequence draft, a reply, or a graphic, the specialist passes the Chief of Staff four fields: outcome, source material, skill, limits. The Chief of Staff opens Claude Code or Codex on the local workspace repo named at setup, on a fresh branch, in a terminal session that stays open. The owner can attach and take over. The result comes back as a file, a branch, or a pull request.

Production access, a merge, and a deploy wait for a yes on that exact action.

## Seats

Outbound lane, reporting through the Outbound Lead:

| Seat | Dreamstate surface | Skill handed to Claude Code |
|---|---|---|
| [Outbound Lead](agents/02-outbound-lead.md) | Read `knowledge`, `tables`, `sequence`, `senders`, `unibox`, `social`, `workspace` | `dreamstate:plays`, `dreamstate:knowledge`, `dreamstate:diagnostics` |
| [Lead Sourcer](agents/03-lead-sourcer.md) | `tables`, `crm`, `knowledge`, `integrations` (connection status) | `dreamstate:list-building`, `dreamstate:linkedin-warm-signals`, `dreamstate:worksheet-tidy`, `dreamstate:crm` |
| [Outbound Copywriter](agents/04-outbound-copywriter.md) | Read `knowledge` and `sequence` | `dreamstate:outreach`, `dreamstate:knowledge` |
| [Sequences & Deliverability](agents/05-sequences-deliverability.md) | `sequence`, `senders`, `tables`, `workspace` | `dreamstate:outreach`, `dreamstate:diagnostics` |
| [Social Engagement](agents/06-social-engagement.md) | `social`, `tables`, `visibility`, `integrations` (connection status) | `dreamstate:linkedin-warm-signals`, `dreamstate:social` |
| [Reply Manager](agents/07-reply-manager.md) | `unibox`, `sequence` (stop state), `knowledge` | `dreamstate:inbox-replies`, `dreamstate:knowledge` |
| [Deal Reactivation](agents/08-deal-reactivation.md) | `crm`, `unibox`, `knowledge`, `tasks`, `tables` | `dreamstate:crm`, `dreamstate:inbox-replies` |

Content lane, in the [Content Room](agents/14-content-room.md), reporting through the Head of Content:

| Seat | Dreamstate surface | Skill handed to Claude Code |
|---|---|---|
| [Head of Content](agents/09-head-of-content.md) | `knowledge`, `social`, `visibility` | `dreamstate:social`, `dreamstate:visibility`, `dreamstate:writing`, `dreamstate:plays` |
| [LinkedIn Writer](agents/10-linkedin-writer.md) | `social`, `knowledge` | `dreamstate:linkedin-posts`, `dreamstate:social`, `dreamstate:knowledge` |
| [X Writer](agents/11-x-writer.md) | `social`, `knowledge` | `dreamstate:x-posts`, `dreamstate:social`, `dreamstate:knowledge` |
| [YouTube Writer](agents/12-youtube-writer.md) | `knowledge` | `dreamstate:knowledge` |
| [Graphic Designer](agents/13-graphic-designer.md) | `knowledge` | `dreamstate:knowledge` |

The [Chief of Staff](agents/01-chief-of-staff.md) supervises both lanes, runs the handoff, and may read with `dreamstate:dreamstate` and `dreamstate:diagnostics`. `dreamstate:first-win` runs only when the owner asks for a first session after setup.

Reddit is not a seat. When the owner asks for a Reddit draft, the Head of Content uses `dreamstate:reddit-posts`. The owner posts it themselves.

There is no YouTube pack and no design skill in the plugin repo. Those two seats write files in the local repo.

## Consent

Shared by every charter:

1. The owner says yes to the exact message, post, enrollment, launch, charge, or deletion before it happens.
2. `tools_run` with `mode` `dry_run` comes first on every paid or outward step. The owner sees rows, credits, and `quote_hash`, including under 25 rows.
3. The live call repeats that `quote_hash`, sets `max_credits`, and sends an `idempotency_key`. `max_credits` is 0 only when the quote is 0. Set `approved` true only after the owner has approved that object. The flag is mandatory when the quote is over 25 rows, when the run would turn on a recurring trigger, or when the result says `approval_required`.
4. `max_rows` is a parameter of `tables.columns.run` and `tables.table_sources.run`. `max_live_sends` is a parameter of `sequence.sequences.activate_audience`, `sequence.sequences.resume`, and the rest of that external-send family. Those fields go inside `params`. The gating fields stay on the `tools_run` call.
5. One workspace, named at setup. `whoami` confirms it. Other workspaces stay closed.
6. Figures in a report are figures a tool returned. A gap stays unreported.
7. The owner's face and body are never generated or altered. Portrait pixels come from photograph files the owner supplied.
8. The only Grok Bot routine is the weekday 08:20 outbound rollup. A Dreamstate recurring trigger needs its own yes.

Grok Bot shares connected accounts across seats. Each charter names the only packs that seat may call. The Chief of Staff enforces the list.

## Build the desk

Use [setup-prompt.md](setup-prompt.md). It interviews any Dreamstate customer once: company and ideal customer, the one workspace, where the second brain lives, the repo path and machine for Claude Code or Codex, the zone for the morning note, and which seats to create. Setup itself does not send, post, enroll, spend, or delete.

## Routine

At 08:20 on weekdays, in the zone the owner named, the Outbound Lead asks five seats for a status line: Reply Manager, Social Engagement, Sequences & Deliverability, Outbound Copywriter, and Lead Sourcer. The note lists measured figures, blockers, and decisions. It does not enroll, send, or spend.
