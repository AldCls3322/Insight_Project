import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { MdHelp } from 'react-icons/md';
import { TopBar as div} from 'react'; 

const Navbar = ({isopen, visibility, goToContactSection, goToHomeAboutSection, goToHomeVoluntariadosSection, goToCoverSection, goToOrderSection}) => {
    //console.log(visibility)
    return (
        visibility ?
        <Container isOpen={isopen}>
            <Menu>
                <SbLink to="/" onClick={goToCoverSection}>home</SbLink>
                <SbLink to="/" onClick={goToHomeAboutSection}>about</SbLink>
                <SbLink to="/" onClick={goToHomeVoluntariadosSection}>story</SbLink>
                <SbLink to="/" onClick={goToOrderSection}>order now</SbLink>
                <SbLink to="/" onClick={goToContactSection}>contact</SbLink>
            </Menu>
        </Container>
        :
        <Container isOpen={isopen}>
            <Menu>
                <SbLink to="/" onClick={goToCoverSection}>home</SbLink>
                <SbLink to="/" onClick={goToHomeAboutSection}>about</SbLink>
                <SbLink to="/" onClick={goToHomeVoluntariadosSection}>story</SbLink>
                <SbLink to="/" onClick={goToOrderSection}>order now</SbLink>
                <SbLink to="/" onClick={goToContactSection}>contact</SbLink>
            </Menu>
        </Container>
    )
}

export default Navbar

const Container = styled.aside`
    /* Positioning */
    position: fixed;
    z-index: 10;
    top: 0;

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100%;

    display: grid;
    align-items: center;

    /* Color, Background & Text */
    background: ${ ({theme}) => theme.color99 };

    /* Animations and Other */
    transition: 0.2s ease-in-out;
    top: ${ ({isOpen}) => (isOpen ? '0': '-1000px') };
    font-family: sans-serif; // futura-pt-bold;

    @media screen and (max-width: 700px){
        width: 100%;
        height: 100vh;
        background: rgba(36, 39, 43, 0.95);
        overflow: hidden;
        // position: -webkit-sticky; // makes the header be always atop no matter if you scroll
        // position: sticky;
    }
`

const Menu = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: grid;
    text-align: center;
    grid-template-column: 1fr;
    grid-template-rows: repeat(5, 100px);

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        grid-template-rows: repeat(5,80px);
    }
    transition: all 0.3s;
`

const SbLink = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text};
    font-size: 3rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;

    /* Animations and Other */
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.text};
        transition: all 0.2s;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});
    }
`

const SbHelpLinkContainer = styled(Link)`
    /* Positioning */
    position: absolute;
    bottom: 0;

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4%;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;

    /* Animations and Other */
    &:hover{
        color: ${({ theme }) => theme.text};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`

const IconHelp = styled(MdHelp)`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text};

    /* Animations and Other */
    &:hover{
        color: ${({ theme }) => theme.text};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`