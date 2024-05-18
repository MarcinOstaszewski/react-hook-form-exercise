import styled from 'styled-components';

interface IFlexProps {
  direction?: string;
  justifycontent?: string;
  justifyitems?: string;
  aligncontent?: string;
  alignitems?: string;
  wrap?: string;
  grow?: number;
  width?: string;
  margin?: string;
}

export const Flex = styled('div')<IFlexProps>`
  display: flex;
  margin: 6px;
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ justifycontent }) =>
    justifycontent && `justify-content: ${justifycontent}`};
  ${({ justifyitems }) => justifyitems && `justify-items: ${justifyitems}`};
  ${({ aligncontent }) => aligncontent && `align-content: ${aligncontent}`};
  ${({ alignitems }) => alignitems && `align-items: ${alignitems}`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap || 'wrap'}`};
  ${({ grow }) => grow && `flex-grow: ${grow}`};
  ${({ width }) => width && `width: ${width}`};
`;