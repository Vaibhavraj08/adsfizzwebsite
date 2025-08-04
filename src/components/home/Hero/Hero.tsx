import React from 'react';
import { TrendingUp, Business } from '@mui/icons-material';
import { Button } from '../../common/Button';
import { COMPANY_INFO, AFFILIATE_COUNT } from '../../../utils/constants';
import { PUBLIC_IMAGES } from '../../../utils/publicImages';
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroActions,
  HeroStats,
  StatItem,
  HeroVisual
} from './Hero.styled';

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>
            Drive <span className="highlight">Performance</span> with{' '}
            <span className="highlight">{COMPANY_INFO.name}</span>
          </h1>
          <p>
            {COMPANY_INFO.description}. Partner with us to scale your campaigns 
            and achieve measurable ROI across web and mobile platforms.
          </p>
          <HeroActions>
            <Button 
              variant="primary" 
              size="large"
              icon={<TrendingUp />}
            >
              Start Campaign
            </Button>
            <Button 
              variant="outline" 
              size="large"
              icon={<Business />}
            >
              Join Network
            </Button>
          </HeroActions>
          <HeroStats>
            <StatItem>
              <span className="stat-number">{AFFILIATE_COUNT}</span>
              <span className="stat-label">Trusted Affiliates</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">50+</span>
              <span className="stat-label">Countries</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </StatItem>
          </HeroStats>
        </HeroText>
        <HeroVisual>
          <img 
            src={PUBLIC_IMAGES.hero.main} 
            alt="Digital Marketing Performance Dashboard"
          />
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};