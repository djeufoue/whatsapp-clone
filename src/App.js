import React, { useState } from "react";
import "./App.css";
import Sidebar from './Sidebar'; 
import Chat from './Chat';
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  return(
    //BEM naming convention
  <div className="app">
    {!user ?(
      <Login />
    ):(
      <div className="app_body">
        <Router>
          <Sidebar /> 
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
            <Route path="/" element={<Chat />} />
          </Routes>
        </Router> 
     </div>
    )}
  </div>
  ); 
}

export default App;
