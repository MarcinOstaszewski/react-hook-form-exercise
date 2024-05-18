import styled from 'styled-components';

interface IFlexProps {
  direction?: string;
  justifyContent?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  wrap?: string;
  grow?: number;
  width?: string;
  margin?: string;
}

export const Flex = styled('div')<IFlexProps>`
  display: flex;
  margin: 6px;
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ justifyItems }) => justifyItems && `justify-items: ${justifyItems}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap || 'wrap'}`};
  ${({ grow }) => grow && `flex-grow: ${grow}`};
  ${({ width }) => width && `width: ${width}`};
`;