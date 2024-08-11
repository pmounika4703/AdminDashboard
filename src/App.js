import React from 'react';
import { BrowserRouter as Router, Route, Swicth, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import Login from './components/Login';
import { isAuthenticated } from './utils/auth';

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router basename="/AdminDashboard">
      <Swicth>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/posts" element={<PrivateRoute element={<Posts />} />} />

        {/* Redirect any unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Switch>
    </Router>
  );
}

export default App;
