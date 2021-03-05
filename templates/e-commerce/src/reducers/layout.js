export const LayoutReducer = (state, action) => {
  switch (action.type) {
    case 'SINGLE_PAGE':
      return {
        ...state,
        layout: action.payload
      };
  };
};

export default LayoutReducer;