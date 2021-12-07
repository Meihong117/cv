import React from 'react'
import {FooterContainer,FooterWrapper,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinktitle,FooterLink,SocialMedia, SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIncoLink } from './FooterElements'
import {FaFacebook,FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
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
                            <FooterLinktitle>REFEREES</FooterLinktitle>
                                <FooterLink to='/'>Two Fat Stags</FooterLink>
                                <FooterLink to='/signin'>Karen Ansell (Owner)</FooterLink>
                                <FooterLink to='/signin'>027-2291275</FooterLink>
                                <FooterLink to='/signin'>twofatstags@gmail.com</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinktitle>Videos</FooterLinktitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Test</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
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
                            LOGO
                        </SocialLogo>
                        <WebsiteRights>LOGO @ {new Date().getFullYear()}All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIncoLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIncoLink>

                            <SocialIncoLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIncoLink>

                            <SocialIncoLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIncoLink>

                            <SocialIncoLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIncoLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
