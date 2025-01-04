import Login from "@/pages/login";
import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import Tasks from "@/pages/tasks";
import User from "@/pages/user";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "users",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
