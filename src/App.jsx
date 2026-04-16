import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Vendors from './pages/Vendors';
import VendorDetails from './pages/VendorDetails';
import Experiences from './pages/Experiences';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './styles/global.css';
import Profil from './pages/Profil';
import './App.css';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="vendors/:id" element={<VendorDetails />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profil" element={<Profil />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;