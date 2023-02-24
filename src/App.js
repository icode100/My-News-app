import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import React from "react";

const router = createBrowserRouter([
  { path: "/", element: <Home key="general" category="general" /> },
  { path: "/business", element: <Home key="business" category="business" /> },
  {
    path: "/entertainment",
    element: <Home key="entertainment" category="entertainment" />,
  },
  { path: "/general", element: <Home key="general" category="general" /> },
  { path: "/health", element: <Home key="health" category="health" /> },
  { path: "/science", element: <Home key="science" category="science" /> },
  { path: "/sports", element: <Home key="sports" category="sports" /> },
  {
    path: "/technology",
    element: <Home key="technology" category="technology" />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
