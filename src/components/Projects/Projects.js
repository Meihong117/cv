import React from 'react'
import {ProjectContainer,ProjectOl,ProjectDetail,ProjectH1,ProjectUl,ProjectLi,ProjectLiInside,HeroBg,VideoBg,SocialIncoLink,ProjectWrapper,ProjectImg} from './ProjectsEle'
import {FaGithub} from 'react-icons/fa'
import Image from '../../images/hard.jpeg'


export const Projects = () => {
    return (
        <>
            <ProjectContainer id="project">
                {/* <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg> */}
                {/* Projects */}
                <ProjectDetail>
                        <ProjectImg src={Image}/>
                        <ProjectWrapper>
                            <ProjectH1>PERSONAL PROJECTS</ProjectH1>
                            <SocialIncoLink href='https://github.com/Meihong117' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIncoLink>
                            <ProjectOl>
                                <ProjectLi>Traveling Website</ProjectLi>
                                    <ProjectUl>
                                        <ProjectLiInside>Backend - Javascript</ProjectLiInside>
                                        <ProjectLiInside>Frontend - Vuejs</ProjectLiInside>
                                        <ProjectLiInside>Database - MySQL</ProjectLiInside>
                                    </ProjectUl>
                                <ProjectLi>CSS/HTML/DOM Documentations</ProjectLi>
                                    <ProjectUl>
                                        <ProjectLiInside>Javascript / HTML / CSS / DOM</ProjectLiInside>
                                    </ProjectUl>
                                <ProjectLi>ReactJs Portfolios</ProjectLi>
                                <ProjectLi>Simple Dental Booking Page</ProjectLi>
                                    <ProjectUl>
                                        <ProjectLiInside>C# .Net framework</ProjectLiInside>
                                    </ProjectUl>
                                <ProjectLi>Design Coffee Ordering App</ProjectLi>
                                    <ProjectUl>
                                        <ProjectLiInside>Figma</ProjectLiInside>
                                    </ProjectUl>
                            </ProjectOl>
                        </ProjectWrapper>
                </ProjectDetail>
            </ProjectContainer>
            
        </>
    )
}
export default Projects