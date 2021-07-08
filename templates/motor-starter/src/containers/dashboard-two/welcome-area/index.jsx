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
            title="Dashboard 2"
            wcText="Welcome"
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
