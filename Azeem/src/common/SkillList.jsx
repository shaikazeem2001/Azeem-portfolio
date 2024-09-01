import React from 'react'

function SkillList({src,skill}) {
  return (
    <div>
      <span>
        <img src={src} alt="error" />
        <p>{skill}</p>
    </span>
    </div>
  )
}

export default SkillList
