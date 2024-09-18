import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import FreeBook from './components/FreeBook';
import Home from './pages/Home';
import { Routes, Route, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Course from './pages/Course';
import AppLayout from './components/AppLayout';
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [authUserInfo, setAuthUserInfo] = useAuth();
console.log(authUserInfo)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'course',
          element: authUserInfo ? <Course authUserInfo={authUserInfo} /> : <Navigate to="/signup" />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
