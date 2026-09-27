import colors from 'tailwindcss/colors'
import { useHead } from '#imports'

/**
 * One Tailwind hue per calendar month, grouped so each season moves through
 * its own color family instead of repeating a single shade for 3 months:
 * winter cools down (indigo -> blue -> cyan), spring brightens with growth
 * (emerald -> green -> lime), summer deepens with heat (yellow -> amber ->
 * orange), and autumn fades from warm to dusk tones (red -> rose -> purple).
 */
const MONTH_COLOR_NAMES = [
  'blue', 'cyan', 'emerald', 'green', 'lime', 'yellow',
  'amber', 'orange', 'red', 'rose', 'purple', 'indigo',
] as const

const THEME_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

function hexToRgbTriplet(hex: string | undefined): string {
  if (!hex) {
    throw new Error('Missing color shade in monthly theme palette')
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r} ${g} ${b}`
}

export function useMonthlyTheme() {
  if (!import.meta.server) return

  const month = new Date().getMonth()
  const colorName = MONTH_COLOR_NAMES[month]
  if (!colorName) {
    throw new Error(`Unexpected month index: ${month}`)
  }
  const palette = colors[colorName]
  const variables = THEME_SHADES
    .map((shade) => `--color-theme-${shade}:${hexToRgbTriplet(palette[shade])};`)
    .join('')

  useHead({
    style: [{ innerHTML: `:root{${variables}}` }],
  })
}
