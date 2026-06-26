# EarlyEdge Updates Dashboard – Design Rationale

## Design Approach

I built this dash baord to be quick and not extremly hard to use. The main goal is for someone to post an update without having to go through a long process, then be able to find that update again later.

The update form is at the top of the page because creating a new post is the main action. Title, description, and category are required so every post has useful information. Links and attachments are optional, not every update needs extra material.

I used a dark gray and sea-green style to give the dashboard a modern tech feel, also being easy on the eyes. Personaly the color to me gives the feeling of ease and speed. The update cards sit in a scroll area so multiple updates can be viewed without making the page feel too long or crowded. I also added small hover effects to give buttons and cards more interaction and user awareness of interactions.

## User Experience Decisions

Users can filter updates by Research, Team, Marketing, or Product. This makes it easier to focus on a certain type of update instead of looking through every post.

The keyword search checks titles and descriptions, which helps users find a topic quickly. When no update matches the search or selected category, the dashboard shows a message instead of leaving an empty area that may look broken.

Users can add optional website links and downloadable files to posts. This gives a simple way to share supporting information without needing a separate page just for files.

## Assumptions and Limits

This is a only a front-end, so I built it around one user working in one browser. Updates are saved with localStorage, which means they stay available after refresh but only on the same browser and device.

Attachments are limited to 1 MB because they are converted and stored in browser storage. The app does not currently include accounts, shared team data, editing, or deleting posts.

## Future Improvements

A future version could add user accounts, a shared database, cloud file storage, editing and deleting posts, and pinned updates. It could also include image previews, daily update summaries, notifications, and team permissions.

The current version focuses on proving the main workflow: create an update, organize it, search for it, and keep it saved after refresh.
