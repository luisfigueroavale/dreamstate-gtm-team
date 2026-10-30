# Content day

How the content seats learn the owner's voice, read what is moving, and hand the owner one short plan a day. Everything here is a read or a draft. Nothing posts, likes, reposts, follows, DMs, schedules, or spends. The owner posts from tap-to-post links.

In the coding checkout of the LinkedIn funnel desk, the same work is the skills `derive-voice-rules`, `find-x-angles`, `draft-quote-reposts`, and `plan-content-day`.

## Voice from the owner's own posts

Setup asks for the owner's X handle and LinkedIn profile URL. They go under Accounts in `brand.local/identity.md` and never into a committed file.

1. The X Writer reads the owner's own last 100 or so original X posts with `search_posts_all` (`from:<handle> -is:retweet -is:reply`) or `get_users_posts`.
2. The LinkedIn Writer takes LinkedIn posts the owner pastes, or posts the social tools return for the owner's own account.
3. The Head of Content turns both sets into voice rules: tone, word rules, do, don't, and example lines. Every rule names two or more example posts by link. A rule with one example is marked tentative. Another account's posts are never a voice sample.
4. The rules go to `brand.local/voice.md` through a Chief of Staff packet with the skill `derive-voice-rules`. That file stays `Status: blank` until the owner reads the rules and flips it to `Status: filled`.

## What is moving

With identity, voice, and the reader filled, the X Writer reads the last 7 days in the owner's space and holds every pick to [viral-bar.md](viral-bar.md). It splits the set into format rows (any niche, the shape only) and target rows (accounts in the owner's space). Every row carries its link and its counts.

## The daily plan

The Head of Content assembles one short plan the owner can read on a phone:

- **Post.** 1 ready X post from the X Writer, with a tap-to-post link: `https://x.com/intent/post?text=<encoded text>`.
- **Quote reposts.** 3 quotes from the X Writer on recent target rows that clear the bar (last 72 hours, at most one per author). Each has the source post link, its counts, the quote text, and `https://x.com/intent/post?text=<encoded quote>&url=<encoded source link>`.
- **Replies.** 3 to 5 replies from the X Writer, each with the post link, its counts, the reply text, and `https://x.com/intent/post?in_reply_to=<post id>&text=<encoded reply>`.
- **LinkedIn.** One post idea from the LinkedIn Writer, tagged reach, belief, or signup, with why now.

Every line passes [ai-tells.md](ai-tells.md) and the banned words before the owner sees it, then `brand/taste.md`.

## Monday

On Monday the plan adds the week's three moving angles, with links and counts, and 3 voice-note prompts. Each prompt asks for something only the owner has: a decision they made, a mistake and what they changed, a customer question and their answer.

## Idea or voice note

When the owner sends an idea, a link, or a voice note transcript, the Head of Content routes it: the X Writer drafts one X post with a tap-to-post link, and the LinkedIn Writer drafts one LinkedIn post tagged reach, belief, or signup. No claim, number, or story the owner did not say.

## Routine

The plan runs when the owner asks. A daily plan on a timer is a second routine. It needs the owner's yes on that routine and a reason they will read it every time, as [rules.md](rules.md) says. Setup does not create it.
