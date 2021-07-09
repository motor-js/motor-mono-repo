import { Spinner } from "..";
import { StyledLoader } from "./style";

const Preloader = () => {
  return (
    <StyledLoader>
      <Spinner size="lg" color="primary" />
    </StyledLoader>
  );
};

export default Preloader;
