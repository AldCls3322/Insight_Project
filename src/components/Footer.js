import React from 'react'
import style from 'styled-components';
import { FaFacebookSquare } from "react-icons/fa";
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <Container>
            <CopyRighted>@2024 Insight Glasses - All rights reserved!</CopyRighted>
            <SocialMedias>
                {/* <FacebookIcon/> */}
            </SocialMedias>
            <Creator>created by: Aldo Celis, Julio Gordillo, Emmanuel Patiño, Santiago del Bosque </Creator>
        </Container>
    )
}

export default Footer

const Container = style.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    border-top: 1px solid ${({ theme }) => theme.color9};

    background-color: ${({ theme }) => theme.color5};
    color: ${({ theme }) => theme.body};

    @media screen and (max-width: 700px){
        width: 100vw;
        justify-content: space-between;
    }
    @media screen and (max-height: 540px){
        height: 70px;
    }
`

const CopyRighted = style.div`
    position: absolute;
    left: 0;

    padding-left: 20px;

    font-size: 0.6rem;
`

const SocialMedias = style.div`
    /* Positioning */
    position: absolute;
    left: 2vw;

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 2rem;

    /* Animations and Other */
    transition: all 0.3s ease-in-out;
    left: ${ ({isopen}) => (isopen ? '15%': '2vw') };

    cursor: pointer;
    p {
        font-size: 5rem;
        transform: translate(-175%, 100%)
    }
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
    @media screen and (max-width: 700px){
        position: relative;
        //left: 2px;
    }
`

const FacebookIcon = style(FaFacebookSquare)`
`

const Creator = style.div`
    position: absolute;
    top: 0;
    right: 0;
    
    padding: 20px;

    font-size: 0.5rem;
`
