import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import AdminDashboard from '../layout/AdminDashboard';
import AdminLayout from '../layout/AdminLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import User from '../pages/User';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin/" element={<AdminLayout />}>
                        <Route index element={<User />}></Route>
                        <Route path='/admin/profile' element={<Profile />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Router