import React from 'react'
import {Button} from '../ButtonElements'
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle, BtnWrap,Column2, ImgWrap, Img} from './InfoElements'


const InfoSection = ({lightBg,id, imgStart, topLine1,topLine2, lightText, darkText,headline1, headline2, description1,description2, img, alt,buttonLabel,primary,dark,dark2,to}) => {
    return (
       <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                {/* line1 */}
                                <TopLine>{topLine1}</TopLine>
                                <Heading lightText={lightText} >{headline1}</Heading>
                                <SubTitle darkText={darkText}>{description1}</SubTitle>
                                {/* line2 */}
                                <Heading lightText={lightText} >{headline2}</Heading>
                                <SubTitle darkText={darkText}>{description2}</SubTitle>
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
