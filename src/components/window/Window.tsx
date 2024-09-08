import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface WindowProps {
  /** Window id */
  id: string
  /** Window label (visible title) */
  label: string
  /** Position x-axis */
  x: number
  /** Position y-axis */
  y: number
}

export interface WindowRenderProps
  extends WindowProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  /** focus
   * @deprecated
   */
  focus?: boolean
}

/*
 * Window component that holds window-title and window-body
 */
export const Window: React.FC<WindowRenderProps> = ({
  children,
  className,
  label,
  focus = false,
  id,
  x,
  y,
  ...props
}) => {
  console.log('x', x, 'y', y)
  return (
    <div
      id={id}
      tabIndex={0}
      data-aqua-ui-focus={focus}
      data-aqua-ui="window-main"
      className={clsx('aqua-window', className)}
      aria-label={label}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0px)`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

Window.displayName = 'Window'

export default Window
