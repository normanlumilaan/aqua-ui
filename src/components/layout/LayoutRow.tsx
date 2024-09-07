import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface LayoutRowProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end'
}

/* Row is a container for columns */
export const LayoutRow: React.FC<LayoutRowProps> = ({
  children,
  align = 'start',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'aqua-layout__row',
        `aqua-layout__row--${align}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

LayoutRow.displayName = 'LayoutRow'

export default LayoutRow
