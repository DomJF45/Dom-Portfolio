import Nav from '../nav/Nav';
import {projectItems} from '../../data/projectItems'
import ProjectItems from './ProjectItems';
import projectStyles from '../../styles/Projects.module.css'

const Projects = () => {

  const currentPage = 'Projects'

  return (
    <>
      <Nav currentDirectory={currentPage} />
      <div className={projectStyles.headerContainer}>
        
        <div className={projectStyles.projectContainer}>
          <div className={projectStyles.projects}>
            <div className={projectStyles.title}>Projects</div>
            <div className={projectStyles.contentDescription}>Here are some projects I have worked on.</div>
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