import React from 'react';
import { PersonAdd, TrendingUp, HowToReg, GetApp, CheckCircle } from '@mui/icons-material';
import { Layout, PageContainer } from '../../components/common/Layout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { SERVICES } from '../../utils/constants';
import { Grid, Section } from '../../styles/GlobalStyles';

const iconMap = {
  PersonAdd,
  TrendingUp,
  HowToReg,
  GetApp
};

export const Services: React.FC = () => {
  return (
    <Layout>
      <Section>
        <PageContainer>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Our Performance Marketing Services
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6c757d', maxWidth: '800px', margin: '0 auto' }}>
              Choose from our comprehensive range of performance marketing models designed to maximize your ROI and drive measurable results across all digital channels.
            </p>
          </div>
          
          <Grid columns={2} gap="2rem">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <Card
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  footer={
                    <Button variant="primary" size="medium">
                      Get Started
                    </Button>
                  }
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ 
                      padding: '1rem', 
                      borderRadius: '0.75rem', 
                      background: 'linear-gradient(135deg, #1976d220, #ff6b3520)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent style={{ fontSize: '2rem', color: '#1976d2' }} />
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: '#343a40' }}>Key Features:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.features.map((feature, index) => (
                        <li key={index} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem', 
                          marginBottom: '0.5rem',
                          color: '#6c757d'
                        }}>
                          <CheckCircle style={{ color: '#4caf50', fontSize: '1rem' }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </Grid>
        </PageContainer>
      </Section>
    </Layout>
  );
};