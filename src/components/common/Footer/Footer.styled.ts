import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { fadeIn } from '../../../styles/animations';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${theme.colors.neutral.dark}, ${theme.colors.neutral.black});
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing['3xl']} 0 ${theme.spacing.xl} 0;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.xl};
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['2xl']};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: ${theme.spacing['3xl']};
  }
`;

export const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.primary.light};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.bold};
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    color: ${theme.colors.neutral.light};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing.md};
  }

  ul {
    li {
      margin-bottom: ${theme.spacing.sm};
      
      a {
        color: ${theme.colors.neutral.light};
        transition: color 0.3s ease;

        &:hover {
          color: ${theme.colors.primary.light};
        }
      }
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.neutral.light};

  .icon {
    color: ${theme.colors.primary.light};
    font-size: 1.2rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: ${theme.borderRadius.full};
    background: ${theme.colors.primary.main}20;
    color: ${theme.colors.primary.light};
    transition: all 0.3s ease;

    &:hover {
      background: ${theme.colors.primary.main};
      color: ${theme.colors.primary.contrast};
      transform: translateY(-2px);
    }
  }
`;

export const FooterBottom = styled.div`
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.neutral.medium}40;
  text-align: center;
  color: ${theme.colors.neutral.light};
  font-size: ${theme.typography.fontSize.sm};

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const Copyright = styled.p`
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.tablet}) {
    justify-content: flex-end;
  }

  a {
    color: ${theme.colors.neutral.light};
    font-size: ${theme.typography.fontSize.sm};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary.light};
    }
  }
`;