/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dracula: {
          // Dracula Theme Colors
          background: '#282a36', // Background
          current: '#f8f8f2', // Foreground
          comment: '#6272a4', // Comment
          cyan: '#8be9fd', // Cyan
          green: '#50fa7b', // Green
          orange: '#ffb86c', // Orange
          pink: '#ff79c6', // Pink
          purple: '#bd93f9', // Purple
          red: '#ff5555', // Red
          yellow: '#f1fa8c', // Yellow
        },
      },
    },
  },
  plugins: [],
}

