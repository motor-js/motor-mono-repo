import styled from 'styled-components'

const StyledIcon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 1px;
  display: flex;
  height: 18px;
  width: 18px;
  stroke-linecap:round; 
  stroke-linejoin: join;
`

const ChevronDownIcon = () => {

  return (
    <StyledIcon viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9"></polyline>
    </StyledIcon>
  )
}

export default ChevronDownIcon
