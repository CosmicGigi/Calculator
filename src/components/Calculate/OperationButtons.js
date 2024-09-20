import React from "react";
import PropTypes from "prop-types";
import { ACTIONS } from "../Calculate/Mycalculator";

const OperationButton = React.memo(({ dispatch, operation }) => {
  const handleClick = React.useCallback(() => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
  }, [dispatch, operation]);

  return <button onClick={handleClick}>{operation}</button>;
});

OperationButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
};

OperationButton.displayName = "OperationButton";

export default OperationButton;
