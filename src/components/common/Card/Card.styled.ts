import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { fadeIn, scaleIn } from '../../../styles/animations';

export const StyledCard = styled.div`
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;
  border: 1px solid ${theme.colors.neutral.light};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.xl};
    animation: ${scaleIn} 0.3s ease-out;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['2xl']};
  }
`;

export const CardHeader = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const CardTitle = styled.h3`
  color: ${theme.colors.neutral.dark};
  font-size: ${theme.typography.fontSize.xl};
  margin-bottom: ${theme.spacing.sm};
  font-weight: ${theme.typography.fontWeight.bold};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['2xl']};
  }
`;

export const CardDescription = styled.p`
  color: ${theme.colors.neutral.medium};
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

export const CardContent = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;