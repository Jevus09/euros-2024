/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '66vh',
        '100': '12rem',
        '104': '75vh',
        '112': '32rem',
      },
      width: {
        '128': '66vh',
        '104': '90vw',
        '108': '100vw',
        '100': '40rem',
      }
    },
  },
  
  plugins: [
    require('daisyui'),
  ],
}

