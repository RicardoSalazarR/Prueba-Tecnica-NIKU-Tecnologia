import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

const ProtectedRoutes = () => {
    const userName = useSelector(state => state.username)
    if (userName) {
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
};

export default ProtectedRoutes;