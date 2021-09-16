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
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='discover'>Discover</SidebarLink>
                    <SidebarLink to='services'>Services</SidebarLink>
                    <SidebarLink to='signup'>Sign Up </SidebarLink>
                </SidebarMenu>

                <SidebtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
