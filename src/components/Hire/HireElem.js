import styled from "styled-components";
import { Link } from "react-router-dom";

export const HireContainer=styled.div`
height: 700px;
display: flex;
justify-content: center;
align-items: center;

`

export const HireWrap=styled.div`
display: flex;
justify-content: center;
align-items: center;

 @media screen and (max-width:768px){
        padding: 100px 0;
 }
`
export const HireForm=styled.form`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 15px;

@media screen and (max-width:768px){
        padding: 0;
 }  
`;

export const HireImg=styled.img`
width: 400px;
height: 100%;

@media screen and (max-width:768px){
    display: none;
}
` 

export const HireTitle =styled.h1`
margin-bottom: 20px;
color: #02c2f7;
text-transform: uppercase;
font-size: 26px;

@media screen and (max-width:768px){
    font-size:25px;
}
`;


export const HireInput=styled.input`
width: 500px;
height: 30px;
margin: 10px;

@media screen and (max-width:768px){
        width: 350px;
 }

`
export const HireTextarea=styled.textarea`
width: 500px;
height: 200px;
margin: 10px;

@media screen and (max-width:768px){
        width: 350px;

 }
`



export const ButtonWrap=styled.div`
display: grid;
align-items: center;
width: 200px;
`