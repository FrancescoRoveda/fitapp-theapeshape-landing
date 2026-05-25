/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ape: {
          green: '#8bd10a',
          lime: '#a8ff00',
          dark: '#050604',
          panel: '#10120f'
        }
      },
      fontFamily: {
        display: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 50px rgba(139, 209, 10, 0.24)'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        apeshape: {
          primary: '#8bd10a',
          secondary: '#ffffff',
          accent: '#a8ff00',
          neutral: '#151712',
          'base-100': '#050604',
          info: '#7dd3fc',
          success: '#8bd10a',
          warning: '#facc15',
          error: '#ef4444'
        }
      }
    ]
  }
};
