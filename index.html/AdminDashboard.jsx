// src/components/AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
// import AdminNavbar from './AdminNavbar';

const AdminDashboard = ({ children }) => {
    const links = [
        // { name: 'Dashboard', path: '/admin' },
        { name: 'Add Products', path: '/admin/products' },
        { name: 'View Products', path: '/admin/viewproduct' },
        { name: 'Orders', path: '/admin/orders' },
        { name: 'Customers', path: '/admin/customers' },
    ];

    return (
        <AdminNavbar/>
        // <div style={{ display: 'flex' }}>
        //     <Sidebar links={links} />
        //     <div style={{ flexGrow: 1 }}>
        //         {/* <AdminNavbar title="Admin Dashboard" /> */}
        //         <div style={{ padding: 20 }}>
        //             {children}
        //         </div>
        //     </div>
        // </div>
    );
};

export default AdminDashboard;
