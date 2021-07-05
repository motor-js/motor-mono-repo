import { Media, MediaBody } from "../../../components";

import {
  StyledIcon,
  StyledTitle,
  StyledSubtitle,
  StyledRight,
  StyledCoin,
  StyledRate,
} from "./style";

const Item = ({ status, icon: Icon, title, subtitle, coin, rate }) => {
  return (
    <>
      <Media alignItems="center">
        <StyledIcon $status={status}>
          <Icon width="20px" height="20px" />
        </StyledIcon>
        <MediaBody ml={[null, null, "15px"]}>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </MediaBody>
      </Media>
      <StyledRight>
        <StyledCoin>{coin}</StyledCoin>
        <StyledRate $status={status}>{rate}</StyledRate>
      </StyledRight>
    </>
  );
};

export default Item;
