import React, { useState } from 'react'
import Project from './Project'
import data from '../Data/data'

const projects = data.reverse()
const types = [
  'all',
  ...new Set(
    projects.map((project) => {
      return project.type
    })
  ),
  'hide',
]

const Projects = () => {
  const [allProjects, setAllProjects] = useState(projects)
  const [allTypes, setAllTypes] = useState(types)
  const [oneType, setOneType] = useState('all')

  const filteredProjects = (type) => {
    if (type === 'all') {
      return setAllProjects(projects)
    }
    if (type === 'hide') {
      return setAllProjects([])
    }
    const newList = projects.filter((project) => {
      return project.type === type
    })
    return setAllProjects(newList)
  }

  return (
    <section id="projects">
      <h1 className="title center">Projects</h1>
      <div className="center">
        {allTypes.map((type, index) => {
          return (
            <button
              key={index}
              className={
                oneType === type
                  ? 'projects-btn projects-btn-active'
                  : 'projects-btn'
              }
              onClick={() => {
                setOneType(type)
                filteredProjects(type)
              }}
            >
              {type}
            </button>
          )
        })}
      </div>
      <div className="projects">
        {allProjects.map((project, index) => {
          return (
            <Project
              project={project}
              key={index}
              typeProject={oneType}
            ></Project>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
