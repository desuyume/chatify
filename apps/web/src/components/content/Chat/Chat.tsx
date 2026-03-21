'use client'

import { MOCKED_USER } from '@chatify/shared/mocks'
import { PinnedBar } from '@common/index'
import { ChatHeader, MessageInput, MessagesArea } from '@content/Chat'
import { useChat } from '@hooks/useChat'

import s from './Chat.module.scss'

export default function Chat() {
  const {
    chatInfo,
    pinnedMessage,
    isPinnedMessageVisible,
    hidePinnedMessage,
    groupedMessages,
    currentUser
  } = useChat()

  return (
    <main className={s.Chat}>
      <ChatHeader chatPartner={chatInfo.chatPartner} />
      {pinnedMessage && (
        <PinnedBar
          isVisible={isPinnedMessageVisible}
          message={pinnedMessage}
          onClose={hidePinnedMessage}
        />
      )}
      <MessagesArea
        currentUser={currentUser ?? MOCKED_USER}
        chatPartner={chatInfo.chatPartner}
        groupedMessages={groupedMessages}
      />
      <MessageInput />
    </main>
  )
}
