import React from 'react';
import { MonetizationOn, Timeline, Group, Star, CheckCircle } from '@mui/icons-material';
import { Layout, PageContainer } from '../../components/common/Layout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Section, Grid } from '../../styles/GlobalStyles';
import { PUBLIC_IMAGES } from '../../utils/publicImages';

export const Publishers: React.FC = () => {
  const publisherBenefits = [
    {
      icon: <MonetizationOn />,
      title: 'Maximize Revenue',
      description: 'Earn competitive payouts with our premium campaigns across CPL, CPA, CPR, and CPI models.'
    },
    {
      icon: <Timeline />,
      title: 'Real-time Tracking',
      description: 'Monitor your performance with advanced analytics and real-time conversion tracking.'
    },
    {
      icon: <Group />,
      title: 'Dedicated Support',
      description: 'Get personalized support from our affiliate management team to optimize your campaigns.'
    },
    {
      icon: <Star />,
      title: 'Premium Offers',
      description: 'Access exclusive high-converting offers from top-tier advertisers in various verticals.'
    }
  ];

  const requirements = [
    'Quality traffic sources',
    'Compliance with advertising standards',
    'Minimum monthly volume requirements',
    'Proven track record in affiliate marketing',
    'Transparent traffic sources',
    'Professional website/platform'
  ];

  return (
    <Layout>
      <Section>
        <PageContainer>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              For Publishers
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6c757d', maxWidth: '800px', margin: '0 auto' }}>
              Join our exclusive network of 200+ premium publishers and monetize your traffic with 
              high-converting campaigns, competitive payouts, and dedicated support.
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
              <div style={{ position: 'relative' }}>
                <img 
                  src={PUBLIC_IMAGES.team.meeting} 
                  alt="Publisher Network Meeting"
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '1rem',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#343a40' }}>
                  Monetize Your Premium Traffic
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#6c757d', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Turn your quality traffic into revenue with our performance marketing network. 
                  Access exclusive campaigns and earn competitive commissions.
                </p>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem', color: '#343a40' }}>Publisher Requirements:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {requirements.map((requirement, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.75rem',
                        color: '#6c757d'
                      }}>
                        <CheckCircle style={{ color: '#4caf50', fontSize: '1.2rem' }} />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="primary" size="large" icon={<MonetizationOn />}>
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          <Grid columns={2} gap="2rem">
            {publisherBenefits.map((benefit, index) => (
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginTop: '4rem'
          }}>
            <Card title="Payout Models">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500' }}>CPL (Cost Per Lead)</span>
                  <span style={{ color: '#4caf50', fontWeight: '600' }}>$5 - $50</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500' }}>CPA (Cost Per Action)</span>
                  <span style={{ color: '#4caf50', fontWeight: '600' }}>$10 - $100</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500' }}>CPR (Cost Per Registration)</span>
                  <span style={{ color: '#4caf50', fontWeight: '600' }}>$3 - $25</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500' }}>CPI (Cost Per Install)</span>
                  <span style={{ color: '#4caf50', fontWeight: '600' }}>$1 - $15</span>
                </div>
              </div>
            </Card>

            <Card title="Payment Terms">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#343a40' }}>Payment Schedule</h4>
                  <p style={{ color: '#6c757d', margin: 0 }}>Weekly payments every Friday</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#343a40' }}>Minimum Payout</h4>
                  <p style={{ color: '#6c757d', margin: 0 }}>$100 minimum threshold</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#343a40' }}>Payment Methods</h4>
                  <p style={{ color: '#6c757d', margin: 0 }}>Wire transfer, PayPal, Payoneer</p>
                </div>
              </div>
            </Card>
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, #1976d210, #ff6b3510)',
            borderRadius: '1rem'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#343a40' }}>
              Ready to Join Our Network?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6c757d', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Start monetizing your traffic today with our premium affiliate network. 
              Apply now and get approved within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="large">
                Apply as Publisher
              </Button>
              <Button variant="outline" size="large">
                View Sample Offers
              </Button>
            </div>
          </div>
        </PageContainer>
      </Section>
    </Layout>
  );
};