import {SWITCH_LANGUAGE} from "constants/ActionTypes";
import {
  LAYOUT_TYPE,
  LAYOUT_TYPE_FULL,
  NAV_STYLE,
  NAV_STYLE_ABOVE_HEADER,
  THEME_COLOR,
  THEME_TYPE,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  THEME_TYPE_LITE
} from "constants/ThemeSetting";

const initialSettings = {
  navStyle: NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  layoutType: LAYOUT_TYPE_FULL,
  themeType: THEME_TYPE_LITE,
  themeColor: THEME_COLOR,

  isDirectionRTL: false,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
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

    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload,

      };
    default:
      return state;
  }
};

export default settings;
