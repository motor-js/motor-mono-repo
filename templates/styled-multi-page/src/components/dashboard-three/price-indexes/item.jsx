import { Media, MediaBody } from "../../../components";
import {
  StyledIcon,
  StyledTitle,
  StyledSubtitle,
  StyledRight,
  StyledCoin,
  StyledRate,
} from "./style";

const Item = ({
  color,
  opacity,
  icon,
  title,
  subtitle,
  coin,
  rate,
  status,
}) => {
  return (
    <>
      <Media>
        <StyledIcon bg={color} opacity={opacity}>
          <i className={icon} />
        </StyledIcon>
        <MediaBody ml="15px">
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
