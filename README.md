# AWRA ICT Website - React Version

A modern, matrix-themed website for AWRA ICT built with React, featuring dark mode with cyberpunk aesthetics.

## Features

- ⚛️ **React 18** with modern hooks
- 🎨 **Matrix/Cyberpunk Theme** - Enhanced dark mode with green matrix effects
- 🌓 **Theme Toggle** - Persistent theme switching with localStorage
- 🎬 **Animated Matrix Background** - Canvas-based matrix rain effect
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Tailwind CSS** - Utility-first styling
- ✨ **Lucide Icons** - Modern icon library

## Matrix Theme Enhancements

- Animated matrix rain background in dark mode
- Green (#00ff41) accent colors throughout
- Glowing borders and text effects
- Grid patterns and cyberpunk aesthetics
- Enhanced visual feedback on interactive elements

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── Process.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── TopNotification.jsx
│   │   └── MatrixBackground.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useTheme.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Theme System

The theme system uses a custom `useTheme` hook that:
- Persists theme preference in localStorage
- Respects system preferences
- Applies theme before first paint (prevents flash)
- Updates all components reactively

## Customization

### Matrix Colors

Edit `tailwind.config.js` to change matrix colors:
```js
colors: {
  matrix: {
    green: '#00ff41',  // Change this
    // ...
  }
}
```

### Matrix Background

Modify `src/components/MatrixBackground.jsx` to adjust:
- Animation speed
- Character set
- Opacity
- Font size

## Technologies

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## License

All rights reserved - AWRA ICT

# cursor_project
