import React, { useState, useEffect, forwardRef } from 'react'
import style from 'styled-components';

import TitleImg from '../imgs/crosswalk01.jpg';

const ContactTitle = ({}, ref) => {
    return (
        <Container ref={ref}>
            <TitleName>ORDER BELOW!!</TitleName>
            <BckgrndImage/>
        </Container>
    )
}

const forwardContactTitle = forwardRef(ContactTitle)

export default forwardContactTitle

const Container = style.div`
    /* Positioning */
    position: relative;

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;

    /* Color, Background & Text */
    background: transparent;
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
`

const TitleName = style.div`
    /* Positioning */
    z-index: 8;

    /* Display & Box Model | Sizing */
    width: 100%;

    /* Color, Background & Text */
    background-image: linear-gradient(to right, transparent,${({ theme }) => theme.color3},transparent);

    /* Animations and Other */
    font-size: 4rem;
    font-weight: bolder;
`

const BckgrndImage = style.div`
    /* Positioning */
    position: absolute;
    z-index: 1;

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100%;

    /* Color, Background & Text */
    background: url(${TitleImg}) center center;
    background-size: cover;
    background-attachment: fixed;

    /* Animations and Other */
    //filter: blur(5px) grayscale(100%) brightness(120%);
`
