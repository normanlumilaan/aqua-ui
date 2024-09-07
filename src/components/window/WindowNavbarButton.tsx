import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface WindowNavbarButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  label: string
}

/** Window navbar */
export const WindowNavbarButton: React.FC<WindowNavbarButtonProps> = ({
  children,
  label,
  ...props
}) => {
  return (
    <button
      className={clsx('aqua-window__navbar-btn')}
      type="button"
      aria-label={label}
      {...props}
    >
      {children}{' '}
    </button>
  )
}

WindowNavbarButton.displayName = 'WindowNavbarButton'

export default WindowNavbarButton
