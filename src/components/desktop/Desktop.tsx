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
        <InfoWindow title="About" id="ui-window-info-1" />
        <ProgramWindow
          title="Unnamed program"
          id="ui-program-window"
          focus={true}
        />
        <DialogConfirm focus={false} title="Confirm" id="aqua-dialog-1" />
      </main>
    </div>
  )
}

Desktop.displayName = 'Desktop'

export default Desktop
