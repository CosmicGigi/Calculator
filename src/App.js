import React, { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { calculator, home, error, todolist } from "./routes";
import "./styles/index.scss";
import Preloader from "./components/Preloader/Preloader";

const Calculator = lazy(() => import("./pages/Calculator"));
const Todolist = lazy(() => import("./pages/Todolist"));
const Error = lazy(() => import("./pages/Error"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={calculator} element={<Calculator />} />
          <Route path={todolist} element={<Todolist />} />
          <Route path={error} element={<Error />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
