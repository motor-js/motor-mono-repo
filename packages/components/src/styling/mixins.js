import { css } from '@motor-js/theme'

export const commonStyles = css`
  border: ${props => props.theme.filter.border};
  font-size:  ${props => props.theme.filter.size[props.size].fontSize};
  font-family: ${props => props.theme.fontFamily};
  position: relative;
  width: ${({width}) => `${width}px`};
`
export const unselected = css`
  background-color: ${props => props.selected === 'A' ? props.theme.colors.gray100 : ''};
`
