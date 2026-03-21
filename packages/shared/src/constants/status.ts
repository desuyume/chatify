import type { UserStatus } from '../types'

export const STATUS_TEXT: Record<UserStatus, string> = {
  online: 'В сети',
  offline: 'Не в сети',
  away: 'Отошёл'
} as const
