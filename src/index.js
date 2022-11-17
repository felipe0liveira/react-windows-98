import "98.css/dist/98.css"
import React from "react"

const Window = ({ title, children }) => {
  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>{title}</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>{children}</div>
    </div>
  )
}

module.exports = { Window }
