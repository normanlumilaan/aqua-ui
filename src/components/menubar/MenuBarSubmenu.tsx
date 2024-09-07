import React, { type HTMLAttributes } from 'react'

export interface MenuItemProp {
  label: string
  url: string
  shortcut?: string
}

export const MenuBarSubmenuItem: React.FC<MenuItemProp> = ({
  url,
  label,
  shortcut,
}) => {
  return (
    <li className="aqua-menubar-submenu__item" key={label}>
      <a href={url} className="aqua-menubar-submenu__item-a">
        <span>{label}</span>
        {shortcut && <span>{shortcut}</span>}
      </a>
    </li>
  )
}

export const MenuBarSubmenu: React.FC<
  { id: string } & HTMLAttributes<HTMLUListElement>
> = ({ id, children }) => {
  return (
    <ul className="aqua-menubar-submenu" id={id}>
      {children}
    </ul>
  )
}

MenuBarSubmenu.displayName = 'MenuBarSubmenu'

export default MenuBarSubmenu
