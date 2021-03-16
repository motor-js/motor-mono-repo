export const LayoutReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LAYOUT":
      return {
        ...state,
        theme: action.payload,
      };
  }
};

export default LayoutReducer;
