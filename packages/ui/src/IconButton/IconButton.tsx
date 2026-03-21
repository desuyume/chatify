import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import type { Props as IconProps } from '../Icon'
import Icon from '../Icon'

import s from './IconButton.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconProps: IconProps
  onClick?: (e: React.SyntheticEvent) => void
  className?: string
}

export default function IconButton({ iconProps, onClick, className = '', ...props }: Props) {
  return (
    <button
      className={clsx(s.IconBtn, {
        [className]: !!className
      })}
      onClick={onClick}
      {...props}
    >
      <Icon {...iconProps} />
    </button>
  )
}
