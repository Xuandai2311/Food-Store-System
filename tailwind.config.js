module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "red-light": "#E94B64",
        black: "#000000",
        gray: "rgba(0, 0, 0, 0.05)",
        background: "#F9DDC2",
        red: "#E42E2E",
        "red-base": "#FF460A",
        blue: "#0066CC",
        green: "#31C375",
        orange: "#fa8C16",
        background2: "#f5f5f8;",
        white: "#ffffff",
        bgDashboard: {
          red: "#FFD3CD",
          blue: "#C0DBFF",
          green: "#E9F7F0",
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
        normal: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        "4xl": "0px 4px 10px rgba(0, 0, 0, 0.25)",
        "5xl": "0px 0px 25px rgba(0, 0, 0, 0.1)",
      },
      height: {
        100: "100vh",
      },
      width: {
        "3/10": "30%",
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
