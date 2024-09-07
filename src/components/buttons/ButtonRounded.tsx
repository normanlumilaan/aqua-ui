import React from 'react'
import Button, { type ButtonProps } from './Button'

export interface ButtonRoundedProps extends ButtonProps {}

export const ButtonRounded: React.FC<ButtonRoundedProps> = ({
  children,
  label,
  color,
  className,
  ...props
}) => {
  return (
    <Button label={label} color={color} shape="rounded" {...props}>
      {children}
    </Button>
  )
}

ButtonRounded.displayName = 'ButtonRounded'

export default ButtonRounded
