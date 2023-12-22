import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/PublicRoutes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
  <AuthProvider>

        <Toaster position="top-center" reverseOrder={false}  />
        <RouterProvider router={Router} />
  </AuthProvider>
   
    </ThemeProvider>
  </React.StrictMode>
);
