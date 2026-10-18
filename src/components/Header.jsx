import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <div>
       <Link to="/">Tokio.</Link>
       <div>
        <ul>
          <Link to="about">About</Link>
          <Link to="experience">Experience</Link>
          <Link to="skills">Skills</Link>
          <Link to="projects">Project</Link>
          <Link to="hoppies">Hoppies</Link>
          <Link to="contact">Contact</Link>
          <Link>Resume</Link>
          <Link to="contact"><button>Hire Me</button></Link>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default Header