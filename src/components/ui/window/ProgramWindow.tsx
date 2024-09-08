import React from 'react'

import {
  Window,
  WindowTitle,
  WindowBody,
  WindowNavbar,
  WindowNavbarButton,
  WindowContent,
  type WindowRenderProps,
} from '../../window'

import { Layout, LayoutCol, LayoutRow, LayoutWrapper } from '../../layout'

import { ButtonRounded } from '../../buttons/ButtonRounded'

export const ProgramWindow: React.FC<WindowRenderProps> = ({
  id,
  label,
  ...props
}) => {
  return (
    <Window label={label} id={id} {...props}>
      <WindowTitle title={label} ownerId={id} hasButtons />
      <WindowBody>
        <WindowNavbar>
          <WindowNavbarButton label="Media">
            <span className="icon icon--md">💿</span>
            <span>Media</span>
          </WindowNavbarButton>
          <WindowNavbarButton label="Media">
            <span className="icon icon--md">⚙️</span>
            <span>Settings</span>
          </WindowNavbarButton>
          <WindowNavbarButton label="Media">
            <span className="icon icon--md">📝</span>
            <span>Edit</span>
          </WindowNavbarButton>
          <WindowNavbarButton label="Media">
            <span className="icon icon--md">©</span>
            <span>Burn</span>
          </WindowNavbarButton>
          <WindowNavbarButton label="Media">
            <span className="icon icon--md">⏏</span>
            <span>Eject</span>
          </WindowNavbarButton>
        </WindowNavbar>
        <WindowContent>
          <Layout>
            <LayoutWrapper>
              <LayoutRow>
                <LayoutCol width="12">
                  <p>
                    Window with titlebar buttons, menu and two rows of 12 column
                    layout.
                  </p>
                </LayoutCol>
              </LayoutRow>
              <LayoutRow>
                <LayoutCol width="6">
                  <p>Column width 6</p>
                </LayoutCol>
                <LayoutCol width="6">
                  <p>Column width 6</p>
                  <LayoutRow align="end">
                    <ButtonRounded label="White button">White</ButtonRounded>
                    <ButtonRounded label="Red button" color="red">
                      Red
                    </ButtonRounded>
                  </LayoutRow>
                </LayoutCol>
              </LayoutRow>
            </LayoutWrapper>
          </Layout>
        </WindowContent>
      </WindowBody>
    </Window>
  )
}

ProgramWindow.displayName = 'ProgramWindow'

export default ProgramWindow
