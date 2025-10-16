  import { useState } from 'react';
  import './App.css';
  import Exambar from "./pages/Exambar";
  import Qupload from './pages/UploadQ';
  import Button from '@mui/material/Button';
  import { Routes, Route } from "react-router-dom";


  function App() {
    
    return (
      <div>
        
        <Routes>
    <Route path="/" element = {<h1>HELLO!</h1>} />
    <Route path="/upload" element = {<Qupload />} />
    <Route path="/exam" element={<Exambar />} />
  </Routes>
      
      </div>
    )
  }

  export default App
