import Image from 'next/image'
import type { User } from '@chatify/shared/types'
import { STATUS_TEXT } from '@chatify/shared/constants'
import { Icon, IconButton } from '@chatify/ui'

import s from './ChatHeader.module.scss'

type Props = {
  chatPartner: User
}

export default function ChatHeader({ chatPartner }: Props) {
  return (
    <div className={s.ChatHeader}>
      <IconButton
        className={s.BackBtn}
        iconProps={{
          icon: 'BACK',
          width: 14,
          height: 14,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2
        }}
      />
      <div className={s.ChatHeaderAvatar}>
        {chatPartner.avatarUrl ? (
          <Image
            alt='user-avatar'
            src={chatPartner.avatarUrl}
            width={36}
            height={36}
            className={s.ChatHeaderAvatarImage}
          />
        ) : (
          <div className={s.ChatHeaderAvatarDefault} />
        )}
      </div>
      <div className={s.ChatHeaderInfo}>
        <div className={s.ChatHeaderName}>
          <div className={s.ChatHeaderNameText}>{chatPartner.username}</div>
          {chatPartner.isVerified && (
            <Icon
              icon='VERIFIED'
              width={13}
              height={13}
              viewBox='0 0 24 24'
              fill='currentColor'
              className={s.VerifiedIcon}
            />
          )}
        </div>
        <div className={s.ChatHeaderStatus} data-status={chatPartner.status}>
          <p>{STATUS_TEXT[chatPartner.status]}</p>
        </div>
      </div>
      <div className={s.ChatHeaderActions}>
        <IconButton
          iconProps={{
            icon: 'CALL',
            width: 15,
            height: 15,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2
          }}
        />
        <IconButton
          iconProps={{
            icon: 'VIDEOCALL',
            width: 15,
            height: 15,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2
          }}
        />
        <IconButton
          iconProps={{
            icon: 'OPTIONS',
            width: 15,
            height: 15,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2
          }}
        />
      </div>
    </div>
  )
}
