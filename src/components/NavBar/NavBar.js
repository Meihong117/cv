import React,{useState,useEffect} from 'react'
import {Nav, NavbarContainer,NavContainer,NavLogo,NavDetails,NavDetail,MobileIcon,NavMenu,NavItem,NavLinks,SocialIncoLink,NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { FaGithub} from 'react-icons/fa'

const NavBar = ({toggle}) => {
    // when scroll the window, the navbar-color will change to black
    const [scrollNav, setScrollNav]=useState(false)
    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        
    }, [])
    // scroll to top 
    const toggleHome=()=>{
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{color: 'yellow'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavContainer>
                        <NavLogo to='/' onClick={toggleHome}>Estelle Wu</NavLogo>
                        <NavDetails>
                            <NavDetail>+64 2108887682</NavDetail>
                            <NavDetail>estelle.wu117@gmail.com</NavDetail>
                        </NavDetails>
                    </NavContainer>
                    
                   
                    <MobileIcon  onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            {/* navbar height=80px */}
                            <NavLinks to='education' spy={true} smooth={true} offset={-80} duration={500} exact='true'>EDUCATION</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' spy={true} smooth={true} offset={-80} duration={500} exact='true'>PROJECTS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skill' spy={true} smooth={true} offset={-80} duration={500} exact='true'>SKILLS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='history' spy={true} smooth={true} offset={-80} duration={500} exact='true'>WORK HISTORY</NavLinks>
                        </NavItem>
                        <SocialIncoLink href='https://github.com/Meihong117' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                        </SocialIncoLink>

                        <NavItem>
                            <NavLinks to='hireme' spy={true} smooth={true} offset={-80} duration={500} exact='true'>HIRE ME?</NavLinks>
                        </NavItem>
                    </NavMenu>

                    {/* <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn> */}

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
