import Image from 'next/image'
import clsx from 'clsx'
import { getAvatarMetaName } from '@chatify/shared/helpers'
import type { User } from '@chatify/shared/types'

import s from './Avatar.module.scss'

type Props = {
  user: User
  size?: 'sm' | 'xs'
}

export default function Avatar({ user, size = 'sm' }: Props) {
  const getImageSize = (): number => {
    switch (size) {
      case 'sm':
        return 32
      case 'xs':
        return 24
      default:
        return 24
    }
  }

  return (
    <div
      className={clsx(s.Avatar, {
        [s.xs]: size === 'xs'
      })}
    >
      {user.avatarUrl ? (
        <Image
          alt='user-avatar'
          src={user.avatarUrl}
          width={getImageSize()}
          height={getImageSize()}
          className={s.AvatarImage}
        />
      ) : (
        <div className={s.AvatarDefault}>{getAvatarMetaName(user.name, user.username)}</div>
      )}
    </div>
  )
}
