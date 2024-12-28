import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Products from "../Component/Products";
import ProductDetails from "../Pages/ProductDetails";
import Product from "../Component/Product";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Pages/Dashboard";
import CartList from "../Component/CartList";
import WishListCard from "../Component/WishListCard";
import Statistics from "../Component/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("/products.json"),
            element: <Products></Products>,
          },
          {
            path: "/category/:category",
            loader: () => fetch("/products.json"),
            element: <Products></Products>,
          },
        ],
      },
      {
        path : "/statistics",
        element : <Statistics></Statistics>,
        loader : () => fetch("/products.json")
      },
      {
        path: "/product_details/:productsId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <CartList></CartList>,
          },

          {
            path: "wishlist",
            element: <WishListCard></WishListCard>,
          },
        ],
      },
    ],
  },
]);

export default router;
