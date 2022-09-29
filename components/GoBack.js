import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import backStyles from '../styles/Back.module.css'

const GoBack = ({ prevDirectory }) => {
  return (
    <div className={backStyles.backContainer}>
      <Link href={`/${prevDirectory}`}>
        <a className={backStyles.link}>

          <FontAwesomeIcon icon={faChevronCircleLeft} size={'2x'} className={backStyles.icon}/>
        </a>
      </Link>
    </div>
  )
}

export default GoBack