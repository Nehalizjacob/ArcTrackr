import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from './Components/Admin/AdminRegister';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/adminregister" element={<AdminRegister />} />

      </Routes>

    </Router>
    
  )
}

export default App