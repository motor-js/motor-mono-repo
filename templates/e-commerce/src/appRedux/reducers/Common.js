import {TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "constants/ActionTypes";

const INIT_STATE = {
  error: "",
  loading: false,
  message: '',
  navCollapsed: true,
  width: window.innerWidth,
  pathname: '/',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE': {
      return {
        ...state,
        pathname: action.payload.location.pathname,
        navCollapsed: false
      }
    }
    case WINDOW_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    case TOGGLE_COLLAPSED_NAV: {
      return {
        ...state,
        navCollapsed: action.navCollapsed
      }
    }
    default:
      return state;
  }
}
