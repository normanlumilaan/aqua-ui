import React from 'react'
import {
  Window,
  WindowTitle,
  WindowBody,
  WindowContent,
  type WindowProps,
} from '../window'

import { Layout, LayoutRow, LayoutCol } from '../layout'
import { ButtonRounded } from '../buttons'

export const AlertWindow: React.FC<WindowProps> = (props) => {
  return (
    <Window {...props}>
      <WindowTitle title={props.label} ownerId={props.id} />
      <WindowBody>
        <WindowContent>
          <Layout bgStyle="stripes">
            <LayoutRow className="aqua-dialog__body">
              <LayoutCol width="3">
                <figure className="aqua-dialog__icon">
                  <img
                    className="aqua-dialog__icon-img"
                    src="/aqua-ui/img/finder_icon.png"
                    alt="Finder icon"
                    width="148"
                    height="148"
                  />
                </figure>
              </LayoutCol>
              <LayoutCol width="9">
                <h3 className="aqua-dialog__title">
                  Are you sure you want to remove the items in the Trash
                  permanently?
                </h3>
                <p>You cannot undo this action.</p>
                <LayoutRow align="end">
                  <ButtonRounded label="Cancel" color="white">
                    Cancel
                  </ButtonRounded>
                  <ButtonRounded label="OK" color="blue">
                    OK
                  </ButtonRounded>
                </LayoutRow>
              </LayoutCol>
            </LayoutRow>
          </Layout>
        </WindowContent>
      </WindowBody>
    </Window>
  )
}

export default AlertWindow
