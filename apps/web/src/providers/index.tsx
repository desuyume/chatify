'use client'

import type { ReactNode } from 'react'
import { AuthStoreProvider } from './AuthStoreProvider'
import { ChatStoreProvider } from './ChatStoreProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthStoreProvider>
      <ChatStoreProvider>{children}</ChatStoreProvider>
    </AuthStoreProvider>
  )
}
