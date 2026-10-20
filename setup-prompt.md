# Stand up a Dreamstate GTM desk

The prompt below is for any Dreamstate customer. This repo is private, so the bot reads files through the GitHub connector. It does not use raw URLs.

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

```text
Build a Dreamstate GTM desk from luisfigueroavale/dreamstate-gtm-team,
branch main. The repo is private. Read README.md, guides/rules.md,
guides/claude-code-and-codex.md, and each charter under agents/ through the
GitHub connector. Do not fetch raw.githubusercontent.com URLs.

Dreamstate MCP: https://mcp.trydreamstate.com/mcp. Browser sign-in. No API
key. One server. If a second server exists at https://mcp.trydreamstate.com,
tell me to remove it.

Ask all of these in one message, then wait:

1. Company name, the offer, and who it is for.
2. The one Dreamstate workspace. If I am unsure, call whoami and let me
   pick. This desk never opens another workspace.
3. Where the second brain lives: Company Context, a local folder, or both.
   Pages use knowledge.brain.context.compose_pages. A markdown note uses
   knowledge.vault.ingest, and a second call duplicates it. There is no
   repo sync. If Product Information, Ideal Customer, Competitor Analysis,
   or Tone of Voice is missing, ask before writing any page.
4. The local repo path for Claude Code or Codex, whether it is on this
   machine or over SSH, and which runtime to prefer.
5. The zone for a weekday rollup at 08:20.
6. Which seats to create. Default: every charter, the Content Room, and
   the one rollup.

After I answer:

- Take the Chief of Staff charter, with my answers filled in.
- Create each seat from the Charter block in its file. Do not loosen
  guides/rules.md.
- Create the Content Room from agents/14-content-room.md.
- Create one routine at 08:20 on weekdays in my zone. The Outbound Lead
  owns it when the app allows. If only the Chief of Staff can own
  routines, the Chief of Staff owns it and the text tells the Outbound
  Lead to run the rollup and return the note. No other routine.
- Install the plugin skills into the coding checkout if they are not
  there yet. Do not add a second MCP server while you do that.
- Do not connect a new app, send, post, enroll, launch, spend, or delete.
  whoami is allowed. tools_run is not.
- Show what you created, what the app refused, and the click I still owe.
```

## By hand

Create the Chief of Staff and paste its charter. Add other seats when you need them. Then the Content Room and the single routine, using the same ownership fallback as the prompt.
