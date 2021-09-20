import React from 'react'
import {FooterContainer,FooterWrapper,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinktitle,FooterLink,SocialMedia, SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIncoLink } from './FooterElements'
import {FaFacebook,FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    {/* 1st */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinktitle>About Us</FooterLinktitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Test</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
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
                            <FooterLinktitle>Contact Us</FooterLinktitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Test</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinktitle>Social Media</FooterLinktitle>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>youTube</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                {/* social media */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
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
