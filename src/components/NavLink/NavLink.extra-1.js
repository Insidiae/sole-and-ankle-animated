import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  /*
    Text fade-down effect
  */
  overflow: hidden;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
`;

const MainText = styled(Text)``;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: var(--color-primary);
  font-weight: ${WEIGHTS.bold};

  opacity: 0;
  transform: scale(1.1) translateX(-10px) translateY(-10px) rotate(-4deg);
  transition: scale 500ms, transform 500ms, opacity 500ms;
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      opacity: 1;
      transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
      transition: scale 250ms, transform 250ms, opacity 250ms;
    }
  }
`;

export default NavLink;
