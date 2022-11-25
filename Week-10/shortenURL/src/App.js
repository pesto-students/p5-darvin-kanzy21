import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Index from "./pages/index"
import About from "./pages/about"
import { Layout } from './layout/layout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/" element={[
          <Layout key={1} />,
          <Index key={2} />,
        ]}>
        </Route>
        <Route path="/about" element={[
          <Layout key={1} />,
          <About key={2} />,
        ]}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
