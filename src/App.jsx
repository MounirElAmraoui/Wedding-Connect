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
import Explore from './pages/Explore';
import Bookings from './pages/Bookings';
import Favorites from './pages/Favorites';
import Messages from './pages/Messages';
import Destinations from './pages/Destinations';
import Trending from './pages/Trending';
import TopVendors from './pages/TopVendors';
import BecomeVendor from './pages/BecomeVendor';
import CreateEvent from './pages/CreateEvent';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import DeleteAccount from './pages/DeleteAccount';
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
          <Route path="explore" element={<Explore />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="messages" element={<Messages />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="trending" element={<Trending />} />
          <Route path="top-vendors" element={<TopVendors />} />
          <Route path="become-vendor" element={<BecomeVendor />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
          <Route path="delete-account" element={<DeleteAccount />} />
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