'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'
import { useStore } from 'zustand'
import { type ChatStore, createChatStore } from '@store/chat.store'

type ChatStoreApi = ReturnType<typeof createChatStore>

const ChatStoreContext = createContext<ChatStoreApi | undefined>(undefined)

export function ChatStoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => createChatStore())

  return <ChatStoreContext.Provider value={store}>{children}</ChatStoreContext.Provider>
}

export function useChatStore<T>(selector: (store: ChatStore) => T): T {
  const context = useContext(ChatStoreContext)

  if (!context) {
    throw new Error('useChatStore must be used within ChatStoreProvider')
  }

  return useStore(context, selector)
}
