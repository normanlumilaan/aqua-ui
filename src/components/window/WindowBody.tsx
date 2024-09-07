import React, { type HTMLAttributes } from 'react'

export interface WindowBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const WindowBody: React.FC<WindowBodyProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="aqua-window__body" data-aqua-elem="window-body" {...props}>
      {children}
    </div>
  )
}

WindowBody.displayName = 'WindowBody'

export default WindowBody
