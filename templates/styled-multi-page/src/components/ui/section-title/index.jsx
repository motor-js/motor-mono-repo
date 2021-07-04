import { StyledTitle, StyledDesc } from "./style";

const SectionTitle = ({ title, desc, descProps, titleProps }) => {
  return (
    <>
      <StyledTitle $hasDesc={Boolean(desc)} {...titleProps}>
        {title}
      </StyledTitle>
      {desc && (
        <StyledDesc {...descProps} dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </>
  );
};

export default SectionTitle;
