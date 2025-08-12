import React from 'react';
import { Link } from 'react-router-dom';
import { Email, Phone, LocationOn, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { COMPANY_INFO, CONTACT_INFO } from '../../../utils/constants';
import { PATHS } from '../../../routes/paths';
import { PUBLIC_IMAGES } from '../../../utils/publicImages';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  ContactInfo,
  SocialLinks,
  FooterBottom,
  Copyright,
  FooterLinks,
} from './Footer.styled';
import { Logo } from '../Header/Header.styled';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <Logo style={{
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              padding: '8px 16px',
              display: 'inline-flex',
              alignItems: 'center',
            }}>
              <img src={PUBLIC_IMAGES.logo} alt="Logo" style={{ height: 36, marginRight: 8 }} />
              {/* <span>{COMPANY_INFO.name}</span> */}
            </Logo>
            <p>{COMPANY_INFO.description}</p>
            <ContactInfo>
              <Email className="icon" />
              <span>{CONTACT_INFO.email}</span>
            </ContactInfo>
            <ContactInfo>
              <Phone className="icon" />
              <span>{CONTACT_INFO.phone}</span>
            </ContactInfo>
            <ContactInfo>
              <LocationOn className="icon" />
              <span>{CONTACT_INFO.address}</span>
            </ContactInfo>
            <SocialLinks>
              <a href="https://www.linkedin.com/company/adsfizz-digital-media-pvt-ltd/" aria-label="LinkedIn">
                <LinkedIn />
              </a>
              {/* <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a> */}
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Services</h3>
            <ul>
              <li><Link to={PATHS.SERVICES}>Performance Marketing</Link></li>
              <li><Link to={PATHS.SERVICES}>CPL Campaigns</Link></li>
              <li><Link to={PATHS.SERVICES}>CPA Solutions</Link></li>
              <li><Link to={PATHS.SERVICES}>CPR Programs</Link></li>
              <li><Link to={PATHS.SERVICES}>CPI Mobile Marketing</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><Link to={PATHS.ABOUT}>About Us</Link></li>
              <li><Link to={PATHS.ADVERTISERS}>For Advertisers</Link></li>
              <li><Link to={PATHS.PUBLISHERS}>For Publishers</Link></li>
              <li><Link to={PATHS.CONTACT}>Contact</Link></li>
            </ul>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </Copyright>
          <FooterLinks>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Cookie Policy</Link>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};