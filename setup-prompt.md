# Stand up a Dreamstate GTM desk

Grok Bot can create seats, a group chat, and a routine from a single conversation. The prompt below is for any Dreamstate customer. It fills in the company, the workspace, and the local repo. It does not assume a product or a stack beyond Dreamstate, Grok Bot, and Claude Code or Codex.

Connect Dreamstate before you paste the prompt. The HTTP MCP endpoint is:

`https://mcp.trydreamstate.com/mcp`

```sh
claude mcp add --transport http dreamstate https://mcp.trydreamstate.com/mcp
```

Or put this [`.mcp.json`](.mcp.json) where Claude Code will read it:

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

Approve the browser sign-in on the first tool call. Do not paste an API key.

Skills for the coding agents come from the public plugin repo:

```sh
npx @trydreamstate/cli install
```

```sh
claude plugin marketplace add luisfigueroavale/dreamstate-plugins
claude plugin install dreamstate@dreamstate
```

Codex and Grok Build use the matching install lines in the [README](README.md). The plugin manifest talks to `https://mcp.trydreamstate.com`. This desk talks to `https://mcp.trydreamstate.com/mcp`.

## Prompt

Create a Bot named Chief of Staff. Paste the block below into its chat. Answer the one interview. It creates the rest.

```text
Build a Dreamstate GTM desk from the charters in
https://github.com/luisfigueroavale/dreamstate-gtm-team

Open README.md, then read each charter under agents/, before you ask anything.
Raw files:
https://raw.githubusercontent.com/luisfigueroavale/dreamstate-gtm-team/main/README.md
https://raw.githubusercontent.com/luisfigueroavale/dreamstate-gtm-team/main/agents/<file>.md

Dreamstate is the HTTP MCP server at https://mcp.trydreamstate.com/mcp.
Sign-in is the browser OAuth prompt. Do not ask for an API key.
The only controls you may describe are whoami, packs_list, packs_get,
packs_route, skills_list, skills_get, tools_search, tools_get, tools_run,
runs_get, runs_list, runs_events, and runs_cancel.
The only packs you may describe are crm, integrations, knowledge, senders,
sequence, social, tables, tasks, unibox, visibility, workflow, and workspace.

Ask all of these in one message, then wait:

1. Company name, the offer, and the people the offer is for.
2. The one Dreamstate workspace this desk may use. If I am unsure of the
   name, call whoami and let me choose from that list. This desk never
   opens a second workspace.
3. Where the second brain lives: Dreamstate Company Context in the
   knowledge pack, a local folder, or both. If Product Information,
   Ideal Customer, Competitor Analysis, or Tone of Voice is missing,
   ask whether I want those pages drafted from the public site. Do not
   write them until I say yes.
4. The local workspace repo Claude Code or Codex should use. I will give
   the path, whether that checkout sits on this machine or is reached over
   SSH, and which runtime to prefer. If one runtime is absent, I will say so.
5. The time zone for a weekday rollup at 08:20.
6. Which seats to create. The default is every charter in agents/, the
   room in agents/14-content-room.md, and the one rollup.

After I answer:

- Adopt the Chief of Staff charter from agents/01-chief-of-staff.md,
  with my answers written into it.
- Create each seat I chose. Its instructions are the Charter block in
  its file, with my company, workspace, repo path, and runtime filled
  in. Leave every consent, evidence, likeness, shipping, and connector
  rule as strict as the file.
- Create a group chat named Content Room with the members in
  agents/14-content-room.md.
- Create one routine. It belongs to the Outbound Lead. It runs at 08:20
  on weekdays, in the zone from question 5. The body of the routine is the
  rollup in that seat's charter. Create no other routine, and do not turn
  on a Dreamstate recurring trigger.
- While you do this, do not connect a new app, send, post, enroll,
  launch, spend credits, or delete anything. whoami is allowed. tools_run
  is not.
- Show what you created, what the app refused, and the click I still
  have to make.
```

## Click path

If you would rather create the seats yourself, create the Chief of Staff first and paste the Charter block from [agents/01-chief-of-staff.md](agents/01-chief-of-staff.md). Add the Outbound Lead next. Add the other seats when you need them. Then create the Content Room and the single weekday routine by hand, using [agents/14-content-room.md](agents/14-content-room.md) and the rollup section of [agents/02-outbound-lead.md](agents/02-outbound-lead.md).
