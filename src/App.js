
import React from 'react';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Redirect
} from "react-router-dom";

import Rent from './Pages/Rent';
import Sell from './Pages/Sell';
import OffPlan from './Pages/OffPlan';
import ListProperty from './Pages/ListProperty';
import Blog from './Pages/Blog';



// test commmit

function App() {
  return (

      <Router>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/OffPlan" element={<OffPlan />} />
        <Route path="/ListProperty" element={<ListProperty />} />
        <Route path="/Blog" element={<Blog />} />
       
       
      </Routes>
    </Router>


    
  );
}

export default App;
