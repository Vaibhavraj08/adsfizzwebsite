import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { fadeIn, slideInLeft, slideInRight } from '../../../styles/animations';

export const FeaturesContainer = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.background.primary};
`;

export const FeaturesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.xl};
  }
`;

export const FeatureSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;
  margin-bottom: ${theme.spacing['4xl']};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing['4xl']};
  }

  &:nth-child(even) {
    @media (min-width: ${theme.breakpoints.tablet}) {
      .feature-text {
        order: 2;
      }
      .feature-visual {
        order: 1;
      }
    }
  }
`;

export const FeatureText = styled.div`
  animation: ${slideInLeft} 0.8s ease-out;

  &.reverse {
    animation: ${slideInRight} 0.8s ease-out;
  }

  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.neutral.dark};
    margin-bottom: ${theme.spacing.lg};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize['3xl']};
    }

    .highlight {
      background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.accent.main});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  p {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.neutral.medium};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing.xl};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize.lg};
    }
  }
`;

export const FeatureList = styled.ul`
  margin-bottom: ${theme.spacing.xl};

  li {
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing.md};
    color: ${theme.colors.neutral.medium};
    font-size: ${theme.typography.fontSize.base};
    margin-bottom: ${theme.spacing.md};

    .icon {
      color: ${theme.colors.primary.main};
      font-size: 1.5rem;
      margin-top: 2px;
      flex-shrink: 0;
    }
  }
`;

export const FeatureVisual = styled.div`
  position: relative;
  animation: ${slideInRight} 0.8s ease-out;

  &.reverse {
    animation: ${slideInLeft} 0.8s ease-out;
  }

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

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing['2xl']};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.lg};
  animation: ${fadeIn} 1s ease-out;

  .stat-number {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.primary.main};
    display: block;
    margin-bottom: ${theme.spacing.sm};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }

  .stat-label {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.neutral.medium};
    font-weight: ${theme.typography.fontWeight.medium};
  }
`;