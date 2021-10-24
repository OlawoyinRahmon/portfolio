import React from 'react';
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home"
//import PersonIcon from '@mui/icons-material/Person';
//import SettingsIcon from '@mui/icons-material/Settings';
import img from "./loftyinc.png"
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ContactsIcon from '@mui/icons-material/Contacts';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
//import {animateScroll as Scroll} from "react-scroll"

const Portfolio = () => {
    return (
            <Container>
            <Wrapper>
                <Logo src={img} 
                onClick={() => {
                 // Scroll.scrollToTop();
                }} />
                 <Navigation>
                    <Nav to= "home"
     smooth={true}
     offset={-100}
     duration={500}>
                   
                    <HomeIcon />
                  <span>Home</span>
                    </Nav>
                    <Nav>
                    <HomeRepairServiceIcon />
                  <span>Services</span>
                    </Nav>
                    <Nav
                    to="Video"
      smooth={true}
      offset={-100}
      duration={500}>
                   <VideoLibraryIcon />
                  <span>Video</span>
                  
                    <ContactsIcon />
                  <span>Contacts</span>
                    </Nav>
                    <Nav>
                    
                    </Nav>
                </Navigation>
            </Wrapper>
            </Container>
    )
}

export default Portfolio

const Container = styled.div`
width: 100%auto;
height: 80px;
background-color: brown;
color: white;
font-family: Poppins;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
display: flex;
align-items: center;
color: white;
`;

const Logo = styled.img`
width: 160px;
height: 100px;
object-fit: contain;
margin: 0 30PX;
color: white;
`;

const Navigation = styled.div`
display: flex;
flex: 1;
`;
const Nav = styled.div`
color: white;
align-items: center;
margin: 0 10px;

.MuisSvgIcon-root {
    font-size: 20px;
    margin-right: 5px;
    color: rgba(255, 255,255, 0.7);
    transition: all 400ms;
}

span {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;

    :after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 3px;
        width: 100px;
        background-color: white;
        opacity: 0;
        transition: all;
        transform-origin: center;
    }
}

:hover {
    cursor: pointer;

    .MuisSvgIcon-root {
        color: rgba(255, 255, 255, 1);
    }

    span {
        :after{
            opacity: 1;
            transform: scale(1);
        }
    }
}
`;
