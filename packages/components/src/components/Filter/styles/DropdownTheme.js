import styled from 'styled-components'
//import { color, layout, space } from 'styled-system'
import { transparentize } from 'polished'
import { commonStyles } from '../../../styling/mixins';
import { Icon } from '../../Icons/styles/StyledIcon'

export const DropdownWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index:1000;
  background-color: white;
`

export const StyledDropdownItem = styled.div.attrs((props) => {

  let bkgClr;
  let txtClr;

  switch (props.selected) {
    case "S":
      bkgClr = '';
    //  txtClr = selectColor(props.theme.filter.color.selectedFont, props.theme);
      break;
    case "O":
      bkgClr = '';
   //   txtClr = props.theme.global.color.font;
      break;
    case "A":
      bkgClr = props.theme.colors.gray[100]
   //   txtClr = props.theme.global.color.font;
      break;
    case "X":
      bkgClr = props.theme.colors.gray[400]
   //   txtClr = props.theme.global.color.font;
      break;
    default:
      bkgClr = '';
   //   txtClr = props.theme.global.color.font;
      break;
  }

  return  {
    style: {
    backgroundColor: bkgClr
    }
  }
})`
width: 100%;
display: flex;
align-items: center;
&:hover {
  background-color: ${props => transparentize(0.92,props.theme.colors[props.colorTheme][500])};
}
cursor: pointer;
`

export const StyledList = styled.div`
  ${commonStyles};
  shadow: ${props => props.theme.shadows.input};
  margin-top: 10px;
  border-radius:  ${props => props.theme.filter.borderRadius};
`;

export const NoItems = styled.div`
  ${commonStyles};
  margin-top: 10px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  margin: 0px 5px;
  background: ${props => props.selected === 'S' | props.selected === 'L' ? props.theme.colors[props.colorTheme][500] : 'white'};
  border-radius: 4px;
  transition: all 150ms;
  border: 1px solid ${props => props.selected === 'S' | props.selected === 'L' ? props.theme.colors[props.colorTheme][500] :  props.theme.colors.gray[300] };

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.colors[props.colorTheme][400]};
  }

  ${Icon} {
    visibility: ${props => props.selected === 'S' | props.selected === 'L' ? 'visible' : 'hidden'}
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledDropdownText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`