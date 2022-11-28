import './App.scss';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/index"
import About from "./pages/about"
import { Layout } from './layout/layout';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/"  element={<Layout page={<Index />} />}>
            <Route path="about" index element={<Layout page={<About />} />} />
          </Route>
          {/* <Route path="/home" element={<Layout page={<Index />} />}/> */}

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
