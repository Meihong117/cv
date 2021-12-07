import React from 'react'
import {ProjectContainer,ProjectOl,ProjectDetail,ProjectH1,ProjectUl,ProjectLi,ProjectLiInside,SkillLi} from './ProjectsEle'

export const Projects = () => {
    return (
        <>
        <ProjectContainer id="project">
        
                {/* Projects */}
                <ProjectDetail>
                    <ProjectH1>PERSONAL PROJECTS</ProjectH1>
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
                </ProjectDetail>
                
                {/* skills */}
                <ProjectDetail>
                    <ProjectH1>SKILLS</ProjectH1>
                    <ProjectOl>
                        <SkillLi>CSS3/HTML5/JavaScript(ES6)</SkillLi>
                        <SkillLi>VueJs/ReactJS</SkillLi>
                        <SkillLi>Azure</SkillLi>
                        <SkillLi>C# .NET framework</SkillLi>
                        <SkillLi>MySQL</SkillLi>
                        <SkillLi>NodeJs</SkillLi>
                        <SkillLi>UX/UI</SkillLi>
                        <SkillLi>Restful API</SkillLi>
                        <SkillLi>ExpressJs</SkillLi>
                        <SkillLi>Github</SkillLi>
                        <SkillLi>Python</SkillLi>
                        <SkillLi>Npm</SkillLi>
                        <SkillLi>OpenGL3</SkillLi>

                    </ProjectOl>
                </ProjectDetail>
            
        </ProjectContainer>
            
        </>
    )
}
export default Projects