import React from 'react'
import logo from '../assets/asset 9.png'
import {BsMouse} from "react-icons/bs"

const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
        <a href="/" className="logo">
            <img src={logo} alt="logo" data-cursorpointer={true} />
        </a>
        <a href="/" className="franchiseBtn" data-cursorpointer={true}>
        GET A FRANCHISE
        </a>
        <BsMouse className="scrollBtn" data-cursorpointer={true}/>
    </>
  )
}

export default Misc
