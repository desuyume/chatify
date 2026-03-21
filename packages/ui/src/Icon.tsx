import type { FC } from 'react'
import clsx from 'clsx'
import icons, { type ALL_ICONS } from './icons/index'

export type Props = {
  icon: keyof typeof ALL_ICONS
  viewBox?: string
  width?: number
  height?: number
  fill?: 'currentColor' | 'none'
  stroke?: 'currentColor' | 'none'
  strokeWidth?: number
  className?: string
  onClick?: (e: React.SyntheticEvent) => void
}

const Icon: FC<Props> = ({
  icon,
  viewBox = '0 0 24 24',
  width = 15,
  height = 15,
  fill = 'none',
  stroke = 'none',
  strokeWidth = 0,
  className = '',
  onClick
}) => (
  <svg
    className={clsx({
      [className]: !!className
    })}
    viewBox={viewBox}
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    onClick={onClick}
  >
    {icons[icon]}
  </svg>
)

export default Icon
