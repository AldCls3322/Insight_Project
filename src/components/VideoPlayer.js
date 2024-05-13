import React from 'react'
import styled from 'styled-components'
import video from '../imgs/walking-sun.mp4'

const VideoPlayer = () => {
  return (
    <Container>
        <VideoBlackBox/>
        <VideoContainer src={video} autoPlay loop muted />
        <TextContainer>
            <TitleText>See beyond boundaries, stride with confidence</TitleText>
            <Text>Embrace the future where safety and fashion unite, turning each step into a testament to your bold and clear vision.</Text>
        </TextContainer>    
    </Container>
  )
}

export default VideoPlayer

const Container = styled.div`
    /* Positioning */
    position: relative;

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100vh;

    /* Color, Background & Text */

    /* Animations and Other */
`

const VideoContainer = styled.video`
    /* Positioning */
    //z-index: 2;

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* Color, Background & Text */

    /* Animations and Other */
`

const VideoBlackBox = styled.div`
    /* Positioning */
    position: absolute;
    //z-index: 3;   

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100%;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.body50};

    /* Animations and Other */
`

const TextContainer = styled.div`
    /* Positioning */
    position: absolute;
    //z-index: 7;
    top: 0;

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text}

    /* Animations and Other */
`

const TitleText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    margin-bottom: 3%;

    /* Color, Background & Text */
    
    /* Animations and Other */
    font-size: 2rem;
    font-weight: bolder;
`

const Text = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 1.2rem;

    /* Animations and Other */
`