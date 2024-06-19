import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "selector",

  theme: {
    extend: {
      backgroundImage: {
        mobileLight: 'url("/images/pattern-background-mobile-light.svg")',
        mobileDark: 'url("/images/pattern-background-mobile-dark.svg")',
        tabletLight: 'url("/images/pattern-background-tablet-light.svg")',
        tabletDark: 'url("/images/pattern-background-tablet-dark.svg")',
        desktopLight: 'url("/images/pattern-background-desktop-light.svg")',
        desktopDark: 'url("/images/pattern-background-desktop-dark.svg")',
      },
      colors: {
        ...colors,
        purple: "#A729F5",
        navy: "#3B4D66",
        darkNavy: "#313E51",
        greyNavy: "#626C7F",
        lightGrey: "#F4F6FA",
        lightBluish: "#ABC1E1",
        green: "#26D782",
        red: "#EE5454",
      },
    },
  },
  plugins: [],
};
