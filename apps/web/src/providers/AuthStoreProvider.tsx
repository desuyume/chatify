'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'
import { useStore } from 'zustand'
import { type AuthStore, createAuthStore } from '@store/auth.store'

type AuthStoreApi = ReturnType<typeof createAuthStore>

const AuthStoreContext = createContext<AuthStoreApi | undefined>(undefined)

export function AuthStoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => createAuthStore())

  return <AuthStoreContext.Provider value={store}>{children}</AuthStoreContext.Provider>
}

export function useAuthStore<T>(selector: (store: AuthStore) => T): T {
  const context = useContext(AuthStoreContext)

  if (!context) {
    throw new Error('useAuthStore must be used within AuthStoreProvider')
  }

  return useStore(context, selector)
}
