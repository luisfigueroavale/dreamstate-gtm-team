# Dreamstate GTM desk

**Start here if you are new:** [docs/start-here.md](docs/start-here.md) is the plain-language map of this team. It says what each seat does, who you talk to, who talks to who, and what you do in the first week.

A Grok Bot team that runs outbound and content on [Dreamstate](https://trydreamstate.com). Grok Bot holds the seats, one content room, and one weekday rollup. Dreamstate holds the workspace. Claude Code and Codex do file work in a local repo.

The Chief of Staff plus twelve Bots, and the [Content Room](seats/14-content-room.md). One routine, weekdays at 08:00.

Shared consent, standing actions, and the connector table are in [docs/rules.md](docs/rules.md). How file work runs is in [docs/claude-code-and-codex.md](docs/claude-code-and-codex.md).

## What this desk is

A seat is one Grok Bot with one job. The Bots draft. They do not send, post, enroll, or spend until you say yes to that named thing. Enroll means putting people into a sequence so messages can go out. A sequence is a timed series of emails and notes.

Dreamstate is the workspace that holds pages, tables, sequences, and drafts. The one MCP server, `https://mcp.trydreamstate.com/mcp`, is the connection a Bot uses to reach that workspace. One server. Sign in through the browser. Do not paste an API key.

Company Context is the second brain. It is the pages the seats read so they stay on the offer, the customer, and the voice.

Claude Code and Codex edit files in a local repo. The seats stay in Grok Bot. A seat hands the coding agent a packet: a goal, the inputs, a skill name, and the guardrails (what must not happen). The dreamstate-plugins skill files are the instructions those agents read so they call Dreamstate the right way. They are installed into that repo folder so the agent on that machine can see them.

The 08:00 rollup is the one weekday routine, in your time zone. A routine is a scheduled run. The Outbound Lead collects one morning note: what is waiting, what a tool measured, and which decisions need you. A missing report is unknown, not zero. The note does not enroll, send, or spend. If the app lets only the Chief of Staff own routines, that seat owns it and the text tells the Outbound Lead to run the rollup.

## Connect once

Canonical endpoint, the one Grok Bot uses: `https://mcp.trydreamstate.com/mcp`

Register that server once. Use this repo's [`.mcp.json`](.mcp.json), or:

```sh
claude mcp add --transport http dreamstate https://mcp.trydreamstate.com/mcp
```

Do not also leave a second Dreamstate server on `https://mcp.trydreamstate.com`. Sign in through the browser. Do not paste an API key.

Skill files for the coding agent come from [luisfigueroavale/dreamstate-plugins](https://github.com/luisfigueroavale/dreamstate-plugins). Install them into that checkout. If the installer adds the host-root server, remove it. `skills_get` takes a bare id. The `dreamstate` skill is read from `skills/dreamstate/SKILL.md` in that repo, not from `skills_get`.

## What each seat does

Outbound reports to the Outbound Lead. Content reports to the Head of Content. Both report to the Chief of Staff.

- [Chief of Staff](seats/01-chief-of-staff.md) runs the desk and hands file work to Claude Code or Codex. It does not take a specialist's lane.
- [Outbound Lead](seats/02-outbound-lead.md) plans outbound and collects the 08:00 rollup. It does not source, write, or send.
- [Lead Sourcer](seats/03-lead-sourcer.md) builds lists of people to contact and scores rows already in the workspace. It does not message them.
- [Outbound Copywriter](seats/04-outbound-copywriter.md) writes the first cold email and the LinkedIn notes inside a sequence. It does not send.
- [Sequences & Deliverability](seats/05-sequences-deliverability.md) loads accepted copy and accepted rows into a sequence and watches mailbox and domain health.
- [Social Engagement](seats/06-social-engagement.md) keeps a watchlist of people and drafts comments. It does not publish your posts.
- [Reply Manager](seats/07-reply-manager.md) drafts replies in LinkedIn threads that already exist, and in email when you name that thread.
- [Deal Reactivation](seats/08-deal-reactivation.md) finds quiet past deals and drafts one follow-up. It does not send, and it does not move the deal to another stage.
- [Head of Content](seats/09-head-of-content.md) sets the week's plan and routes each item to a writer. It does not write the final post.
- [LinkedIn Writer](seats/10-linkedin-writer.md) drafts LinkedIn posts, opening lines, and articles.
- [X Writer](seats/11-x-writer.md) drafts X posts, threads, and replies. The live account stays quiet until you name one action.
- [YouTube Writer](seats/12-youtube-writer.md) packages a video: title options, a thumbnail brief, a description, and chapters. It does not upload.
- [Graphic Designer](seats/13-graphic-designer.md) builds graphics, thumbnail frames, carousels, and diagrams. A GIF or MP4 is optional. It does not write the caption that ships. The optional steps are in [docs/design-playbook.md](docs/design-playbook.md).
- [Content Room](seats/14-content-room.md) is the content group chat. It holds pointers (channel, angle, file, deadline), not the draft. It does not publish.

Packs for each seat are in the rules guide.

YouTube drafts use `social.content.artifact_create` and stay drafts until one is connected. Connect and upload stay local. Graphics: Dreamstate stores HTML, CSS, or SVG, renders PNG or PDF, and reads sources back with `social.visuals.source_get` and `social.visuals.source_list`. Diagrams stay local. The shared brand form at `design/brand.md` is blank. Each team fills a local copy. See [docs/design-playbook.md](docs/design-playbook.md).

## Routine

At 08:00 on weekdays, in the owner's zone, the Outbound Lead collects the rollup. If the app lets only the Chief of Staff own routines, that seat owns it and the text tells the Outbound Lead to run the rollup. The note does not enroll, send, or spend.

Build the desk with [setup-prompt.md](setup-prompt.md).
