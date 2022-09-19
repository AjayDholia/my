import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './components/Project'
import Technologies from './components/Technologies';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Allcomponents from './components/Allcomponents';
import Userdashboard from './components/Userdashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/project" element={<Project />} />
          <Route path="/technologies" element={<Technologies/>} />
          <Route path="/allcomponents" element={<Allcomponents/>} />
          <Route path="/userdashboard" element={<Userdashboard/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
