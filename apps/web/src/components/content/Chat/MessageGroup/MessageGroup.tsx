import clsx from 'clsx'
import { formatDateToString, getMessageMetaName } from '@chatify/shared/helpers'
import type { MessageGroup } from '@chatify/shared/types'
import { Avatar } from '@common/index'
import { Message } from '@content/Chat'
import { useChatStore } from '@providers/ChatStoreProvider'

import s from './MessageGroup.module.scss'

type Props = {
  group: MessageGroup
  currentUserId: string
}

export default function MessageGroup({ group, currentUserId }: Props) {
  const { messages, isOwn } = group
  const author = messages[0].author
  const createdAt = messages[0].createdAt
  const chatVariant = useChatStore((s) => s.variant)

  return (
    <div
      className={clsx(s.MsgGroup, {
        [s.own]: isOwn
      })}
    >
      {!isOwn && (
        <div className={s.MsgGroupMeta}>
          {chatVariant === 'group' && (
            <>
              <Avatar user={author} />
              <div className={s.MetaName}>{getMessageMetaName(author.name, author.username)}</div>
            </>
          )}
          <div className={s.MetaTime}>{formatDateToString(createdAt)}</div>
        </div>
      )}

      {messages.map((msg, i) => (
        <Message
          key={msg.id}
          msg={msg}
          currentUserId={currentUserId}
          createdAt={createdAt}
          isOwn={isOwn}
          showStatus={isOwn && i === messages.length - 1}
          isFirst={i === 0}
          isLast={i === messages.length - 1}
        />
      ))}
    </div>
  )
}
