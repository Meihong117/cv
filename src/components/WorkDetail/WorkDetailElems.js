import styled from "styled-components";


//overall
export const WorkDetailSection=styled.div`
position: relative;
height: 700px;
display: flex;
justify-content: center;
align-items: center;

/* 
@media screen and (max-width:960px){
    height: 600px;
}
@media screen and (max-width:480px){
    height: 500px;
} */
`

export const SlideContainer=styled.div`

/* @media screen and (max-width:960px){
    height: 600px;
}
@media screen and (max-width:480px){
    height:200px;
} */
`;

//img
export const SlideImg=styled.img`
width: 700px;
height: 300px;
border-radius: 5px;
z-index:1;
`
export const SlideWrapper=styled.div`

`;

// text content
export const SlideContent=styled.div`
text-align: center;
width: 700px;
`;
export const SlideTitle=styled.h2`
font-size: 30px;
color: #02c2f7;
`;
export const SlideDate=styled.h3`
font-size: 25px;
`;
export const SlideLocation=styled.h4`
font-size: 20px;
`;
export const SlideDescription=styled.li`
font-size: 15px;
list-style-type:upper-roman;
`;


//icon
export const IconRight=styled.div`
font-size: 30px;
`
export const IconLeft=styled.div`
font-size: 30px;
`
