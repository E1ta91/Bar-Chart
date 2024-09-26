import { useState } from 'react'
import BarChart from './components/barChart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './pages/dashBoard';
import Home from './pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
      children: [
        {
          path: "risk-evaluation",
          element: <BarChart />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    }

  ])
  

   return (
    <RouterProvider router={router} />
  )
  
}

export default App
