
import styled from 'styled-components';


export const AccordionSection=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 100vh;
background-image: url('graduate.jpg');

`;
// export const BackgroundImg=styled.div`
// position: absolute;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;
// `;

export const VideoBg=styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;
export const Contanier=styled.div`
position: absolute;
top: 25%;
box-shadow:1px 10px 35px 1px rgba(153,153,153,0.3);
background-color: #fff;
height: max-content;
width: 70%;
`;
export const Wrap=styled.div`
background: #02c2f7;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align:center;
cursor: pointer;

h1{
    padding: 1rem;
    font-size: 18px;
}

@media screen and (max-width:480){
    h1{
    padding: 0.5rem;
    font-size: 18px;
}
}

`;
export const Dropdown=styled.h1`
background-color: #010606;
color: #fff;
h3{
    padding:10px 2rem;
    font-size: 16px;
}
ol{
    padding: 2px 2.5rem;
    font-size: 15px;
}
li{
    margin: 4px 0;
    list-style:none;
    font-weight: 100;

}
`;

