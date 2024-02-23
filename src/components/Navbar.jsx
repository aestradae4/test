import React from 'react'
import './styles/Navbar.css'

export default function Navbar() {

  return (
    <>
      <div className='navbar'>
          <div className='image'>
            <h1>logo</h1>
          </div>
          <div className='title'>
            <a><p>Inicio</p></a>
          </div>
          <div className='doc'>
            <a href='https://es.legacy.reactjs.org/docs/getting-started.html'><p>React Documentacion</p></a>
          </div>
          <div className='doc'>
            <a href='https://es.legacy.reactjs.org/docs/getting-started.html'><p>Next Js Documentacion</p></a>
          </div>
          <div className='doc'>
            <a href='https://es.legacy.reactjs.org/docs/getting-started.html'><p>Tailwind Documentacion</p></a>
          </div>
          <div className='doc'>
            <a href='https://es.legacy.reactjs.org/docs/getting-started.html'><p>Vite Documentacion</p></a>
          </div>
      </div>
    </>
  )
}

