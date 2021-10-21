import styled from 'styled-components'
//import { color, layout, space } from 'styled-system'
import {transparentize } from 'polished'
import { commonStyles, unselected } from '../../../styling/mixins';
import { Icon } from '../../Icons/styles/StyledIcon'

export const StyledDropdownItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background-color:  ${props => transparentize(0.92,props.theme.colors[props.colorTheme][500])};
  }
`;

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
  background: ${props => props.selected === 'S' ? props.theme.colors[props.colorTheme][500] : 'white'};
  border-radius: 4px;
  transition: all 150ms;
  border: 1px solid ${props => props.selected === 'S' ? props.theme.colors.brand[500] : props.theme.filter.border};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.colors.brand[400]};
  }

  ${Icon} {
    visibility: ${props => props.selected === 'S' ? 'visible' : 'hidden'}
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledDropdownText = styled.span`

`