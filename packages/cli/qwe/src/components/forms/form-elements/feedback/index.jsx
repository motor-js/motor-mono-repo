import { StyledFeedback } from "./style";

const Feedback = ({ state, showState, showErrorOnly, children }) => {
  return (
    <StyledFeedback
      $state={state}
      $showState={showState}
      $showErrorOnly={showErrorOnly}
    >
      {children}
    </StyledFeedback>
  );
};

export default Feedback;
