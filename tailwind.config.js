/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F7D060',
          secondary: '#FF6D60',
          accent: '#569eea',
          neutral: '#171616',
          'base-100': '#171616',
          info: '#7ec0ec',
          success: '#20c5af',
          warning: '#eda531',
          error: '#e75f7d'
        }
      }
    ]
  }
}
