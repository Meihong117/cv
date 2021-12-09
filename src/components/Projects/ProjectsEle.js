
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProjectContainer=styled.div`
display: flex;
justify-content: center;
height: max-content;
padding-top: 5%;

`;
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
export const HeroBg=styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg=styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;
export const ProjectWrapper=styled.div`
width: max-content;
margin: 0 30px;
`;

export const ProjectImg=styled.img`
width: 350px;
height: 330px;


@media screen and (max-width:960px){
    width: 330px;
    height: 310px;
}
@media screen and (max-width:480px){
    
}
`;

export const ProjectDetail=styled.div`
background-color: #02c2f7;
z-index: 5;
width: max-content;
margin: 0px 150px;
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
    justify-items: center;
    justify-content: center;
}
@media screen and (max-width:480px){
    
}
`;
export const ProjectH1=styled.h2`
font-size: 20px;
margin: 10px 0;
`;
export const ProjectOl=styled.ol`
margin: 10px 0;

`;

export const ProjectLiInside=styled.li`

`;


export const ProjectUl=styled.ul`
list-style: none;
`;


export const ProjectLi=styled.li`

margin: 5px 0;
font-size: 15px;
font-weight: 800;
`;

export const SkillDetail=styled.div`

`;
export const SkillLi=styled.li`

`;

