import React from 'react';
import { HashRouter, Route , Routes } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Terms from './Terms';
import  Blog from './Blog';
import Refund from './Refund';
import Privacy from './Privacy';
import Contact from './Contact'
function App(){
  return <div>
<div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/Refund" element={<Refund />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  </div>
}


export default App;