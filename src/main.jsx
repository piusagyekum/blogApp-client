import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./Context/BlogContext.jsx";
import { UrlContextProvider } from "./Context/UrlContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <UrlContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UrlContextProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
