import React from 'react';
import { PersonAdd, TrendingUp, HowToReg, GetApp, CheckCircle } from '@mui/icons-material';
import { Layout, PageContainer } from '../../components/common/Layout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { SERVICES } from '../../utils/constants';
import { Section } from '../../styles/GlobalStyles';
import {
  ServicesHeader,
  StyledGrid,
  StyledCardContent,
  IconWrapper,
  IconComponent,
  FeaturesList,
  FeatureItem
} from './Services.styles'; // Import new styled components

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
          <ServicesHeader>
            <h1>Our Performance Marketing Services</h1>
            <p>
              Choose from our comprehensive range of performance marketing models designed to maximize your ROI and drive measurable results across all digital channels.
            </p>
          </ServicesHeader>

          <StyledGrid>
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              
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
                  <StyledCardContent>
                    <IconWrapper>
                      <IconComponent>
                        <Icon />
                      </IconComponent>
                    </IconWrapper>
                    
                    <div>
                      <h4>Key Features:</h4>
                      <FeaturesList>
                        {service.features.map((feature, index) => (
                          <FeatureItem key={index}>
                            <CheckCircle />
                            <span>{feature}</span>
                          </FeatureItem>
                        ))}
                      </FeaturesList>
                    </div>
                  </StyledCardContent>
                </Card>
              );
            })}
          </StyledGrid>
        </PageContainer>
      </Section>
    </Layout>
  );
};