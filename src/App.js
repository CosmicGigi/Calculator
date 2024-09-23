import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { calculator } from "./routes";
import "./styles/index.scss";
import Preloader from "./components/Preloader/Preloader";
import Calculator from "./pages/Calculator";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <Routes>
          <Route path={calculator} element={<Calculator />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
