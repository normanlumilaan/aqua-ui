import React, { type HTMLAttributes } from 'react'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'

import { type DesktopUpdateWindowPositionFn } from './Desktop'

interface DesktopDraggableProps extends HTMLAttributes<HTMLDivElement> {
  updateItemPosition: DesktopUpdateWindowPositionFn
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
