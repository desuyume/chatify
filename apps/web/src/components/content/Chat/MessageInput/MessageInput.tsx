import { Icon } from '@chatify/ui'
import s from './MessageInput.module.scss'

export default function MessageInput() {
  return (
    <div className={s.MessageInput}>
      <div className={s.MessageInputRow}>
        <button className={s.AttachBtn}>
          <Icon
            icon='ATTACH'
            width={15}
            height={15}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
          />
        </button>
        <div className={s.MessageInputWrapper}>
          <input
            type='text'
            className={s.MessageInputInput}
            placeholder='Написать сообщение...'
            id='msgInput'
          />
          <button className={s.EmojiBtn}>😊</button>
        </div>
        <button className={s.SendBtn}>
          <Icon
            icon='SEND'
            width={15}
            height={15}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  )
}
