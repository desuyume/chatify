import { createStore } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { User } from '@chatify/shared/types'
import { MOCKED_USER } from '@chatify/shared/mocks'

export type AuthState = {
  user: User | null
  token: string | null
  isAuth: boolean
}

export type AuthActions = {
  setUser: (user: User) => void
  setToken: (token: string) => void
  logout: () => void
}

export type AuthStore = AuthState & AuthActions

export const defaultAuthState: AuthState = {
  user: MOCKED_USER,
  token: 'fdsfs',
  isAuth: true
}

export const createAuthStore = (initState: AuthState = defaultAuthState) => {
  return createStore<AuthStore>()(
    devtools(
      persist(
        (set) => ({
          ...initState,

          setUser: (user) => set({ user, isAuth: true }),
          setToken: (token) => set({ token }),
          logout: () => set({ user: null, token: null, isAuth: false })
        }),
        {
          name: 'auth',
          partialize: (s) => ({ user: s.user, token: s.token, isAuth: s.isAuth })
        }
      ),
      { name: 'AuthStore' }
    )
  )
}
