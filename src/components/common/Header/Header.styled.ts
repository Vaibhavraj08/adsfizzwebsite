import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { slideInLeft } from '../../../styles/animations';

interface HeaderProps {
  $isScrolled?: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  
  ${props => props.$isScrolled 
    ? css`
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: ${theme.shadows.md};
      `
    : css`
        background: transparent;
      `
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
  animation: ${slideInLeft} 0.6s ease-out;

  .logo-icon {
    font-size: 2rem;
    background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.accent.main});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Navigation = styled.nav`
  display: none;
  margin-left: auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xl};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  margin-right: ${theme.spacing.xl};
`;

export const NavItem = styled.li`
  a {
    color: ${theme.colors.neutral.dark};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.base};
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: ${theme.colors.primary.main};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.accent.main});
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }

    &.special-nav-btn.advertisers {
      background: linear-gradient(90deg, #ff9800 0%, #ffc107 100%);
      color: #fff;
      border-radius: 20px;
      padding: 6px 18px;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(255, 152, 0, 0.15);
      border: 2px solid #ff9800;
    }

    &.special-nav-btn.publishers {
      background: linear-gradient(90deg, #2196f3 0%, #00bcd4 100%);
      color: #fff;
      border-radius: 20px;
      padding: 6px 18px;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(33, 150, 243, 0.15);
      border: 2px solid #2196f3;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${theme.colors.neutral.dark};
  font-size: 1.5rem;
  margin-left: auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.background.primary};
  box-shadow: ${theme.shadows.lg};
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  padding: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

export const MobileNavItem = styled.li`
  a {
    display: block;
    color: ${theme.colors.neutral.dark};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.lg};
    padding: ${theme.spacing.md} 0;
    border-bottom: 1px solid ${theme.colors.neutral.light};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary.main};
    }

    &.special-nav-btn.advertisers {
      background: linear-gradient(90deg, #ff9800 0%, #ffc107 100%);
      color: #fff;
      border-radius: 16px;
      padding: 10px 0;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(255, 152, 0, 0.12);
      border: 2px solid #ff9800;
    }

    &.special-nav-btn.publishers {
      background: linear-gradient(90deg, #2196f3 0%, #00bcd4 100%);
      color: #fff;
      border-radius: 16px;
      padding: 10px 0;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(33, 150, 243, 0.12);
      border: 2px solid #2196f3;
    }
  }
`;