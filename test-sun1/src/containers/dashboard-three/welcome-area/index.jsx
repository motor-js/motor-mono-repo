import Breadcrumb from "../../../components/breadcrumb";
import {
  StyledWelcomeArea,
  StyledWelcomeLeft,
  StyledWelcomeRight,
} from "./style";
import { Button } from "../../../components";

const WelcomeArea = () => {

  return (
    <>
      <StyledWelcomeArea>
        <StyledWelcomeLeft>
          <Breadcrumb
            prev={[{ text: "Group 2", link: "/dashboard-three" }]}
            title="Dashboard 3"
          />
        </StyledWelcomeLeft>
        <StyledWelcomeRight>
          <Button mr={2}>Button</Button>
          <Button ml={2}>Button</Button>
        </StyledWelcomeRight>
      </StyledWelcomeArea>
    </>
  );
};

export default WelcomeArea;
