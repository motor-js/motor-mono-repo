import { Spinner } from "..";
import { StyledLoader } from "./style";

const PreloaderChart = () => {
  return (
    <StyledLoader>
      <Spinner size="sm" color="primary" />
    </StyledLoader>
  );
};

export default PreloaderChart;
