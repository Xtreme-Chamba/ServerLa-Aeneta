import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
    colors: {
      "texto":"#200610",
      "fondo": "#FEFAFB",
      "primario": "#D9275A",
      "secundario": "#EA9C85",
      "resaltar": "#E39361",
      "aceptado" : "#1FF02E",
      "rechazado" : "#E83E2D",
      "pruebas" : "#FB607F"
    }
  },
  plugins: [],
};
export default config;
