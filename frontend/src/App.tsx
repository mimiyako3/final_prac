import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Mainpage from './MainPage';
import Record from './Recoed';


//ルーティング設定
const App: React.FC = () =>{
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Mainpage />} />
      <Route path="/Record" element={<Record />} />

      </Routes>
      
    </Router>

  )
}

export default App;