module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "red-base": "#E94B64",
        "violet-base": "#a18ee5",
        black: "#000000",
        gray: "#EDEDED",
        grayDark: "#b2b2b2",
        grayLight: "#fafafa",
        background: "#EEEEEE",
        red: "#E42E2E",
        blue: "#0066CC",
        green: "#31C375",
        orange: "#fa8C16",
        white: "#ffffff",
        bgHome: "#FCFBFB",
        bgStarteed: {
          be: "#F9DDC2",
          white: "#F5F5F8",
        },
        bgHeaderHome: {
          red: "#FF5F64",
          "red-light": "#FF5E58",
        },
        bgLogIn: {
          yellowDark: "#B87514",
          yellow: "#E48700",
          yellowLight: "#FFF4E3",
        },
        admin: {
          greenBase: "#2dce89",
        },
      },
      lineHeight: {
        12: "4.5rem",
      },
      borderRadius: {
        large: "3rem",
        "4xl": "1.875rem",
        "2.5xl": "1.25rem",
      },
      boxShadow: {
        mini: "0px 3.625px 3.625px rgba(196, 63, 21, 0.1)",
        normal: "0px -1px 4px rgba(196, 196, 196, 0.3);",
        "4xl": "0px 13.4555px 33.6388px rgba(57, 57, 57, 0.1)",
        "5xl": "0px 0px 25px rgba(0, 0, 0, 0.1)",
        item: "0px 10px 14px 1px rgb(0, 0, 0,  0.1)",
      },
      margin: {
        "33vh": "33vh",
      },
      height: {
        100: "100vh",
        content: "calc(100vh - 25vh)",
        132: "8.25rem",
        184.5: "11.531rem",
      },
      width: {
        182: "13.375rem",
        "3/10": "30%",
        container: "90rem",
      },
      spacing: {
        17: "4.5rem",
      },
      fontFamily: {
        walsheim: "GT Walsheim",
      },
      zIndex: {
        9999: "9999",
      },
      backgroundImage: {
        "header-profile": "url('/src/images/bg-header-profile.png)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    // ...
  ],
};
