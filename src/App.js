import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

import Footer from './components/Footer';

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
        <Footer />
      </div>

    </>

  );
}

export default App;
