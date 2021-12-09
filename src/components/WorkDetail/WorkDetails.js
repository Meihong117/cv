import React,{useState} from 'react'
import {WorkDetailSection,IconLeft,SlideImg,SlideContainer,SlideWrapper,SlideContent,SlideTitle,SlideDate,SlideLocation,SlideDescription,IconRight} from './WorkDetailElems'
import {SlideData} from './Data'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const NatureDescribe = ({slides}) => {
    const [current, setCurrent]=useState(0)
    const length=slides.length

    const nextSlide=()=>{
        setCurrent(current===length-1? 0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0? length-1:current-1)
    } 

    if(!Array.isArray(slides) || slides.length<=0) return null

    return (
        <>
            <WorkDetailSection>
                <IconLeft>
                    <FaArrowAltCircleLeft onClick={prevSlide}/>
                </IconLeft>
                {SlideData.map((slide,index)=>{
                    return  (
                        <SlideContainer key={index}>
                            {index===current && 
                            <SlideWrapper>
                                <SlideImg src={slide.img} />
                                <SlideContent>
                                    <SlideTitle>{slide.title}</SlideTitle>
                                    <SlideDate>{slide.date}</SlideDate>
                                    <SlideLocation>{slide.location}</SlideLocation>
                                    <SlideDescription>{slide.description1}</SlideDescription>
                                    <SlideDescription>{slide.description2}</SlideDescription>
                                    <SlideDescription>{slide.description3}</SlideDescription>
                                </SlideContent>
                            </SlideWrapper>
                            }
                        </SlideContainer>
                    )
                    })}
                <IconRight>
                    <FaArrowAltCircleRight onClick={nextSlide}/>
                </IconRight>
            </WorkDetailSection>
            
        </>
    )
}

export default NatureDescribe
