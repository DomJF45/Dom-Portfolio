import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav'
const Header = () => {
  return (
    <>
      
      <div className={headerStyles.circleContainer}>
        <span className={headerStyles.circle}></span>
      </div>
      <div className={headerStyles.headerContainer}>
        
        <h1 className={headerStyles.title}> DOM </h1>
        <div className={headerStyles.aboutContainer}>
          <p>Personal page of Dominick Founds, a software developer from Kennesaw, Georgia</p>
        </div>
        <div className={headerStyles.line}></div>
        <div className={headerStyles.contentContainer}>
          <div className={headerStyles.content}>
            <h3><Link href={'/projects'}>Projects</Link></h3>
            <p>Here are some of my Projects I have worked on</p>
          </div>
          <div className={headerStyles.content}>
            <h3><a href={'https://www.linkedin.com/in/dominick-founds-726a161a4/'} target="_blank" rel="noopener noreferrer">LinkedIn <FontAwesomeIcon icon={faUpRightFromSquare} size='xs' className='icon' /></a></h3>
            <p>My LinkedIn profile</p>
          </div>
          <div className={headerStyles.content}>
            <h3><a href={'https://github.com/DomJF45'} target="_blank">GitHub <FontAwesomeIcon icon={faUpRightFromSquare} size='xs' className='icon'/></a> </h3>
            <p>My GitHub where I store lots of code</p>
          </div>
          <div className={headerStyles.content}>
            <h3><a href={'https://github.com/DomJF45'} target="_blank">GitHub <FontAwesomeIcon icon={faUpRightFromSquare} size='xs' className='icon'/></a> </h3>
            <p>My GitHub where I store lots of code</p>
          </div>
        </div>
      </div>

      

      
    </>
  )
}

export default Header