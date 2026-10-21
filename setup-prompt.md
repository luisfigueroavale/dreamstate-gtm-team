# Stand up a Dreamstate GTM desk

The prompt below is for any Dreamstate customer. Read the files from branch `main`, through the GitHub connector or a raw URL. At the end, setup gives the owner the map in [docs/start-here.md](docs/start-here.md), in plain words, using the names and ids it created.

## Connect once

Canonical endpoint: `https://mcp.trydreamstate.com/mcp`

```sh
claude mcp add --transport http dreamstate https://mcp.trydreamstate.com/mcp
```

Or use [`.mcp.json`](.mcp.json). One server only. If a plugin install also registers `https://mcp.trydreamstate.com`, remove that entry.

Sign in through the browser. Do not paste an API key.

Install the skill files from [luisfigueroavale/dreamstate-plugins](https://github.com/luisfigueroavale/dreamstate-plugins) into the checkout where Claude Code or Codex runs. `skills_get` takes a bare id. Read `skills/dreamstate/SKILL.md` from that plugin repo.

## Prompt

Create a Bot named Chief of Staff. Paste the block below into its chat.

The block tells that Bot to explain the desk in plain language before the six questions. The explanation covers the team, each seat, Dreamstate and the one server, Company Context, Claude Code or Codex and the plugin skill files, and the 08:00 rollup. Each question says why it is asked. The final report says what each created item does, what the app refused, and what you still need to do. It then gives the same map as [docs/start-here.md](docs/start-here.md), filled in with the names and ids it created, and points at that file. The map covers who does what, who you talk to, who talks to who, and the first-week checklist for the content plan, the writing style, and leads. The consent rules stay as written in [docs/rules.md](docs/rules.md).

```text
Build a Dreamstate GTM desk from luisfigueroavale/dreamstate-gtm-team,
branch main. Read README.md, docs/rules.md, docs/claude-code-and-codex.md,
docs/start-here.md, and each charter under seats/ from branch main,
through the GitHub connector or a raw URL.

Dreamstate MCP: https://mcp.trydreamstate.com/mcp. Browser sign-in. No API
key. One server. If a second server exists at https://mcp.trydreamstate.com,
tell me to remove it.

In your first message, give the orientation below, then ask all six
questions, then wait. Do not create anything before I answer. Plain
language. Short sentences. I may have no context. If you use a term, add
one line that says what it means. Do not loosen docs/rules.md. This
explanation does not change those consent rules.

Orientation, in this order:

- This team is a set of Grok Bots that draft outbound and content. A seat
  is one Bot with one job. They do not send, post, enroll, or spend unless
  I say yes to that named thing. Enroll means putting people into a
  sequence so messages can go out. A sequence is a timed series of emails
  and notes.
- What each seat does, one line each:
  - Chief of Staff runs the desk and hands file work to the coding agent.
    It does not take a specialist's lane.
  - Outbound Lead plans outbound and collects the weekday 08:00 rollup.
    It does not source, write, or send.
  - Lead Sourcer builds lists of people to contact and scores rows already
    in the workspace. It does not message them.
  - Outbound Copywriter writes the first cold email and the LinkedIn notes
    inside a sequence. It does not send.
  - Sequences & Deliverability loads accepted copy and accepted rows into
    a sequence and watches whether the mailboxes and domains stay healthy.
  - Social Engagement keeps a watchlist of people and drafts comments. It
    does not publish my posts.
  - Reply Manager drafts replies in LinkedIn threads that already exist,
    and in email when I name that thread.
  - Deal Reactivation finds quiet past deals and drafts one follow-up. It
    does not send, and it does not move a deal stage. A stage is the
    deal's step, such as open or won.
  - Head of Content sets the week's plan and routes each item to a writer.
    It does not write the final post.
  - LinkedIn Writer drafts LinkedIn posts, opening lines, and articles.
  - X Writer drafts X posts, threads, and replies. The live account stays
    quiet until I name one action.
  - YouTube Writer packages a video: title options, a thumbnail brief, a
    description, and chapters. It does not upload.
  - Graphic Designer builds graphics, thumbnail frames, carousels, and
    diagrams. It does not write the caption that ships.
  - Content Room is the content group chat. It holds pointers (channel,
    angle, file, deadline), not the draft. It does not publish.
- Dreamstate is the workspace that holds pages, tables, sequences, and
  drafts. The one MCP server (https://mcp.trydreamstate.com/mcp) is the
  connection a Bot uses to reach that workspace. One server. Sign in
  through the browser. Do not paste an API key.
- Company Context is the second brain. It is the pages the seats read so
  they stay on the offer, the customer, and the voice. A page is written
  with knowledge.brain.context.compose_pages. A markdown note uses
  knowledge.vault.ingest, and a second call duplicates it. A GitHub mount
  links a repo so Dreamstate can read those files. It is
  knowledge.repositories.connect, then knowledge.repositories.sync. Both
  call GitHub and need a yes.
- Claude Code and Codex are coding agents. They edit files in a local
  repo. The seats stay in Grok Bot. A seat hands them a packet: a goal,
  the inputs, a skill name, and the guardrails. Guardrails are what must
  not happen. The dreamstate-plugins skill files are the instructions
  those agents read so they call Dreamstate the right way. They are
  installed into that repo folder so the agent on that machine can see
  them. skills_get takes a bare id. The dreamstate skill is read from
  skills/dreamstate/SKILL.md in that plugin repo, not from skills_get.
- The 08:00 rollup is the one weekday routine, in my time zone. A routine
  is one scheduled run. This desk has exactly one. The Outbound Lead asks
  the outbound seats what is waiting and returns one note: how many rows a
  tool counted, the credits those lookups cost, what is blocked, and which
  decisions need me. A row is one person or company in a table. Credits are
  what Dreamstate charges for a paid lookup. If a seat does not report,
  that is unknown, not zero. The note does not enroll, send, or spend. If
  the app lets only the Chief of Staff own routines, that seat owns it and
  the text tells the Outbound Lead to run the rollup.

Then ask all six in that same message. After each question, one line on
why you are asking:

1. Company name, the offer, and who it is for.
   Why: the seats read this so a draft names the right product and the
   right reader.
2. The one Dreamstate workspace. If I am unsure, call whoami and let me
   pick. This desk never opens another workspace.
   Why: one workspace keeps every seat on the same pages and rows.
3. Where the second brain lives: Company Context, a local folder, or both.
   Pages use knowledge.brain.context.compose_pages. A markdown note uses
   knowledge.vault.ingest, and a second call duplicates it. A GitHub mount
   is knowledge.repositories.connect, then knowledge.repositories.sync.
   Both call GitHub and need a yes. If Product Information, Ideal Customer,
   Competitor Analysis, or Tone of Voice is missing, ask before writing
   any page.
   Why: the seats need a place to read the offer and the voice, and a note
   must not be written twice.
4. The local repo path for Claude Code or Codex, whether it is on this
   machine or over SSH, and which runtime to prefer.
   Why: file work runs there, and the plugin skill files are installed
   into that folder.
5. The zone for a weekday rollup at 08:00.
   Why: the one routine fires at 08:00 in that zone. There is no second
   routine.
6. Which seats to create. Default: every charter, the Content Room, and
   the one rollup.
   Why: a charter is the written job for that Bot. I will not open a seat
   you do not want yet.

After I answer:

- Take the Chief of Staff charter, with my answers filled in.
- Create each seat from the Charter block in its file. Do not loosen
  docs/rules.md.
- Create the Content Room from seats/14-content-room.md.
- Create one routine at 08:00 on weekdays in my zone. The Outbound Lead
  owns it when the app allows. If only the Chief of Staff can own
  routines, the Chief of Staff owns it and the text tells the Outbound
  Lead to run the rollup and return the note. No other routine.
- Install the plugin skills into the coding checkout if they are not
  there yet. Do not add a second MCP server while you do that.
- Do not connect a new app, send, post, enroll, launch, spend, or delete.
  whoami is allowed. tools_run is not.
- Final report, in plain words. Do not only list names. For each thing
  you created, say what it is and what it does. Use the name and the id
  you created. Say what the app refused, and the click I still owe. If
  you use a term, add one line that says what it means. This report does
  not change the consent rules in docs/rules.md.

  Then give me the same map as docs/start-here.md, in plain words, filled
  in with those names and ids. Point me at docs/start-here.md. Read that
  file before you write the map. If a file does not say where something
  lives or who owns it, say it is an open item. Do not invent a seat, a
  tool, or a flow.

  The map has four parts:

  - Who does what. One short line per seat you created, plus the Content
    Room if you created it. Say what it does, what it hands off, and what
    it never does.
  - Who I talk to. I talk mainly to the Chief of Staff. I go to the
    Outbound Lead for outbound and the Head of Content for content. I
    call the Reply Manager when a thread is waiting, and Deal
    Reactivation when I want a quiet deal looked at. Use the reporting
    line in each charter. If a charter names no boss, say that.
  - Who talks to who. The reporting lines, the Content Room, and the
    weekday 08:00 rollup. If you own the routine, your text tells the
    Outbound Lead to run the rollup and return the note. The Outbound
    Lead collects from the five seats its charter names. You then send
    me the decisions that are waiting, with links. Also say how a packet
    reaches Claude Code or Codex. A packet is four fields: the goal, the
    inputs, the skill, and the guardrails. You run them as one task in
    the local repo path I gave you. This repo does not name that folder.
    Use the path I gave. Do not assume ~/dreamstate-growth.
  - The first-week checklist. Cover the four Company Context pages
    (Product Information, Ideal Customer, Competitor Analysis, and Tone
    of Voice), connecting senders and mailboxes (each needs my yes), and
    the first lead list. Also cover how to set up the content plan, the
    writing style, and leads, as docs/start-here.md describes them.
    Only include steps the files support.
```

## By hand

Create the Chief of Staff and paste its charter. Add other seats when you need them. Then the Content Room and the single routine at 08:00 on weekdays, using the same ownership fallback as the prompt.

When you finish, give the owner the same map as [docs/start-here.md](docs/start-here.md), in plain words, with the names and ids you created. Point them at that file. Cover who does what, who they talk to, who talks to who, and the first-week checklist for the content plan, the writing style, and leads. If a file does not define a step, call it an open item.
