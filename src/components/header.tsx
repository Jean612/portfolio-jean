"use client";

import "../styles/components/header.scss"
import { motion } from "framer-motion"

const Header = () => {
  return(
    <header>
      <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} >
        <ul>
          <li>Intro</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>About me</li>
        </ul>
        <div className="contact-button">
          <a>Contact</a>
        </div>
      </motion.nav>
    </header>
  )
}

export default Header;
