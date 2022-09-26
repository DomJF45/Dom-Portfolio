import React from 'react'
import navStyles from '../../styles/Nav.module.css'

const Dropdown = ({ submenus, activated }) => {
  return (
    <div className={activated ? navStyles.fadeIn : navStyles.fadeOut}>
      {submenus.map((submenu, index) => (
        <div key={index} className={navStyles.menuItems}>
          <a href={submenu.url}><div>
          {submenu.title}</div></a>
        </div>
      ))}
    </div>
  )
}

export default Dropdown