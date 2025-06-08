// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))', // or any other valid CSS color
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
