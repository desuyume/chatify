import type { User } from './user'

export interface Message {
  id: string
  type: 'text' | 'voice' | 'image'
  text?: string
  createdAt: Date
  chatId: string
  author: User
  reactions: MessageReaction[]
}

export interface MessageGroup {
  id: string
  authorId: string
  messages: Message[]
  isOwn: boolean
}

export interface MessageReaction {
  emoji: string
  userIds: string[]
}
