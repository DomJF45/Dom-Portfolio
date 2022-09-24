import Nav from './Nav';
import Footer from './Footer'
import projectStyles from '../styles/Projects.module.css'

const Projects = () => {
  return (
    <>
      <Nav />
      <div className={projectStyles.headerContainer}>
        
        <div className={projectStyles.projectContainer}>
          <div className={projectStyles.projects}>
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects