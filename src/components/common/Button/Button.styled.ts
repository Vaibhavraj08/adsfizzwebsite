import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { fadeIn, pulse } from '../../../styles/animations';

interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'primary':
      return css`
        background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.primary.dark});
        color: ${theme.colors.primary.contrast};
        border: 2px solid transparent;

        &:hover {
          background: linear-gradient(135deg, ${theme.colors.primary.dark}, ${theme.colors.primary.main});
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.lg};
        }
      `;
    case 'secondary':
      return css`
        background: linear-gradient(135deg, ${theme.colors.accent.main}, ${theme.colors.accent.dark});
        color: ${theme.colors.accent.contrast};
        border: 2px solid transparent;

        &:hover {
          background: linear-gradient(135deg, ${theme.colors.accent.dark}, ${theme.colors.accent.main});
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.lg};
        }
      `;
    case 'outline':
      return css`
        background: transparent;
        color: ${theme.colors.primary.main};
        border: 2px solid ${theme.colors.primary.main};

        &:hover {
          background: ${theme.colors.primary.main};
          color: ${theme.colors.primary.contrast};
          transform: translateY(-2px);
        }
      `;
    case 'ghost':
      return css`
        background: transparent;
        color: ${theme.colors.primary.main};
        border: 2px solid transparent;

        &:hover {
          background: ${theme.colors.primary.light}20;
          transform: translateY(-1px);
        }
      `;
    default:
      return css``;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        font-size: ${theme.typography.fontSize.sm};
      `;
    case 'large':
      return css`
        padding: ${theme.spacing.md} ${theme.spacing['2xl']};
        font-size: ${theme.typography.fontSize.lg};
      `;
    default:
      return css`
        padding: ${theme.spacing.sm} ${theme.spacing.xl};
        font-size: ${theme.typography.fontSize.base};
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  animation: ${fadeIn} 0.6s ease-out;

  ${props => getVariantStyles(props.$variant || 'primary')}
  ${props => getSizeStyles(props.$size || 'medium')}

  &:active {
    transform: translateY(0);
    animation: ${pulse} 0.2s ease-out;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    font-size: 1.2em;
  }
`;