export const NavReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        nav: action.payload
      };
  }
};

export default NavReducer;
