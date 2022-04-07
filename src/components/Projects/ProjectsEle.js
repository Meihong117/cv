import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProjectContainer=styled.div`
padding: 0 150px;
height: 710px;
position: relative;
z-index: 1;


@media screen and (max-width:480px){
    padding: 0 ;
    display: flex;
    justify-content: center;
} 
`;


export const BackImg=styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const ProjectImg=styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;

`;
export const ProjectWrapper=styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
margin: 50px 0;
color: #fff;
border:3px solid #fff;


`;
export const Icon=styled.div`
text-align: center;
`
export const ProjectH1=styled.h2`
font-size: 20px;
margin: 10px 0;
text-align: center;

`;
//icon
export const SocialIncoLink=styled.a`
color: #fff;
font-size: 30px;
text-align: center;
&:hover{
    color: #02c2f7;
    transition:0.2s ease-in-out;
}
`;

export const ProjectLink=styled.a`
color: #fff;

&:hover{
    color: #02c2f7;
}
`

export const ProjectOl=styled.ul`
margin: 10px;


`;

export const ProjectLiInside=styled.li`
margin: 3px;
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

export const Container=styled.div``