module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "red-base": "#E94B64",
        black: "#000000",
        gray: "#909399",
        background: "#EEEEEE",
        red: "#E42E2E",
        blue: "#0066CC",
        green: "#31C375",
        orange: "#fa8C16",
        white: "#ffffff",
        bgStarteed: {
          be: "#F9DDC2",
          white: "#F5F5F8",
        },
        bgHeaderHome: {
          red: "#FF5F64",
          "red-light": "#FF5E58",
        },
      },
      lineHeight: {
        12: "4.5rem",
      },
      borderRadius: {
        large: "3rem",
        "4xl": "1.875rem",
      },
      boxShadow: {
        mini: "0px 3.625px 3.625px rgba(196, 63, 21, 0.1)",
        normal: "0px -1px 4px rgba(196, 196, 196, 0.3);",
        "4xl": "0px 4px 10px rgba(0, 0, 0, 0.25)",
        "5xl": "0px 0px 25px rgba(0, 0, 0, 0.1)",
      },
      height: {
        100: "100vh",
      },
      width: {
        "3/10": "30%",
      },
      spacing: {
        17: "4.5rem",
      },
      fontFamily: {
        walsheim: "GT Walsheim",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
