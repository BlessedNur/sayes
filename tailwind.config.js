module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        global: {
          background1: 'var(--global-bg-1)',
          background2: 'var(--global-bg-2)',
          background3: 'var(--global-bg-3)',
          background4: 'var(--global-bg-4)',
          text1: 'var(--global-text-1)',
          text2: 'var(--global-text-2)',
          text3: 'var(--global-text-3)',
          text4: 'var(--global-text-4)',
          text5: 'var(--global-text-5)',
          text6: 'var(--global-text-6)',
          text7: 'var(--global-text-7)',
        },
        button: {
          background1: 'var(--button-bg-1)',
          background2: 'var(--button-bg-2)',
        },
      },
    },
  },
  plugins: [],
};
