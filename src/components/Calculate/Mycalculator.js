import React, { useReducer } from "react";
import DigitButton from "../Calculate/DigitButton";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    default:
      return state;
  }
}

const Calculator = () => {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand}
            {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <button>+</button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <button>-</button>
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button>*</button>
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two">=</button>
      </div>
    </div>
  );
};

export default Calculator;
