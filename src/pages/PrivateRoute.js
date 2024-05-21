// src/pages/PrivateRoute.js
// src/pages/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../pages/firebase';


const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!auth.currentUser;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
