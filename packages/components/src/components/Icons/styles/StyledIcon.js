import styled from 'styled-components'

export const Icon = styled.svg`
  stroke-width: ${props => props.strokeWidth};
  stroke: ${props => props.strokeColor};
  height: ${props => props.height};
  width: ${props => props.width};
  viewbox: ${props => props.viewbox};
  stroke-linejoin: join;
  stroke-linecap: round; 
  fill: none;
  display: flex;
  fill: none;
  display: flex;
`