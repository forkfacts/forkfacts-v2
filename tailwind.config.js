/** @type {(function({}=): any)|{}} */
const konstaConfig = require("konsta/config");
const plugin = require("tailwindcss/plugin");

module.exports = konstaConfig({
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      ios: "Poppins",
      material: "Poppins",
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
      700: "700",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "36px",
      full: "9999px",
      large: "12px",
    },
    fontSize: {
      caption: "0.75rem", // 12px
      largeCaption: "20px", // 20px
      displaySmall: "1rem", // 16px
      displayMedium: "1.5rem", // 24px
      displayLarge: "2.5rem", // 40px
      headline6: "1.125rem", // 18px
      headline4: "1.875rem", // 30px
      headline3: "1.5rem", // 24px
      titleSmall: "1.375rem", // 22px
      titleMedium: "1.5rem", // 24px
      titleLarge: "2.25rem", // 36px
      labelSmall: "0.875rem", // 14px
      labelMedium: "1rem", // 16px
      labelLarge: "1.125rem", // 18px
      bodyMedium: "1.125rem", // 18px
      bodyLarge: "1.5rem", // 24px
      bodySmall: "1rem", // 16px
      subhead1: "1.5rem", // 24px
      extraSmall: "0.75rem", // 12px
    },
    lineHeight: {
      captionXS: "14px", // 14px
      leadingXX: "24px", // 24px
      leadingXXX: "32px", // 32px
      titleXl: "28px", // 28px
      labelX: "20px", // 20px
      leadingX: "16px", // 16px
    },
    typography: {
      outlined: {
        css: {
          borderWidth: "1px",
          borderColor: "#4C42E8",
          color: "#4C42E8",
          backgroundColor: "#fff",
          whiteSpace: "nowrap",
        },
      },
      contained: {
        css: {
          color: "#fff",
          backgroundColor: "#4C42E8",
          whiteSpace: "nowrap",
        },
      },
      caption: {
        css: {
          fontSize: "10px",
          lineHeight: "16px",
          fontStyle: "normal",
          letterSpacing: "0.4px",
        },
      },
      displaySmall: {
        css: {
          fontSize: "16px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      displayMedium: {
        css: {
          fontSize: "24px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      displayLarge: {
        css: {
          fontSize: "32px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      headline6: {
        css: {
          fontSize: "18px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0%",
        },
      },
      headline4: {
        css: {
          fontSize: "24px",
          lineHeight: "32px",
          fontStyle: "normal",
          letterSpacing: "0%",
        },
      },
      headline3: {
        css: {
          fontSize: "24px",
          lineHeight: "32px",
          fontStyle: "normal",
          letterSpacing: "0%",
        },
      },
      titleSmall: {
        css: {
          fontSize: "14px",
          lineHeight: "20px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      titleMedium: {
        css: {
          fontSize: "16px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      titleLarge: {
        css: {
          fontSize: "22px",
          lineHeight: "28px",
          fontStyle: "normal",
          letterSpacing: "0%",
        },
      },
      labelSmall: {
        css: {
          fontSize: "11px",
          lineHeight: "16px",
          fontStyle: "normal",
          letterSpacing: "0.5px",
        },
      },
      labelMedium: {
        css: {
          fontSize: "12px",
          lineHeight: "16px",
          fontStyle: "normal",
          letterSpacing: "0.5px",
        },
      },
      labelLarge: {
        css: {
          fontSize: "14px",
          lineHeight: "20px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      bodyLarge: {
        css: {
          fontSize: "16px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0.5px",
        },
      },
      bodyMedium: {
        css: {
          fontSize: "14px",
          lineHeight: "20px",
          fontStyle: "normal",
          letterSpacing: "0.25px",
        },
      },
      bodySmall: {
        css: {
          fontSize: "12px",
          lineHeight: "16px",
          fontStyle: "normal",
          letterSpacing: "0.4px",
        },
      },
      subhead1: {
        css: {
          fontSize: "16px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      extraSmall: {
        css: {
          fontSize: "10px",
          lineHeight: "24px",
          fontStyle: "normal",
          letterSpacing: "0.1px",
        },
      },
      labelSemiBold: {
        css: {
          fontSize: "14px",
          lineHeight: "20px",
          fontStyle: "normal",
        },
      },
    },
    extend: {
      colors: {
        primary: "#4C42E8",
        primaryLight: "#F2EFFF",
        switchColor: "#6660FF",
        light: "#E5E1E6",
        main: "#1C1B1F",
        dark: "#78767A",
        surfaceLight: "#77767A",
        textDark: "#47464F",
        textBlack: "#000000",
        textLight: "#929094",
        customInputBackground: "#FFFBFF",
        bgLightColor: "rgba(226, 223, 255, 0.5)",
        neutral: {
          10: "#1C1B1F",
          30: "47464F",
          40: "textDark",
          50: "#787680",
          95: "#F3EFFA",
        },
      },
      boxShadow: {
        summaryShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      styles: {
        "::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
          background: "transparent",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
});
