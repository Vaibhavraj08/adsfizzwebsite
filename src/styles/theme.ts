export const theme = {
  colors: {
    primary: {
      main: '#1976d2',
      dark: '#0d47a1',
      light: '#42a5f5',
      contrast: '#ffffff'
    },
    secondary: {
      main: '#f50057',
      dark: '#c51162',
      light: '#ff5983',
      contrast: '#ffffff'
    },
    accent: {
      main: '#ff6b35',
      dark: '#e65100',
      light: '#ff8a50',
      contrast: '#ffffff'
    },
    success: {
      main: '#4caf50',
      dark: '#388e3c',
      light: '#81c784'
    },
    warning: {
      main: '#ff9800',
      dark: '#f57c00',
      light: '#ffb74d'
    },
    error: {
      main: '#f44336',
      dark: '#d32f2f',
      light: '#e57373'
    },
    neutral: {
      white: '#ffffff',
      light: '#f8f9fa',
      medium: '#6c757d',
      dark: '#343a40',
      black: '#000000'
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      dark: '#343a40'
    }
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      secondary: "'Poppins', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  }
};

export type Theme = typeof theme;