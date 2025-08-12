import React from 'react';
import { ArrowRight, TrendingUp, Globe, Smartphone, BarChart3, Target, Zap, Users } from 'lucide-react';
import {
  HeroContainer,
  BackgroundOverlay,
  BackgroundBlur,
  FloatingElement,
  MainContent,
  Container,
  ContentGrid,
  LeftContent,
  Badge,
  BadgeIcon,
  MainHeadline,
  GradientText,
  Description,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ButtonIcon,
  TrustIndicators,
  TrustItem,
  TrustIcon,
  RightContent,
  VisualContainer,
  DashboardPreview,
  DashboardHeader,
  DashboardTitle,
  StatusIndicator,
  MetricsGrid,
  MetricCard,
  MetricHeader,
  MetricIcon,
  MetricLabel,
  MetricValue,
  MetricChange,
  ChartSection,
  ChartRow,
  ChartDot,
  ChartBar,
  ChartFill,
  ChartLabel,
  FloatingCard,
  FloatingCardIcon,
  FloatingCardTitle
} from './Hero.styled';

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      {/* Background Elements */}
      <BackgroundOverlay />
      <BackgroundBlur $position="top-right" />
      <BackgroundBlur $position="bottom-left" />
      
      {/* Floating Elements */}
      <FloatingElement $position="top-right" $delay={0}>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg rotate-12 opacity-80"></div>
      </FloatingElement>
      <FloatingElement $position="top-left" $delay={2}>
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60"></div>
      </FloatingElement>
      <FloatingElement $position="bottom-right" $delay={0}>
        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg rotate-45 opacity-70"></div>
      </FloatingElement>

      {/* Main Content */}
      <MainContent>
        <Container>
          <ContentGrid>
            
            {/* Left Content */}
            <LeftContent>
              {/* Badge */}
              <Badge>
                <BadgeIcon>
                  <Zap className="w-4 h-4" />
                </BadgeIcon>
                Global Affiliate Marketing Leader
              </Badge>

              {/* Main Headline */}
              <MainHeadline>
                Drive Performance
                <GradientText>
                  with Adsfizz Digital
                </GradientText>
              </MainHeadline>

              {/* Description */}
              <Description>
                Leading global Affiliate Marketing Network delivering performance-driven results across Web & Mobile platforms. Partner with us to scale your campaigns and achieve measurable ROI across web and mobile platforms.
              </Description>

              {/* Stats */}
              <StatsGrid>
                <StatItem>
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Active Campaigns</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>150M+</StatNumber>
                  <StatLabel>Monthly Impressions</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>98%</StatNumber>
                  <StatLabel>Client Satisfaction</StatLabel>
                </StatItem>
              </StatsGrid>

              {/* CTA Buttons */}
              <ButtonGroup>
                <PrimaryButton as="a" href="https://adsfizzdigital.offer18.com/m" target="_blank" rel="noopener noreferrer">
                  Start Your Campaign
                  <ButtonIcon>
                    <ArrowRight className="w-5 h-5" />
                  </ButtonIcon>
                </PrimaryButton>
                {/* <SecondaryButton>
                  View Case Studies
                </SecondaryButton> */}
              </ButtonGroup>

              {/* Trust Indicators */}
              <TrustIndicators>
                <TrustItem>
                  <TrustIcon $color="green">
                    <Globe className="w-5 h-5" />
                  </TrustIcon>
                  <span>Global Reach</span>
                </TrustItem>
                <TrustItem>
                  <TrustIcon $color="blue">
                    <Target className="w-5 h-5" />
                  </TrustIcon>
                  <span>Performance-Driven</span>
                </TrustItem>
                <TrustItem>
                  <TrustIcon $color="purple">
                    <Users className="w-5 h-5" />
                  </TrustIcon>
                  <span>Trusted Partners</span>
                </TrustItem>
              </TrustIndicators>
            </LeftContent>

            {/* Right Content - Visual Elements */}
            <RightContent>
              <VisualContainer>
                
                {/* Dashboard Preview */}
                <DashboardPreview>
                  {/* Header */}
                  <DashboardHeader>
                    <DashboardTitle>Campaign Dashboard</DashboardTitle>
                    <StatusIndicator />
                  </DashboardHeader>
                  
                  {/* Metrics Grid */}
                  <MetricsGrid>
                    <MetricCard $color="blue">
                      <MetricHeader>
                        <MetricIcon>
                          <BarChart3 className="w-4 h-4" />
                        </MetricIcon>
                        <MetricLabel>Conversions</MetricLabel>
                      </MetricHeader>
                      <MetricValue>2,847</MetricValue>
                      <MetricChange>+23.5%</MetricChange>
                    </MetricCard>
                    
                    <MetricCard $color="purple">
                      <MetricHeader>
                        <MetricIcon>
                          <TrendingUp className="w-4 h-4" />
                        </MetricIcon>
                        <MetricLabel>ROI</MetricLabel>
                      </MetricHeader>
                      <MetricValue>284%</MetricValue>
                      <MetricChange>+12.8%</MetricChange>
                    </MetricCard>
                  </MetricsGrid>
                  
                  {/* Chart Representation */}
                  <ChartSection>
                    <ChartRow>
                      <ChartDot $color="blue" />
                      <ChartBar>
                        <ChartFill $width={80} $color="blue-purple" />
                      </ChartBar>
                      <ChartLabel>Web</ChartLabel>
                    </ChartRow>
                    
                    <ChartRow>
                      <ChartDot $color="green" />
                      <ChartBar>
                        <ChartFill $width={60} $color="green-teal" />
                      </ChartBar>
                      <ChartLabel>Mobile</ChartLabel>
                    </ChartRow>
                    
                    <ChartRow>
                      <ChartDot $color="yellow" />
                      <ChartBar>
                        <ChartFill $width={67} $color="yellow-orange" />
                      </ChartBar>
                      <ChartLabel>Social</ChartLabel>
                    </ChartRow>
                  </ChartSection>
                </DashboardPreview>

                {/* Floating Cards */}
                <FloatingCard $position="top-right" $color="green-teal">
                  <FloatingCardIcon>
                    <Globe className="w-8 h-8" />
                  </FloatingCardIcon>
                  <FloatingCardTitle>Global Network</FloatingCardTitle>
                </FloatingCard>

                <FloatingCard $position="bottom-left" $color="purple-pink">
                  <FloatingCardIcon>
                    <Smartphone className="w-8 h-8" />
                  </FloatingCardIcon>
                  <FloatingCardTitle>Mobile First</FloatingCardTitle>
                </FloatingCard>
              </VisualContainer>
            </RightContent>
          </ContentGrid>
        </Container>
      </MainContent>
    </HeroContainer>
  );
};