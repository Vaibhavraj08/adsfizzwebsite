import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material';
import { NAVIGATION_ITEMS, PATHS } from '../../../routes/paths';
import {PUBLIC_IMAGES} from '../../../utils/publicImages';
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
    // Always allow mobile menu to open regardless of scroll
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer $isScrolled={isScrolled || isMobileMenuOpen}>
      <HeaderContent>
        <Logo as={Link} to={PATHS.HOME} style={{ cursor: 'pointer' }}>
          <img src={PUBLIC_IMAGES.logo} alt="Logo" style={{ height: 36, marginRight: 8 }} />
          {/* <span>{COMPANY_INFO.name}</span> */}
        </Logo>

        <Navigation>
          <NavList>
            {NAVIGATION_ITEMS.map((item) => {
              const isExternal = item.path.startsWith('http');
              const isSpecial = item.label === 'Advertisers' || item.label === 'Publishers';
              const specialClass = isSpecial ? `special-nav-btn ${item.label.toLowerCase()}` : '';
              return (
                <NavItem key={item.path}>
                  {isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={specialClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={
                        [location.pathname === item.path ? 'active' : '', specialClass].filter(Boolean).join(' ')
                      }
                    >
                      {item.label}
                    </Link>
                  )}
                </NavItem>
              );
            })}
          </NavList>
          {/* <Button variant="primary" size="medium">
            Get Started
          </Button> */}
        </Navigation>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <Close /> : <Menu />}
        </MobileMenuButton>
      </HeaderContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavList>
          {NAVIGATION_ITEMS.map((item) => {
            const isExternal = item.path.startsWith('http');
            const isSpecial = item.label === 'Advertisers' || item.label === 'Publishers';
            const specialClass = isSpecial ? `special-nav-btn ${item.label.toLowerCase()}` : '';
            return (
              <MobileNavItem key={item.path}>
                {isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={specialClass}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={specialClass}
                  >
                    {item.label}
                  </Link>
                )}
              </MobileNavItem>
            );
          })}
        </MobileNavList>
        {/* <Button variant="primary" size="large" fullWidth>
          Get Started
        </Button> */}
      </MobileMenu>
    </HeaderContainer>
  );
};