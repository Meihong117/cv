import React from 'react'
import {Button} from '../ButtonElements'
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle, BtnWrap,Column2, ImgWrap, Img} from './InfoElements'


const InfoSection = ({lightBg,id, imgStart, topLine1,topLine2, lightText, darkText,headline1, headline2, description1,description2,description3,description4, description5, description6, description7,description8,description9,description10, description11,description12,description13,description14,description15,description16,description17,description18, img, alt,buttonLabel,primary,dark,dark2,to}) => {
    return (
       <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                {/* line1 */}
                                <TopLine>{topLine1}</TopLine>
                                <Heading lightText={lightText}>{headline1}</Heading>
                                <SubTitle darkText={darkText}>{description1}</SubTitle>
                                {/* line2 */}
                                <Heading lightText={lightText} >{headline2}</Heading>
                                <SubTitle darkText={darkText}>{description2}</SubTitle>
                                {/* Project */}
                                <SubTitle darkText={darkText}>{description17}</SubTitle>
                                <SubTitle darkText={darkText}>{description18}</SubTitle>
                                <SubTitle darkText={darkText}>{description3}</SubTitle>
                                <SubTitle darkText={darkText}>{description4}</SubTitle>
                                <SubTitle darkText={darkText}>{description5}</SubTitle>
                                <SubTitle darkText={darkText}>{description7}</SubTitle>
                                {/* skill */}
                                <SubTitle darkText={darkText}>{description8}</SubTitle>
                                <SubTitle darkText={darkText}>{description9}</SubTitle>
                                <SubTitle darkText={darkText}>{description10}</SubTitle>
                                <SubTitle darkText={darkText}>{description11}</SubTitle>
                                <SubTitle darkText={darkText}>{description12}</SubTitle>
                                <SubTitle darkText={darkText}>{description13}</SubTitle>
                                <SubTitle darkText={darkText}>{description14}</SubTitle>
                                <SubTitle darkText={darkText}>{description15}</SubTitle>
                                <SubTitle darkText={darkText}>{description16}</SubTitle>

                                <BtnWrap>
                                    <Button to={to} smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={primary? 1:0} dark={dark? 1:0} dark2={dark2? 1:0}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
