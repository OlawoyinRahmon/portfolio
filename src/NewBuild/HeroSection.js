import React from 'react'
import styled from "styled-components";
import img from "./enil.jpg"
const HeroSection = () => {
    return (
        <Container>
          <Wrapper>
              <Image src={img}/>
            <Content>
                <Title>Makanjuola Enilari</Title>
<Desc>
  {""}
  The term 'environment' is widely used and has a broad range of definitions, 
meanings and interpretations. What does the term 'environment' 
mean? In popular usage, for some people,
 the term 'environment' means, simply, 'nature': in other words, 
 the natural landscape together with all of its non-human features, 
 characteristics and processes.{""}
              </Desc>
               <Div>
                 <Button>View Cv</Button>
                 <Button>Content</Button>
               </Div>
                </Content>
              </Wrapper>  
        </Container>
    )
}

export default HeroSection

const Container = styled.div`
width: 100%;
min-height: 80vh;
height: 100%;
background-image: url("../assetRb.jpeg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
color: grey;
font-family: Poppins;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
padding-top: 40px;
background-color: #9D50F6;
background: linear-gradient(to left bottom, rgb(254, 243, 199), rgb(252, 211, 77), rgb(245, 158, 11)), 
`;
const Image = styled.img`
width: 350px;
height: 500px;
background-color: white;
object-fit: cover;
margin: 0 20px;
`;
const Content = styled.div`
margin: 0 20px;
width: 350px;
padding-bottom: 40px
;
`;


const Title = styled.div`
font-weight: bold;
font-size: 30px;
margin: 10px 0;
`;
const Desc = styled.div`
margin-bottom: 30px;
`;

const Div = styled.div`
margin-top: 80px;
`;

const Button = styled.div`
margin: 0 10px;
width: 120px;
height: 50px;
font-weight: bold;
border: 4px solid white;
outline: none;
border-radius: 3px;
background-color: transparent;
transition: all 350ms;
transform: scale(1);
color: black;
:hover {
cursor: pointer;
border: 4px solid brown;
transform: scale(1.05);
background-color: white;
color: brown;

}
`;