import React from 'react'
import {SideBarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink, SocialIncoLink } from './SidebarElements'
import { FaGithub} from 'react-icons/fa'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/education' onClick={toggle}>EDUCATION</SidebarLink>
                    <SidebarLink to='/projects' onClick={toggle}>PROJECTS</SidebarLink>
                    <SidebarLink to='/skill' onClick={toggle}>SKILLS</SidebarLink>
                    <SidebarLink to='/work' onClick={toggle}>WORK HISTORY</SidebarLink>
                    <SocialIncoLink href='https://github.com/Meihong117' target='_blank' aria-label='GitHub'>
                        <FaGithub />
                    </SocialIncoLink>
                    <SidebarLink to='/' onClick={toggle}>HIRE ME?</SidebarLink>
                </SidebarMenu>

                
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
