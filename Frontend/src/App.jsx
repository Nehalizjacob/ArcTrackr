import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from './Components/Admin/AdminRegister';
import Adminlogin from './Components/Admin/Adminlogin';
import AdminhomePage from './Pages/AdminhomePage';
import AddSiteVisit from './Components/Admin/AddSiteVisit';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/adminregister" element={<AdminRegister />} />
       <Route path="/admin" element={<Adminlogin />} />
      <Route path="/admindashboard" element={<AdminhomePage />} />
      <Route path="/addsitevisit" element={<AddSiteVisit/>} />
      </Routes>

    </Router>
    
  )
}

export default App