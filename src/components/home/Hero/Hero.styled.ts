import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { fadeIn, slideInLeft, slideInRight, gradient } from '../../../styles/animations';

export const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, ${theme.colors.primary.main}10, ${theme.colors.accent.main}10);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      ${theme.colors.primary.main}05, 
      ${theme.colors.accent.main}05, 
      ${theme.colors.primary.main}05
    );
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite;
    z-index: 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.xl};
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing['4xl']};
  }
`;

export const HeroText = styled.div`
  animation: ${slideInLeft} 0.8s ease-out;

  h1 {
    font-size: ${theme.typography.fontSize['3xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.neutral.dark};
    margin-bottom: ${theme.spacing.lg};
    line-height: ${theme.typography.lineHeight.tight};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize['4xl']};
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: ${theme.typography.fontSize['5xl']};
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
    margin-bottom: ${theme.spacing['2xl']};
    line-height: ${theme.typography.lineHeight.relaxed};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing['2xl']};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
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

export const HeroVisual = styled.div`
  position: relative;
  animation: ${slideInRight} 0.8s ease-out;

  img {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.xl};
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, ${theme.colors.primary.main}20, ${theme.colors.accent.main}20);
    border-radius: ${theme.borderRadius.xl};
    z-index: -1;
  }
`;