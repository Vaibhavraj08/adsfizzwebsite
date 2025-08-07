import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { fadeIn, slideInLeft } from '../../styles/animations';

export const AboutContainer = styled.div`
   padding: ${theme.spacing['2xl']} 0;
`;


export const AboutSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;

  &:nth-child(even) {
    background: ${theme.colors.background.secondary};
  }
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing['4xl']};
  }
`;

export const TextContent = styled.div`
  animation: ${slideInLeft} 0.8s ease-out;

  h2 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.neutral.dark};
    margin-bottom: ${theme.spacing.lg};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }

  p {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.neutral.medium};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing.lg};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize.lg};
    }
  }
`;

export const SpecialtiesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.neutral.medium};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    background: ${theme.colors.background.primary};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.sm};

    .icon {
      color: ${theme.colors.primary.main};
      font-size: 1.2rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.lg};
  }

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: -15px;
    bottom: -15px;
    background: linear-gradient(135deg, ${theme.colors.primary.main}15, ${theme.colors.accent.main}15);
    border-radius: ${theme.borderRadius.xl};
    z-index: -1;
  }
`;

export const CompanyInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const InfoCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  animation: ${fadeIn} 0.6s ease-out;

  .icon {
    font-size: 2.5rem;
    color: ${theme.colors.primary.main};
    margin-bottom: ${theme.spacing.md};
  }

  h3 {
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.neutral.dark};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.neutral.medium};
  }
`;