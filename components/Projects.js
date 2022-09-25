import Nav from './Nav';
import Footer from './Footer'
import neaarrdlab from '../public/neaarrdlab.png'
import projectStyles from '../styles/Projects.module.css'

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
            
            <div className={projectStyles.card}>
              <a href="https://www.neaarrdlab.org/" target="_blank">

                <img src="/neaarrdlab.png" style={{width: '100%'}} className={projectStyles.cardImg}/>
                <div className={projectStyles.container}>
                  <h4 className={projectStyles.cardTitle}>NEAARRD Lab</h4>
                  <p className={projectStyles.cardBio}>Portal for the NEAARRD Lab</p>
                </div>
              </a>
              
            </div>
            <div className={projectStyles.card}>
              <a href="https://neaarrd-vaping-dependency.herokuapp.com/" target="_blank">

                <img src="/vapDep.png" style={{width: '100%'}} className={projectStyles.cardImg}/>
                <div className={projectStyles.container}>
                  <h4 className={projectStyles.cardTitle}>Vaping Dependency</h4>
                  <p className={projectStyles.cardBio}>Cognitive Task to measure effects from Vaping</p>
                </div>
              </a>
              
            </div>
            
            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Projects