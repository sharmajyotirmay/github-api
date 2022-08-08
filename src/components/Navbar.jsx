import React from 'react'
import './style.css'

export default function Navbar({username}) {
  return (
    <div className='nav-container'>
        <div className="logo"><h1>Gitviewer</h1></div>
        <div className="username">{username}</div>
    </div>
  )
}
