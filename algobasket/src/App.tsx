import { useState } from 'react'
import Header from './components/header/header'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NotFound } from './pages/notFound'
import Homepage from './pages/homepage'

function App() {

  return (
   <div className="app">

      <Router>
        <Routes>
           <Route path="/" element={<Homepage/>} />
           <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    
   </div>
  )
}

export default App
