import logo from './logo.svg';
import './App.css';
import CreateNewRequest from './newRequest';
import ViewRequests from './viewRequests.js';
import Home from './home.js';
import NavBar from './navbar';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    // Route paths to components - ensure always match with what's in nav-bar.js to form the link
    <div className='main-container'>
      <div className='side-menu'>
        <NavBar /> 
      </div>
      <div className='main-content'>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-new-request' element={<CreateNewRequest />} />
          <Route path='/view-my-requests' element={<ViewRequests />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
