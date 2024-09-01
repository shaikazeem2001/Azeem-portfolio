import React from 'react'

function ProjectCard({src,h3,p}) {
  return (
    <div>
         <a href="">
        <img src={src} alt="" className="hover" />
        <h3>{h3}</h3>
        <p>{p}</p>
         </a>
      
    </div>
  )
}

export default ProjectCard
