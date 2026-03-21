import type { Message, User } from '../types'

export const MOCKED_CHAT_PARTNER: User = {
  id: 'gdfsgsdg',
  avatarUrl:
    'https://static-cdn.jtvnw.net/jtv_user_pictures/7ba76f48-97d3-4a88-9894-9d75dcaa1815-profile_image-300x300.png',
  role: 'user',
  status: 'offline',
  username: 'desuyume',
  name: '',
  email: 'dsfdsf@gmail.com',
  isVerified: true,
  createdAt: new Date()
}

export const MOCKED_USER: User = {
  id: 'gdfsgsdg32',
  avatarUrl:
    'https://static-cdn.jtvnw.net/jtv_user_pictures/7ba76f48-97d3-4a88-9894-9d75dcaa1815-profile_image-300x300.png',
  role: 'user',
  status: 'offline',
  username: 'desuyume',
  name: 'Парвиз Асланов',
  email: 'dsfdsf@gmail.com',
  isVerified: true,
  createdAt: new Date()
}

export const MOCKED_MESSAGES: Message[] = [
  {
    id: 'gfdfgsd0',
    type: 'text',
    text: 'Привет!  встречу завтра?',
    createdAt: new Date(2026, 2, 5, 14, 22),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: [{ emoji: '👍', userIds: [MOCKED_CHAT_PARTNER.id] }]
  },
  {
    id: 'gfdfgsd1',
    type: 'text',
    text: 'Привет! Ты помнишь про встречу завтра?',
    createdAt: new Date(2026, 3, 5, 14, 22),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: []
  },
  {
    id: 'gfdfgsd2',
    type: 'text',
    text: 'Мы договаривались на 18:00, не передумал? 🙂',
    createdAt: new Date(2026, 3, 5, 14, 22),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: [{ emoji: '👍', userIds: [MOCKED_CHAT_PARTNER.id] }]
  },
  {
    id: 'gfdfgsd3',
    type: 'text',
    text: 'Да конечно помню! Уже жду 😄',
    createdAt: new Date(2026, 3, 5, 14, 24),
    chatId: 'fsdfsf',
    author: MOCKED_USER,
    reactions: []
  },
  {
    id: 'gfdfgsd4',
    type: 'image',
    createdAt: new Date(2026, 3, 5, 14, 25),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: []
  },
  {
    id: 'gfdfgsd5',
    type: 'text',
    text: 'Карта как добраться — выход 3, там встретимся 📍',
    createdAt: new Date(2026, 3, 5, 14, 25),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: []
  },
  {
    id: 'gfdfgsd6',
    type: 'voice',
    createdAt: new Date(2026, 3, 5, 14, 28),
    chatId: 'fsdfsf',
    author: MOCKED_USER,
    reactions: []
  },
  {
    id: 'gfdfgsd7',
    type: 'text',
    text: 'Окей, завтра в 18:00 🙌',
    createdAt: new Date(2026, 3, 5, 14, 30),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: []
  },
  {
    id: 'gfdfgsd8',
    type: 'text',
    text: 'Кстати не забудь взять документы!',
    createdAt: new Date(2026, 3, 5, 14, 31),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: []
  },
  {
    id: 'gfdfgsd9',
    type: 'text',
    text: 'Кстати не забудь взять документы!',
    createdAt: new Date(2026, 3, 5, 14, 31),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: []
  },
  {
    id: 'gfdfgsd10',
    type: 'text',
    text: 'Кстати не забудь взять документы!',
    createdAt: new Date(2026, 3, 5, 14, 31),
    chatId: 'fsdfsf',
    author: MOCKED_CHAT_PARTNER,
    reactions: []
  }
]

export const MOCKED_PINNED_MESSAGE: Message = MOCKED_MESSAGES[5]
