import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Close, TrendingUp } from '@mui/icons-material';
import { Button } from '../Button';
import { NAVIGATION_ITEMS, PATHS } from '../../../routes/paths';
import { COMPANY_INFO } from '../../../utils/constants';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Navigation,
  NavList,
  NavItem,
  MobileMenuButton,
  MobileMenu,
  MobileNavList,
  MobileNavItem
} from './Header.styled';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <HeaderContent>
        <Logo>
          <TrendingUp className="logo-icon" />
          <span>{COMPANY_INFO.name}</span>
        </Logo>

        <Navigation>
          <NavList>
            {NAVIGATION_ITEMS.map((item) => (
              <NavItem key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </NavItem>
            ))}
          </NavList>
          <Button variant="primary" size="medium">
            Get Started
          </Button>
        </Navigation>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <Close /> : <Menu />}
        </MobileMenuButton>
      </HeaderContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavList>
          {NAVIGATION_ITEMS.map((item) => (
            <MobileNavItem key={item.path}>
              <Link to={item.path} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            </MobileNavItem>
          ))}
        </MobileNavList>
        <Button variant="primary" size="large" fullWidth>
          Get Started
        </Button>
      </MobileMenu>
    </HeaderContainer>
  );
};