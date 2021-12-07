import styled from "styled-components";
import {Link} from 'react-router-dom'


export const Container=styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
display: felx;
justify-content: center;
align-items: center;
background: #f3f2f7;
`;

export const SuccessWrapper=styled.div`
max-width: 480px; 
height: 480px;
flex-direction: rows;
`;

export const SuccessTop=styled.div`
background: #01bf71;
border-radius: 10px 10px 0 0;
padding:10px;
`;

export const Icon=styled.div`
font-size: 100px;
margin: 50px 18px 10px 18px;
display: flex;
justify-content: center;
`;

export const SuccessText=styled.p`
font-size: 30px;
padding-bottom: 50px;
display: flex;
justify-content: center;
`;

export const SuccessBottom=styled.div`
background: #010101;
border-radius: 0 0 10px 10px;
z-index: 1;
display: grid;
padding: 30px 32px;
`;

export const Content=styled.p`
color: #fff;
font-size: 16px;
padding: 26px;
margin: 16px;
text-align: center;
`;

export const ContinueButton=styled(Link)`
background: #01bf71;
padding: 16px 0;
width: 200px;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
text-decoration: none;
text-align: center;
margin: 0 auto;

`;


