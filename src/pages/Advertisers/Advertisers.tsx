import React from 'react';
import { TrendingUp, Analytics, Speed, Security, CheckCircle } from '@mui/icons-material';
import { Layout, PageContainer } from '../../components/common/Layout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Section, Grid } from '../../styles/GlobalStyles';
import { PUBLIC_IMAGES } from '../../utils/publicImages';

export const Advertisers: React.FC = () => {
  const advertiserBenefits = [
    {
      icon: <TrendingUp />,
      title: 'Scale Your Campaigns',
      description: 'Access our network of 200+ verified affiliates to scale your campaigns globally with quality traffic and measurable results.'
    },
    {
      icon: <Analytics />,
      title: 'Advanced Analytics',
      description: 'Get real-time insights into campaign performance with comprehensive reporting and ROI tracking across all channels.'
    },
    {
      icon: <Speed />,
      title: 'Fast Implementation',
      description: 'Launch your campaigns quickly with our streamlined onboarding process and dedicated account management support.'
    },
    {
      icon: <Security />,
      title: 'Fraud Protection',
      description: 'Benefit from our advanced fraud detection system that ensures traffic quality and protects your advertising investment.'
    }
  ];

  const features = [
    'Real-time campaign tracking',
    'Quality score monitoring',
    'Multi-platform support',
    'Dedicated account manager',
    'Custom integration options',
    'Detailed performance reports'
  ];

  return (
    <Layout>
      <Section>
        <PageContainer>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              For Advertisers
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6c757d', maxWidth: '800px', margin: '0 auto' }}>
              Partner with Adsfizz Digital to scale your advertising campaigns with premium traffic sources, 
              advanced analytics, and performance-driven results across web and mobile platforms.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#343a40' }}>
                  Drive Performance at Scale
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6c757d', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Connect with our premium affiliate network to reach your target audience effectively. 
                  Our performance marketing solutions ensure you only pay for verified results.
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem', color: '#343a40' }}>What's Included:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {features.map((feature, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.75rem',
                        color: '#6c757d'
                      }}>
                        <CheckCircle style={{ color: '#4caf50', fontSize: '1.2rem' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="primary" size="large" icon={<TrendingUp />}>
                  Start Campaign
                </Button>
              </div>
              <div style={{ position: 'relative' }}>
                <img 
                  src={PUBLIC_IMAGES.services.digital} 
                  alt="Digital Advertising Dashboard"
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '1rem',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
            </div>
          </div>

          <Grid columns={2} gap="2rem">
            {advertiserBenefits.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                description={benefit.description}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '1rem' 
                }}>
                  <div style={{ 
                    padding: '1rem', 
                    borderRadius: '0.75rem', 
                    background: 'linear-gradient(135deg, #1976d220, #ff6b3520)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {React.cloneElement(benefit.icon, { 
                      style: { fontSize: '2rem', color: '#1976d2' } 
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, #1976d210, #ff6b3510)',
            borderRadius: '1rem'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#343a40' }}>
              Ready to Scale Your Campaigns?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6c757d', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join leading brands who trust Adsfizz Digital for their performance marketing needs. 
              Get started today and see measurable results within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="large">
                Get Started Now
              </Button>
              <Button variant="outline" size="large">
                Schedule Demo
              </Button>
            </div>
          </div>
        </PageContainer>
      </Section>
    </Layout>
  );
};