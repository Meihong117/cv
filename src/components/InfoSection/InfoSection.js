import React from 'react'
import {Button} from '../ButtonElements'
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle, BtnWrap,Column2, ImgWrap, Img} from './InfoElements'
import { infoData } from './Data'


const InfoSection = () => {
    return (
       <>
       {infoData.map((item)=>{
           return(
               <>
                <InfoContainer lightBg={item.lightBg} id={item.id}>
                    <InfoWrapper>
                        <InfoRow imgStart={item.imgStart}>
                            <Column1>
                                <TextWrapper>
                                    {/* context */}
                                    <TopLine>{item.topLine1}</TopLine>
                                    <Heading lightText={item.lightText}>{item.headline1}</Heading>
                                    <SubTitle darkText={item.darkText}>{item.description1}</SubTitle>

                                    <Heading lightText={item.lightText} >{item.headline2}</Heading>
                                    <SubTitle darkText={item.darkText}>{item.description2}</SubTitle>

                                    <SubTitle darkText={item.darkText}>{item.description3}</SubTitle>
                                    <SubTitle darkText={item.darkText}>{item.description4}</SubTitle>
                                    <SubTitle darkText={item.darkText}>{item.description5}</SubTitle>
                                    <SubTitle darkText={item.darkText}>{item.description6}</SubTitle>
                                    <SubTitle darkText={item.darkText}>{item.description7}</SubTitle>

                                    {/* button */}
                                    <BtnWrap>
                                        <Button to={item.to} smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={item.primary? 1:0} dark={item.dark? 1:0} >{item.buttonLabel}</Button>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>

                            {/* image */}
                            <Column2>
                                <ImgWrap>
                                <Img src={item.img} alt={item.alt}/>
                                </ImgWrap>
                            </Column2>

                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
               </>
           )
       })}
            
        </>
    )
}

export default InfoSection
