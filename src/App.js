import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/Users';
import PostsList from './components/Posts';
import Login from './components/Login';
import { isAuthenticated } from './utils/auth';

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router basename="/AdminDashboard">
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/users" element={<PrivateRoute element={<UsersList />} />} />
        <Route path="/posts" element={<PrivateRoute element={<PostsList />} />} />

        {/* Redirect any unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
