import React from 'react'
import {FooterContainer,FooterWrapper,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinktitle,FooterLink,SocialMedia, SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIncoLink } from './FooterElements'
import {FaFacebook,FaInstagram, FaYoutube, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    {/* 1st */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {/* 1 */}
                            <FooterLinktitle>REFEREES</FooterLinktitle>
                                <FooterLink to='/'>Two Fat Stags</FooterLink>
                                <FooterLink to='/signin'>Karen Ansell (Owner)</FooterLink>
                                <FooterLink to='/signin'>027-2291275</FooterLink>
                                <FooterLink to='/signin'>twofatstags@gmail.com</FooterLink>
                                <br />
                                <FooterLink to='/'>Silver Fern Farms</FooterLink>
                                <FooterLink to='/signin'>David Peterson</FooterLink>
                                <FooterLink to='/signin'>027-8580804</FooterLink>
                                <FooterLink to='/signin'>David.g.peterson@silverfernfarms.co.nz</FooterLink>
                        </FooterLinkItems>
                      
                    </FooterLinksWrapper>
                    { /* 2nd */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinktitle>LANGUAGES</FooterLinktitle>
                                <FooterLink to='/signin'>Mandarin</FooterLink>
                                <FooterLink to='/signin'>Korean</FooterLink>
                                <FooterLink to='/signin'>English</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinktitle>HOBBIES</FooterLinktitle>
                                <FooterLink to='/signin'>Learning new skills</FooterLink>
                                <FooterLink to='/signin'>Playing Pool</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                {/* social media */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Estelle Wu
                        </SocialLogo>
                        <WebsiteRights>+64 2108887682</WebsiteRights>
                        <WebsiteRights>estelle.wu117@gmail.com</WebsiteRights>

                        <SocialIcons>
                            <SocialIncoLink href='https://github.com/Meihong117' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIncoLink>

                            <SocialIncoLink href='https://www.linkedin.com/in/estelle-wu-08495a178/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIncoLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
