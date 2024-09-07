import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface WindowProps extends HTMLAttributes<HTMLDivElement> {
  /** Window has focus */
  focus: boolean
}

/*
 * Window component that holds window-title and window-body
 */
export const Window: React.FC<WindowProps> = ({
  children,
  className,
  focus = false,
  id,
  ...props
}) => {
  return (
    <div
      id={id}
      tabIndex={0}
      data-aqua-ui-focus={focus}
      data-aqua-ui="window-main"
      className={clsx('aqua-window', className)}
      {...props}
    >
      {children}
    </div>
  )
}

Window.displayName = 'Window'

export default Window
