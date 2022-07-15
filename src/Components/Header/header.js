import React, {useState, useEffect} from 'react'
import './header.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">
        <button type="button" className='block'>Home</button>
      </li>
      <li className="items">
        <button type="button" className='block'>About</button>
      </li>
      <li className="items">
        <button type="button" className='block'>Resume</button>
      </li>
      <li className="items">
        <button type="button" className='block'>Projects</button>
      </li>
      <li className="items">
        <button type="button" className='block'>Blogs</button>
      </li>
    </ul>
      )}
    <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
  )
}