import React, { type HTMLAttributes } from 'react'
import clsx from 'clsx'

export const Icon: React.FC<{ href: string } & HTMLAttributes<SVGElement>> = ({
  href,
  className,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={clsx('icon icon-svg-use', className)}
      {...props}
    >
      <use href={href} />
    </svg>
  )
}
