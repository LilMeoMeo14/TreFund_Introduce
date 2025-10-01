# TreFund - Transparent Fundraising Platform

A modern, responsive landing page for TreFund - a blockchain-based transparent fundraising platform for startups.

## Features

- 🎨 Modern UI with TailwindCSS
- ⚛️ Built with React + Vite
- 🎭 Smooth animations and transitions
- 📱 Fully responsive design
- 🌙 Dark theme with green accent colors
- 🔄 Animated ticker tape with trading symbols
- 💎 Feature cards with hover effects

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation bar with wallet connect
│   ├── Hero.jsx         # Hero section with CTA
│   ├── TickerTape.jsx   # Animated trading ticker
│   ├── Benefits.jsx     # Feature cards section
│   └── Footer.jsx       # Footer with links and social media
├── App.jsx              # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Key Components

### Navbar
- Logo and branding
- Navigation links
- Connect Wallet and Login buttons

### Hero Section
- Large heading with gradient text
- Descriptive subtitle
- Call-to-action button
- Background image with overlay

### Ticker Tape
- Animated scrolling ticker
- Trading symbols with prices
- Seamless infinite loop

### Benefits Section
- 6 feature cards in responsive grid
- Icons from Lucide React
- Hover effects and transitions
- Key platform features

### Footer
- Multi-column link sections
- Social media icons
- Legal disclaimer
- Company information

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#00ff88',  // Main green color
    dark: '#00cc6a',
  },
  dark: {
    DEFAULT: '#0a0a0a',  // Background
    lighter: '#1a1a1a',
  }
}
```

### Content
All text content can be modified in the respective component files.

## License

MIT
