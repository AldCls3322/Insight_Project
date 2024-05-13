import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

// import Logo from '../imgs/LogoTTT.svg';
import CentralesImg from '../imgs/sunglasses02.jpg';

const HomeTitle = ({}, ref) => {

    const [titleInfo, setTitleInfo] = useState([]);
    useEffect(() => {
        const db = collection(firestore, "title info")
        getDocs(db).then(response => {
            console.log(response.docs)
            console.log(titleInfo)
            const rstau = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setTitleInfo(rstau)
        }).catch(e => console.log(e.message))
            // .onSnapshot((snap) => { // use 'onSnapshot' to get all information of the firebase data in that instant, and repeates this function everytime the database data changes
            //     let document = []; // creates an array of objects that are our images images
            //     snap.forEach(doc => {
            //         document.push({...doc.data(), id: doc.id}) // adds the data and id of each image in the database and saves it on the previously created array called 'document'
            //     });
            //     setDocs(document); // places the document array onto the 'docs' created in line 5
            // });
    }, []) // the dependecies that changes are written inside the '[]', this case its 'collection'}
    

    return (
        <Container ref={ref}>
            <BckgrndImg />
            <Items>
                {/* <Icon src={Logo}/> */}
                <TextP>INSIGHT that empower the blind</TextP>
                {/* <TextP>Bienvenido!! {profile}</TextP>
                <OrderButton to="/">HOME</OrderButton> */}
            </Items>
        </Container>
    )
}

// export default HomeTitle

const forwardHomeTitle = forwardRef(HomeTitle)

export default forwardHomeTitle

const Container = styled.div`
    /* Positioning */
    //position: absolute;
    z-index: 8;

    /* Display & Box Model | Sizing */
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    background-color: ${({ theme }) => theme.body};

    /* Animations and Other */
`

const Items = styled.div`
    /* Positioning */
    //position: absolute;
    z-index: 9;
    bottom: 0;
    
    /* Display & Box Model | Sizing */
    display: flex;
    height: 100vh;
    max-height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    line-height: 1;
    margin-top: auto;
    margin-bottom: auto;

    /* Color, Background & Text */
    color: #000000;
    text-transform: uppercase;
    text-align: left;
    font-weight: lighter;
    color: ${({ theme }) => theme.text};
    background: linear-gradient(to top, ${({ theme }) => theme.body}, transparent);
    
    /* Animations and Other */
    filter: none;
    @media screen and (max-width: 700px){
        //background: radial-gradient(${({ theme }) => theme.body}, transparent);
    }
`

const IconLogoContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const Icon = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 10rem;

    /* Color, Background & Text */

    /* Animations and Other */
`

const Title = styled.div`
    /* Positioning */
    
    /* Display & Box Model | Sizing */
    margin-bottom: 1rem;
    box-shadow: 3px 5px #004B93;

    /* Color, Background & Text */
    //font-family: comfortaa;
    font-size: clamp(2.5rem, 10vw, 5rem);
    letter-spacing: 3px;

    /* Animations and Other */
`

const TextP = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-bottom: 3rem;

    /* Color, Background & Text */
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-family: monospace;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 1rem;
    }
`
const OrderButton = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding: 1rem 4rem;
    border: none;

    /* Color, Background & Text */
    background: #004B93; //#2b9348;
    color: #fff;
    font-size: 1.4rem;
    font-family: roboto;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: #2196F3; // #BFD200; // #80b918;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #24272B;
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem white);            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem white);            /* MDN */
    }
`

const BckgrndImg = styled.div`
    /* Positioning */
    position: absolute;
    top: 0;
    z-index: 1;

    /* Display & Box Model | Sizing */
    height: 100vh;
    width: 100%;

    /* Color, Background & Text */
    background: url(${CentralesImg}) center center;
    background-size: cover;
    background-attachment: fixed;

    /* Animations and Other */
    filter: blur(5px) grayscale(100%);
`