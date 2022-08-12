import React from "react"
import "./Header.css"
import gpt from "./gpttoons1.png"

const Header = () => {
  return (
    <span onClick={()=> window.scroll(0, 0)} className='header'>
      <img src={gpt} alt="gpttoons"/>
      JMAN HUB 🎥 </span>

  )
}
export default Header