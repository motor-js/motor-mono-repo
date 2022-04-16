import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { EngineContext } from '@motor-js/engine'
import Home from './pages/Home'
import Login from './pages/Login'
import "./App.css"

export default function App() {

  const data = useContext(EngineContext)
  console.log(data)
  
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.*/}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes> 
      </div>
    </Router>
  );
}

