/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      maxWidth: {
        'max-xl': '75%',
        'max-lg': '90%',
      },
      fontSize: {
        '2xl': 'clamp(2ch, 3vh, 2.7ch)',
      },
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
        'default-accent': 'rgb(var(--default-accent) / <alpha-value>)',
        'green-accent': 'rgb(var(--green-accent) / <alpha-value>)',
        'purple-accent': 'rgb(var(--purple-accent) / <alpha-value>)',
        'black-accent': 'rgb(var(--black-accent) / <alpha-value>)',
        'blue-accent': 'rgb(var(--blue-accent) / <alpha-value>)',
      },
      fontFamily: {
        jetbrains: ['MPLUSCodeLatin', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif'],
      },
      boxShadow: {
        neo: '0 2px 0 rgb(var(--black))',
        'neo-sm': '4px 4px 0 rgb(var(--black))',
        'neo-md': '6px 6px 0 rgb(var(--black))',
        'neo-lg': '8px 8px 0 rgb(var(--black))',
      },
    },
  },
  plugins: [],
}
