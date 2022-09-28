import Nav from '../nav/Nav';
import {projectItems} from '../../data/projectItems'
import ProjectItems from './ProjectItems';
import projectStyles from '../../styles/Projects.module.css'

const Projects = () => {
  return (
    <>
      <Nav />
      <div className={projectStyles.headerContainer}>
        
        <div className={projectStyles.projectContainer}>
          <div className={projectStyles.projects}>
            <div className={projectStyles.title}>Projects</div>
            <div className={projectStyles.contentDescription}>I build lots of projects related to cognitive tasks for use in psychological experiments</div>
          </div>

          <div className={projectStyles.contentContainer}>
            
            {projectItems.map((project, index) => {
              return (
                <ProjectItems projects={project} key={index} />
              )
            })}
            
            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Projects