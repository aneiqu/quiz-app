import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Homescreen from "./components/Homescreen/index.tsx";
import ProtectedQuiz from "./components/quiz/protected.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <Routes>
          <Route path='/' Component={Homescreen}></Route>
          <Route path='/quiz/*' Component={ProtectedQuiz}></Route>
        </Routes>
      </App>
    </HashRouter>
  </React.StrictMode>
);
