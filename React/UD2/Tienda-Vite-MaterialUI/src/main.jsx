import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Principal from "../paginas/Principal.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "../paginas/Home.jsx";
import Blog from "./Blog.jsx";
import Myapp from "./MyApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <Blog /> */}
      {console.log("Root", "Renderezado root")}
      <Myapp />
      {/* <Principal /> */}
    </BrowserRouter>
  </StrictMode>
);
