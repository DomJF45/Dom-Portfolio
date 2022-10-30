import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Dropdown from './Dropdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import navStyles from '../../styles/Nav.module.css'

const MenuItems = ({ items, currentDirectory }) => {

  const [dropdown, setDropdown] = useState(false); 
  const menu = useRef(true)
  
  useEffect(() => {
    if (dropdown === true) {
      document.addEventListener('mousedown', closeOnClick)
    } 
    
  },[dropdown])

  const closeMenu = () => {
    setDropdown((prev)=>(!prev))
  }
  
  const closeOnClick = (e) => {
    if (menu.current && dropdown && !menu.current.contains(e.target)) {
      setDropdown(false)
      document.removeEventListener('mousedown', closeOnClick)
    }
  }

  return (
    <div className={navStyles.item} ref={menu}>
      
      {items.submenu ? (
        <div className={navStyles.dParent}>
          <button className={navStyles.buttonNav} type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={closeMenu}>
            {currentDirectory}{' '} 
            <div className={navStyles.iconDown}>
              <FontAwesomeIcon icon={faChevronDown} size={'xs'} className={dropdown ? navStyles.iconUp : navStyles.iconDown}></FontAwesomeIcon>
            </div>
          </button>
          <Dropdown submenus={items.submenu} activated={dropdown} />
        </div>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
      
    </div>
  )
}

export default MenuItems