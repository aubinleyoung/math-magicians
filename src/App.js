import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />

        </Routes>
      </div>

    </>

  );
}

export default App;
// <div className="App">

// </div>
