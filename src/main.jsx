import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Explore from "./Components/Explore/Explore.jsx";
import Discover from "./Components/Discover/Discover.jsx";
import { Tools } from "./Components/Toolss/Tools.jsx";
import Insights from "./Components/Insights/Insights.jsx";
import SIP from "./Components/Toolss/Calculators/Sip.jsx";
import MF from "./Components/Toolss/Calculators/MF.jsx";
import Gratuity from "./Components/Toolss/Calculators/Gratuity.jsx";
import Inflation from "./Components/Toolss/Calculators/Inflation.jsx";
import CI from "./Components/Toolss/Calculators/CI.jsx";
import FD from "./Components/Toolss/Calculators/FD.jsx";
import SI from "./Components/Toolss/Calculators/SI.jsx";
import PPF from "./Components/Toolss/Calculators/PPF.jsx";
import EMI from "./Components/Toolss/Calculators/EMI.jsx";
import Sip from "./Components/Toolss/Calculators/Sip.jsx";

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
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element: <Tools />,
          },

          {
            path: "sip",
            element: <Sip />,
          },
          {
            path: "mf",
            element: <MF />,
          },
          {
            path: "ppf",
            element: <PPF />,
          },
          {
            path: "fd",
            element: <FD />,
          },
          {
            path: "emi",
            element: <EMI />,
          },
          {
            path: "si",
            element: <SI />,
          },
          {
            path: "ci",
            element: <CI />,
          },
          {
            path: "gratuity",
            element: <Gratuity />,
          },
          {
            path: "inflation",
            element: <Inflation />,
          },
        ],
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/signin",
        element: <Insights />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
