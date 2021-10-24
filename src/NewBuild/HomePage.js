import React from 'react'
import styled from "styled-components";
import Portfolio from './Portfolio';
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import ContactSection from "./ContactSection";
import VideoSection from "./VideoSection"
import FooterSection from "./FooterSection";

const HomePage = () => {
    return (
        <Container>
            <Wrapper>
            <Portfolio />
            <HeroSection />
            <ServiceSection />
            <VideoSection />
            <ContactSection />
            <FooterSection />
            </Wrapper>
        </Container>
    )
}

export default HomePage

const Container = styled.div``;
const Wrapper = styled.div``;