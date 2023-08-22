import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { BlogContextProvider } from "./Context/BlogContext.jsx"
import { UrlContextProvider } from "./Context/UrlContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogContextProvider>
      <UrlContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UrlContextProvider>
    </BlogContextProvider>
  </React.StrictMode>
)
