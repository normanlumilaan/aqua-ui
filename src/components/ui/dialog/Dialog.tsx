import React, { type HTMLAttributes } from 'react'

import {
  Window,
  WindowTitle,
  WindowBody,
  type WindowRenderProps,
} from '../../window'

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

export const Dialog: React.FC<WindowRenderProps> = ({
  children,
  id,
  label,
  ...props
}) => {
  return (
    <Window
      title={label}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      focus={false}
      role="dialog"
      className="aqua-dialog"
      label={label}
      id={id}
      {...props}
    >
      <WindowTitle title={label} ownerId={id} />
      <WindowBody>{children}</WindowBody>
    </Window>
  )
}

Dialog.displayName = 'Dialog'
DialogIcon.displayName = 'DialogIcon'

export default Dialog
