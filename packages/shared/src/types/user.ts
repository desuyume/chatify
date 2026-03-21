export type UserRole = 'admin' | 'user'
export type UserStatus = 'online' | 'offline' | 'away'

export interface User {
  id: string
  name: string
  username: string
  email: string
  avatarUrl: string | null
  role: UserRole
  status: UserStatus
  isVerified: boolean
  createdAt: Date
}

export type PublicUser = Pick<User, 'id' | 'name' | 'username' | 'avatarUrl' | 'status'>
