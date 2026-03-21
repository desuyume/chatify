export function msToSeconds(ms: number): number {
  return Math.floor(ms / 1000)
}

// from date to 24.12.19 - 12:47
export function formatDateToString(
  date: Date | string,
  variant: 'date-time' | 'date' | 'time' = 'time'
): string {
  if (!date) {
    return ''
  }

  if (typeof date === 'string') {
    date = new Date(date)
  }

  if (variant === 'time') {
    return date.toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (variant === 'date') {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Сегодня'
    }
    if (date.toDateString() === yesterday.toDateString()) {
      return 'Вчера'
    }

    if (date.getFullYear() === today.getFullYear()) {
      return date.toLocaleDateString('ru', {
        month: '2-digit',
        day: '2-digit'
      })
    }

    return date.toLocaleDateString('ru', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return date.toLocaleTimeString('ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}
