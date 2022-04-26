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
`
export const HireForm=styled.div`
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
color: #02c2f7;
font-size: 26px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
/* text-align:center; */
`;
export const InputWrap=styled.div`
width: 500px;
`

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

export const BtnWrap=styled.div`
width: 500px;
display: flex;
align-items:center;
justify-content: center;

`