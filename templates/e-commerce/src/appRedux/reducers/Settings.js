import {SWITCH_LANGUAGE} from "constants/ActionTypes";
import {
  LAYOUT_TYPE,
  LAYOUT_TYPE_FULL,
  NAV_STYLE,
  NAV_STYLE_ABOVE_HEADER,
  THEME_COLOR,
  THEME_TYPE,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_BELOW_HEADER,
  THEME_TYPE_LITE
} from "constants/ThemeSetting";

const initialSettings = {
  navStyle: NAV_STYLE_BELOW_HEADER,
  layoutType: LAYOUT_TYPE_FULL,
  themeType: THEME_TYPE_LITE,
  themeColor: THEME_COLOR,

  isDirectionRTL: false,
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {

    case THEME_TYPE:
      return {
        ...state,
        themeType: action.themeType
      };
    case THEME_COLOR:
      console.log("yes",action.themeColor);
      return {
        ...state,
        themeColor: action.themeColor
      };

    case NAV_STYLE:
      return {
        ...state,
        navStyle: action.navStyle
      };
    case LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.layoutType
      };

    default:
      return state;
  }
};

export default settings;
