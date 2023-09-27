import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/indhumeghana-ch-a2495a22a" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Indhu2004" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials