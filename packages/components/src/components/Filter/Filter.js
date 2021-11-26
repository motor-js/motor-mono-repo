/* eslint-disable prefer-template */
import { useContext } from "react";
import StyledFilter from "./StyledFilter";
import { EngineContext, AppProvider } from "@motor-js/engine"
import { ThemeContext, defaultTheme } from "@motor-js/theme"
import PropTypes from "prop-types"

function Filter({ ...rest }) {
  const myTheme = useContext(ThemeContext) || defaultTheme;
  const { engine, engineError } = useContext(EngineContext) || {}

  const theme =  useContext(ThemeContext)

  return (
    <StyledFilter
      engine={engine}
      theme={myTheme}
      engineError={engineError}
      {...rest}
    />
  );
}

Filter.propTypes = {
  /** Dimension from Qlik Data Model to render in the Filter  */
  listData: PropTypes.array,
  /** color theme */
  colorTheme: PropTypes.oneOf(['brand','gray','red','orange','yellow','green',
  'teal','pink','blue','cyan', 'purple',]),
  /** whether the filter accepts just a single selection */
  singleSelection: PropTypes.bool,
  /** Page height from the hook  */
  pageHeight: PropTypes.number,
  /** number of selection items displayed in the filter until they are grouped */
  selectionLabelLimit: PropTypes.number,
  /** size of the filter */
  size: PropTypes.oneOf(['small','medium','large']),
  /** Input placeholder text */
  placeholder: PropTypes.string,
  /** on selections change */
  onSelectionChange: PropTypes.func
};

Filter.defaultProps = {
  colorTheme: 'brand',
  singleSelection: false,
  pageHeight: 50,
  selectionLabelLimit: 5,
  size: 'medium',
  placeholder: 'Select..',
  onSelectionChange: () => {}
};

export default Filter;
