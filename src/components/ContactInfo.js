import React, { useState, useEffect, forwardRef } from 'react'
import style from 'styled-components';
import {MdPhone, MdLocationPin, MdEmail} from 'react-icons/md';
// import Map from './Map';
// import credentials from './credential';

function ContactInfo({}, ref) {
    return (
        <Container ref={ref}>
            <CardWhite>
                <Title>CONTACT US:</Title>
                <Bar/>
                <Contents>
                    <MailSender>
                        <form>
                            <input type="text" className="form-address" placeholder="Your Email Address" name="email"/>
                            <input type="text" className="form-subject" placeholder="Subject" name="subject"/>
                            <textarea className="form-message" id="" rows="15" placeholder="Your Message" name="message"/>
                            <input type="submit" className="btn-snd-email" value="SEND"/>
                        </form>
                    </MailSender>
                </Contents>
            </CardWhite>
            <Card>
                insight@gmail.com
            </Card>
        </Container>
    )
}

const forwardContactInfo = forwardRef(ContactInfo)

export default forwardContactInfo

const Container = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 750px;
    box-sizing: border-box;
    text-align: left;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.body};

    /* Animations and Other */
    @media only screen and (max-width: 400px){
        display: block  ;
    }
`

const CardWhite = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 50%;
    padding: 1%;
    padding-top: 5%;
    box-sizing: border-box;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color1};
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
    .subCard {
        display: flex;
        padding-top: 7%;
    }
    @media only screen and (max-width: 400px){
        width: 100%;
        height: auto;
        margin-bottom: 30px;
    }
`

const Card = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Color, Background & Text */
    font-size: 4rem;

    /* Animations and Other */
    @media screen and (max-width: 1000px){
        font-size: 2.5rem;
    }
    @media screen and (max-width: 700px){
        font-size: 2rem;
    }
    @media only screen and (max-width: 400px){
        font-size: 30px;
        width: 100%;
        height: auto;
    }
`

const Title = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-bottom: 2%;

    /* Color, Background & Text */
    font-size: 1.4rem;
    font-weight: bold;

    /* Animations and Other */
`

const Bar = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 4px;
    width: 30%;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
`

const Contents = style.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-top: 2%;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.transpText};
    font-size: 0.8rem;
    span {
        font-weight: bold;
    }

    /* Animations and Other */
`

const MailSender = style.div`
    /* Positioning */
    position: relative;


    /* Display & Box Model | Sizing */
    padding: 2%;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text};

    /* Animations and Other */
    input, textarea {
        width: 100%;
        box-sizing: border-box;
        margin-top: 5%;
        padding: 2%;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.color9};

        background-color:  ${({ theme }) => theme.color1};
        color: ${({ theme }) => theme.darkColor2};
        font-weight: bold;

        ::placeholder { /* works for Chrome, Safaru, Opera, Firefox*/
            color: ${({ theme }) => theme.darkColor2};
            opacity: 1; /* for Firefox */
        }
    }

    .form-message {
        margin-bottom: 45px;
    }

    .btn-snd-email {
        position: absolute;
        bottom: 0;
        right: 0;

        border: none;
        border-radius: 10px;
        width: 30%;

        background-color: ${({ theme }) => theme.color9};
        color: ${({ theme }) => theme.text};
        
        box-shadow: -1px 1px 0 1px ${({ theme }) => theme.color8};
    }

    .btn-snd-email:active {
        border: none;
        translate(-5px, 5px); /* CHECK HOW TO SIMPLE ANIMATE IT */
    }
`
