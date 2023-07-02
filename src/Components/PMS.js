import React from 'react'
import '../Style/Project.css';
import pms from '../img/pms.jpg';
function PMS() {
  return (
    <>
      <h2>Project Management System</h2>
        <div className="pms1">
        <img src={pms} alt="tk" id='imgpms' />
        <p id="p1">Project management system project is used in software
                companies for efficiently organizing project form starting
                stage to ending stage and allocating works to different
                departments form designing, coding, testing and
                management. This is Team work project and I make
                documentation of the project.<br/><br/>
             <span id='sp'>  Technologies Used </span>-java JSP, Servlet, MySQL DB, HTML, CSS. </p>
        </div>
    </>
  )
}

export default PMS