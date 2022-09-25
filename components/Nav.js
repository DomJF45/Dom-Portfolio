import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import navStyles from '../styles/Nav.module.css'
import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'

const Nav = () => {
  return (
    <div className={navStyles.navContainer}>
      <div className={navStyles.nav}>
        <div className={navStyles.navStuff}>
          <div className={navStyles.circleContainer}>
            <span className={navStyles.circle}></span>
          </div>
          <div className={navStyles.list}>
          {menuItems.map((menu, index) => {
            return (
              <MenuItems items={menu} key={index} />
            )
          })}
          
          </div>
          {/* <div className={navStyles.list}> / </div>
          <div className={navStyles.list}><a href={'/projects'}>Projects  </a></div> */}
        </div>
      </div>
    </div>
    
  )
}

export default Nav