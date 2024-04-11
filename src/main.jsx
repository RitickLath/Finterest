// React Hooks imports

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

// Normal component import
import Layout from "./Layout.jsx";
import Explore from "./Components/Explore/Explore.jsx";
import Insights from "./Components/Insights/Insights.jsx";
import StockMarket from "./Components/StockMarket/StockMarket.jsx";
// lazy loading of tools

const MF = lazy(() => import("./Components/Toolss/Calculators/MF.jsx"));
const Gratuity = lazy(() =>
  import("./Components/Toolss/Calculators/Gratuity.jsx")
);
const Inflation = lazy(() =>
  import("./Components/Toolss/Calculators/Inflation.jsx")
);
const CI = lazy(() => import("./Components/Toolss/Calculators/CI.jsx"));
const FD = lazy(() => import("./Components/Toolss/Calculators/FD.jsx"));
const SIP = lazy(() => import("./Components/Toolss/Calculators/Sip.jsx"));
const SI = lazy(() => import("./Components/Toolss/Calculators/SI.jsx"));
const PPF = lazy(() => import("./Components/Toolss/Calculators/PPF.jsx"));
const EMI = lazy(() => import("./Components/Toolss/Calculators/EMI.jsx"));
const Sip = lazy(() => import("./Components/Toolss/Calculators/Sip.jsx"));

// Lazy Loaded component

const Tools = lazy(() => import("./Components/Toolss/Tools.jsx"));
const Discover = lazy(() => import("./Components/Discover/Discover.jsx"));

// import StockMarket from "./Components/StockMarket/StockMarket.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Explore />,
        children: [
          {
            path: "",
            element: <Explore />,
            index: true,
          },
          {
            path: ":id",
            element: <StockMarket />,
          },
        ],
      },
      {
        path: "/explore",
        children: [
          {
            path: "",
            element: <Explore />,
          },
          {
            path: ":id",
            element: <StockMarket />,
          },
        ],
      },
      {
        path: "/discover",
        element: (
          <Suspense fallback={<div></div>}>
            <Discover />
          </Suspense>
        ),
      },
      {
        path: "/tools",

        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<div></div>}>
                <Tools />
              </Suspense>
            ),
          },

          {
            path: "sip",
            element: (
              <Suspense fallback={<div></div>}>
                <Sip />
              </Suspense>
            ),
          },
          {
            path: "mf",
            element: (
              <Suspense fallback={<div></div>}>
                <MF />
              </Suspense>
            ),
          },
          {
            path: "ppf",
            element: (
              <Suspense fallback={<div></div>}>
                <PPF />
              </Suspense>
            ),
          },
          {
            path: "fd",
            element: (
              <Suspense fallback={<div></div>}>
                <FD />
              </Suspense>
            ),
          },
          {
            path: "emi",
            element: (
              <Suspense fallback={<div></div>}>
                <EMI />
              </Suspense>
            ),
          },
          {
            path: "si",
            element: (
              <Suspense fallback={<div></div>}>
                <SI />
              </Suspense>
            ),
          },
          {
            path: "ci",
            element: (
              <Suspense fallback={<div></div>}>
                <CI />
              </Suspense>
            ),
          },
          {
            path: "gratuity",
            element: (
              <Suspense fallback={<div></div>}>
                <Gratuity />
              </Suspense>
            ),
          },
          {
            path: "inflation",
            element: (
              <Suspense fallback={<div></div>}>
                <Inflation />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/insights",
        element: (
          <Suspense fallback={<div></div>}>
            <Insights />
          </Suspense>
        ),
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
