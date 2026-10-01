export function ensureHttps(host: string): string {
  return `https://${host.replace(/^https?:\/\//, '')}`
}

export function formatTelegramUrl(username: string): string {
  return `https://t.me/${username}`
}

export function formatBaleUrl(username: string): string {
  return `https://ble.ir/${username}`
}

export function formatEmailUrl(email: string): string {
  return `mailto:${email}`
}
