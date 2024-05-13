import React, { useEffect, useRef, forwardRef } from 'react'
import styled from 'styled-components'
import coverImg from '../imgs/stairs-blind-person.jpg'
import coverVid from '../imgs/walking-sun.mp4'

function HomeAbout({}, ref) {
    // const myUserRef = useRef();
    // const videoRef = useRef();
    // useEffect( () => {
    //     if (myUserRef.current) return;
    //     myUserRef.current = window.myUser;
    //     myUserRef.current.videoPlayer(videoRef.current, {
    //         cloud_name: 'aldoc'
    //     })
    // }, []);

  return (
    <Container ref={ref}>
        <TitleContainer>
            <ShortBar/>
            <Title>OUR PRODUCT</Title>
            <LongBar/>
        </TitleContainer>
        <ImageContainer>
            <BoxImage/>
            <InfoImage src={coverVid} autoPlay loop muted/>
        </ImageContainer>
        <InfoSec>
            <InfoDesc>
                <InfoDescTitle>Introducing INSIGHT</InfoDescTitle>
                <TitleBar/>
                <InfoDescText>INSIGHT is our new sunglasses that can detect newby obstacles and notify the user about them. <br/> 
                <br/>
                Introducing our stylish sunglasses featuring built-in image recognition for enhanced safety. Using advanced algorithms, these shades detect obstacles in real-time, offering a crucial safety net in bustling environments. <br/>
                <br/>   
                Ideal for those with visual impairments or anyone seeking added awareness, the discreet sensors identify pedestrians, vehicles, and hazards, providing intuitive alerts for proactive navigation. Combining fashion with function, our smart sunglasses redefine eyewear, seamlessly integrating cutting-edge technology to prioritize safety without compromising style. <br/>
                Step confidently into the future with eyewear that merges innovation and fashion seamlessly.</InfoDescText>
            </InfoDesc>
        </InfoSec>
    </Container>
  )
}

const forwardHomeAbout = forwardRef(HomeAbout)

export default forwardHomeAbout

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: block;
    width: 100%;
    height: 150vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Color, Background & Text */
    border-bottom: 1px solid ${({ theme }) => theme.text};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: auto;
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
    margin-bottom: 30px;

    /* Color, Background & Text */

    /* Animations and Other */
    // @media screen and (max-width: 700px){
    //     margin-bottom: 30px;
    // }
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

const ImageContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 90%;
    height: 50vh;
    margin: auto;
    padding-bottom: 3%;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 300px;
        padding-bottom: 0;
    }
`

const BoxImage = styled.div`
    /* Positioning */
    position: absolute;
    z-index: 2;

    /* Display & Box Model | Sizing */
    height: 55vh;
    width: 700px;
    border-radius: 40px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color9};
    box-shadow: 0 0 5px ${({ theme }) => theme.color6};

    /* Animations and Other */
    @media screen and (max-width: 1350px){
        width: 700px;
        border-radius: 20px;
    }
    @media screen and (max-width: 700px){
        width: 100vw;
    }
    @media screen and (max-width: 400px){
        width: 370px;
        height: 290px;
    }
    @media screen and (max-height: 540px){
        height: 70px;
    }
`

const InfoImage = styled.video`
    /* Positioning */
    z-index: 4;

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 640px;
    object-fit: cover;

    /* Color, Background & Text */

    /* Animations and Other */
    // @media screen and (max-width: 700px){
    //     width: 640px;
    //     height: 480px;
    // }
    @media screen and (max-width: 400px){
        width: 320px;
        height: 240px;
    }
`

const InfoSec = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 95%;
    height: 80vh;
    margin: auto;

    /* Color, Background & Text */

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
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 25%;
    margin-left: 25%;

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

    /* Color, Background & Text */
    font-size: 3rem;
    font-family: Greycliff;
    font-weight: 600;
    color: ${({ theme }) => theme.color2};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 2rem;
        text-align: center;
    }
`

const TitleBar = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 80%;
    height: 1px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
`

const InfoDescText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    text-align: center;
    padding-top: 20px;

    /* Color, Background & Text */
    font-family: Greycliff;
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
