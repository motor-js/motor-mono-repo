import { StyledText } from "./style";

const Text = ({ as, className, children, ...restProps }) => {
  return (
    <StyledText as={as} className={className} {...restProps}>
      {children}
    </StyledText>
  );
};

export default Text;
