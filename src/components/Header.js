import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDensityMedium, MdClose } from 'react-icons/md';
// import { GrClose } from 'react-icons/gr';
import Logo from '../imgs/INSIGHT_logo.png';

const Header = ({navToggle, isopen, headerscrolled}) => {
    return (
        isopen ? 
        <Container isOpen={isopen} headerscrolled={headerscrolled}>
            <CloseIcon onClick={navToggle} isopen={isopen}/>
        </Container>
        :
        <Container isOpen={isopen} headerscrolled={headerscrolled}>
            <IconGird onClick={navToggle} isopen={isopen}/>
            <TitleContainer to="/">
                <IconLogo src={Logo}/>
                <SbLinkCoffeeName>INSIGHT</SbLinkCoffeeName>
            </TitleContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    /* Positioning */
    position: -webkit-sticky; // makes the header be always atop no matter if you scroll
    position: sticky;
    top: 0;
    z-index: 11;

    /* Display & Box Model */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10vh;

    /* Color, Background & Text */
    background: ${ ({isOpen, headerscrolled, theme}) => (isOpen ? 'transparent': (headerscrolled ? theme.body98: 'transparent')) };
    border-bottom: ${ ({isOpen}) => (isOpen ? 'none': '1px solid white') };
    transition: background-color 0.25s ease-out;
    color: ${({ theme }) => theme.text};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 100vw;
        justify-content: space-between;
    }
    @media screen and (max-height: 540px){
        height: 70px;
    }
`

const IconGird = styled(MdDensityMedium)`
    /* Positioning */
    //position: absolute;
    //left: 2vw;

    /* Display & Box Model | Sizing */
    margin-left: 2vw;

    /* Color, Background & Text */
    font-size: 2rem;

    /* Animations and Other */
    transition: all 0.3s ease-in-out;
    //visibility: ${ ({isopen}) => (isopen ? 'hidden': 'visible') };
    visibility: visible;

    cursor: pointer;
    p {
        font-size: 5rem;
        transform: translate(-175%, 100%)
    }
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.text});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.text});            /* MDN */
    }
    @media screen and (max-width: 700px){
        position: relative;
        //left: 2px;
    }
`

const CloseIcon = styled(MdClose)`
    /* Positioning */
    //position: absolute;

    /* Display & Box Model | Sizing */
    margin-left: 2vw;

    /* Color, Background & Text */
    font-size: 2rem;

    /* Animations and Other */
    transition: all 0.3s ease-in-out;
    //visibility: ${ ({isOpen}) => (isOpen ? 'visible' : 'hidden') };
    visibility: visible;

    cursor: pointer;
    p {
        font-size: 5rem;
        transform: translate(-175%, 100%)
    }
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.text});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.text});            /* MDN */
    }
    @media screen and (max-width: 700px){
        position: relative;
        //left: 2px;
    }
`

const TitleContainer = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;

    /* Color, Background & Text */
    text-decoration: none;
    color: white;

    /* Animations and Other */
    &:visited, &:link {
        text-decoration: none;
    }

    :active, :focus {
        color: ${({ theme }) => theme.color2}; /* liver chestnut = #9E7A4D ;  */
    }

    :hover {
        position: relative;
        // width: 100%;
        // background-color: #C9A469;

        content: "";
        cursor: pointer;
        color: ${({ theme }) => theme.text};
        transition: .25s linear;
    }
`

const IconLogo = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 50px;

    /* Color, Background & Text */

    /* Animations and Other */
`

const SbLinkCoffeeName = styled.div`
    /* Positioning */
    //position: absolute;

    /* Display & Box Model | Sizing */
    display: flex;
    transform: scale(1.5);    
    margin-left: 40px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-family: monospace; /*futura-pt-bold*/

    /* Animations and Other */
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.text});            /* FF~35 */
    }
    @media screen and (max-width: 700px){
        display: none;
    }
`