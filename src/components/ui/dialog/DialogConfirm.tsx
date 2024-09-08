import React from 'react'

import { Dialog, DialogIcon } from './Dialog'
import { Layout, LayoutCol, LayoutRow } from '../../layout'
import { ButtonRounded } from '../../buttons'
import { type WindowRenderProps } from '../../window'

export const DialogConfirm: React.FC<WindowRenderProps> = ({
  id,
  label,
  focus,
  ...props
}) => {
  return (
    <Dialog label={label} id={id} {...props}>
      <Layout bgStyle="stripes">
        <LayoutRow className="aqua-dialog__body">
          <LayoutCol width="3">
            <DialogIcon src="/aqua-ui/img/finder_icon.png" alt="Finder icon" />
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
    </Dialog>
  )
}

DialogConfirm.displayName = 'DialogConfirm'

export default DialogConfirm
