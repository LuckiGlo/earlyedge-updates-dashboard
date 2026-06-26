# EarlyEdge Updates Dashboard

This is a front-end dashboard made for a fictional startup studio called EarlyEdge. It gives users a simple way to post progress updates, research notes, team updates, or marketing ideas.

Each update can include a title, description, category, optional link, and optional downloadable file. Users can also search keywords within updates, filter them by category, and keep their posts saved even after refreshing the page.
## Features

* Can create updates with a title, description, and category
* Add an optional website link
* Attach and download files up to 1 MB
* Filter updates by Research, Team, Marketing, or Product
* Search updates by keywords in the title or description
* Keep updates saved after refreshing the browser with localStorage
* Interactive Feeling Dashboard/Cards with abiltiy for multiple posts
## How to Run the Project

1. Download or copy the project files.
2. Open the project folder in VS Code.
3. Open a terminal in the project folder.
4. Install the needed packages:

```bash
npm install
```

5. Start the app:

```bash
npm run dev
```

6. Open the local URL shown in the terminal after the app starts.

## Current Limitations

This is a front-end MVP, so updates are saved with localStorage in the browser. So updates stay saved after refresh, but they are only available on the same browser and device.

Attachments are limited to 1 MB so they can be stored safely in browser storage. The app does not currently have user accounts, a shared database, or editing and deleting features.

## Future Improvements

* Add user accounts and a shared database
* Allow users to edit or delete updates
* Add pinned or starred important updates
* Add image previews for image attachments
* Create a daily summary of recent updates by category

## Tools Used

* React
* Vite
* CSS
* localStorage
* FileReader API

## AI Use Disclosure

I used ChatGPT, Gemini, and VS Code AI suggestions as learning and debugging tools. They helped me understand React concepts, troubleshoot errors, and break features into smaller steps. I built, adjusted, tested, and styled the project myself while learning the process.

