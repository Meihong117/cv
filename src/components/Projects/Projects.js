import React from 'react'
import {ProjectContainer,ProjectWrapperOut,Icon,BackImg,ProjectOl,ProjectH1,ProjectUl,ProjectLi,ProjectLiInside,ProjectLink,SocialIncoLink,ProjectWrapper,ProjectImg,Container} from './ProjectsEle'
import {FaGithub} from 'react-icons/fa'
import Image from '../../images/back1.jpg'
import {Data} from './Data'

const Projects = () => {

    return (
        <>
            <ProjectContainer id="project">
                <ProjectWrapperOut>
                    <BackImg>
                        <ProjectImg src={Image}/>
                    </BackImg>
                    <ProjectWrapper id="wrapper">
                        <ProjectH1>PERSONAL PROJECTS</ProjectH1>
                        <Icon>
                            <SocialIncoLink href='https://github.com/Meihong117' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIncoLink>
                        </Icon>  
                        <Container>
                            {Data.map((item,index)=>{
                            return (
                                <>
                                <ProjectOl >
                                        <ProjectLi>
                                            <ProjectLink href={item.to} target='_blank'>{item.name}</ProjectLink>
                                        </ProjectLi>
                                        <ProjectUl>
                                            <ProjectLiInside><ProjectLink href={item.to1} target='_blank'>{item.description1}</ProjectLink></ProjectLiInside>
                                            <ProjectLiInside><ProjectLink href={item.to2} target='_blank'>{item.description2}</ProjectLink></ProjectLiInside>
                                            <ProjectLiInside><ProjectLink href={item.to3} target='_blank'>{item.description3}</ProjectLink></ProjectLiInside>
                                            <ProjectLiInside><ProjectLink href={item.to4} target='_blank'>{item.description4}</ProjectLink></ProjectLiInside>
                                        </ProjectUl>
                                    </ProjectOl> 
                                </>
                                )
                            })}
                        </Container>
                    </ProjectWrapper>
                </ProjectWrapperOut>
            </ProjectContainer>
        </>
    )
}
export default Projects