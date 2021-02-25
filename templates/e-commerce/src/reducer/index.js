

const Reducer = (state, action) => {

  switch (action.type) {
    case 'SELECT':
      return {
        ...state,
        posts: action.payload
      };
      case 'DESELECT':
        return {
          ...state,
          posts: action.payload
        };
    case 'CLEAR_SELECTIONS':
      return {
        ...state,
        posts: action.payload
      };
      default:
        return state;
  };

}

export default Reducer;
