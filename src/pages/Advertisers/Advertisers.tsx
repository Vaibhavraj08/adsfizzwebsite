import React from 'react';
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  ArrowRight,
} from 'lucide-react';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Section,
  Container,
  SectionTitle,
  SectionSubtitle,
  Grid,
  Card,
  CardIconWrapper,
  CardTitle,
  CardDescription,
  CtaSection,
  CtaContent,
  CtaTitle,
  CtaDescription,
  ButtonGroup,
  Button,
} from './Advertisers.styles';

const Advertisers: React.FC = () => {
  return (
    <div>
      <HeroSection>
        <HeroContent>
          <div>
            <HeroTitle>Advertisers</HeroTitle>
            <HeroSubtitle>
              Transform your brand's digital presence with our cutting-edge advertising solutions
            </HeroSubtitle>
          </div>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Why Advertise With Us?</SectionTitle>
          <SectionSubtitle>
            We are industry leaders in Web and Mobile Web (M-Web) based brand advertising solutions. 
            Our platform empowers you to reach your target audience through innovative and engaging campaigns.
          </SectionSubtitle>

          <Grid>
            <Card>
              <CardIconWrapper>
                <Target size={40} color="white" />
              </CardIconWrapper>
              <CardTitle>Precision Targeting</CardTitle>
              <CardDescription>
                Reach the right customers at the perfect moment with our advanced targeting algorithms 
                and demographic insights.
              </CardDescription>
            </Card>

            <Card>
              <CardIconWrapper>
                <TrendingUp size={40} color="white" />
              </CardIconWrapper>
              <CardTitle>Maximum ROI</CardTitle>
              <CardDescription>
                Our data-driven strategies and optimization techniques ensure you achieve 
                the highest return on your advertising investment.
              </CardDescription>
            </Card>

            <Card>
              <CardIconWrapper>
                <BarChart3 size={40} color="white" />
              </CardIconWrapper>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>
                Access comprehensive real-time analytics and detailed reporting to track 
                performance and make data-driven decisions.
              </CardDescription>
            </Card>
          </Grid>
        </Container>
      </Section>

      <CtaSection>
        <Container>
          <CtaContent>
            <CtaTitle>Join As An Advertiser</CtaTitle>
            <CtaDescription>
              Our Marketing & Planning team empowers brands to achieve their objectives through 
              strategic inventory management. We amplify your digital presence across web and mobile 
              platforms, guiding you to choose the most effective channels and maximize ROI while 
              acquiring new customers.
            </CtaDescription>
            <ButtonGroup>
              <Button className="primary">
                Get Started Today
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </Button>
              <Button className="secondary">Learn More</Button>
            </ButtonGroup>
          </CtaContent>
        </Container>
      </CtaSection>
    </div>
  );
};

export default Advertisers;
