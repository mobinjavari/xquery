type OpacityContext = { opacityValue?: string }

const withOpacityValue = (variable: string) => ({ opacityValue }: OpacityContext) =>
  opacityValue === undefined ? `rgb(var(${variable}))` : `rgb(var(${variable}) / ${opacityValue})`

const THEME_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

const theme = Object.fromEntries(
  THEME_SHADES.map((shade) => [shade, withOpacityValue(`--color-theme-${shade}`)])
)

export default {
  theme: {
    extend: {
      colors: {
        theme,
        primary: {
          50: "#ffffff",
          100: "#f9fafb",
          200: "#f3f4f6",
          300: "#e5e7eb",
          400: "#d1d5db",
          500: "#9ca3af",
          600: "#6b7280",
          700: "#4b5563",
          800: "#374151",
          900: "#1f2937",
          950: "#0f0f0f",
        },
      },
    },
  },
  plugins: [],
};
