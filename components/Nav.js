import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={navStyles.navContainer}>
      <nav className={navStyles.nav}>
        <ul>
          <div className={navStyles.circleContainer}>
            <span className={navStyles.circle}></span>
          </div>
          <li><Link href={'/'}>DOM</Link></li>
          <li> / </li>
          <li><a href={'/projects'}>Projects <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon> </a></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav