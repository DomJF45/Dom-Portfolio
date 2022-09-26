import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import headerStyles from '../../styles/Header.module.css'
const AboutLinks = ({ items }) => {
  return (
    <div className={headerStyles.content}>
      {items.external ? (
        <>
          <h3>
            <a href={items.link} target="_blank">
              {items.title}
            </a>
            <FontAwesomeIcon icon={faUpRightFromSquare} size='xs' className='icon' />
          </h3>
          <p>{items.bio}</p>
        </>
        ) : (
        <>
          <h3><Link href={items.link}>{items.title}</Link></h3>
          <p>{items.bio}</p>
        </>
      )}
    </div>
  )
}

export default AboutLinks