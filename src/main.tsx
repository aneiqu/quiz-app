import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import quizHTML from "./components/quizes/quizHTML/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <App />
      </div>
      <Routes>
        <Route path='/HTML' Component={quizHTML}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
