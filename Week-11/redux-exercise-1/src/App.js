import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Index from "./pages/index"
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state);
  return (
    <div className="App" style={{backgroundColor:state?.colorShade, height:'100vh'}}>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
