import React from 'react'
import { Window, WindowTitle, WindowBody, WindowContent } from '../../window'
import { Layout, LayoutCol, LayoutRow, LayoutWrapper } from '../../layout'
import githubLogo from '../../../assets/icons/github.svg'

export const InfoWindow: React.FC<{ id: string; title: string }> = ({
  id,
  title,
}) => {
  return (
    <Window focus={false} id={id}>
      <WindowTitle title={title} ownerId={id} />
      <WindowBody>
        <WindowContent>
          <Layout>
            <LayoutWrapper>
              <LayoutRow align="center">
                <LayoutCol width="10">
                  <p>Description</p>
                  <p>
                    <a href="https://guidebookgallery.org/screenshots/macosx100">
                      OS X 10.0 screenshots
                    </a>
                  </p>
                  <a className="link link--icon" href="#">
                    <figure className="icon icon--sm">
                      <img src={githubLogo} alt="GitHub logo" />
                    </figure>
                    <span>Aqua UI</span>
                  </a>
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
