import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesContainer=styled.div`
height:700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

/* @media screen and (max-width: 960px){
    height: 900px;
} */
/* @media screen and (max-width: 480px){
    height: 1300px;
} */
`;
export const ServicesWrapper=styled.div`
width: 800px;
height: 300px;
overflow-x: auto;
margin: 0 auto;
display: flex;
grid-gap: 16px;
text-align: center;

@media screen and (max-width: 768px){
    /* grid-template-columns: 1fr 1fr; */
    padding: 0 20px;
    width: 600px;

}
@media screen and (max-width: 480px){
    /* grid-template-columns: 1fr; */
    display: grid;
    padding: 0 20px;
    width: 300px;
    height: 600px;
    overflow: scroll;
}
`;


export const ServicesCard=styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
border-radius: 10px;
height: 280px;
width: 250px;
padding: 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;   
    cursor: pointer;
}
`;

export const ServicesIcon=styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const ServicesH1=styled.h1`
color: #02c2f7;
font-size: 26px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;

@media screen and (max-width: 480px){
    margin-bottom: 15px;
}
`;

export const ServicesH2=styled(Link)`
font-size: 1rem;
margin-bottom: 10px;
text-decoration: none;
color: #000308;

&:hover{
    color: #02c2f7;
}
`;

export const ServicesP=styled.p`
font-size: 1rem;
text-align: center;
`;









