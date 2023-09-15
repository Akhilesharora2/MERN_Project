import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const AdminProtectedRoute = ({adminAuth}) => {
    return (adminAuth) ? <Outlet /> : <Navigate to="/" />;
}

export default AdminProtectedRoute