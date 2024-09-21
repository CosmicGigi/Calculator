import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { calculator, home, error, todolist } from "./routes";
import "./styles/index.scss";
import Preloader from "./components/Preloader/Preloader";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Todolist from "./pages/Todolist";

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
