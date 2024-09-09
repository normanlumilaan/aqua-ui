import React, { type HTMLAttributes } from 'react'
import logo from '../../assets/icons/heart.svg'
import { MenuBarSubmenu } from './MenuBarSubmenu'
import { DateTime } from './DateTime'
import { Icon } from '../icons/Icon'

interface MenuBarItemLabelProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
  ownerId: string
}

const demoMenu1 = [
  { url: '#aqua-ui-css-info', label: 'About this app' },
  {
    url: 'https://github.com/normanlumilaan/aqua-ui.git',
    label: 'Get Aqua UI...',
  },
  {
    url: 'https://guidebookgallery.org/screenshots/macosx100',
    label: 'Inspired by',
  },
]

const demoMenu2 = [
  { url: '#', label: 'Submenu Item', shortcut: '⌘⌥S' },
  { url: '#', label: 'Second', shortcut: '⌘2' },
  { url: '#', label: 'Recents', shortcut: '⌘⌥R' },
  { url: '#', label: 'Location', shortcut: '⌘⌥L' },
  { url: '#', label: 'No Shortcut' },
]

const MenuBarItemLabel: React.FC<MenuBarItemLabelProps> = ({
  label,
  ownerId,
  children,
}) => {
  return (
    <button
      id={`${ownerId}-label`}
      aria-label={label}
      type="button"
      className="aqua-menubar__item-a"
    >
      {children}
    </button>
  )
}

const MenuBarItem: React.FC<
  { id: string } & HTMLAttributes<HTMLDivElement>
> = ({ id, children }) => {
  return (
    <div id={id} className="aqua-menubar__item">
      {children}
    </div>
  )
}

export const MenuBar: React.FC = () => {
  const programMenuItems = ['File', 'Edit', 'View', 'Help'].map((item, i) => (
    <MenuBarItem id={`menubar-program-${item}`} key={item}>
      <MenuBarItemLabel label={item} ownerId={`menubar-program-${item}`}>
        {item}
      </MenuBarItemLabel>
      <MenuBarSubmenu items={i % 2 === 0 ? demoMenu2 : demoMenu1} />
    </MenuBarItem>
  ))

  return (
    <header className="aqua-menubar">
      <div className="aqua-menubar__row">
        <div className="aqua-menubar__col">
          <MenuBarItem id="menubar-system-menu">
            <MenuBarItemLabel label="System menu" ownerId="menubar-system-menu">
              <Icon href="#icon-heart" />
            </MenuBarItemLabel>
            <MenuBarSubmenu items={demoMenu2} id="menubar-system-menu" />
          </MenuBarItem>
          <MenuBarItem id="menubar-program-main">
            <MenuBarItemLabel label="Aqua" ownerId="menubar-program-main">
              Aqua UI
            </MenuBarItemLabel>
            <MenuBarSubmenu items={demoMenu1} />
          </MenuBarItem>
          {programMenuItems}
        </div>
        <div className="aqua-menubar__col aqua-menubar__col--right">
          <div className="aqua-menubar__item">
            <DateTime />
          </div>
        </div>
      </div>
    </header>
  )
}

MenuBar.displayName = 'MenuBar'

export default MenuBar
