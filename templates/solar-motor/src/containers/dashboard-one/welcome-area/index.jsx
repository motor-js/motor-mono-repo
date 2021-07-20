import Breadcrumb from "../../../components/breadcrumb";
import {
  StyledWelcomeArea,
  StyledWelcomeLeft,
  StyledWelcomeRight,
} from "./style";
//import { useList } from "@motor-js/engine"
import Filter from "../../../components/filter";

const WelcomeArea = () => {

  /*
  const dimension = ['Company Name'];

  const {
    listData,
    motorListProps,
  } = useList({
    dimension,
  });
*/

  return (
    <>
      <StyledWelcomeArea>
        <StyledWelcomeLeft>
          <Breadcrumb
            prev={[{ text: "Group 1", link: "/" }]}
            title="Dashboard 1"
          />
        </StyledWelcomeLeft>
        <StyledWelcomeRight style={{ width: '300px' }}>
        { /*
        <Filter 
          listData={listData}
          motorListProps={motorListProps}
          isMulti={true}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          isSearchable={true}
          placeholder="Company Name.."
        />
        */ }
        </StyledWelcomeRight>
      </StyledWelcomeArea>
    </>
  );
};

export default WelcomeArea;
