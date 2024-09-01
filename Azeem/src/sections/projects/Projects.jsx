import React from 'react'
import styles from './ProjectStyles.module.css'
import viber from '../../assets/viberr.png'
import freshburger from '../../assets/fresh-burger.png'
import hippster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>

      <div className={styles.projectsContainer}>
       <ProjectCard src={viber} h3='Viber' p="Streaimg app"/>
       <ProjectCard src={freshburger} h3='freshburger' p="Hamburger restaurent"/>
       <ProjectCard src={hippster} h3='Hipsterr' p="Glasses shop"/>
       <ProjectCard src={fitlift} h3='Fit lift' p="Fitness app"/>

    </div>
    </section>
  )
}

export default Projects

