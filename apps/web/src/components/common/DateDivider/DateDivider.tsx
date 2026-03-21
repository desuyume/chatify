import s from './DateDivider.module.scss'

type Props = {
  date: string
}

export default function DateDivider({ date }: Props) {
  return (
    <div className={s.DateDivider}>
      <div className={s.DateLine} />
      <div className={s.DateChip}>{date}</div>
      <div className={s.DateLine} />
    </div>
  )
}
