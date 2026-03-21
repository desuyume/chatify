import clsx from 'clsx'
import type { Message } from '@chatify/shared/types'
import { formatDateToString } from '@chatify/shared/helpers'
import { Icon } from '@chatify/ui'
import { VoiceMessage } from '@content/Chat'

import s from './Message.module.scss'

type Props = {
  msg: Message
  currentUserId: string
  createdAt: Date
  isOwn: boolean
  showStatus: boolean
  isFirst: boolean
  isLast: boolean
}

export default function Message({
  msg,
  currentUserId,
  createdAt,
  isOwn,
  showStatus,
  isFirst,
  isLast
}: Props) {
  return (
    <div
      key={msg.id}
      className={clsx(s.Message, {
        [s.own]: isOwn
      })}
    >
      <div
        id={`message-${msg.id}`}
        className={clsx(s.Bubble, {
          [s.image]: msg.type === 'image',
          [s.first]: isFirst,
          [s.middle]: !isFirst && !isLast,
          [s.last]: isLast
        })}
      >
        {msg.type === 'text' && <p>{msg.text}</p>}
        {msg.type === 'image' && <div className={s.BubbleImg}>🗺️</div>}
        {msg.type === 'voice' && <VoiceMessage />}
      </div>

      {msg.reactions.length !== 0 && (
        <div className={s.Reactions}>
          {msg.reactions.map((reaction) => (
            <div
              key={reaction.emoji}
              className={clsx(s.Reaction, {
                [s.mine]: reaction.userIds.includes(currentUserId)
              })}
            >
              {reaction.emoji} <span className={s.ReactionCount}>{reaction.userIds.length}</span>
            </div>
          ))}
        </div>
      )}

      {showStatus && (
        <div className={s.MsgStatus}>
          <span className={s.MsgStatusTime}>{formatDateToString(createdAt)}</span>
          <Icon
            icon='READ'
            width={14}
            height={14}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2.5}
            className={s.ReadIcon}
          />
        </div>
      )}
    </div>
  )
}
