import React from 'react';
import { Header } from '../Header'; // Corrected path
import { Footer } from '../Footer'; // Corrected path
import { LayoutContainer, MainContent } from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};