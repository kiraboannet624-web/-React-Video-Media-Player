# YouTube Clone — Advanced React Video Media Player

> 🚀 Live Demo: [Add your deployed URL here]

A production-grade YouTube clone built with React, MUI, Axios, and TanStack Query. Fetches real data from the YouTube v3 API via RapidAPI.

---

## Features

- 🎬 Browse videos by category (New, Coding, Music, Gaming, Sports, etc.)
- 🔍 Search videos and channels in real-time
- 📺 Watch videos with a fullscreen-capable embedded player
- 📊 View video stats (views, likes) and channel subscriber counts
- 📱 Fully responsive — mobile, tablet, and desktop
- ⚡ TanStack Query caching — no duplicate API calls on revisit
- 🔒 API key secured via environment variables
- ❌ Graceful error handling when API limit is reached

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky top bar with logo and search
│   ├── Sidebar.jsx       # Category navigation with icons
│   ├── SearchBar.jsx     # Search input with routing
│   ├── VideoCard.jsx     # Reusable video thumbnail card
│   ├── ChannelCard.jsx   # Reusable channel avatar card
│   ├── VideoPlayer.jsx   # YouTube iframe with fullscreen toggle
│   └── Loader.jsx        # Centered loading spinner
├── Pages/
│   ├── feed.jsx          # Home page — category video grid
│   ├── VideoDetails.jsx  # Video playback + related videos
│   ├── ChannelDetails.jsx# Channel profile + uploaded videos
│   └── SearchFeed.jsx    # Search results page
├── Utils/
│   └── fetchFromAPI.js   # Axios instance with baseURL & headers
├── App.js                # Routes and QueryClientProvider
└── index.js              # React DOM entry point
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/video-media-player.git
cd video-media-player/youtube-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `youtube-clone/` root:

```
REACT_APP_RAPID_API_KEY=your_rapidapi_key_here
```

Get your free API key from [RapidAPI — YouTube v3](https://rapidapi.com/ytdlfree/api/youtube-v31).

### 4. Start the development server

```bash
npm start
```

App runs at `http://localhost:3000`

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| MUI v7 | Component library & styling |
| Axios | HTTP client |
| TanStack Query v5 | Data fetching & caching |
| React Router v7 | Client-side routing |
| RapidAPI YouTube v3 | Video data source |

---

## Deployment

Deployed on [Vercel / Netlify] — [Add live URL here]

To deploy on Vercel:
```bash
npm install -g vercel
vercel
```

Make sure to add `REACT_APP_RAPID_API_KEY` in your Vercel environment variables.
