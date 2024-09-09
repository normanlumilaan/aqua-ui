import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export interface WindowProps {
  label: string
  x: number
  y: number
  z: number
  id: string
}

/*
 * Window component that holds window-title and window-body
 */
export const Window: React.FC<WindowProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  label,
  id,
  x,
  y,
  z,
  ...props
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })

  const style = {
    top: y,
    left: x,
    zIndex: z,
    transform: transform ? CSS.Translate.toString(transform) : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      id={id}
      tabIndex={0}
      className={clsx('aqua-window', className)}
      aria-label={label}
      {...props}
    >
      {children}
    </div>
  )
}

Window.displayName = 'Window'

export default Window
