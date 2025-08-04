import React from 'react';
import { CheckCircle, TrendingUp, Security, Speed, Analytics } from '@mui/icons-material';
import { Button } from '../../common/Button';
import { PUBLIC_IMAGES } from '../../../utils/publicImages';
import {
  FeaturesContainer,
  FeaturesContent,
  FeatureSection,
  FeatureText,
  FeatureList,
  FeatureVisual,
  StatsGrid,
  StatCard
} from './Features.styled';

export const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      <FeaturesContent>
        <FeatureSection>
          <FeatureText className="feature-text">
            <h3>
              <span className="highlight">Real-time</span> Performance Tracking
            </h3>
            <p>
              Monitor your campaigns with advanced analytics and real-time reporting. 
              Get insights into performance metrics, conversion rates, and ROI to 
              optimize your marketing strategies effectively.
            </p>
            <FeatureList>
              <li>
                <Analytics className="icon" />
                <span>Advanced Analytics Dashboard</span>
              </li>
              <li>
                <TrendingUp className="icon" />
                <span>Live Performance Metrics</span>
              </li>
              <li>
                <Speed className="icon" />
                <span>Instant Campaign Optimization</span>
              </li>
            </FeatureList>
            <Button variant="primary" size="medium" icon={<TrendingUp />}>
              View Analytics
            </Button>
          </FeatureText>
          <FeatureVisual className="feature-visual">
            <img 
              src={PUBLIC_IMAGES.hero.analytics} 
              alt="Performance Analytics Dashboard"
            />
          </FeatureVisual>
        </FeatureSection>

        <FeatureSection>
          <FeatureText className="feature-text reverse">
            <h3>
              <span className="highlight">Verified</span> Quality Traffic
            </h3>
            <p>
              Partner with 200+ trusted affiliates worldwide to access high-quality, 
              verified traffic. Our rigorous vetting process ensures you get genuine 
              leads and conversions that drive real business growth.
            </p>
            <FeatureList>
              <li>
                <CheckCircle className="icon" />
                <span>200+ Verified Affiliates</span>
              </li>
              <li>
                <Security className="icon" />
                <span>Fraud Prevention System</span>
              </li>
              <li>
                <TrendingUp className="icon" />
                <span>Quality Score Monitoring</span>
              </li>
            </FeatureList>
            <Button variant="secondary" size="medium" icon={<CheckCircle />}>
              Join Network
            </Button>
          </FeatureText>
          <FeatureVisual className="feature-visual reverse">
            <img 
              src={PUBLIC_IMAGES.services.performance} 
              alt="Quality Traffic Network"
            />
          </FeatureVisual>
        </FeatureSection>

        <StatsGrid>
          <StatCard>
            <span className="stat-number">98%</span>
            <span className="stat-label">Accuracy Rate</span>
          </StatCard>
          <StatCard>
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </StatCard>
          <StatCard>
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries</span>
          </StatCard>
          <StatCard>
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </StatCard>
        </StatsGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};