import React from 'react'
import projectStyles from '../../styles/Projects.module.css'
const ProjectItems = ({projects}) => {
  return (
    
    <div className={projectStyles.card}>
    <a href={projects.link} target="_blank" rel="noreferrer">
      <img src={projects.pic} style={{width: '100%'}} className={projectStyles.cardImg} alt='' />
      <div className={projectStyles.container}>
        <h4 className={projectStyles.cardTitle}>{projects.title}</h4>
        
        <p className={projectStyles.cardBio}>{projects.bio}</p>
      </div>
    </a>
    
  </div>
  )
}

export default ProjectItems