import Breadcrumb from "../../../components/breadcrumb";
import {
  StyledWelcomeArea,
  StyledWelcomeLeft,
  StyledWelcomeRight,
} from "./style";

const WelcomeArea = () => {

  return (
    <>
      <StyledWelcomeArea>
        <StyledWelcomeLeft>
          <Breadcrumb
            prev={[{ text: "Group 1", link: "/" }]}
            title="Dashboard 1"
            wcText="Welcome"
          />
        </StyledWelcomeLeft>
        <StyledWelcomeRight>RHS</StyledWelcomeRight>
      </StyledWelcomeArea>
    </>
  );
};

export default WelcomeArea;
