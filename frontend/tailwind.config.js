/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          default: "#fda214",
          purple: "#6263d5",
          cyan: "#6ff3f7",
          pink: "#da81f7",
        },
        neutral: {
          default: "#bccfd9",
          darkest: "#182a39",
          dark: "#7d7d7d",
          light: "#f2f2f2",
          lightest: "#fdfdfd",
        },
        status: {
          success: "#29C04A",
          successLight: "#E0FFE5",
          error: "#F07472",
          errorDark: "#EA3829",
          errorLight: "#FFEBE7",
        },
        overlay: "#111",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        header: ["Poppins", "sans-serif"],
      },

      fontSize: {
        "2xl": [
          "2rem",
          {
            lineHeight: "2",
            fontWeight: "900",
          },
        ],
        xl: [
          "1.375rem",
          {
            lineHeight: "2.5",
            fontWeight: "900",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "2.5",
            fontWeight: "300",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.333",
            fontWeight: "400",
          },
        ],
        "2xs": [
          "0.625rem",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
      },
    },
    plugins: [
      // eslint-disable-next-line func-names
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".my-rotate-180": {
            transform: "rotateY(180deg)",
          },
          ".preserve-3d": {
            transformStyle: "preserve-3d",
          },
          ".perspective": {
            perspective: "1000px",
          },
          ".backface-hidden": {
            backfaceVisibility: "hidden",
          },
        });
      }),
    ],
  },
};
