import React from "react";
import Header from "../components/Header";
import Mycalculator from "../components/Mycalculator";

const Calculator = () => {
  return (
    <div className="calculator">
      <Header />
      <h1>Calculatrice</h1>
      <Mycalculator />
    </div>
  );
};

export default Calculator;
