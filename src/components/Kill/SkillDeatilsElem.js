import styled from 'styled-components';


export const SkillDeatilContainer=styled.div`

`;

export const SkillWrapper=styled.div`
display: flex;
justify-content: center;
z-index:3

`;

export const SkillCards=styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

`;

export const Card=styled.div`
margin: 10px;
text-align: center;
background-color: #f0f2f5;
border-radius: 10px;

h3{
    font-size: 20px;
    margin: 10px;
}

h3:hover{
    color:#02c2f7;
}
&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;   
    cursor: pointer;
}
`;

export const CardImg=styled.img`
width: 250px;
height: 250px;
border-top: 10px;

`;
