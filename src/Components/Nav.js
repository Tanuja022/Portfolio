import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Nav.css';

function navbar() {
  return (
    <div className="navbar">
        {/* <div className="togglebutton">
            <button></button>
        </div> */}
        <div className="link">
            <Link to="/" style={{textDecoration:'none',margin: '0px 8px'}}>Home</Link>
            <Link to="/project" style={{textDecoration:'none',margin: '0px 20px'}}>project</Link>
            <Link to="/about" style={{textDecoration:'none'}}>Experience</Link>

        </div>
    </div>
  )
}

export default navbar