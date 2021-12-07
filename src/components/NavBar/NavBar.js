import React,{useState,useEffect} from 'react'
import {Nav, NavbarContainer,NavContainer,NavLogo,NavDetails,NavDetail,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

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
                            <NavLinks to='about' spy={true} smooth={true} offset={-80} duration={500} exact='true'>EDUCATION</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' spy={true} smooth={true} offset={-80} duration={500} exact='true'>PERSONAL PROJECTS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' spy={true} smooth={true} offset={-80} duration={500} exact='true'>WORK HISTORY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='hireme' spy={true} smooth={true} offset={-80} duration={500} exact='true'>Hire Me</NavLinks>
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
