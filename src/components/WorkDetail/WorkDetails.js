import React, {useState, useRef, useEffect} from 'react'
// import styled, { css } from 'styled-components/macro'
import {SlideData} from './Data'
import {HeroSection, HeroWrapper, HeroSlide,HeroContent,HeroSlider,HeroImage, Button,SliderButtons,PrevArrow,NextArrow,Arrow} from './WorkDetailElems'


const Hero = ({slides}) => {
    const [current, setCurrent]=useState(0)
    const length=slides.length
    const timeout=useRef(null)

    //set auto slider
    useEffect(() => {
        const nextSlide=()=>{
            setCurrent(current=>(current===length-1? 0: current+1))
        }
        timeout.current=setTimeout(nextSlide,9000)
        return function(){
            if (timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length]);

    const nextSlide=()=>{
        if (timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current===length-1? 0:current+1)
    }
    const prevSlide=()=>{
        if (timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current===0? length-1:current-1)
    }

    if (!Array.isArray(slides)||slides.length<=0){
        return null
    }
 
    return (
        <HeroSection>
            <HeroWrapper>
                {SlideData.map((slide,index)=>{
                    return(
                        <HeroSlide key={index}>
                            {/* img changes with arrow, index=0,1,2,3 */}
                            {index===current&& (<HeroSlider>
                                <HeroImage src={slide.img} alt={slide.alt} />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <h3>{slide.location}{slide.date}</h3>
                                    <p>{slide.description1}</p>
                                    <p>{slide.description2}</p>
                                    <p>{slide.description3}</p>
                                </HeroContent>
                            </HeroSlider>)}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
