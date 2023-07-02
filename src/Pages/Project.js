import React from 'react';
import pms from '../img/pms.jpg';
import tic from '../img/tic.jpg';
import sports from '../img/sports.jpg';
import '../Style/Project.css';
import { useNavigate } from 'react-router-dom';

function Project() {

  const navigate= useNavigate();
  const nav=()=>{
    navigate('/PMS');
  }
  const nav1=()=>{
    navigate('/Tic');
  }
  const nav2=()=>{
    navigate('/sport');
  }
  
  return (
    <>
    <h2>My Projects</h2>
    <div className="proj">
      <div className="box1" >
        <img src={pms} alt="tk"   />
        <h3>Project Management System</h3>
        <button type="button" onClick={nav} className='button'>More..</button>
      </div>

      <div className="box2">
      <img src={tic} alt="tk" />
        <h3>Tic Tac Toe</h3>
        <button type="button" onClick={nav1} className='button'>More..</button>
      </div>

      <div className="box3">
      <img src={sports} alt="tk"  />
        <h3>Simple Sports Website</h3>
        <button type="button" onClick={nav2} className='button'>More..</button>
      </div>
    </div>
  </>
  )
}

export default Project