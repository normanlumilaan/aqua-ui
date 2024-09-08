import React from 'react'

import { InfoWindow } from '../ui/window/InfoWindow'
import { DialogConfirm } from '../ui/dialog/DialogConfirm'
import { ProgramWindow } from '../ui/window/ProgramWindow'
import { MenuBar } from '../menubar/MenuBar'

export const Desktop: React.FC = () => {
  return (
    <div className="desktop cursor">
      <MenuBar />
      <main className="desktop__main">
        <InfoWindow x={0} y={0} label="About" id="ui-window-info-1" />
        <ProgramWindow
          x={50}
          y={50}
          label="Unnamed program"
          id="ui-program-window"
        />
        <DialogConfirm x={100} y={100} label="Confirm" id="aqua-dialog-1" />
      </main>
    </div>
  )
}

Desktop.displayName = 'Desktop'

export default Desktop
