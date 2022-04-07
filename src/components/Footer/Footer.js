import React from 'react'
import {FooterContainer,FooterWrapper,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinktitle,FooterLink,SocialMedia, SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIncoLink } from './FooterElements'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
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
                                <FooterLink>Reference can be provided on request</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    { /* 2nd */}
                    <FooterLinksWrapper>
                        {/* languages */}
                        <FooterLinkItems>
                            <FooterLinktitle>LANGUAGES</FooterLinktitle>
                                <FooterLink >Mandarin</FooterLink>
                                <FooterLink >Korean</FooterLink>
                                <FooterLink >English</FooterLink>
                        </FooterLinkItems>
                        {/* hobbies */}
                        <FooterLinkItems>
                            <FooterLinktitle>HOBBIES</FooterLinktitle>
                                <FooterLink >Learning new skills</FooterLink>
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
                        {/* link icons */}
                        <SocialIcons>
                            {/* github */}
                            <SocialIncoLink href='https://github.com/Meihong117' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIncoLink>
                            {/* linkedin */}
                            <SocialIncoLink href='https://www.linkedin.com/in/estelle-wu-08495a178/' target='_blank' aria-label='LinkedIn'>
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
