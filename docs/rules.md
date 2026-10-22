# Team rules

Every seat follows this page. A charter only adds a lane, connectors, and handoffs. When a skill and a charter or this page disagree, the stricter rule wins.

Read this file from branch `main` in `luisfigueroavale/dreamstate-gtm-team`, through the GitHub connector or a raw URL.

## How the team works

1. **Drafts by default.** Nothing goes out, gets enrolled, costs credits, or is deleted until the owner says yes to that item.
2. **Briefs gate spend.** Outbound runs on an Outbound Lead brief with an audience cap and a credit ceiling. Every paid call is quoted first.
3. **One row of tools per seat.** Grok Bot shares connections across Bots, so each charter names its packs and the table below is the limit.
4. **Heads route.** Department heads (Outbound Lead, Head of Content) set the plan and the gates, then give the work to a specialist rather than doing it.
5. **Routines are rare.** One routine, the 08:00 rollup. A new one needs a yes and a reason the owner will read it every time.

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
- Never write a CRM field, a Notion page, or a task status without the owner's OK.
- Production, a merge, and a deploy wait for a yes on that action.
- One Grok Bot routine: weekdays at 08:00, the outbound rollup. If the app lets only the Chief of Staff own routines, that seat owns it and the text tells the Outbound Lead to run the rollup. No second routine, and no Dreamstate recurring trigger, without its own yes. `workflow.custom_agents.routine_create` is a second routine. Do not call it without that yes.

## Standing actions that still need a yes

Outward and standing tools always need a yes, including when the price is 0.

These do not raise `approval_required`. Name the object and wait anyway.

Read the current rules first. This call replaces the whole set: `social.outreach.keyword_dm_rules.replace`.

Also: `social.feeds.create`, `tables.table_sources.schedule_set`, `tables.auto_run.set`, `sequence.linkedin.auto_engagements.replace`, `sequence.x.auto_engagements.replace`, `tables.profile_watcher.create`, `tables.profile_watcher.resume`.

External even at zero credits: `senders.mailboxes.placement_test` (sends a probe email), `social.linkedin_account_invite`, `social.linkedin.connection_invite`, `social.advocacy.engage`, `integrations.calendar.events_create`, `visibility.radar.scan_execute`, `visibility.analytics_refresh`, `tables.x_post_engagers.run` (calls X).

Also need a yes: `social.content.schedule`, `social.amplification.create`, `social.content.auto_publish_set`, `social.content.approval.authorize_publish`, `social.engagement.comment`, `social.engagement.react`, `social.posts.create`, `workflow.runtime_agents.trigger_create`, `workflow.agent_sessions.activate`, `workflow.agent_sessions.run`, `workspace.copilot.policy_set`, `unibox.whatsapp.drafts_approve` (sends), `crm.sync.enable`, `senders.connect.start`, `senders.mailboxes.warmup_enable`, `senders.mailboxes.deliverability_auto_enroll`, `knowledge.repositories.connect`, `knowledge.repositories.sync`.

Bots never call `social.content.approval.authorize_publish` or `social.content.auto_publish_set`.

## Paid tools

`dyn` is the price the dry run quotes. A paid read with no dry_run still shows this price and waits.

- `crm.contact.find_phone` — 50 cr
- `crm.contact.find_personal_email` — 3 cr
- `crm.contact.find_linkedin` — 1 cr
- `crm.contact.find_person` — 0.45 cr
- `crm.contact.find_email` — up to 25
- `crm.contact.find_company` — dyn ≤25
- `crm.signals.search_run` — dyn ≤1,000,000
- `crm.enrichment.backfill` — dyn ≤25
- `crm.record_enrichment.create` — dyn ≤25
- `crm.records.tool_run` — dyn ≤25
- `knowledge.first_win.warm_queue` — 0.5 cr
- `knowledge.brain.knowledge.synthesize` — 1 cr
- `visibility.research.urls_fetch` — 1 cr
- `visibility.research.web_search` — 2 cr
- `senders.mailboxes.purchase` — $ (quote)
- `social.content.compose` — 9–27 cr
- `social.posts.comment_publish` — 2 cr
- `social.content.assist` — 9 cr
- `social.content.generate` — 9 cr
- `tables.table_runs.create` — dyn ≤25
- `tables.columns.run` — dyn ≤25
- `tables.columns.run_remaining` — dyn ≤25
- `tables.table_sources.run` — dyn ≤25
- `tables.contacts.verify_email` — 3 cr/item ≤300
- `tables.columns.run_all` — dyn ≤25
- `tables.table_runs.resume` — dyn ≤25
- `tables.table_runs.retry` — dyn ≤25
- `unibox.inbox.analyze` — 1 cr
- `visibility.probe.start` — 74 cr
- `visibility.refresh` — 0.4 cr
- `workflow.workflows.call` — dyn ≤25
- `workspace.copilot.send` — dyn ≤25

## Second brain

Company Context pages use `knowledge.brain.context.compose_pages` (dry_run, then a yes). A markdown note uses `knowledge.vault.ingest`, which only creates: a second call duplicates it. `knowledge.brain.knowledge.compose_document` revises a document. A GitHub mount is `knowledge.repositories.connect`, then `knowledge.repositories.sync`. Both call GitHub and need a yes. `integrations.github_repository_configure` is publishing config only.

## Skills

`skills_get` takes the bare id (`plays`), not `dreamstate:plays`. The `dreamstate` skill is not in the workspace. Read `skills/dreamstate/SKILL.md` from [luisfigueroavale/dreamstate-plugins](https://github.com/luisfigueroavale/dreamstate-plugins). Channel copy skills: `youtube-posts`, `instagram-posts`, `tiktok-posts`, `facebook-posts`.

## Connectors

Grok Bot shares connections across seats. A seat uses only its row.

| Seat | Packs | Also |
|---|---|---|
| Chief of Staff | Packs named on that packet | GitHub, read-only, for this repo. Local repo for the coding agents. |
| Outbound Lead | `knowledge`, `tables`, `sequence`, `senders`, `unibox`, `social`, `workspace` (read) | Notion and Slack, read-only. |
| Lead Sourcer | `tables`, `crm`, `knowledge`, `visibility`, `integrations` (status) | X read tools below. |
| Outbound Copywriter | `knowledge`, `sequence` (read) | None. |
| Sequences & Deliverability | `sequence`, `senders`, `tables`, `workspace` | None. |
| Social Engagement | `social`, `tables`, `visibility`, `integrations` (status) | X read tools below. |
| Reply Manager | `unibox`, `sequence` (stop state), `knowledge`, `social` (read posts), `senders` (inbox scope) | None. |
| Deal Reactivation | `crm`, `unibox`, `knowledge`, `tasks`, `tables`, `integrations`, `visibility` | Gmail, Calendar, and Notion, read-only, for notes kept outside Dreamstate. |
| Head of Content | `knowledge`, `social`, `visibility` | Notion, GitHub, and Drive, read-only. X read tools below. |
| LinkedIn Writer | `social`, `knowledge` | None. |
| X Writer | `social`, `knowledge` | X read tools below. |
| YouTube Writer | `social`, `visibility`, `senders`, `knowledge` | Google Drive, read-only, for footage the owner stored. |
| Graphic Designer | `social`, `knowledge`, `workspace` | Google Drive, read-only, for photos the owner stored. |

X read tools, for the four seats named above, are read-only: `search_posts_all`, `get_users_posts`, `get_posts_reposted_by`, `get_posts_quoted_posts`, `get_posts_counts_recent`, `get_trends_by_woeid`. Never post, like, follow, or DM through X.

How file work runs is in [claude-code-and-codex.md](claude-code-and-codex.md).
