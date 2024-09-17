import React, { useState } from 'react'
import { TbWorldWww } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'
import { FaCirclePlus } from 'react-icons/fa6'
import { FaCircleMinus } from 'react-icons/fa6'

const Project = ({ project, typeProject }) => {
  const {
    image,
    name,
    description,
    date,
    type,
    techs,
    linkWebsite,
    linkGithub,
  } = project
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className="project-article">
      <h2 className="project-title">{name}</h2>

      {!isOpen ? (
        <FaCirclePlus
          className="project-btn footer-link"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        ></FaCirclePlus>
      ) : (
        <FaCircleMinus
          className="project-btn footer-link"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        ></FaCircleMinus>
      )}
      <div
        className={`project-details ${
          isOpen ? 'project-open' : 'project-closed'
        }`}
      >
        <div className="project-info">
          <span>
            <p className="inline highlight">Type: </p>
            <p className="inline">{type}</p>
          </span>
          <span>
            <p className="inline highlight">Date: </p>
            <p className="inline">{date}</p>
          </span>
        </div>
        <div className="project-standaard">
          <p className="inline">{description}</p>
        </div>
        <div className="project-standaard">
          <span>
            <p className="inline highlight">Techs: </p>
            <p className="inline">{techs}</p>
          </span>
        </div>
        <div className="project-left">
          <img src={image} className='project-img' alt="Project"></img>
        </div>
        <div className="project-icons">
          {linkWebsite && (
            <a className="website footer-link" href={linkWebsite} target="_blank">
              <TbWorldWww></TbWorldWww>
            </a>
          )}
          {linkGithub && (
            <a className="github footer-link" href={linkGithub} target="_blank">
              <BsGithub></BsGithub>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Project
