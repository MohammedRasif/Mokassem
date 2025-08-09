import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Root/Roots.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
import Home from "./component/Home/Home.jsx";
import Inpormation from "./component/Pages/Inpormation.jsx";
import SearchResult from "./component/Pages/searchResult/SearchResult.jsx";
// import ChatWindow from './component/Pages/ChatWindow.jsx'; // Assuming ChatWindow is in this path

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/information",
        element: <Inpormation />,
        children: [
          {
            path: ":userId",
            // element: <ChatWindow />,
          },
          {
            path: "chatbot",
            element: <div>Chatbot Interface</div>, // Placeholder for chatbot
          },
        ],
      },
    ],
  },
  {
    path: "/search-result",
    element: <SearchResult />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
