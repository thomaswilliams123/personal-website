import React, {useState, useEffect} from 'react'
import './header.css'
import { Link } from 'react-router-dom'

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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type="button" className='block'>Home</button>
          </Link>
        </li>
        <li className="items">
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <button type="button" className='block'>About</button>
          </Link>
        </li>
        <li className="items">
          <Link to="/resume" style={{ textDecoration: 'none' }}>
            <button type="button" className='block'>Resume</button>
          </Link>
        </li>
        <li className="items">
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <button type="button" className='block'>Projects</button>
          </Link>
        </li>
        <li className="items">
          <Link to="/blogs" style={{ textDecoration: 'none' }}>
            <button type="button" className='block'>Blogs</button>
          </Link>
        </li>
    </ul>
      )}
    <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
  )
}
