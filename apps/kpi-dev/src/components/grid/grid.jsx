import { StyledContainer } from "./style";

export const Container = ({ className, ...props }) => {
  return <StyledContainer className={className} {...props} />;
};
