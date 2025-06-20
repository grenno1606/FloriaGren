import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductDetail } from "../pages/ProductDetail";
import { WishlistPage } from "../pages/WishlistPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";

function createRouterApp() {
  return createBrowserRouter([
    {
      Component: MainLayout,
      children: [
        { path: "/", Component: HomePage },
        { path: "/products", Component: ProductsPage },
        { path: "/product", Component: ProductDetail },
        { path: "/wishlist", Component: WishlistPage },
        { path: "/cart", Component: ShoppingCartPage },
      ],
    },
  ]);
}
export { createRouterApp };
