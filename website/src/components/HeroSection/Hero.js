import React,{useState} from 'react'
import {HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'

const Hero = () => {
    const [hover, setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Enjoy The Nature</HeroH1>
                <HeroP>Nature is made of everything we see around us – trees, flowers, plants, animals, sky, mountains, forests and more.</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='ture' dark='true' spy={true} smooth={true} offset={-80} duration={500} exact='true'>Get Started {hover? <ArrowForward />: <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
