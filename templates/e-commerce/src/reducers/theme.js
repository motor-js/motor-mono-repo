export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.payload
      };
  };
};

export default ThemeReducer;