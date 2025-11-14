import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './Roots/Roots';
import Home from './Components/Home';
import FindPartners from './Pages/FindPartners';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './provider/AuthProvider';
import PartnerDetails from './Pages/PartnerDetails';
import ErrorPage from './Pages/ErrorPage';
import ProfilePage from './Pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"findPartners",
        Component:FindPartners,
        loader:()=>fetch(`http://localhost:3000/partner`)
      },
      {
        path:"partnerDetails/:id",
        Component:PartnerDetails,
        loader:()=>fetch(`http://localhost:3000/partner`)
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/register",
        Component:Register
      },
      {
        path:"/myProfile",
        Component: ProfilePage
      }
    ]

  },
  {
    path:"/error",
    Component:ErrorPage
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
 <RouterProvider router={router} />
    </AuthProvider>
   </StrictMode>,
)
