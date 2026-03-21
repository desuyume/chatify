import { groupMessagesByDate } from '@chatify/shared/helpers'
import { MOCKED_CHAT_PARTNER, MOCKED_MESSAGES } from '@chatify/shared/mocks'
import { useAuthStore } from '@providers/AuthStoreProvider'
import { useChatStore } from '@providers/ChatStoreProvider'

export function useChat() {
  // ── auth ──
  const currentUser = useAuthStore((s) => s.user)

  // ── chat store ──
  const pinnedMessage = useChatStore((s) => s.pinnedMessage)
  const isPinnedMessageVisible = useChatStore((s) => s.isPinnedMessageVisible)
  const replyToMessage = useChatStore((s) => s.replyToMessage)
  const editingMessage = useChatStore((s) => s.editingMessage)
  const selectedMessageIds = useChatStore((s) => s.selectedMessageIds)
  const isSelectionMode = useChatStore((s) => s.isSelectionMode)
  const variant = useChatStore((s) => s.variant)

  const setPinnedMessage = useChatStore((s) => s.setPinnedMessage)
  const hidePinnedMessage = useChatStore((s) => s.hidePinnedMessage)
  const setReplyTo = useChatStore((s) => s.setReplyTo)
  const clearReplyTo = useChatStore((s) => s.clearReplyTo)
  const setEditing = useChatStore((s) => s.setEditing)
  const clearEditing = useChatStore((s) => s.clearEditing)
  const setVariant = useChatStore((s) => s.setVariant)
  const enterSelectionMode = useChatStore((s) => s.enterSelectionMode)
  const exitSelectionMode = useChatStore((s) => s.exitSelectionMode)
  const toggleMessageSelection = useChatStore((s) => s.toggleMessageSelection)
  const clearSelection = useChatStore((s) => s.clearSelection)

  // // ── серверные данные ──
  // const {
  //   data:       messages = [],
  //   isLoading:  isMessagesLoading,
  //   isError:    isMessagesError,
  // } = useMessages(chatId)

  // const {
  //   data:      chatInfo,
  //   isLoading: isChatLoading,
  // } = useQuery({
  //   queryKey: ['chat', chatId],
  //   queryFn:  () => chatService.getById(chatId),
  //   enabled:  !!chatId,
  // })

  // ── производные данные ──
  const groupedMessages = currentUser ? groupMessagesByDate(MOCKED_MESSAGES, currentUser.id) : []

  // const isLoading = isMessagesLoading || isChatLoading

  return {
    // данные
    chatInfo: {
      chatPartner: MOCKED_CHAT_PARTNER
    },
    messages: MOCKED_MESSAGES,
    groupedMessages,
    currentUser,

    // ui стейт
    variant,
    pinnedMessage,
    isPinnedMessageVisible,
    replyToMessage,
    editingMessage,
    selectedMessageIds,
    isSelectionMode,

    // статусы
    isLoading: false,
    isMessagesError: false,

    // actions
    setPinnedMessage,
    hidePinnedMessage,
    setReplyTo,
    clearReplyTo,
    setEditing,
    clearEditing,
    setVariant,
    enterSelectionMode,
    exitSelectionMode,
    toggleMessageSelection,
    clearSelection
  }
}
