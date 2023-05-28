import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./UserManagement/login'));
const SignUp = lazy(() => import("./UserManagement/createUser"));
const ListUsers = lazy(() => import("./UserManagement/listUsers"));
const Header = lazy(() => import("./global/header"));

const Admin = lazy(() => import("./pages/admin"));
const Student = lazy(() => import("./pages/student"));
const Professor = lazy(() => import("./pages/professor"));

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/users" element={<ListUsers />} />
                    <Route path='/header' element={<Header />} />
                    <Route path='/stud' element={<Student />} />
                    <Route path='/prof' element={<Professor />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path="/*" element={<Login />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
