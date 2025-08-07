import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Grid } from '../../styles/GlobalStyles';

export const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['4xl']};

  h1 {
    font-size: ${theme.typography.fontSize['4xl']};
    margin-bottom: ${theme.spacing.lg};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize['5xl']};
    }
  }

  p {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.neutral.medium};
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;
  gap: ${theme.spacing['2xl']};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['2xl']};
`;

export const IconWrapper = styled.div`
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  background: linear-gradient(135deg, ${theme.colors.primary.light}20, ${theme.colors.accent.main}20);
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

export const IconComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.primary.main};
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.neutral.medium};
  
  svg {
    color: ${theme.colors.success.main};
    font-size: ${theme.typography.fontSize.md};
    flex-shrink: 0;
    margin-top: 3px; // Small adjustment for alignment
  }

  span {
    line-height: ${theme.typography.lineHeight.normal};
  }
`;