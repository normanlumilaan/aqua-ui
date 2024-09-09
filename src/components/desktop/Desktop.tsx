import React, { useState } from 'react'
import { MenuBar } from '../menubar/MenuBar'
import { DesktopDraggable } from './DesktopDraggable'
import { type WindowProps } from '../window'

/** For demo puropses */
import { AlertWindow } from './AlertWindow'
import { AboutWindow } from './AboutWindow'
import { AProgramWindow } from './AProgramWindow'

export interface DesktopDraggableItem {
  /** Draggable item id */
  id: string
  /** Position on x-axis */
  x: number
  /** Position on y-axis */
  y: number
  /** Position on z-axis (for stacking) */
  z: number
}

export type DesktopDraggableWindow = DesktopDraggableItem & WindowProps

export type DesktopUpdateWindowPositionFn = (
  args: Pick<DesktopDraggableItem, 'id' | 'x' | 'y'>
) => void

export const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<DesktopDraggableWindow[]>([
    { id: 'window-1', label: 'Window 1', x: 0, y: 0, z: 1 },
    { id: 'window-2', label: 'A Program', x: 50, y: 50, z: 2 },
    { id: 'window-3', label: 'Confirm', x: 100, y: 100, z: 2 },
  ])

  const updateWindowPosition: DesktopUpdateWindowPositionFn = ({
    id,
    x,
    y,
  }) => {
    setWindows((prevState) =>
      prevState.map((item, i, arr) =>
        item.id === id
          ? { ...item, x: item.x + x, y: item.y + y, z: arr.length }
          : { ...item, z: i }
      )
    )
  }

  return (
    <div className="desktop cursor">
      <MenuBar />
      <DesktopDraggable updateItemPosition={updateWindowPosition}>
        {windows.map((window) => {
          switch (window.id) {
            case 'window-1':
              return (
                <AboutWindow
                  key={window.id}
                  x={window.x}
                  y={window.y}
                  z={window.z}
                  id={window.id}
                  label={window.label}
                />
              )
            case 'window-2':
              return (
                <AProgramWindow
                  key={window.id}
                  x={window.x}
                  y={window.y}
                  z={window.z}
                  id={window.id}
                  label={window.label}
                />
              )
            case 'window-3':
              return (
                <AlertWindow
                  key={window.id}
                  x={window.x}
                  y={window.y}
                  z={window.z}
                  id={window.id}
                  label={window.label}
                />
              )
            default:
              return null
          }
        })}
      </DesktopDraggable>
    </div>
  )
}

Desktop.displayName = 'Desktop'

export default Desktop
