import React from 'react'

import { InfoWindow } from '../ui/window/InfoWindow'
import { DialogConfirm } from '../ui/dialog/DialogConfirm'
import { ProgramWindow } from '../ui/window/ProgramWindow'
import { MenuBar } from './MenuBar'

export const Desktop: React.FC = () => {
  return (
    <>
      <MenuBar />
      <main id="desktop">
        <InfoWindow title="About" id="ui-window-info-1" />
        <ProgramWindow
          title="Unnamed program"
          id="ui-program-window"
          focus={true}
        />
        <DialogConfirm focus={false} title="Confirm" id="aqua-dialog-1" />
      </main>
    </>
  )
}

Desktop.displayName = 'Desktop'

export default Desktop
