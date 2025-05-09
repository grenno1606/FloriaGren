import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";

function createRouterApp() {
  return createBrowserRouter([
    {
      Component: MainLayout,
      children: [
        { path: "/", Component: HomePage },
        { path: "/products", Component: ProductsPage },
      ],
    },
  ]);
}
export { createRouterApp };
