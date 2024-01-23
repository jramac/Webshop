//Import react router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import "./index.css";
import "./app.scss"
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () =>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ],
  },
]);
//App
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
