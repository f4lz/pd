/** @type {import('tailwindcss').Config} */ export default {
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: 'selector',
  theme: {
    container: { center: true },
    extend: {
      fontFamily: { montserrat: ['Montserrat'] },
      fontWeight: { medium: '500', normal: '400', semibold: '600' },
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        background: {
          primary: 'rgb(var(--color-background-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-background-secondary) / <alpha-value>)',
          primaryDark:
            'rgb(var(--color-background-primary-dark) / <alpha-value>)',
          secondaryDark:
            'rgb(var(--color-background-secondary-dark) / <alpha-value>)',
        },
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
    },
  },
}
