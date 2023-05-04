import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/users',
        element: <Users />
      },
    ]
  },

  {
    path: '*',
    element: <NotFound />
  },
])

export default router;
