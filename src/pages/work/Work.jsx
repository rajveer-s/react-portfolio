import React from 'react'
import projects from '../../data/projectwork'



const Work = () => {
  return (
    <div>
      <h2>This is a work section</h2>
      {projects.map((project, index) => {
        if (index >= 4) return;
        return <p>this is something</p>
      })}
    </div>
  )
}

export default Work