import React from 'react'
import styled from "styled-components";
import eni5 from "./eni5.mp4"

const VideoSection = () => {
    
    
    return (
        <Container id="video">
            <Wrapper>
                <Video src={eni5} controls loops autoPlay muted/>
            </Wrapper>
        </Container>
    )
}

export default VideoSection

const Container = styled.div`
width: 100%;
min-height: 80vh;
height: 100%;
background-color: blue;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
`;
const Video = styled.video`
width: 80%;
height: 50%;
background-color: black;
color: white;
`;