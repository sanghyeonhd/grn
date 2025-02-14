
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddressList from "./pages/AddressList";
import AddressForm from "./pages/AddressForm";
import Checkout from "./pages/Checkout";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/address/list",
    element: <AddressList />,
  },
  {
    path: "/address/new",
    element: <AddressForm />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
