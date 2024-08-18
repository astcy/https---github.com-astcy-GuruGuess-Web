import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from "./Home";
import About from './About';
function App(){
  return <div>
<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path= "/About" element={<About/>}/>


</Routes>
</BrowserRouter>
  </div>
}


export default App;