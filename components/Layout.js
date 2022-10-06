import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="w-full min-h-screen">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
