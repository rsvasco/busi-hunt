import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2A5A",
        secondary: "#E63946",
        dark: "#1A1A1A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [animate],
};
