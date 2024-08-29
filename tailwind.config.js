/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      light: {
        // Light mode variants for Tailwind CSS classes
        'bg-light': '#fff',
        'text-light': '#333',
        'border-light': '#ccc',
        // Add more light mode variants as needed
      },
    },
  },
  plugins: [],
};