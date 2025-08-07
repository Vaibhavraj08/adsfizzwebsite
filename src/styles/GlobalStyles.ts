import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.neutral.dark};
    background-color: ${theme.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.secondary};
    line-height: ${theme.typography.lineHeight.tight};
    font-weight: ${theme.typography.fontWeight.bold};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (max-width: 768px) {
    max-width: 100vw;
    padding: 0 0.5rem;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.xl};
  }
`;

export const Section = styled.section`
  padding: ${theme.spacing['3xl']} 0;

  @media (max-width: 768px) {
    width: 100vw;
    padding: ${theme.spacing.lg} 0;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['4xl']} 0;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 1}, 1fr);
  gap: ${props => props.gap || theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(${props => Math.min(props.columns || 2, 2)}, 1fr);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  }
`;