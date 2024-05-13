import './App.css';
import React, {useState, useEffect, createRef, useLayoutEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Switch, useLocation } from 'react-router-dom';
import styled,  { ThemeProvider }  from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles } from "./Themes";
import { firestore } from './firebase/Firebase';
import { useWindowScroll } from "react-use";

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ContactTitle from './components/ContactTitle';
import ContactInfo from './components/ContactInfo';

import HomeTitle from './components/HomeTitle';
import HomeAbout from './components/HomeAbout';
import WhiteImageTitle from './components/WhiteImageTitle';
import HomeVoluntariados from './components/HomeVoluntariados';
import VideoPlayer from './components/VideoPlayer';
import ComingSoon from './components/ComingSoon';

function App() {
  const [isopen,setIsopen] = useState(false)
  const navToggle = () => {
    setIsopen(!isopen)
    // console.log('confirmed it was clicked')
    // console.log(navToggle)
    // console.log(isopen)
  }
  const navOff = () => {
    setIsopen(false)
  }

  const [visible, setVisibility] = useState(false);
  useEffect(() => {
    if (isopen){
      setVisibility(true);
    }
    else{
      setVisibility(false);
    }
  }, [isopen]);

  const ContactSection = createRef();
  const goToContactSection = async() => {
    await new Promise((r) => setTimeout (r, 500))
    .then(window.scrollTo( {top: ContactSection.current.offsetTop - 90, behavior: "smooth"}))
    .then(navOff);
  }

  const HomeAboutSection = createRef();
  const goToHomeAboutSection = async() => {
    await new Promise((r) => setTimeout (r, 500))
    .then(window.scrollTo( {top: HomeAboutSection.current.offsetTop - 90, behavior: "smooth"}))
    .then(navOff);
  }

  const HomeVoluntariadosSection = createRef();
  const goToHomeVoluntariadosSection = async() => {
    await new Promise((r) => setTimeout (r, 500))
    .then(window.scrollTo( {top: HomeVoluntariadosSection.current.offsetTop - 90, behavior: "smooth"}))
    .then(navOff);
  }

  const OrderSection = createRef();
  const goToOrderSection = async() => {
    await new Promise((r) => setTimeout (r, 500))
    .then(window.scrollTo( {top: OrderSection.current.offsetTop - 90, behavior: "smooth"}))
    .then(navOff);
  }

  const CoverSection = createRef();
  const goToCoverSection = async() => {
    await new Promise((r) => setTimeout (r, 500))
    .then(window.scrollTo( {top: CoverSection.current.offsetTop - 100, behavior: "smooth"}))
    .then(navOff);
  }

  const { y: pageYOffset } = useWindowScroll();
  const [headerscrolled, setHeaderscrolled] = useState(false);
  useEffect(() => {
    if (pageYOffset > 480){
      setHeaderscrolled(true);
    }
    else{
      setHeaderscrolled(false);
    }
  }, [pageYOffset]);

  // const { pathname } = useLocation();
  // useEffect(() => {
  //   new Promise((r) => setTimeout(r, 10)).then(window.scrollTo({top: 0, behavior: "smooth"})).then(navOff);
  // }, [pathname]);

  return (
    <Router>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <div className="App">
        <Navbar navToggle={navToggle} isopen={isopen} visibility={visible} goToContactSection={goToContactSection} goToHomeAboutSection={goToHomeAboutSection} goToHomeVoluntariadosSection={goToHomeVoluntariadosSection} goToCoverSection={goToCoverSection} goToOrderSection={goToOrderSection}/>
        <Header navToggle={navToggle} isopen={isopen} headerscrolled={headerscrolled}/>
        
        <Routes>
          <Route path="/contact" element={[
            <Footer/>
          ]}/>
          <Route path="/" element={[
            <HomeTitle ref={CoverSection}/>,
            <HomeAbout ref={HomeAboutSection}/>,
            <WhiteImageTitle/>,
            <HomeVoluntariados ref={HomeVoluntariadosSection} goToContactSection={goToContactSection}/>,
            <VideoPlayer/>,
            <ContactTitle ref={OrderSection}/>,
            <ComingSoon/>,
            <ContactInfo ref={ContactSection}/>,
            <Footer/>
          ]}/>
        </Routes>

      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;

  /* Positioning */

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */

  /* IDEAS: 
  https://slenderbodi.es/tour
  https://www.rewind.ai/pendant
  https://www.dotlumen.com/
  https://vanoss.3blackdot.com/
  https://www.bose.de/de_de/shop_all/frames/frames.html
  */

  /* DOUBTS
  https://stackoverflow.com/questions/52532543/uncaught-typeerror-cannot-read-property-offsettop-of-null
  */
