import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./Roots/Roots";
import Home from "./Components/Home";
import FindPartners from "./Pages/FindPartners";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./provider/AuthProvider";
import PartnerDetails from "./Pages/PartnerDetails";
import ErrorPage from "./Pages/ErrorPage";
import ProfilePage from "./Pages/ProfilePage";
import CreatePartnerProfile from "./Pages/CreatePartnerProfile";
import MyConnection from "./Pages/MyConnection";
import PrivateRoutes from "./provider/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "findPartners",
        Component: FindPartners,
        loader: () =>
          fetch(`https://study-mates-server-site.vercel.app/partner`),
      },
      {
        path: "partnerDetails/:id",
        element: (
          <PrivateRoutes>
            <PartnerDetails></PartnerDetails>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(`https://study-mates-server-site.vercel.app/partner`),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myProfile",
        Component: ProfilePage,
      },
      {
        path: "/createPartnerProfile",
        Component: CreatePartnerProfile,
      },
      {
        path: "/myConnection",
        Component: MyConnection,
        loader: () =>
          fetch("https://study-mates-server-site.vercel.app/connection"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
