// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
// 💡 Import the BrowserRouter
import { BrowserRouter } from "react-router-dom"; 

import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    {/* 🌟 THIS IS THE FIX 🌟 */}
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);