import './App.css';
import React from 'react';

import Navbar from './components/Navbar';

import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  let components;
  switch (window.location.pathname) {
    case '/':
      components = <Home />;
      break;
    case '/calculator':
      components = <Calculator />;
      break;
    case '/quote':
      components = <Quote />;
      break;
    default:
      components = null;
      break;
  }
  return (
    <>
      <Navbar />
      {components}
    </>

  );
}

export default App;
// <div className="App">

//   <div className="wrapper">

//     <Calculator />
//   </div>

// </div>
