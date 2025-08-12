import React from 'react';
import { PersonAdd, TrendingUp, HowToReg, GetApp } from '@mui/icons-material';
import { Button } from '../../common/Button';
import { SERVICES } from '../../../utils/constants';
import {
  ServicesContainer,
  ServicesContent,
  ServicesHeader,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures
} from './Services.styled';

const iconMap = {
  PersonAdd,
  TrendingUp,
  HowToReg,
  GetApp
};

export const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <ServicesHeader>
          <h2>
            Our <span className="highlight">Performance</span> Models
          </h2>
          <p>
            Choose from our comprehensive range of performance marketing models 
            designed to maximize your ROI and drive measurable results.
          </p>
        </ServicesHeader>
        
        <ServicesGrid>
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <ServiceCard key={service.id}>
                <ServiceIcon>
                  <IconComponent className="icon" />
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ServiceFeatures>
                {/* <Button variant="outline" size="medium">
                  Learn More
                </Button> */}
              </ServiceCard>
            );
          })}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};