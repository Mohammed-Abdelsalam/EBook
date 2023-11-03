import * as React from "react";
import "./App.css";
import LogIn from "./Pages/LogIn/LogIn";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ebook from "./Pages/Ebook/Ebook";
import Details from "./Pages/Details/Details";
// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  const [islogin, setLIslogin] = React.useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/ebook",
      // element: <Ebook />,
      element: islogin ? <Ebook /> : <LogIn x={setLIslogin} />,
    },
    {
      path: "/ebook/:id",
      element: <Details />,
    },
  ]);
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
