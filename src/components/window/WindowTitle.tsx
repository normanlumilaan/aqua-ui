import React, { type HTMLAttributes } from 'react'

import { ButtonCircular, ButtonRounded } from '../buttons'

export interface WindowTitleProps extends HTMLAttributes<HTMLDivElement> {
  /** Window visible title */
  title: string
  /** Window title has buttons? Default false. */
  hasButtons?: boolean
  /** ID of window this title belongs to */
  ownerId: string
}

const WindowButtons: React.FC = () => {
  return (
    <div className="aqua-window__buttons" data-aqua-elem="window-buttons">
      <ButtonCircular
        label="Close button"
        color="red"
        className="aqua-window__buttons-btn aqua-window__buttons--close"
      >
        <svg
          role="image"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <use href="#icon-window-control-close" />
        </svg>
      </ButtonCircular>
      <ButtonCircular
        label="Minimize button"
        color="yellow"
        className="aqua-window__buttons-btn aqua-window__buttons--minimize"
      >
        &#45;
      </ButtonCircular>
      <ButtonCircular
        label="Zoom button"
        color="green"
        className="aqua-window__buttons-btn aqua-window__buttons--zoom"
      >
        <svg
          role="image"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <use href="#icon-window-control-zoom" />
        </svg>
      </ButtonCircular>
    </div>
  )
}

/*
 * WindowTitle component that holds windowtitle-title and windowtitle-body
 */
export const WindowTitle: React.FC<WindowTitleProps> = ({
  children,
  title,
  ownerId,
  hasButtons = false,
  ...props
}) => {
  return (
    <div
      className="aqua-window__title"
      data-aqua-elem="window-title"
      {...props}
    >
      <div className="aqua-window__title-inner">
        {hasButtons && <WindowButtons />}
        <h4 id={`${ownerId}-title`} className="aqua-window__title-txt">
          {title}
        </h4>
        {hasButtons && (
          <div className="aqua-window__title-left">
            <ButtonRounded
              label="What does this button do?"
              className="aqua-window__buttons-btn"
            />
          </div>
        )}
      </div>
    </div>
  )
}

WindowTitle.displayName = 'WindowTitle'

export default WindowTitle
