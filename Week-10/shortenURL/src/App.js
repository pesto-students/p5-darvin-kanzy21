import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Index from "./pages/index"
import { Layout } from './layout/layout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>

        <Route path="/index" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
