import AboutLinks from './AboutLinks'
import {aboutItems} from '../../data/aboutItems'
import headerStyles from '../../styles/Header.module.css'

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
          { aboutItems.map((item, index) => {
            return (
              <AboutLinks items={item} key={index} />
            )
          }) }
        </div>
      </div>
    </>
  )
}

export default Header