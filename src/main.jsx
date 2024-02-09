import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home';
import TodoList from './Pages/TodoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Login from './Pages/Login';
import Registetion from './Pages/Registetion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/todoList',
        element: <TodoList />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registetion',
        element: <Registetion />
      }
    ]
  },
]);

const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <AuthProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
