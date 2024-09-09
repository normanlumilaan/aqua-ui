import React from 'react'
import {
  Window,
  WindowTitle,
  WindowBody,
  WindowContent,
  type WindowProps,
} from '../window'
import { Layout, LayoutCol, LayoutRow, LayoutWrapper } from '../layout'
import { Icon } from '../icons/Icon'

export const AboutWindow: React.FC<WindowProps> = ({ id, label, ...props }) => {
  return (
    <Window label={label} id={id} {...props}>
      <WindowTitle title={label} ownerId={id} />
      <WindowBody>
        <WindowContent>
          <Layout>
            <LayoutWrapper>
              <LayoutRow align="center">
                <LayoutCol width="10">
                  <p>
                    Aqua UI is an ongoing front-end experiment built with React
                    inspired by Apple Mac OS X 10.0 Aqua theme introduced back
                    in year 2000.
                  </p>
                  <p>
                    <a href="https://guidebookgallery.org/screenshots/macosx100">
                      OS X 10.0 screenshots
                    </a>
                  </p>
                  <div>
                    <a
                      className="link link--icon"
                      href="https://github.com/normanlumilaan/aqua-ui"
                    >
                      <Icon href="#icon-github" className="icon--sm" />
                      <span>Aqua UI</span>
                    </a>
                  </div>
                  <div>
                    <a
                      className="link link--icon"
                      href="https://normanlumilaan.github.io"
                    >
                      <Icon href="#icon-github" className="icon--sm" />
                      <span>https://normanlumilaan.github.io</span>
                    </a>
                  </div>
                  <p>{new Date().getFullYear()}</p>
                </LayoutCol>
              </LayoutRow>
            </LayoutWrapper>
          </Layout>
        </WindowContent>
      </WindowBody>
    </Window>
  )
}

AboutWindow.displayName = 'AboutWindow'

export default AboutWindow
