import {
  StyledItem,
  StyledThumb,
  StyledBody,
  StyledCategory,
  StyledTitle,
  StyledExcerpt,
} from "./style";

const Item = ({ image, category, title, excerpt, path }) => {
  return (
    <StyledItem>
      <StyledThumb>
        <a href={path}>
          <img src={image} alt={title} />
        </a>
      </StyledThumb>
      <StyledBody>
        <StyledCategory href={path}>{category}</StyledCategory>
        <StyledTitle>
          <a href={path}>{title}</a>
        </StyledTitle>
        <StyledExcerpt>{excerpt}</StyledExcerpt>
      </StyledBody>
    </StyledItem>
  );
};

export default Item;
