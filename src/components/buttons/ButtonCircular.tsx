import React from 'react'
import Button, { type ButtonProps } from './Button'

export interface ButtonCircularProps extends ButtonProps {}

export const ButtonCircular: React.FC<ButtonCircularProps> = ({
  children,
  label,
  color,
  className,
  ...props
}) => {
  return (
    <Button
      className={className}
      label={label}
      color={color}
      shape="circular"
      {...props}
    >
      {children}
    </Button>
  )
}

ButtonCircular.displayName = 'ButtonCircular'

export default ButtonCircular
