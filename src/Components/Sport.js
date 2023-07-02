import React from 'react'
import '../Style/Project.css';
import sports from '../img/sports.jpg';
function Sport() {
  return (
    <> 
        <h2>Simple Sports Website</h2>
        <div className="pms1">
        <img src={sports} alt="tk" id='imgpms' />
        
          <p id="p2"> This is Simple sports website I make in this website that is
                front page and contact us page using this Technologies.
                
              <span id="sp">  Technologies Used</span>- Node JS, pug, Express and Mongoose.</p>
        </div>
    </>
  )
}

export default Sport