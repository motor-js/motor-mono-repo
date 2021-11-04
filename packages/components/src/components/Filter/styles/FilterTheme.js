 /** @jsxImportSource theme-ui */ 
import styled from 'styled-components'
import { color, layout, space } from 'styled-system'
import { transparentize } from 'polished';

export const FilterWrapper = styled.div`
  ${space};
  ${color};
  font-size: ${props => props.theme.filter.size[props.size].fontSize};
`;

export const FilterInputWrapper = styled.div`
  padding: 2px 6px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const FilterInputOutline = styled.div`
  display: flex;
  flexDirection: row;
  border-radius: ${props => props.theme.filter.borderRadius};
  border: ${props => props.theme.filter.border};
  &:hover {
    border:  ${props => props.theme.filter.borderHovered};
  }

  &:focus-within {
    border: 1px solid ${props => props.theme.colors[props.colorTheme][500]};
    outline: none;
  }
`

export const InputContainer = styled.div`
  display: grid;
  flex: 1 1 0%;
  flex-wrap: wrap;

`

export const StyledFilterInput = styled.input`
  border: none;
  border-radius: ${props => props.theme.filter.borderRadius};
  font-size: ${props => props.theme.filter.size[props.size].fontSize};
  margin: 2px;
  outline: 0px !important;
  width: 100%;
  padding: 4px 0px;
`

export const FilterTagWrapper = styled.div` 

`

export const SelectTag = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 4px;
  margin: 2px;
  font-size: ${props => props.theme.filter.size[props.size].fontSize};
  border-radius:  ${props => props.theme.filter.borderRadius};
  background-color:  ${props => props.theme.colors.gray[200]};
  color: ${props => props.theme.colors.black};
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledSingleSelect = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 8px;
  margin: 2px;
  font-size: ${props => props.theme.filter.size[props.size].fontSize};
  color: ${props => props.theme.colors.black};
  white-space: nowrap;
`

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  border: none;
  background-color: unset;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.black};
  border-radius: 0px 5px 5px 0px;
  padding: 0px 4px 0px 2px;

  &:hover {
    background-color: ${props => transparentize(0.3, props.theme.colors[props.colorTheme][500])};
  }
`

export const SelectTagText = styled.span`
  padding: 2px 8px 2px 2px;
  max-width: 100px;
  overflow: hidden;
  font-size: 85%;
  white-space: nowrap;
  text-overflow:ellipsis;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px
`