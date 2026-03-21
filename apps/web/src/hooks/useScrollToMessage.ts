import { useCallback } from 'react'

export function useScrollToMessage() {
  return useCallback((messageId: string) => {
    const el = document.getElementById(`message-${messageId}`)
    if (!el) return

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

    // подсветка на секунду
    el.classList.add('highlighted')
    setTimeout(() => el.classList.remove('highlighted'), 1500)
  }, [])
}

// export function useScrollToMessage(loadMessages?: (messageId: string) => Promise<void>) {
//   return useCallback(
//     async (messageId: string) => {
//       let el = document.getElementById(`message-${messageId}`)

//       // если не в DOM — подгружаем
//       if (!el && loadMessages) {
//         await loadMessages(messageId)
//         // ждём рендера
//         await new Promise((resolve) => setTimeout(resolve, 100))
//         el = document.getElementById(`message-${messageId}`)
//       }

//       if (!el) return

//       el.scrollIntoView({ behavior: 'smooth', block: 'center' })
//       el.classList.add('highlighted')
//       setTimeout(() => el.classList.remove('highlighted'), 1500)
//     },
//     [loadMessages]
//   )
// }
