import React from 'react'
import styled from "styled-components";
import img from "./loftyinc.png"
 import FacebookIcon from "@mui/icons-material/Facebook";
 import TwitterIcon from '@mui/icons-material/Twitter';
 
const FooterSection = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
               <Title>Community</Title>
                <Sub>
                    <List>Project</List>
                    <List>Project</List>
                    <List>Project</List>
                    <List>Project</List>
                </Sub>
                </Section>
                <Section>
               <Title>Service</Title>
                <Sub>
                    <List>Project</List>
                    <List>Project</List>
                    <List>Project</List>
                    <List>Project</List>
                </Sub>
                </Section>
                <Section>
               <Title>Interest</Title>
                <Sub>
                    <List>Project</List>
                    <List>Project</List>
                    <List>Project</List>
                    <List>Project</List>
                </Sub>
                </Section>
            </Wrapper>
            <Last><Image src={img} /><Text>This platform is developed by OLR-commsolutions</Text>
            <Social>
                <F 
                href="https://https://https://www.facebook.com/menilari"
                rel=""
                target="_black"><FacebookIcon />
                <TwitterIcon />
                </F>
            </Social>
            </Last>
        </Container>
    )
}

export default FooterSection

const Container = styled.div`
width: 100%;
min-height: 50vh;
height: 100%;
background-color: brown;
color: white;
padding-top: 24px;
display: flex;
flex-direction: column;
`;
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex: 1;
`;
const Sub = styled.div`

`;
const List = styled.div`
margin: 4px 0;
:hover {
    cursor: pointer;
    text-decoration: underline;
}
`;
const Title = styled.div`
margin-left: 30px;
margin-bottom: 30px;
font-size: 25px;
font-weight: bold;
`;
const Section = styled.div`
width: 500px;
display: flex;
flex-direction: column;
`;
const Last = styled.div`
width: 100%;
height: 80px;
background-color: white;
color: black;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Image = styled.img`
width: 10%;
height: 50px;
background-color: gray;
`;

const Text = styled.div`
`;

const Social = styled.div`
width: 200px;
height: 60px;
object-fit: contain;
margin-right: 20px;
`;

const F = styled.a`
color: black;
font-weight: bold;

.MuisSvgIcon-root {
    font-size: 60px;
    color: #0357d6;
}
`;