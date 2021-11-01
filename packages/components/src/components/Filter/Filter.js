/* eslint-disable prefer-template */
import { useContext } from "react";
import StyledFilter from "./StyledFilter";
import { EngineContext } from "@motor-js/engine"
import { ThemeContext, theme } from "@motor-js/theme"
import PropTypes from "prop-types"

function Filter({ ...rest }) {
  const myTheme = useContext(ThemeContext) || theme;
  const { engine, engineError } = useContext(EngineContext);

  return (
    <StyledFilter
      engine={engine}
      theme={myTheme}
      engineError={engineError}
      {...rest}
    />
  );
}

Filter.PropTypes = {
  /** Dimension from Qlik Data Model to render in the Filter  */
  litData: PropTypes.array.isRequired,
  /** color theme */
  colorTheme: PropTypes.oneOf(['brand','gray','red','orange','yellow','green',
  'teal','pink','blue','cyan', 'purple',]),
  /** whether the filter accepts just a single selection */
  singleSelection: PropTypes.boolean,
  /** Page height from the hook  */
  pageHeight: PropTypes.number,
  /** number of selection items displayed in the filter until they are grouped */
  selectionLabelLimit: PropTypes.number,
  /** size of the filter */
  size: PropTypes.oneOf(['small','medium','large']),
  /** Input placeholder text */
  placeholder: PropTypes.string
};

Filter.defaultProps = {
  colorTheme: 'brand',
  singleSelection: false,
  pageHeight: 50,
  selectionLabelLimit: 5,
  size: 'medium',
  placeholder: 'Select..'
};

export default Filter;
