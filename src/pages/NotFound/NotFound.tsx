import React from 'react';
import { ErrorOutline, Home } from '@mui/icons-material';
import { Layout, PageContainer } from '../../components/common/Layout';
import { Button } from '../../components/common/Button';
import { Section } from '../../styles/GlobalStyles';

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <Section>
        <PageContainer>
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '600px', 
            margin: '0 auto',
            padding: '4rem 2rem'
          }}>
            <div style={{ 
              fontSize: '8rem', 
              fontWeight: 'bold', 
              background: 'linear-gradient(135deg, #1976d2, #ff6b35)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem'
            }}>
              404
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '2rem' 
            }}>
              <ErrorOutline style={{ fontSize: '4rem', color: '#6c757d' }} />
            </div>
            
            <h1 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1rem', 
              color: '#343a40' 
            }}>
              Page Not Found
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d', 
              marginBottom: '3rem',
              lineHeight: '1.6'
            }}>
              Sorry, the page you are looking for doesn't exist or has been moved. 
              Let's get you back to our homepage.
            </p>
            
            <Button 
              variant="primary" 
              size="large" 
              icon={<Home />}
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </PageContainer>
      </Section>
    </Layout>
  );
};