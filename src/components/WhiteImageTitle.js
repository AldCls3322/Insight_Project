import style from 'styled-components';
import bckgrnd from '../imgs/black02.jpg';

const WhiteImageTitle = () => {
    return (
        <Container>
            <TextContainer>
                <TitleText>A marvel of modern engineering</TitleText>
                <Text>Our Glasses -GlasSee- take self-driving technology and scale it down to something that can be worn on the head.</Text>
            </TextContainer>
            <BckgrndImage/>
        </Container>
    );
}

export default WhiteImageTitle

const Container = style.div`
    /* Positioning */
    position: relative;

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    /* Color, Background & Text */
    background: transparent;
    color: ${({ theme }) => theme.text};

    /* Animations and Other */
`

const TextContainer = style.div`
    /* Positioning */
    z-index: 8;

    /* Display & Box Model | Sizing */
    margin-top: 50vh;
    margin-bottom: auto;

    /* Color, Background & Text */
    font-family: Garamond;

    /* Animations and Other */
`

const TitleText = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    margin-bottom: 3%;

    /* Color, Background & Text */
    
    /* Animations and Other */
    font-size: 2.2rem;
    font-weight: bolder;
`

const Text = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 1.2rem;

    /* Animations and Other */
`

const BckgrndImage = style.div`
    /* Positioning */
    position: absolute;
    z-index: 1;

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100%;

    /* Color, Background & Text */
    background: url(${bckgrnd}) center center;
    background-size: cover;
    background-attachment: fixed;

    /* Animations and Other */
`