import React, { type HTMLAttributes } from 'react'

export interface LayoutWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /* bgStyle - Set background style. */
  bgStyle?: 'stripes' | undefined
}

/** Wraps rows */
export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="aqua-layout__wrapper" {...props}>
      {children}
    </div>
  )
}

LayoutWrapper.displayName = 'LayoutWrapper'

export default LayoutWrapper
