# Team rules

Every seat follows this page. A charter only adds a lane, connectors, and handoffs. When a skill and a charter or this page disagree, the stricter rule wins.

Read this file through the GitHub connector, branch `main`, in `luisfigueroavale/dreamstate-gtm-team`. The repo is private.

## Consent

- The owner approves the named object before a send, a post, an enrollment, a launch, a charge, or a deletion.
- A paid or outward call starts as `tools_run` with `dry_run`. Show rows, credits, and `quote_hash`, including under 25 rows, then wait.
- If `tools_get` says dry_run is unsupported for a paid read, show its `cost_policy` price and wait for a yes before the live call.
- The live call repeats that `quote_hash`, sets `max_credits`, and sends an `idempotency_key`. `max_credits` is 0 only when the quote is 0.
- Set `approved` true only after that yes. It is mandatory over 25 rows, for a recurring trigger, when the result says `approval_required`, or for a live external send above the server's recipient threshold.
- If the text, media, audience, or schedule changes after a yes, ask again.
- Activating a sequence approves the whole cadence for that audience. Lifecycle and enrollment calls have no lifetime send ceiling.
- One workspace, named at setup. `whoami` first. Stop if a different workspace is active.
- Report only figures a tool returned. Unknown is not zero.
- Do not generate, retouch, or replace the owner's face or body. Portrait pixels come from photos the owner supplied.
- Production, a merge, and a deploy wait for a yes on that action.
- One Grok Bot routine: weekdays at 08:20, the outbound rollup. If the app lets only the Chief of Staff own routines, that seat owns it and the text tells the Outbound Lead to run the rollup. No second routine, and no Dreamstate recurring trigger, without its own yes.

## Standing actions that still need a yes

These do not raise `approval_required`. Name the object and wait anyway.

Read the current rules first. This call replaces the whole set: `social.outreach.keyword_dm_rules.replace`.

Also: `social.feeds.create`, `tables.table_sources.schedule_set`, `tables.auto_run.set`, `sequence.linkedin.auto_engagements.replace`, `sequence.x.auto_engagements.replace`, `tables.profile_watcher.create`, `tables.profile_watcher.resume`.

External even at zero credits: `senders.mailboxes.placement_test` (sends a probe email), `social.linkedin_account_invite`, `social.linkedin.connection_invite`, `social.advocacy.engage`, `integrations.calendar.events_create`, `visibility.radar.scan_execute`, `visibility.analytics_refresh`.

`visibility.research.web_search` costs 2 credits and may refuse dry_run. Use the paid-read rule above.

## Skills

`skills_get` takes the bare id (`plays`), not `dreamstate:plays`. The `dreamstate` skill is not in the workspace. Read `skills/dreamstate/SKILL.md` from [luisfigueroavale/dreamstate-plugins](https://github.com/luisfigueroavale/dreamstate-plugins).

## Connectors

Grok Bot shares connections across seats. A seat uses only its row.

| Seat | Packs | Also |
|---|---|---|
| Chief of Staff | Packs named on that packet | GitHub, read-only, for this repo. Local repo for the coding agents. |
| Outbound Lead | `knowledge`, `tables`, `sequence`, `senders`, `unibox`, `social`, `workspace` (read) | None beyond those reads. |
| Lead Sourcer | `tables`, `crm`, `knowledge`, `visibility`, `integrations` (status) | X read tools below. |
| Outbound Copywriter | `knowledge`, `sequence` (read) | None. |
| Sequences & Deliverability | `sequence`, `senders`, `tables`, `workspace` | None. |
| Social Engagement | `social`, `tables`, `visibility`, `integrations` (status) | X read tools below. |
| Reply Manager | `unibox`, `sequence` (stop state), `knowledge`, `social` (read posts), `senders` (inbox scope) | None. |
| Deal Reactivation | `crm`, `unibox`, `knowledge`, `tasks`, `tables`, `integrations`, `visibility` | Gmail, Calendar, and Notion, read-only, for notes kept outside Dreamstate. |
| Head of Content | `knowledge`, `social`, `visibility` | X read tools below. |
| LinkedIn Writer | `social`, `knowledge` | None. |
| X Writer | `social`, `knowledge` | X read tools below. |
| YouTube Writer | `knowledge` | Google Drive, read-only, for footage the owner stored. |
| Graphic Designer | `social`, `knowledge`, `workspace` | Google Drive, read-only, for photos the owner stored. |

X read tools, for the four seats named above, are read-only: `search_posts_all`, `get_users_posts`, `get_posts_reposted_by`, `get_posts_quoted_posts`, `get_posts_counts_recent`, `get_trends_by_woeid`. Never post, like, follow, or DM through X.

How file work runs is in [claude-code-and-codex.md](claude-code-and-codex.md).
