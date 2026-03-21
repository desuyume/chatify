import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { ChatVariant, Message } from '@chatify/shared/types'
import { MOCKED_PINNED_MESSAGE } from '@chatify/shared/mocks'

export type ChatState = {
  pinnedMessage: Message | null
  isPinnedMessageVisible: boolean
  variant: ChatVariant
  replyToMessage: Message | null
  editingMessage: Message | null
  selectedMessageIds: string[]
  isSelectionMode: boolean
}

export type ChatActions = {
  // pinned
  setPinnedMessage: (message: Message) => void
  hidePinnedMessage: () => void

  // variant
  setVariant: (variant: ChatVariant) => void

  // reply
  setReplyTo: (message: Message | null) => void
  clearReplyTo: () => void

  // editing
  setEditing: (message: Message | null) => void
  clearEditing: () => void

  // selection
  toggleMessageSelection: (id: string) => void
  clearSelection: () => void
  enterSelectionMode: (id: string) => void
  exitSelectionMode: () => void
}

export type ChatStore = ChatState & ChatActions

export const defaultChatState: ChatState = {
  pinnedMessage: MOCKED_PINNED_MESSAGE,
  isPinnedMessageVisible: true,
  variant: 'private',
  replyToMessage: null,
  editingMessage: null,
  selectedMessageIds: [],
  isSelectionMode: false
}

export const createChatStore = (initState: ChatState = defaultChatState) => {
  return createStore<ChatStore>()(
    devtools(
      (set, get) => ({
        ...initState,

        // pinned
        setPinnedMessage: (message) =>
          set({ pinnedMessage: message, isPinnedMessageVisible: true }, false, 'setPinnedMessage'),
        hidePinnedMessage: () => set({ isPinnedMessageVisible: false }, false, 'hidePinnedMessage'),

        // variant
        setVariant: (variant) => set({ variant }, false, 'setVariant'),

        // reply
        setReplyTo: (message) =>
          set({ replyToMessage: message, editingMessage: null }, false, 'setReplyTo'),
        clearReplyTo: () => set({ replyToMessage: null }, false, 'clearReplyTo'),

        // editing
        setEditing: (message) =>
          set({ editingMessage: message, replyToMessage: null }, false, 'setEditing'),
        clearEditing: () => set({ editingMessage: null }, false, 'clearEditing'),

        // selection
        enterSelectionMode: (id) =>
          set(
            {
              isSelectionMode: true,
              selectedMessageIds: [id]
            },
            false,
            'enterSelectionMode'
          ),

        toggleMessageSelection: (id) => {
          const { selectedMessageIds } = get()
          const isSelected = selectedMessageIds.includes(id)
          set(
            {
              selectedMessageIds: isSelected
                ? selectedMessageIds.filter((i) => i !== id)
                : [...selectedMessageIds, id]
            },
            false,
            'toggleMessageSelection'
          )
        },

        clearSelection: () => set({ selectedMessageIds: [] }, false, 'clearSelection'),
        exitSelectionMode: () =>
          set({ isSelectionMode: false, selectedMessageIds: [] }, false, 'exitSelectionMode')
      }),
      { name: 'ChatStore' }
    )
  )
}
