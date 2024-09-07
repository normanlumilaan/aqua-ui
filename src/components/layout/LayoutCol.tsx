import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface LayoutColProps extends HTMLAttributes<HTMLDivElement> {
  /** Column width 1 - 12. Default 12 */
  width?: string
}

/* Row is a container for columns */
export const LayoutCol: React.FC<LayoutColProps> = ({
  children,
  width = '12',
  ...props
}) => {
  return (
    <div
      className={clsx('aqua-layout__col', `aqua-layout__col--${width}`)}
      {...props}
    >
      {children}
    </div>
  )
}

LayoutCol.displayName = 'LayoutCol'

export default LayoutCol
