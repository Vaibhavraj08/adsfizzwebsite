import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { fadeIn, scaleIn } from '../../../styles/animations';

export const ServicesContainer = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.background.secondary};
`;

export const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.xl};
  }
`;

export const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  animation: ${fadeIn} 0.8s ease-out;

  h2 {
    font-size: ${theme.typography.fontSize['3xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.neutral.dark};
    margin-bottom: ${theme.spacing.lg};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize['4xl']};
    }

    .highlight {
      background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.accent.main});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  p {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.neutral.medium};
    max-width: 600px;
    margin: 0 auto;
    line-height: ${theme.typography.lineHeight.relaxed};
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing['2xl']};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;
  border: 1px solid ${theme.colors.neutral.light};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.xl};
    animation: ${scaleIn} 0.3s ease-out;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.accent.main});
  }
`;

export const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.xl};
  background: linear-gradient(135deg, ${theme.colors.primary.main}20, ${theme.colors.accent.main}20);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};

  .icon {
    font-size: 2rem;
    color: ${theme.colors.primary.main};
  }
`;

export const ServiceTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral.dark};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['2xl']};
  }
`;

export const ServiceDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral.medium};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.lg};
`;

export const ServiceFeatures = styled.ul`
  margin-bottom: ${theme.spacing.lg};

  li {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    color: ${theme.colors.neutral.medium};
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing.sm};

    &::before {
      content: '✓';
      color: ${theme.colors.success.main};
      font-weight: ${theme.typography.fontWeight.bold};
      font-size: ${theme.typography.fontSize.base};
    }
  }
`;