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
  { items: MenuItemProp[] } & HTMLAttributes<HTMLUListElement>
> = ({ id, items, ...props }) => {
  const list = items.map(({ url, label, shortcut }) => (
    <MenuBarSubmenuItem
      url={url}
      label={label}
      shortcut={shortcut}
      key={label}
    />
  ))

  return (
    <ul className="aqua-menubar-submenu" {...props}>
      {list}
    </ul>
  )
}

MenuBarSubmenu.displayName = 'MenuBarSubmenu'

export default MenuBarSubmenu
