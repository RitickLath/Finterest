import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Explore from "./Components/Explore/Explore.jsx";
import Discover from "./Components/Discover/Discover.jsx";
import { Tools } from "./Components/Toolss/Tools.jsx";
import Insights from "./Components/Insights/Insights.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Explore />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
