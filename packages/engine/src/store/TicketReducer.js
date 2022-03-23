const TicketReducer = (state, action) => {
  switch (action.type) {
    case "SET_TICKET":
      return {
        ...state,
        ticket: action.payload,
      };
    default:
      return state;
  }
};

export default TicketReducer;