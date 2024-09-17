import React from 'react'
import links from '../Data/links'
import { SiGithub } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  const today = new Date()
  const allLinks = links[0]
   
  
  return (
    <footer>
      <div className="footer-links">
        <a href={allLinks.github} target="_blank"><SiGithub className='footer-link'></SiGithub></a>
        <a  href={allLinks.discord} target='_blank'><BsDiscord className='footer-link'></BsDiscord></a>
        <a  href={allLinks.twitter} target='_blank'><FaSquareXTwitter className='footer-link'></FaSquareXTwitter></a>
        <a  href={allLinks.youtube} target='_blank'><IoLogoYoutube className='footer-link'></IoLogoYoutube></a>
      </div>
      <div className="footer-copyright">
        <p>&copy; {today.getFullYear()} DawalaDeny. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
