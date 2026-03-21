import type { User } from '@chatify/shared/types'
import { Avatar } from '@common/index'

import s from './TypingRow.module.scss'

type Props = {
  chatPartner: User
}

export default function TypingRow({ chatPartner }: Props) {
  return (
    <div className={s.TypingRow}>
      <Avatar user={chatPartner} size='xs' />
      <div className={s.TypingDots}>
        <div className={s.TypingDot} />
        <div className={s.TypingDot} />
        <div className={s.TypingDot} />
      </div>
    </div>
  )
}
