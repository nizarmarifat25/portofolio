import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(show, "show");
  }, [show])

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className={show === true ? "sidebar" : "hide"}>


          <span onClick={() => { setShow(!show); console.log(show) }}>
            <FontAwesomeIcon icon={faClose} className="close" />
          </span>

          <div className="nav-list">
            <p>
              <NavLink className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"} to={'/'}>Home</NavLink>
            </p>
            <p>
              <NavLink className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"} to={'/about'}>About</NavLink>
            </p>
            <p>
              <NavLink className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"} to={'/projects'}>Projects</NavLink>
            </p>
            <p>
              <NavLink className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"} to={'/contact'}>Contact</NavLink>
            </p>
          </div>
        </div>
        {show === false? <span onClick={() => { setShow(true); console.log(show) }}>
          <FontAwesomeIcon icon={faBars} className="bars" />
        </span> : null}
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes >
        </div>
      </div>
    </div>
  );
}

export default App;
