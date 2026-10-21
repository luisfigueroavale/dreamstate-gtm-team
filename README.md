# Dreamstate GTM desk

A Grok Bot team that runs outbound and content on [Dreamstate](https://trydreamstate.com). Grok Bot holds the seats, one content room, and one weekday rollup. Dreamstate holds the workspace. Claude Code and Codex do file work in a local repo.

The Chief of Staff plus twelve Bots, and the [Content Room](seats/14-content-room.md). One routine, weekdays at 08:20.

Shared consent, standing actions, and the connector table are in [docs/rules.md](docs/rules.md). How file work runs is in [docs/claude-code-and-codex.md](docs/claude-code-and-codex.md).

## Connect once

Canonical endpoint, the one Grok Bot uses: `https://mcp.trydreamstate.com/mcp`

Register that server once. Use this repo's [`.mcp.json`](.mcp.json), or:

```sh
claude mcp add --transport http dreamstate https://mcp.trydreamstate.com/mcp
```

Do not also leave a second Dreamstate server on `https://mcp.trydreamstate.com`. Sign in through the browser. Do not paste an API key.

Skill files for the coding agent come from [luisfigueroavale/dreamstate-plugins](https://github.com/luisfigueroavale/dreamstate-plugins). Install them into that checkout. If the installer adds the host-root server, remove it. `skills_get` takes a bare id. The `dreamstate` skill is read from `skills/dreamstate/SKILL.md` in that repo, not from `skills_get`.

## Seats

Outbound, through the [Outbound Lead](seats/02-outbound-lead.md): [Lead Sourcer](seats/03-lead-sourcer.md), [Outbound Copywriter](seats/04-outbound-copywriter.md), [Sequences & Deliverability](seats/05-sequences-deliverability.md), [Social Engagement](seats/06-social-engagement.md), [Reply Manager](seats/07-reply-manager.md), [Deal Reactivation](seats/08-deal-reactivation.md).

Content, through the [Head of Content](seats/09-head-of-content.md): [LinkedIn Writer](seats/10-linkedin-writer.md), [X Writer](seats/11-x-writer.md), [YouTube Writer](seats/12-youtube-writer.md), [Graphic Designer](seats/13-graphic-designer.md).

The [Chief of Staff](seats/01-chief-of-staff.md) runs the handoff. Packs for each seat are in the rules guide.

YouTube drafts use `social.content.artifact_create` and stay drafts until one is connected. Connect and upload stay local. Graphics: Dreamstate stores HTML, CSS, or SVG, renders PNG or PDF, and reads sources back with `social.visuals.source_get` and `social.visuals.source_list`. Diagrams stay local.

## Routine

At 08:20 on weekdays, in the owner's zone, the Outbound Lead collects the rollup. If the app lets only the Chief of Staff own routines, that seat owns it and the text tells the Outbound Lead to run the rollup. The note does not enroll, send, or spend.

Build the desk with [setup-prompt.md](setup-prompt.md).
