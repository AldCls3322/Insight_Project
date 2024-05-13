import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';
import imageBorrego from '../imgs/black01.jpg'

function HomeVoluntariados({goToContactSection}, ref) {
  return (
    <Container ref={ref}>
        <TitleContainer>
            <ShortBar/>
            <Title>OUR TEAM</Title>
            <LongBar/>
        </TitleContainer>
        <InfoContainer>
            <InfoImageContainer>
                <h2>MEET<br/>OUR TEAM</h2>
                {/* <InfoImage src={imageBorrego}/> */}
            </InfoImageContainer>
            <InfoDesc>
                <InfoDescTitle>Our Story</InfoDescTitle>
                <InfoDescText>We are in the search to remove any disadvantage our society might have.<br/> 
                <br/>
                We can make a change by using technology to our advantage and help arradicate any injust treatment or any disadvantage people might face.<br/>
                As we discover the ability to place high quality technology on small devices, we realize we can implement smar glasses to aid visually impaired citizens.<br/>
                <br/>
                Please feel free to contact us:</InfoDescText>
                <ButtonContainer>
                    <BtnContacto onClick={goToContactSection}>CONTACT US</BtnContacto>
                </ButtonContainer>
            </InfoDesc>
        </InfoContainer>
    </Container>
  )
}

const forwardHomeVoluntariados = forwardRef(HomeVoluntariados)

export default forwardHomeVoluntariados

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: block;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Color, Background & Text */
    border-top: 1px solid ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.text};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 150vh;
        // overflow: scroll;
    }
`

const TitleContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    height: 10vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    //margin-bottom: 30px;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        margin-bottom: 0px;
    }
`

const ShortBar = styled.div`
    /* Positioning */
    marging-left: auto;

    /* Display & Box Model | Sizing */
    width: 30%;
    height: 3px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 30%;
    }
`

const Title = styled.div`
    /* Positioning */
    padding-left: 1%;
    padding-right: 1%;

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 3rem;
    font-weight: 500;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 1.7rem;
        font-family: comfortaa;
    }
`

const LongBar = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 30%;
    height: 3px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 30%;
    }
`

const InfoContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 95%;
    height: 80vh;
    margin: auto;

    /* Color, Background & Text */
    //background-color: black;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        display: block;
        margin: 0;
    }
`

const InfoDesc = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 50%;
    height: 100%;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 3%;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 1000px){
        width: 70%;
        margin-right: 15%;
        margin-left: 15%;
    }
    @media screen and (max-width: 700px){
        width: 90%;
        margin-right: 5%;
        margin-left: 5%;
    }
`

const InfoDescTitle = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-top: 20px;
    padding-bottom: 20px;

    /* Color, Background & Text */
    font-size: 3rem;
    font-family: verdana, Sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.color2};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 2rem;
        text-align: center;
    }
`

const InfoDescText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    text-align: justify;

    /* Color, Background & Text */
    font-family: serif, Times;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.lessTranspText};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 65vh;
        overflow: scroll;
        //text-overflow: ellipsis;
        font-size: 1.1rem;
        margin-bottom: 5%;
    }
`

const ButtonContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const BtnContacto = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding: 1rem 4rem;
    border: none;

    /* Color, Background & Text */
    background: ${( { theme } ) => theme.color5};
    color: ${( { theme } ) => theme.body};
    font-size: 1.4rem;
    font-family: monospace;
    text-decoration: none;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${( { theme } ) => theme.body};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${( { theme } ) => theme.color5};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${( { theme } ) => theme.text});
    }
`

const InfoImageContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: grid;
    box-shadow: 0 3px 6px rgba(0,0,0,0.4);
    grid-template-columns: max-content auto;
    grid-template-rows: auto max-content;
    
    width: 400px;
    height: 300px;
    margin-top: 100px;
    margin-bottom: auto;

    /* Color, Background & Text */
    background: #333 url(${imageBorrego}) center;
    background-size: cover;
    color: white;
    padding: 2rem;

    /* Animations and Other */
    &:before,
    &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid white;
    }
    &:before {
    grid-row: 1 / 2;
    border-right: none;
    border-bottom: none;
    } 
    &:after {
    grid-row: 1 / span 2;
    border-left: none;
    }

    h2{
        text-align: left;
        margin: 1rem 1rem -.5rem 0;
        font-family: 'Pragati Narrow', sans-serif;
        font-size: 2rem;
        max-width: 100%;
    }

    @media screen and (max-width: 700px){
        margin-top: 0px;
        width: 320px;
        height: 240px;
    }
`