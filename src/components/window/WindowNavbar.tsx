import React, { type HTMLAttributes } from 'react'

export interface WindowNavbarProps extends HTMLAttributes<HTMLDivElement> {}

/** Window navbar */
export const WindowNavbar: React.FC<WindowNavbarProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      className="aqua-window__navbar"
      data-aqua-elem="window-navbar"
      {...props}
    >
      {children}
    </div>
  )
}

WindowNavbar.displayName = 'WindowNavbar'

export default WindowNavbar
