import React from 'react';
import {Navigate, Route, Outlet} from 'react-router-dom'

const AdminProtectedRoute = ({adminAuth}) => {
    return (adminAuth) ? <Outlet /> : <Navigate to="/" />;
}

export default AdminProtectedRoute