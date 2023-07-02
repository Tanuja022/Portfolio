import React from 'react'
import '../Style/Project.css';
import tic from '../img/tic.jpg';
function Tic() {
  return (
    <>
        <h2>Tic Tac Toe</h2>
        <div className="pms1">
        <img src={tic} alt="tk" id='imgpms' />
        
          <p id='p3'>   <span id='sp1'>Technologies Used </span>- Html, CSS, JavaScript.</p>
        </div>
    </>
  )
}

export default Tic