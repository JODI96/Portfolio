# Portfolio — Joys Di Giorgio

> Personal portfolio website showcasing my work as a Software Engineer.
> Built with React + TypeScript (Vite) and ASP.NET Core.

**Live:** [joys-di-giorgio.ch](https://joys-di-giorgio.ch) &nbsp;·&nbsp; **Simulation:** [traderxgboost.onrender.com](https://traderxgboost.onrender.com)

---

## Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Frontend   | React 19, TypeScript, Vite 7                    |
| Backend    | ASP.NET Core (.NET 8)                           |
| Styling    | Custom CSS — no UI framework, dark theme        |
| Charts     | lightweight-charts v5                           |
| Fonts      | Inter (Google Fonts)                            |
| Hosting    | Hostpoint (static), Render.com (simulation API) |

---

## Project Structure

```
MyWebsite/
├── mywebsite.client/          # React frontend (Vite)
│   ├── src/
│   │   ├── App.tsx            # Main portfolio layout & all sections
│   │   ├── App.css            # Global styles & dark theme
│   │   ├── Simulation.tsx     # Live simulation section
│   │   └── Simulation.css
│   ├── public/
│   │   └── foto.jpg           # Profile photo
│   └── index.html
├── MyWebsite.Server/          # ASP.NET Core backend
└── _traderxgboost_deploy/     # Render.com deployment files (simulation API)
    ├── render_sim.py          # aiohttp WebSocket server
    ├── export_replay.py       # Local export script (generates replay_data.json)
    └── render.yaml            # Render deployment config
```

---

## Features

- Single-page application with smooth anchor navigation
- Fully responsive (mobile + desktop)
- Animated hero section with gradient blobs
- Sections: Hero · About · Skills · Experience · Education · Projects · Live Simulation · Contact
- GitHub project cards with language dots and tech tags
- Live XGBoost trading simulation (opens via Render.com)
- Private skills section highlighting self-taught ML stack

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | About | Background, motivation, ML interests |
| 02 | Skills | Backend, Frontend, Databases, Languages, Private ML stack |
| 03 | Experience | Timeline: duagon, Dr. Marino Müller AG, record Türautomation |
| 04 | Education | OST B.Sc. Computer Science, Elektroniker EFZ |
| 05 | Projects | GitHub projects with live links |
| 07 | Simulation | Live XGBoost BTC breakout replay |
| 08 | Contact | Email, Phone, LinkedIn, GitHub |

---

## Projects Showcased

| Project | Stack | Description |
|---------|-------|-------------|
| [TraderXGBoost](https://github.com/JODI96/TraderXGBoost) | Python, XGBoost | BTC breakout detection — 98 features, walk-forward validation, live paper trading |
| [Trader](https://github.com/JODI96/Trader) | PyTorch, DQN+LSTM | Orderflow scalping bot on Binance Futures with WebSocket streams |
| [ravecheller](https://github.com/JODI96/ravecheller) | discord.py | Discord bot managing Minecraft, GMod, Terraria, Factorio servers |
| [TKI](https://github.com/JODI96/TKI) | Pygame | Educational debugging game for programming beginners |
| [Portfolio](https://github.com/JODI96/Portfolio) | React, ASP.NET Core | This website |

---

## Getting Started

**Prerequisites:** Node.js 18+, .NET 8 SDK

```bash
# Clone the repo
git clone https://github.com/JODI96/Portfolio.git
cd Portfolio

# Install frontend dependencies
cd mywebsite.client
npm install

# Run frontend + backend (via Visual Studio or CLI)
dotnet run --project MyWebsite.Server
```

The Vite dev server proxies API calls to the .NET backend automatically.

**Frontend only (static preview):**
```bash
cd mywebsite.client
npm run dev
```

**Production build:**
```bash
cd mywebsite.client
npm run build
# Output in mywebsite.client/dist/ — deploy to any static host
```

---

## Live Simulation

The simulation section streams a bar-by-bar replay of BTCUSDT 1m candles (January 2026) with XGBoost trade signals via WebSocket.

- **Server:** Python + aiohttp on Render.com free tier (~50MB RAM)
- **Data:** Pre-exported `replay_data.json` (generated locally via `export_replay.py`)
- **Chart:** lightweight-charts with trade entry/exit bubbles and equity curve

```bash
# Generate replay data locally (requires TraderXGBoost repo)
python export_replay.py --data Data/BTCUSDT/monthly/2026-01_1m.csv

# Start simulation server locally
python render_sim.py
```

---

## Contact

| | |
|---|---|
| Email | [joys96@gmail.com](mailto:joys96@gmail.com) |
| Phone | [+41 79 870 28 65](tel:+41798702865) |
| LinkedIn | [joys-di-giorgio-14698b186](https://www.linkedin.com/in/joys-di-giorgio-14698b186) |
| GitHub | [JODI96](https://github.com/JODI96) |
