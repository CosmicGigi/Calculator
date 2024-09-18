import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Todolist from "./pages/Todolist";
import Error from "./pages/Error";
import { calculator, dashboard, error, todolist } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={dashboard} element={<Dashboard />} />
        <Route path={calculator} element={<Calculator />} />
        <Route path={todolist} element={<Todolist />} />
        <Route path={error} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
