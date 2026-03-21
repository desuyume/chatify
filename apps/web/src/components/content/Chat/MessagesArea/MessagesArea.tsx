import type { User } from '@chatify/shared/types'
import type { DateSection } from '@chatify/shared/helpers'
import { DateDivider, TypingRow } from '@common/index'
import { MessageGroup } from '@content/Chat'

import s from './MessagesArea.module.scss'

type Props = {
  currentUser: User
  chatPartner: User
  groupedMessages: DateSection[]
}

export default function MessagesArea({ currentUser, chatPartner, groupedMessages }: Props) {
  return (
    <div className={s.MessagesArea}>
      {groupedMessages.map((section) => (
        <div key={section.date} className={s.MessagesAreaSection}>
          <DateDivider date={section.date} />

          {section.groups.map((group) => (
            <MessageGroup key={group.id} group={group} currentUserId={currentUser.id} />
          ))}
        </div>
      ))}

      <TypingRow chatPartner={chatPartner} />
    </div>
  )
}
