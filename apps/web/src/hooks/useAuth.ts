import { MOCKED_USER } from '@chatify/shared/mocks'
import { useAuthStore } from '@providers/AuthStoreProvider'

export function useAuth() {
  const user = useAuthStore((s) => s.user)
  const isAuth = useAuthStore((s) => s.isAuth)
  const setUser = useAuthStore((s) => s.setUser)
  const setToken = useAuthStore((s) => s.setToken)
  const logout = useAuthStore((s) => s.logout)

  const login = () => {
    setToken('fdsfsdfs')
    setUser(MOCKED_USER)
  }

  return { user, isAuth, login, logout }
}
