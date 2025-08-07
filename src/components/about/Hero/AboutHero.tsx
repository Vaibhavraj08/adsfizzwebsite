import React from 'react';
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Target, 
  Zap, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import {
  AboutHeroContainer,
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
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  StatsSection,
  StatsGrid,
  StatCard,
  StatIcon,
  StatNumber,
  StatLabel,
  StatDescription,
  RightContent,
  VisualContainer,
  TeamCard,
  TeamHeader,
  TeamTitle,
  TeamMembers,
  TeamMember,
  MemberAvatar,
  MemberInfo,
  MemberName,
  MemberRole,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  CTASection,
  CTAButton,
  ButtonIcon
} from './AboutHero.styled';

export const AboutHero: React.FC = () => {
  return (
    <AboutHeroContainer>
      {/* Background Elements */}
      <BackgroundOverlay />
      <BackgroundBlur $position="top-left" />
      <BackgroundBlur $position="bottom-right" />
      
      {/* Floating Elements */}
      <FloatingElement $position="top-right" $delay={0}>
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl rotate-12 opacity-70"></div>
      </FloatingElement>
      <FloatingElement $position="top-left" $delay={1.5}>
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60"></div>
      </FloatingElement>
      <FloatingElement $position="bottom-left" $delay={0.5}>
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg rotate-45 opacity-80"></div>
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
                  <Award className="w-4 h-4" />
                </BadgeIcon>
                Industry Leaders Since 2018
              </Badge>

              {/* Main Headline */}
              <MainHeadline>
                Empowering Brands with
                <GradientText>
                  Data-Driven Performance
                </GradientText>
              </MainHeadline>

              {/* Description */}
              <Description>
                At Adsfizz Digital, we've built our reputation on delivering exceptional results 
                for our partners. Our team of performance marketing experts combines cutting-edge 
                technology with deep industry knowledge to drive measurable growth across all 
                digital channels.
              </Description>

              {/* Features List */}
              <FeaturesList>
                <FeatureItem>
                  <FeatureIcon>
                    <CheckCircle className="w-5 h-5" />
                  </FeatureIcon>
                  <FeatureText>Advanced tracking and attribution technology</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>
                    <CheckCircle className="w-5 h-5" />
                  </FeatureIcon>
                  <FeatureText>24/7 dedicated account management</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>
                    <CheckCircle className="w-5 h-5" />
                  </FeatureIcon>
                  <FeatureText>Real-time performance optimization</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon>
                    <CheckCircle className="w-5 h-5" />
                  </FeatureIcon>
                  <FeatureText>Transparent reporting and analytics</FeatureText>
                </FeatureItem>
              </FeaturesList>

              {/* CTA */}
              <CTASection>
                <CTAButton>
                  Learn More About Our Story
                  <ButtonIcon>
                    <ArrowRight className="w-5 h-5" />
                  </ButtonIcon>
                </CTAButton>
              </CTASection>
            </LeftContent>

            {/* Right Content */}
            <RightContent>
              <VisualContainer>
                
                {/* Team Card */}
                <TeamCard>
                  <TeamHeader>
                    <TeamTitle>Our Expert Team</TeamTitle>
                  </TeamHeader>
                  
                  <TeamMembers>
                    <TeamMember>
                      <MemberAvatar $color="blue" />
                      <MemberInfo>
                        <MemberName>Sarah Chen</MemberName>
                        <MemberRole>VP of Performance</MemberRole>
                      </MemberInfo>
                    </TeamMember>
                    
                    <TeamMember>
                      <MemberAvatar $color="purple" />
                      <MemberInfo>
                        <MemberName>Marcus Rodriguez</MemberName>
                        <MemberRole>Head of Analytics</MemberRole>
                      </MemberInfo>
                    </TeamMember>
                    
                    <TeamMember>
                      <MemberAvatar $color="green" />
                      <MemberInfo>
                        <MemberName>Emily Watson</MemberName>
                        <MemberRole>Client Success Lead</MemberRole>
                      </MemberInfo>
                    </TeamMember>
                  </TeamMembers>
                </TeamCard>

                {/* Values Grid */}
                <ValuesGrid>
                  <ValueCard $color="emerald">
                    <ValueIcon>
                      <Shield className="w-6 h-6" />
                    </ValueIcon>
                    <ValueTitle>Trust</ValueTitle>
                    <ValueDescription>Transparent partnerships</ValueDescription>
                  </ValueCard>
                  
                  <ValueCard $color="blue">
                    <ValueIcon>
                      <Zap className="w-6 h-6" />
                    </ValueIcon>
                    <ValueTitle>Innovation</ValueTitle>
                    <ValueDescription>Cutting-edge solutions</ValueDescription>
                  </ValueCard>
                  
                  <ValueCard $color="purple">
                    <ValueIcon>
                      <Target className="w-6 h-6" />
                    </ValueIcon>
                    <ValueTitle>Results</ValueTitle>
                    <ValueDescription>Performance-focused</ValueDescription>
                  </ValueCard>
                </ValuesGrid>
              </VisualContainer>
            </RightContent>
          </ContentGrid>

          {/* Stats Section */}
          <StatsSection>
            <StatsGrid>
              <StatCard>
                <StatIcon $color="blue">
                  <Users className="w-8 h-8" />
                </StatIcon>
                <StatNumber>200+</StatNumber>
                <StatLabel>Global Partners</StatLabel>
                <StatDescription>Trusted brands worldwide</StatDescription>
              </StatCard>
              
              <StatCard>
                <StatIcon $color="emerald">
                  <Globe className="w-8 h-8" />
                </StatIcon>
                <StatNumber>50+</StatNumber>
                <StatLabel>Countries</StatLabel>
                <StatDescription>International reach</StatDescription>
              </StatCard>
              
              <StatCard>
                <StatIcon $color="purple">
                  <TrendingUp className="w-8 h-8" />
                </StatIcon>
                <StatNumber>$500M+</StatNumber>
                <StatLabel>Revenue Generated</StatLabel>
                <StatDescription>For our partners</StatDescription>
              </StatCard>
              
              <StatCard>
                <StatIcon $color="orange">
                  <Clock className="w-8 h-8" />
                </StatIcon>
                <StatNumber>6+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
                <StatDescription>Industry expertise</StatDescription>
              </StatCard>
            </StatsGrid>
          </StatsSection>
        </Container>
      </MainContent>
    </AboutHeroContainer>
  );
};