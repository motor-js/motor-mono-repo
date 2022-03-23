import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import TicketReducer from "./TicketReducer";

const initialState = {
  ticket: '',
};

const TicketStore = ({ children }) => {
  const [state, dispatch] = useReducer(TicketReducer, initialState);

  return (
    <MotorTicketContext.Provider value={[state, dispatch]}>{children}</MotorTicketContext.Provider>
  );
};

export const MotorTicketContext = createContext(initialState);

TicketStore.propTypes = {
  children: PropTypes.node,
};

export default TicketStore;
