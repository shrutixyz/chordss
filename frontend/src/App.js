import Home from '../src/pages/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewJam from './pages/NewJam';
import Jam from './pages/Jam';
import SetStage from './pages/SetStage';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/newjam' element={<NewJam/>}/>
        <Route path='/jam' element={<Jam/>}/>
        <Route path='/setstage' element={<SetStage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
