/** @type {import('tailwindcss').Config} */
import colors from './settings/colors.json'

module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './pages/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary': colors.primary,
        'base': colors.base,
        'primary-content': colors.primaryContent
      }
    },
  },
  plugins: [],
}
