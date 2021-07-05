import {
  StyledItem,
  StyledBullet,
  StyledTitle,
  StyledCoin,
  StyledRate,
} from "./style";

const Item = ({ color, title, coin, rate, status }) => {
  return (
    <StyledItem>
      <StyledBullet bg={color} />
      <StyledTitle>{title}</StyledTitle>
      <StyledCoin>{coin}</StyledCoin>
      <StyledRate $status={status}>
        {rate} <i className={`fa fa-arrow-${status}`} />
      </StyledRate>
    </StyledItem>
  );
};

export default Item;
