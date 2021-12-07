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
                    <SidebarLink to='describtion' onClick={toggle}>EDUCATION</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>WORK HISTORY</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>PERSONAL PROJECTS</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>REFEREES</SidebarLink>
                </SidebarMenu>

                <SidebtnWrap>
                    <SidebarRoute to='/signin' >Sign In</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
