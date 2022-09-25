import Link from "next/link"
import { useState } from "react"
import Dropdown from './Dropdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import navStyles from '../styles/Nav.module.css'

const MenuItems = ({ items }) => {

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={navStyles.item}>
      {items.submenu ? (
        <>
          <button className={navStyles.buttonNav} type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '} 
            <div className={navStyles.iconDown}>
              <FontAwesomeIcon icon={faChevronDown} size={'xs'}></FontAwesomeIcon>
            </div>
          </button>
          <Dropdown submenus={items.submenu} activated={dropdown} />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
      
    </div>
  )
}

export default MenuItems