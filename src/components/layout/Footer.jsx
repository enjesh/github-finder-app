import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'

const Footer = () => {
  const date = new Date();
  return (
    <footer>
     <div className="footer-sect">
      <FaGithub size={40} />
      <p><AiOutlineCopyright/> Copyright {date.getFullYear()} All right reserved</p>
     </div>
    </footer>
  )
}

export default Footer