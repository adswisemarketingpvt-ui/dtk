/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#FAF7F0',
        'primary-heading': '#1F344C',
        'primary-button': '#FFC21A',
        'button-hover': '#F47A3C',
        'accent': '#F47A3C',
        'secondary-accent': '#E34B2F',
        'card-background': '#FFFFFF',
        'border-divider': '#D9D2C5',
        'primary-body': '#1F344C',
        'secondary-text': '#5A6B7C',
        'muted-text': '#8A8A8A',
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    animation: {
      fadeInUp: "fadeInUp 1s ease-out forwards",
    },
  },
  plugins: [],
}
