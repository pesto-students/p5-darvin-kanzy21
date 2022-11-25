import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import React from 'react';

export const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
};