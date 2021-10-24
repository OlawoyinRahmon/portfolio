import React from 'react'
import styled from "styled-components";
import img from "./eni2.jpg"

const ServiceSection = () => {
    return (
        <Container>
            <Wrapper>
               <Card>
                    <Image src={img} />
                    <Content>
                    <Title>Environmental Sciences</Title>
                    <Desc>Environmental Science</Desc>
                   </Content>
               </Card>
                </Wrapper>
        </Container>
    )
}

export default ServiceSection

const Container = styled.div`
width: 100%;
height: 100%;
background-color: black;
color: white;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
`;
const Card = styled.div`
width: 300px;
height: 600px;
background-color: lightblue;
border: 3px solid gray;
border-radius: 5px;
margin: 10px;
transition: all 350ms;
transform: scale(1);

:hover {
    transform: scale(1.03);
    border: 3px solid black;
}
`;
const Image = styled.img`
width: 100%;
height: 60%;
object-fit: cover;
background-color: red;
border-radius: 5px 5px 0 0;
`;
const Content = styled.div``;
const Title = styled.div`
margin: 10px;
text-align: center;
font-size: 25px;
font-weight: bold;
text-transform: uppercase;
line-height: 1;
`;
const Desc = styled.div`
margin: 0 5px;
text-align: center;
`;