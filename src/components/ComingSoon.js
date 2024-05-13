import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components'

const ComingSoon = ({}, ref) => {
  return (
    <Container ref={ref}>
      Coming Soon...
    </Container>
  )
}

const forwardComingSoon = forwardRef(ComingSoon)

export default forwardComingSoon

const Container = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Color, Background & Text */
  font-weight: lighter;
  font-size: 5rem;
  border-top: 1px solid ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text};

  /* Animations and Other */
  &:hover {
    transition: 0.3s ease-out;
    cursor: pointer;
    color: ${( { theme } ) => theme.color5};
    transition: 0.3s ease-in-out;
}
`