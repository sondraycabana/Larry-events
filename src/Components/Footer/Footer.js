import React from 'react';

import Logo from '../../../src/images/larrykaylogo.jpg'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';
import {Button} from '../../globalStyles'
import { FooterContainer,
    FooterSubscription,  
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
    
             } from './Footer.element'

const footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Join our exclusive membership to
                 receive the latest news and trends
                </FooterSubHeading>
            <FooterSubText>
            You can unsubscribe at any time.
            </FooterSubText>
            
              <Form>
                                <FormInput name="email" type="email" placeholder="Your email"/>
               
                <Button fontBig>Submit</Button>
            </Form>
        
            </FooterSubscription>
            
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinksItems>

                    <FooterLinksTitle>
                    What we do
                    </FooterLinksTitle>
                    <FooterLink to="/"> Direct sales / Experiential Marketing</FooterLink>
                    <FooterLink to="/"> Brand awareness / Launch</FooterLink>
                    <FooterLink to="/"> Mechandizing</FooterLink>
                    <FooterLink to="/"> Roadshows</FooterLink>
                    <FooterLink to="/">Media / Television Adverts</FooterLink>
                    <FooterLink to="/"> Brand Jingles Productions</FooterLink>
                    <FooterLink to="/"> DJ services / PA systems</FooterLink>
                    <FooterLink to="/"> Stage and lighting</FooterLink>
                    <FooterLink to="/"> Kiddies Entertianment / Adults</FooterLink>
                    <FooterLink to="/"> Concerts shows/ Carnival</FooterLink>
                    
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                    Contact Us
                    </FooterLinksTitle>
                    <FooterLink to="/contact"> Contact</FooterLink>
                    <FooterLink to="/"> Testimonials</FooterLink>
                    
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                   Video
                    </FooterLinksTitle>
                    <FooterLink to="/services"> Our services</FooterLink>
                    <FooterLink to="/"> Home page</FooterLink>
                    
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                   Social media
                    </FooterLinksTitle>
                    
                    <FooterLink to="/"> Career</FooterLink>
                    
                    <FooterLink to="/"> Terms of Service</FooterLink>
                    </FooterLinksItems>



                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                                <img src={Logo} width={50} height={50}   />
                        </SocialLogo>
                        <WebsiteRights>LARRYKAYEVENTS   2024 </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://web.facebook.com/pages/creation/?ref_type=comet_home" target="_blank"
                            aria-label="Facebook">
                            <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="https://www.instagram.com/larrykayevents/?hl=en" target="_blank"
                            aria-label="Instagram">
                            <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="https://www.youtube.com/watch?v=ZLmAT6eaKhY" target="_blank"
                            
                            aria-label="Youtube">
                            <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                            <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="https://www.linkedin.com/in/kabir-olanrewaju-adeniji-b56396a9/" target="_blank"
                            aria-label="Linkdin">
                            <FaLinkedin/>
                            </SocialIconLink>

                            <SocialIconLink href="https://www.tiktok.com/@whitecarninval" target="_blank"
                            aria-label="TikTok">
                            <FaTiktok/>
                            </SocialIconLink>
                        
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

        </FooterContainer>
    )
}
export default footer
