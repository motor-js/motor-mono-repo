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
            prev={[{ text: "Dashboard", link: "/" }]}
            title="Website Analytics"
            wcText="Welcome To Dashboard"
          />
        </StyledWelcomeLeft>
        <StyledWelcomeRight>
          Hi
        </StyledWelcomeRight>
      </StyledWelcomeArea>
    </>
  );
};

export default WelcomeArea;
