import React from 'react'
import navStyles from '../../styles/Nav.module.css'
import Link from 'next/link'

const Dropdown = ({ submenus, activated }) => {
  return (
    <div className={activated ? navStyles.fadeIn : navStyles.fadeOut}>
      {submenus.map((submenu, index) => (
        <Link href={submenu.url}>
          <div key={index} className={navStyles.menuItems}>
            <a>
              <div>
                {submenu.title}
              </div>
            </a>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Dropdown