import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LogIn from './LogIn';
import Home from './Home/Home';


function App() {
  return (
<Router>
  <Routes>
    <Route exact path="/" element={<LogIn/>}/>
    <Route exact path="/Home" element={<Home/>}/>
  </Routes>
</Router>
  )
}

export default App;
