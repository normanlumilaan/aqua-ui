import React, { type ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'red' | 'yellow' | 'green' | 'white' | 'blue'
  shape?: 'rounded' | 'circular'
  /** ARIA label */
  label: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'white',
  label,
  shape = 'rounded',
  className,
  ...props
}) => {
  const classList = clsx(
    `aqua-btn-${shape}`,
    `aqua-btn-${shape}--${color}`,
    className
  )

  return (
    <button
      className={classList}
      aria-label={label}
      data-aqua-ui="button"
      type="button"
      {...props}
    >
      <span className="aqua-btn__label">{children}</span>
    </button>
  )
}

Button.displayName = 'Button'

export default Button
