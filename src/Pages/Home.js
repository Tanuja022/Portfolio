import React from 'react'
import '../Style/Home.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import  icon from '../img/icon.jpg';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md';


function Home() {
  return (
    <>
    <div className='container'>
       <div className="name">
          <h1> My Name is Tanuja Kavilkar</h1>
          <span>Passionate IT Engineer Fresher seeking opportunities to learn and contribute in the tech industry.</span>
       </div>
       <div className="icons">
          <Link to="https://www.linkedin.com/in/tanuja-kavilkar-20699a22b" target='_blank' id="link">
          <BsLinkedin />
          </Link>
          <Link to="https://github.com/Tanuja022/"  target='_blank' id="link">
            <BsGithub id='icon2'  />
          </Link>
        </div>
</div>

    {/* About */}
    <div className="head">
      <h1>About</h1>
    </div>
    

    <div className="about">
          
          <div className="left">
              
              <img src={icon} alt="TK" id='img1' />
          </div>

          <div className="right">
              <p id='pri'>I complete my graduation from Pillai College of Arts, Commerce and Science and secure 7.28 CGPA.
              I have hands on work with java Programming Language, and also have Knowledge about web devlopment.</p>
          </div>
          

    </div>
    

    {/* Skills set */}
    <div className="head1">
      <h1>My Skills</h1>
    </div>
    <div className="skill">

      <div className="web">
        <h2>Web Devlopment</h2>
        <p className="w1">HTML,CSS,JavaScript,React Js</p>
      </div>

      <div className="back">
        <h2>Backend Devlopment</h2>
        <p className="b1">Node Js,Mongo DB,Basics Of MERN </p>
      </div>

      <div className="language">
        <h2>Language</h2>
        <p className="b1">Java,Python</p>
      </div>
 </div>

 <h1 style={{textAlign:"center"}}>Education</h1>
    
    
    <div className="container1">

      {/* Education section */}
      <VerticalTimeline>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'white', color: 'black', }}
  contentArrowStyle={{ borderRight: '7px solid  white' }}
  date="2018-2021"
  iconStyle={{ background: 'white', color: 'black' }}
  icon={<MdSchool/>}
>
  <h3 className="vertical-timeline-element-title"> Degree:- BSC IT </h3>
  <h4 className="vertical-timeline-element-subtitle">Pillai College Of Arts, Commerce And Science, New
Panvel.</h4>
  <h4>Pointer [7.28 CGPA]</h4>
  
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'white', color: 'black' }}
  contentArrowStyle={{ borderRight: '7px solid  white' }}
  date="2016-2018"
  iconStyle={{ background: 'white', color: 'black' }}
  icon={<MdSchool/>}
>
    <h3 className="vertical-timeline-element-title"> XII</h3>
    <h4 className="vertical-timeline-element-subtitle"> N. N. Paliwala Junior College, New Panvel State Board
  </h4>
 
  
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'white', color: 'black' }}
  contentArrowStyle={{ borderRight: '7px solid  white' }}
  date="2013"
  iconStyle={{ background: 'white', color: 'black' }}
  icon={<MdSchool/>}
>
  <h3 className="vertical-timeline-element-title">X</h3>
  <h4 className="vertical-timeline-element-subtitle">K. A. Banthia School, New Panvel</h4>
 
</VerticalTimelineElement>

  

</VerticalTimeline> 
</div>

    </>
  )
}

export default Home