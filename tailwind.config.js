module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#e20074",
          secondary: "rgb(59 130 246 / 0.5)",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#e20074",
          secondary: "rgb(59 130 246 / 0.5)",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [require("daisyui")],
}