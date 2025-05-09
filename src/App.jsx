import { createRouterApp } from "./router/createRouterApp";
import { RouterProvider } from "react-router";

function App() {
  const router = createRouterApp();
  return <RouterProvider router={router} />;
}

export default App;
