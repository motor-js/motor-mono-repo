/* eslint-disable prefer-template */
import { useContext } from "react";
import StyledFilter from "./StyledFilter";
import { EngineContext } from "@motor-js/engine"
import { ThemeContext, theme } from "@motor-js/theme"

function Filter({ ...rest }) {
  const myTheme = useContext(ThemeContext) || theme;
  const { engine, engineError } = useContext(EngineContext);

  return (
    <StyledFilter
      engine={engine}
      theme={myTheme}
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
