import clsx from 'clsx'
import type { Message } from '@chatify/shared/types'
import { IconButton } from '@chatify/ui'
import { useScrollToMessage } from '@hooks/useScrollToMessage'

import s from './PinnedBar.module.scss'

type Props = {
  isVisible: boolean
  message: Message
  onClose: () => void
}

export default function PinnedBar({ isVisible, message, onClose }: Props) {
  const scrollTo = useScrollToMessage()

  return (
    <div
      onClick={() => scrollTo(message.id)}
      className={clsx(s.PinnedBar, {
        [s.visible]: isVisible
      })}
    >
      <div className={s.PinnedBarAccent} />
      <div className={s.PinnedBarContent}>
        <div className={s.PinnedBarContentLabel}>Закреплено</div>
        <div className={s.PinnedBarContentText}>
          {message.type === 'text' && message.text}
          {message.type === 'image' && 'Изображение'}
          {message.type === 'voice' && 'Аудиосообщение'}
        </div>
      </div>
      <IconButton
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className={s.IconBtn}
        iconProps={{
          icon: 'CROSS',
          width: 13,
          height: 13,
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2
        }}
      />
    </div>
  )
}
