module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "red-light": "#ff4c60",
        black: "#000000",
        white: "#ffffff",
        yellow: "#ffca40",
        dark: "#1f1d2b",
        red: "#E42E2E",
        blue: "#0066CC",
        green: "#31C375",
        orange: "#fa8C16",
        background2: "#F6F5FA",
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
        normal: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        "4xl": "0px 4px 10px rgba(0, 0, 0, 0.25)",
        "5xl": "0px 0px 25px rgba(0, 0, 0, 0.1)",
      },
      height: {
        100: "100vh",
        tableDetailCustomers: "calc(100vh - 45vh)",
        tableDetailSale: "calc(100vh - 62vh)",
      },
      width: {
        26: "107px",
      },
      fontFamily: {
        walsheim: "GT Walsheim",
      },
      margin: {
        26: "107px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
