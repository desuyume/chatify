import type { Message, MessageGroup } from '../types'
import { formatDateToString } from './time'

type GroupMessagesOptions = {
  messages: Message[]
  currentUserId: string
  groupInterval?: number // in seconds
}

/**
 * Groups a flat array of messages into groups by author and time.
 * Messages from the same author sent within `groupInterval` seconds are merged into one group.
 *
 * @param messages - flat array of messages from the backend
 * @param currentUserId - current user id to determine isOwn flag
 * @param groupInterval - max time difference in seconds to group messages (default: 60)
 * @returns array of message groups
 *
 * @example
 * const groups = groupMessages({ messages, currentUserId: 'user1' })
 * // [{ id: '1', authorId: 'user1', isOwn: true, messages: [...] }]
 */
export function groupMessages({
  messages,
  currentUserId,
  groupInterval = 60
}: GroupMessagesOptions): MessageGroup[] {
  if (messages.length === 0) return []

  const groups: MessageGroup[] = []
  let currentGroup: MessageGroup | null = null

  for (const msg of messages) {
    const isOwn = msg.author.id === currentUserId
    const msgTime = new Date(msg.createdAt).getTime()
    const lastMsg = currentGroup ? currentGroup.messages.at(-1) : null
    const lastTime = lastMsg ? new Date(lastMsg.createdAt).getTime() : 0
    const diffSecs = (msgTime - lastTime) / 1000

    const canGroup =
      currentGroup !== null && currentGroup.authorId === msg.author.id && diffSecs < groupInterval

    if (canGroup) {
      currentGroup?.messages.push(msg)
    } else {
      currentGroup = {
        id: msg.id,
        authorId: msg.author.id,
        messages: [msg],
        isOwn
      }
      groups.push(currentGroup)
    }
  }

  return groups
}

export type DateSection = {
  date: string
  groups: MessageGroup[]
}

/**
 * Splits messages into date sections and groups them within each day.
 * Used to render date dividers like 'Today', 'Yesterday', '12.02'.
 *
 * @param messages - flat array of messages from the backend
 * @param currentUserId - current user id to determine isOwn flag
 * @returns array of date sections, each containing a date label and message groups
 *
 * @example
 * const sections = groupMessagesByDate(messages, 'user1')
 * // [{ date: 'Today', groups: [...] }]
 */
export function groupMessagesByDate(messages: Message[], currentUserId: string): DateSection[] {
  if (messages.length === 0) return []

  const messagesByDate = new Map<string, Message[]>()

  for (const msg of messages) {
    const key = new Date(msg.createdAt).toDateString()
    if (!messagesByDate.has(key)) {
      messagesByDate.set(key, [])
    }
    messagesByDate.get(key)?.push(msg)
  }

  return Array.from(messagesByDate.entries()).map(([key, msgs]) => ({
    date: formatDateToString(new Date(key), 'date'),
    groups: groupMessages({ messages: msgs, currentUserId })
  }))
}
