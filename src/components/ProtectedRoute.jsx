import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the user is logged in
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // If not logged in, redirect to login
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child component
  return children;
};

export default ProtectedRoute;
