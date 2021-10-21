/* eslint-disable prefer-template */
import { useContext } from "react";
import StyledFilter from "./StyledFilter";
import { EngineContext } from "@motor-js/engine"

function Filter({ ...rest }) {
  //const myTheme = useContext(ThemeContext) || defaultTheme;
  const { engine, engineError } = useContext(EngineContext);

  return (
    <StyledFilter
      engine={engine}
      engineError={engineError}
      //listData={listData}
      {...rest}
    />
  );
}

Filter.propTypes = {
};

Filter.defaultProps = {
};

export default Filter;
