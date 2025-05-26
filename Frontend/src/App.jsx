import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from './Components/Admin/AdminRegister';
import Adminlogin from './Adminlogin';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/adminregister" element={<AdminRegister />} />
<Route path="/adminregister" element={<Adminlogin />} />
      </Routes>

    </Router>
    
  )
}

export default App