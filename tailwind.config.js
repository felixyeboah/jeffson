const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        uses: ["OperatorMono", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        indigo: colors.indigo,
        violet: colors.violet,
        blue: colors.blue,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        green: colors.green,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        rose: colors.rose,
        bgBlack: "#121212",
        bgLight: "rgb(208, 211, 225)",
        darkBlue: "rgb(4, 13, 33)",
        cfGreen: "#5AA250",
        eaBg: "#F57823",
        homeChow: "#B80000",
        cardBg: "rgba(12, 22, 45, 0.5)",
        cardBgHover: "rgba(25,37,59,0.6)",
        booksBg: "rgb(234, 233, 228)",
        booksCardBg: "rgba(255, 255, 255, 0.4)",
        blogBg: 'rgb(227, 230, 236)'
      },
      fontSize: {
        "10xl": "10rem",
        "12xl": "12rem",
        "14xl": "14rem",
      },
      lineHeight: {
        "extra-loose": "0.8",
        12: "3rem",
      },
      height: {
        100: "35rem",
      },
      spacing: {
        28: "7.4rem",
        102: "25rem",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.white"),
            h4: {
              color: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["responsive", "dark"],
      borderWidth: ["hover", "focus", "group-hover"],
      position: ["hover", "group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
