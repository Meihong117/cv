import styled, { css } from 'styled-components'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'
import {Link} from 'react-router-dom'

export const HeroSection=styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
`
export const HeroWrapper=styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
overflow: hidden;
position: relative;
`
export const HeroSlide=styled.div`
z-index:1;
width: 100%;
height: 100%;
`;

export const HeroSlider=styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before{
    content: '';
    position: absolute;
    z-index:2;
    width: 100vh;
    bottom: 0vh;
    left:0;
    overflow: hidden;
    opacity: 0.4;
    backgorund: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.6) 100%,)

}
`;

export const HeroImage=styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;

export const HeroContent=styled.div`
position: relative;
z-index:10;
display:flex;
flex-direction: column;
max-width:1600px;
width: calc(100% - 100px);
color:#fff;

h1{
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align:left;
    margin-bottom: 0.8rem;
}
h3{
    font-size: 25px;
    margin-bottom: 10px;
}
p{
    font-size: 18px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 1.2rem;
}
p::before{
    content: "# ";
}

@media screen and (max-width:768px){
    h1{
    font-size: 25px;
    }
    h3{
    font-size: 20px;
    }
    p{
    font-size: 15px;
    
    margin-bottom: 1.2rem;
}
}
`;

export const arrowButtons=css`
width:50px;
height: 50px;
color:black;
cursor: pointer;
background: #fff;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-selet: none;
transition: 0.3s; 

&:hover{
    background: #02c2f7;
    transform: scale(1.05);
}
`;

export const SliderButtons=styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

export const PrevArrow=styled(IoArrowBack)`
${arrowButtons}
`;

export const NextArrow=styled(IoArrowForward)`${arrowButtons}`;

export const Button=styled(Link)`
/* background: ${({primary})=>(primary?'#000d1a':'CD853F')}; */
white-space: nowrap;
outline:none;
border:none;
max-width:200px;
min-width:100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
justify-content: center;
align-items: center;
padding:${({big})=>(big? '16px 40px':'14px 24px')};
color: ${({primary})=>(primary?'#fff':'#000d1a')};
font-size: ${({big})=>(big?'20px':'14px')};

&:hover{
    transform:translateY(-2px);
};
`