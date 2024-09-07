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
        label="Close window"
        color="red"
        className="aqua-window__buttons-btn"
      />
      <ButtonCircular
        label="Minimize"
        color="yellow"
        className="aqua-window__buttons-btn"
      />
      <ButtonCircular
        label="Maximize"
        color="green"
        className="aqua-window__buttons-btn"
      />
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
