import React from 'react'
import styled from "styled-components";
import eni5 from "./eni5.mp4"

const VideoSection = () => {
    
    
    return (
        <Container id="video">
            <Wrapper>
            <Create>
            <Video src={eni5} controls loops autoPlay muted/>
            </Create>
            </Wrapper>
        </Container>
    )
}

export default VideoSection

const Container = styled.div`
width: 100%;
min-height: 80vh;
height: 100%;
background-color: red;
color: white;
`;
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
background: linear-gradient(to left, rgb(110, 231, 183), rgb(59, 130, 246), rgb(147, 51, 234));
`;
const Video = styled.video`
width: 50%;
/* flex: 1; */
justify-content: center;
background-color: black;
color: white;
object-fit: cover;
border-radius: 10px;
margin: 30px auto;
`;
const Create = styled.div`
width: 40%;
height: 40%;
display: flex;
align-items: center;
`;