import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProjectContainer=styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

`;
export const ProjectDetail=styled.div`
background-color: #02c2f7;
z-index: 5;
width: max-content;
height: max-content;
border-radius: 5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
display: flex;
justify-content:center;
align-items: center;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;   
    cursor: pointer;
}
@media screen and (max-width:960px){
    display: grid;
    align-items: center;
    justify-content: center;
    
}
@media screen and (max-width:480px){
    
    width: 250px;
    height: max-content;
}
`;
// video
// export const HeroBg=styled.div`
// position: absolute;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;
// `;

// export const VideoBg=styled.video`
// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
// background: #232a34;
// `;
export const ProjectImg=styled.img`
width: 350px;
height: 350px;
border-radius: 5px;

@media screen and (max-width:960px){
    width: 280px;
    height: 260px;
}
@media screen and (max-width:480px){
    width: 250px;
    height: 230px;
}
`;
export const ProjectWrapper=styled.div`
width: max-content;

@media screen and (max-width:960px){
    width: 280px;
}
@media screen and (max-width:480px){
    width: 250px;
}
`;

export const ProjectH1=styled.h2`
font-size: 20px;
margin: 10px 0;
text-align: center;

@media screen and (max-width:480px){
    font-size: 16px;
}
`;
//icon
export const SocialIncoLink=styled.a`
color: #fff;
font-size: 30px;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    color: #010606;
    transition:0.2s ease-in-out;
}
`;
export const ProjectOl=styled.ol`
margin: 10px;
padding: 0 12px;

`;

export const ProjectLiInside=styled.li`
@media screen and (max-width:480px){
    font-size: 11px;
}
`;

export const ProjectUl=styled.ul`
list-style: none;
`;

export const ProjectLi=styled.li`
margin: 5px 0;
font-size: 15px;
font-weight: 800;
@media screen and (max-width:480px){
    font-size: 13px;
}
`;

export const SkillDetail=styled.div`

`;
export const SkillLi=styled.li`

`;

