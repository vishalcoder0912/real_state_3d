/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F33",
        charcoal: "#111827",
        gold: "#C9A227",
        beige: "#F5F1E8",
        mist: "#F7F8FA",
        success: "#16A34A",
        ink: "#1F2937",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(11, 31, 51, 0.12)",
        soft: "0 16px 50px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};
