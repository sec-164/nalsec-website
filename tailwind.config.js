const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/app/**/*.{jsx,tsx}",
    "./src/pages/**/*.{jsx,tsx}",
    "./src/components/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slidein: {
          "0%": {
            transform:
              "translate(var(--tw-translate-x), 100px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
          "100%": {
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
        },
      },
      animation: {
        fadein: ".5s linear 0s 1 normal both running fadein",
        slidein: ".5s linear 0s 1 normal both running slidein",
        "fade-slidein":
          ".5s linear 0s 1 normal both running fadein, .5s ease-out 0s 1 normal both running slidein",
      },
      height: {
        screen: "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh",
      },
      minHeight: {
        screen: "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh",
      },
      margin: {
        screen: "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      // addUtilities({
      //   // ".paused":    {animationPlayState: "paused"},
      //   // ".running":   {animationPlayState: "running"},
      //   // ".js-appear": {animationPlayState: "paused"},
      // });
      matchUtilities(
        {
          "animate-duration": (value) => ({ animationDuration: value }),
          "animate-delay": (value) => ({ animationDelay: value }),
        },
        { values: theme("transitionDuration") }
      );
      matchUtilities(
        {
          size: (value) => ({
            height: value,
            width: value,
          }),
        },
        {
          values: {
            ...theme("width"),
            "screen-min": "100dvmin",
            "screen-max": "100dvmax",
            "screen-min-small": "100svmin",
            "screen-max-small": "100svmax",
            "screen-min-large": "100lvmin",
            "screen-max-large": "100lvmax",
          },
        }
      );
    }),
  ],
};
