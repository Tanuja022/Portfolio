import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Nav from './Components/Nav';
import Project from './Pages/Project';
import Footer from './Components/Footer';
import PMS from './Components/PMS';
import Tic from './Components/Tic';
import Sport from './Components/Sport';
function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Nav/>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/PMS' element={<PMS/>}></Route>
          <Route path='/Tic' element={<Tic/>}></Route>
          <Route path='/sport' element={<Sport/>}></Route>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
