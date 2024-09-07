import React, { type HTMLAttributes } from 'react'

import { Window, WindowTitle, WindowBody } from '../../window'

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  /** Dialog has focus. Default false */
  focus: boolean
  /** Dialog id */
  id: string
  /** Dialog window title */
  title: string
}

/** Base dialog component */
export const DialogIcon: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <figure className="aqua-dialog__icon">
      <img
        className="aqua-dialog__icon-img"
        src={src}
        alt={alt}
        width="148"
        height="148"
      />
    </figure>
  )
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  focus = false,
  id,
  title,
  className,
  ...props
}) => {
  return (
    <Window
      id={id}
      data-aqua-focus={focus}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      focus={false}
      role="dialog"
      className="aqua-dialog"
      {...props}
    >
      <WindowTitle title={title} ownerId={id} />
      <WindowBody>{children}</WindowBody>
    </Window>
  )
}

Dialog.displayName = 'Dialog'
DialogIcon.displayName = 'DialogIcon'

export default Dialog
