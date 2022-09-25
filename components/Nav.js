import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={navStyles.navContainer}>
      <div className={navStyles.nav}>
        <div className={navStyles.navStuff}>
          <div className={navStyles.circleContainer}>
            <span className={navStyles.circle}></span>
          </div>
          <div className={navStyles.list}><Link href={'/'}>DOM</Link></div>
          <div className={navStyles.list}> / </div>
          <div className={navStyles.list}><a href={'/projects'}>Projects <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon> </a></div>
        </div>
      </div>
    </div>
    
  )
}

export default Nav