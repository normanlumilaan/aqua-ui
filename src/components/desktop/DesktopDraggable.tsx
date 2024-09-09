import React, { type HTMLAttributes } from 'react'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import { type DesktopUpdateWindowPositionFn } from './Desktop'

interface DesktopDraggableProps extends HTMLAttributes<HTMLDivElement> {
  updateItemPosition: DesktopUpdateWindowPositionFn
}

export interface DraggableItem {
  /** Draggable item id */
  id: string
  /** Position on x-axis */
  x: number
  /** Position on y-axis */
  y: number
  /** Position on z-axis (for stacking) */
  z: number
}

export const DesktopDraggable: React.FC<
  DesktopDraggableProps & HTMLAttributes<HTMLDivElement>
> = ({ children, updateItemPosition }) => {
  const onDragEndHandler = ({ active, delta }: DragEndEvent) => {
    updateItemPosition({ id: active.id as string, x: delta.x, y: delta.y })
  }

  return (
    <main className="desktopDraggable">
      <DndContext onDragEnd={onDragEndHandler}>{children}</DndContext>
    </main>
  )
}

DesktopDraggable.displayName = 'DesktopDraggable'

export default DesktopDraggable
