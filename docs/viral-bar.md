# Viral bar

One bar for every seat that picks inspiration, a quote target, or a reply target from other people's posts. X read tools stay read-only, as [rules.md](rules.md) says.

## The bar

A post counts as inspiration only when it has 200 or more likes, or 10,000 or more views. On LinkedIn, read reactions as likes and impressions as views. A missing view count is unknown, not zero, so that post has to clear the likes line.

A post under the bar can still show the reader's words or an open question. Keep it as a reader note. It is not inspiration, and its hook is not borrowed.

## Rank

Rank first the posts running 5 to 10 times their author's average. The average is likes plus bookmarks per post over that author's recent original posts: aim for 20 to 50, and at least 10, read with `search_posts_all` (`from:<handle> -is:retweet -is:reply`) or `get_users_posts`. Leave the post you are scoring out of its own average. Show the sample size and the arithmetic. Fewer than 10 posts leaves the multiple unknown.

A post above 10 times stays near the top, but check whether a large account reposted it before saying why it traveled. Never write a multiple you did not compute. In the coding checkout of the LinkedIn funnel desk, `skills/find-x-angles/scripts/viral_bar.py` computes the same numbers from a saved file.

## Where ideas may come from

- Hooks and formats may come from any niche. Borrow the shape, never the sentence.
- Quote and reply targets must be accounts in the owner's own space: the reader in `audience.local/ideal-follower.md`, the topics on Product Information and Ideal Customer, and the watchlist Social Engagement keeps.

## Reads

Live reads, not only pasted posts: `search_posts_all` for topics in the last 7 days, `get_users_posts` for an account, `get_posts_counts_recent` for whether a topic is rising, `get_trends_by_woeid` for trends that touch the owner's topics. Then `visibility.radar.inspiration_x_list` and `visibility.radar.inspiration_linkedin_list`. Every read stays a read.

## Citation

Every angle, quote, and reply names its source post link and its counts: likes, reposts, replies, bookmarks, views when returned, the time of the read, and the author multiple with its sample size when you computed it.
