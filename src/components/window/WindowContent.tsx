import React, { type HTMLAttributes } from 'react'

export interface WindowContentProps extends HTMLAttributes<HTMLDivElement> {}

/** Window actual content area */
export const WindowContent: React.FC<WindowContentProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="aqua-window__content" {...props}>
      {children}
    </div>
  )
}

WindowContent.displayName = 'WindowContent'

export default WindowContent
