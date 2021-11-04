const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRIMARY_APP_SELECTIONS":
      return {
        ...state,
        primaryAppSelections: action.payload,
      };
    case "SET_PSECONDARY_APP_SELECTIONS":
      return {
        ...state,
        secondaryAppSelections: state.posts.concat(action.payload),
      };
    // case "REMOVE_POST":
    //   return {
    //     ...state,
    //     posts: state.posts.filter((post) => post.id !== action.payload),
    //   };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
