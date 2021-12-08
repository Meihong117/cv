import React from 'react'
import {SideBarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink, SidebtnWrap,SidebarRoute } from './SidebarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='education' onClick={toggle}>EDUCATION</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>PROJECTS</SidebarLink>
                    <SidebarLink to='skill' onClick={toggle}>SKILLS</SidebarLink>
                    <SidebarLink to='history' onClick={toggle}>WORK HISTORY</SidebarLink>
                    <SidebarLink to='hireme' onClick={toggle}>HIRE ME?</SidebarLink>
                    
                </SidebarMenu>

                <SidebtnWrap>
                    <SidebarRoute to='/signin' >Sign In</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
