import React, { useReducer, useCallback, useEffect } from "react";
import DigitButton from "./DigitButtons";
import OperationButton from "./OperationButtons";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const initialState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  overwrite: false,
  lastResult: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return { ...state, currentOperand: payload.digit, overwrite: false };
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand?.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (!state.currentOperand && !state.previousOperand) return state;
      if (!state.currentOperand) {
        return { ...state, operation: payload.operation };
      }
      if (!state.previousOperand) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return initialState;

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite)
        return { ...state, overwrite: false, currentOperand: null };
      if (!state.currentOperand) return state;
      return {
        ...state,
        currentOperand:
          state.currentOperand.length === 1
            ? null
            : state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (!state.operation || !state.currentOperand || !state.previousOperand)
        return state;
      return {
        ...state,
        overwrite: true,
        lastResult: evaluate(state),
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };

    default:
      return state;
  }
};

const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  switch (operation) {
    case "+":
      return (prev + current).toString();
    case "-":
      return (prev - current).toString();
    case "*":
      return (prev * current).toString();
    case "÷":
      return (prev / current).toString();
    default:
      return "";
  }
};

const formatOperand = (operand) => {
  if (!operand) return;
  const [integer, decimal] = operand.split(".");
  if (!decimal)
    return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(
      integer
    );
  return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(
    integer
  )}.${decimal}`;
};

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation, lastResult }, dispatch] =
    useReducer(reducer, initialState);

  const handleKeyDown = useCallback(
    (event) => {
      const { key } = event;
      if (/\d/.test(key)) {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: key } });
      } else if (
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
      ) {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: key === "/" ? "÷" : key },
        });
      } else if (key === "Enter" || key === "=") {
        dispatch({ type: ACTIONS.EVALUATE });
      } else if (key === "Backspace") {
        dispatch({ type: ACTIONS.DELETE_DIGIT });
      } else if (key === "Escape") {
        dispatch({ type: ACTIONS.CLEAR });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="calculator">
      <h1>Let me count for you</h1>
      <div className="calculator-grid">
        <div className="output">
          {}
          {lastResult && (
            <div className="last-result">{formatOperand(lastResult)}</div>
          )}

          {}
          <div className="current-calculation">
            {formatOperand(previousOperand)} {operation}{" "}
            {formatOperand(currentOperand)}
          </div>
        </div>

        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
