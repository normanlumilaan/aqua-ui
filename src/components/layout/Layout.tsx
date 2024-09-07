import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /* bgStyle - Set background style. */
  bgStyle?: 'stripes' | undefined
}

/*
Window layout container block that contains rows.
*/
export const Layout: React.FC<LayoutProps> = ({
  children,
  bgStyle,
  ...props
}) => {
  return (
    <div
      className={clsx('aqua-layout', bgStyle && 'aqua-layout--stripes')}
      {...props}
    >
      {children}
    </div>
  )
}

Layout.displayName = 'Layout'

export default Layout
