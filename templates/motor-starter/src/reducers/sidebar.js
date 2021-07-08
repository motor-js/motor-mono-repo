const SidebarReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar: action.payload
      };
  }
};

export default SidebarReducer;
