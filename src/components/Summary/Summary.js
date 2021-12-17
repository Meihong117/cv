import React,{useState} from 'react'
import {HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './SummaryElem'
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
                <HeroH1>SUMMARY</HeroH1>
                <HeroP>Hi, I'm Estelle, I graduated from the University of Canterbury in Computer Science, have excellent skills with programming languages like JavaScript(ES6), HTML5, CSS3 and understand Azure, CI/CD, Agile etc.
                    <br />
                    <br />
                    As a hard-working Supervisor, Manager and Consultant, have 3.5+ years customer services and training work experience. I am a fast learner, pay great attention to details, patient and like to overcome difficult challenges.</HeroP>
                {/* <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' spy={true} smooth={true} offset={-80} duration={500} exact='true'>Get Started {hover? <ArrowForward />: <ArrowRight />}</Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
