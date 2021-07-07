import {
  StyledIcon,
  StyledItemMiddle,
  StyledTitle,
  StyledSubtitle,
  StyledItemEnd,
  StyledCoin,
  StyledUsd,
} from "./style";

const Item = ({ color, icon, title, subtitle, coin, usd }) => {
  return (
    <>
      <StyledIcon bg={color}>
        <i className={icon} />
      </StyledIcon>
      <StyledItemMiddle>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledItemMiddle>
      <StyledItemEnd>
        <StyledCoin>{coin}</StyledCoin>
        <StyledUsd>{usd}</StyledUsd>
      </StyledItemEnd>
    </>
  );
};

export default Item;
