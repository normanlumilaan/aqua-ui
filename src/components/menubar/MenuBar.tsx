import React from 'react'
import logo from '../../assets/icons/heart.svg'
import { MenuBarSubmenu, MenuBarSubmenuItem } from './MenuBarSubmenu'
import { DateTime } from './DateTime'

const programMenu = [
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

const sampleSubmenu = [
  { url: '#', label: 'Submenu Item', shortcut: '⌘⌥S' },
  { url: '#', label: 'Second', shortcut: '⌘2' },
  { url: '#', label: 'Recents', shortcut: '⌘⌥R' },
  { url: '#', label: 'Location', shortcut: '⌘⌥L' },
  { url: '#', label: 'No Shortcut' },
]

export const MenuBar: React.FC = () => {
  return (
    <header className="aqua-menubar">
      <div className="aqua-menubar__row">
        <div className="aqua-menubar__col">
          <div className="aqua-menubar__item">
            <a href="/" className="aqua-menubar__item-a" id="aqua-menubar-logo">
              <figure className="icon">
                <img src={logo} alt="heart" width="24" height="24" />
              </figure>
            </a>
            <MenuBarSubmenu id="aqua-menubar-program-menu">
              {programMenu.map(({ url, label }) => (
                <MenuBarSubmenuItem key={label} label={label} url={url} />
              ))}
            </MenuBarSubmenu>
          </div>
          <div className="aqua-menubar__item aqua-menubar__item--programname">
            <button className="aqua-menubar__item-a" type="button">
              Aqua UI
            </button>
            <MenuBarSubmenu id="aqua-menubar-program-menu">
              {sampleSubmenu.map(({ url, label, shortcut }) => (
                <MenuBarSubmenuItem
                  key={label}
                  label={label}
                  url={url}
                  shortcut={shortcut}
                />
              ))}
            </MenuBarSubmenu>
          </div>
          <nav className="aqua-menubar__nav">
            <ul className="aqua-menubar__nav-menu">
              <li className="aqua-menubar__item">
                <button className="aqua-menubar__item-a">File</button>
              </li>
              <li className="aqua-menubar__item">
                <a href="#" className="aqua-menubar__item-a">
                  Edit
                </a>
              </li>
              <li className="aqua-menubar__item">
                <a href="#" className="aqua-menubar__item-a">
                  Info
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="aqua-menubar__col--right">
          <div className="aqua-menubar__item aqua-menubar__item--datetime">
            <DateTime />
          </div>
        </div>
      </div>
    </header>
  )
}

MenuBar.displayName = 'MenuBar'

export default MenuBar
