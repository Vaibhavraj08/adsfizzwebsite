import React from 'react';
import { Layout, PageContainer } from '../../components/common/Layout';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  ArrowRight,
  Shield,
  Globe,
  BarChart3,
  Zap,
  CheckCircle,
  Star,
  Award,
  Target,
  Clock,
  Smartphone,
  Monitor,
  CreditCard,
  UserCheck
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
  EnhancedContentCard,
  ContentLayout,
  ContentImageSection,
  ContentImage,
  ContentImageOverlay,
  ContentTextSection,
  ContentBadge,
  ContentTitle,
  ContentText,
  FeatureList,
  FeatureItem,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
  IconWrapper,
  BackgroundPattern1,
  BackgroundPattern2,
  RequirementsGrid,
  RequirementCard,
  RequirementIcon,
  RequirementTitle,
  RequirementText,
  ProcessGrid,
  ProcessStep,
  ProcessNumber,
  ProcessTitle,
  ProcessDescription,
} from './Publishers.styles';
import AdFormatsComponent from './AdFormatsComponent';

export const Publishers: React.FC = () => {

  return (
    <Layout>
      <HeroSection>
        <HeroContent>
          <div>
            <HeroTitle>Publishers</HeroTitle>
            <HeroSubtitle>
              Monetize your traffic and maximize your revenue with our premium affiliate marketing platform
            </HeroSubtitle>
            <Button
              className="primary"
              as="a"
              href="https://adsfizzdigital.offer18.com/m/signup_self_adv?r=&am="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 32,
                fontSize: '1.15rem',
                padding: '1.1rem 2.5rem',
                fontWeight: 700,
                borderRadius: 9999,
                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.18)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                transition: 'all 0.3s',
              }}
            >
              Join Now
              <ArrowRight size={22} style={{ marginLeft: 10 }} />
            </Button>
          </div>
        </HeroContent>
      </HeroSection>

      {/* Why Choose Us Section */}
      <Section as={BackgroundPattern1}>
        <PageContainer>
          <EnhancedContentCard>
            <ContentLayout>
              <ContentImageSection>
                <ContentImage 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Why choose our affiliate program"
                />
                <ContentImageOverlay>
                  <IconWrapper>
                    <Star size={28} />
                  </IconWrapper>
                </ContentImageOverlay>
              </ContentImageSection>
              
              <ContentTextSection>
                <ContentBadge>
                  <Star size={16} />
                  Why Choose Us
                </ContentBadge>
                
                <ContentTitle>
                  <span>Maximize</span> Your Revenue Potential
                </ContentTitle>
                
                <ContentText>
                  Join thousands of successful publishers who trust Adsfizz to monetize their traffic effectively. Our platform offers industry-leading commission rates, cutting-edge tracking technology, and dedicated support to help you succeed.
                </ContentText>
                
                <FeatureList>
                  <FeatureItem>Highest commission rates in the industry</FeatureItem>
                  <FeatureItem>Real-time tracking and detailed analytics</FeatureItem>
                  <FeatureItem>Weekly payments with multiple payout options</FeatureItem>
                  <FeatureItem>Dedicated account management support</FeatureItem>
                  <FeatureItem>Premium offers across all verticals</FeatureItem>
                </FeatureList>
                
                <StatsGrid>
                  <StatItem>
                    <StatNumber>$50M+</StatNumber>
                    <StatLabel>Paid Out</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>5,000+</StatNumber>
                    <StatLabel>Active Publishers</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>99.8%</StatNumber>
                    <StatLabel>On-Time Payments</StatLabel>
                  </StatItem>
                </StatsGrid>
              </ContentTextSection>
            </ContentLayout>
          </EnhancedContentCard>
        </PageContainer>
      </Section>

      {/* Ad Formats Component */}
      <AdFormatsComponent />

      {/* How It Works Section */}
      <Section as={BackgroundPattern2}>
        <PageContainer>
          <EnhancedContentCard>
            <ContentLayout style={{ gridTemplateColumns: '1.2fr 1fr' }}>
              <ContentTextSection>
                <ContentBadge>
                  <Zap size={16} />
                  Simple Process
                </ContentBadge>
                
                <ContentTitle>
                  <span>How It Works</span> - Start Earning Today
                </ContentTitle>
                
                <ContentText>
                  Getting started with Adsfizz is simple and straightforward. Our streamlined process ensures you can begin monetizing your traffic quickly and efficiently, with full support every step of the way.
                </ContentText>
                
                <FeatureList>
                  <FeatureItem>Quick and easy registration process</FeatureItem>
                  <FeatureItem>Access to exclusive high-converting offers</FeatureItem>
                  <FeatureItem>Advanced tracking and optimization tools</FeatureItem>
                  <FeatureItem>Real-time performance monitoring</FeatureItem>
                  <FeatureItem>Flexible payment schedules and methods</FeatureItem>
                </FeatureList>
                
                <StatsGrid>
                  <StatItem>
                    <StatNumber>24hrs</StatNumber>
                    <StatLabel>Approval Time</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>300+</StatNumber>
                    <StatLabel>Active Offers</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>15%</StatNumber>
                    <StatLabel>Avg Commission</StatLabel>
                  </StatItem>
                </StatsGrid>
              </ContentTextSection>
              
              <ContentImageSection>
                <ContentImage 
                  src="/assets/image/service.png"
                  alt="How affiliate marketing works for publishers"
                />
                <ContentImageOverlay>
                  <IconWrapper>
                    <Zap size={28} />
                  </IconWrapper>
                </ContentImageOverlay>
              </ContentImageSection>
            </ContentLayout>
          </EnhancedContentCard>
        </PageContainer>
      </Section>

      {/* Getting Started Process */}
      {/* <Section style={{ backgroundColor: '#ffffff' }}>
        <Container>
          <SectionTitle>Getting Started is Easy</SectionTitle>
          <SectionSubtitle>
            Follow these simple steps to join our affiliate network and start earning commissions from your traffic
          </SectionSubtitle>
          
          <ProcessGrid>
            <ProcessStep delay="0.1s">
              <ProcessNumber>1</ProcessNumber>
              <ProcessTitle>Sign Up</ProcessTitle>
              <ProcessDescription>
                Create your publisher account with basic information about your traffic sources and marketing methods
              </ProcessDescription>
            </ProcessStep>
            
            <ProcessStep delay="0.2s">
              <ProcessNumber>2</ProcessNumber>
              <ProcessTitle>Get Approved</ProcessTitle>
              <ProcessDescription>
                Our team reviews your application within 24 hours and provides access to our offer marketplace
              </ProcessDescription>
            </ProcessStep>
            
            <ProcessStep delay="0.3s">
              <ProcessNumber>3</ProcessNumber>
              <ProcessTitle>Choose Offers</ProcessTitle>
              <ProcessDescription>
                Browse through hundreds of high-converting offers and select the ones that match your audience
              </ProcessDescription>
            </ProcessStep>
            
            <ProcessStep delay="0.4s">
              <ProcessNumber>4</ProcessNumber>
              <ProcessTitle>Start Promoting</ProcessTitle>
              <ProcessDescription>
                Get your tracking links and begin promoting offers using your preferred marketing channels
              </ProcessDescription>
            </ProcessStep>
          </ProcessGrid>
        </Container>
      </Section> */}

      {/* Requirements Section */}
      <Section as={BackgroundPattern1}>
        <Container>
          <SectionTitle>Publisher Requirements</SectionTitle>
          <SectionSubtitle>
            We maintain high standards to ensure quality traffic and successful partnerships. Here's what we look for in our publishers.
          </SectionSubtitle>
          
          <RequirementsGrid>
            <RequirementCard>
              <RequirementIcon>
                <Globe size={28} />
              </RequirementIcon>
              <RequirementTitle>Quality Traffic Sources</RequirementTitle>
              <RequirementText>
                Legitimate websites, social media channels, email lists, or other approved traffic sources with real, engaged audiences.
              </RequirementText>
            </RequirementCard>
            
            <RequirementCard>
              <RequirementIcon>
                <UserCheck size={28} />
              </RequirementIcon>
              <RequirementTitle>Compliance Standards</RequirementTitle>
              <RequirementText>
                Adherence to all applicable laws, regulations, and our network policies. No fraudulent or misleading practices.
              </RequirementText>
            </RequirementCard>
            
            <RequirementCard>
              <RequirementIcon>
                <BarChart3 size={28} />
              </RequirementIcon>
              <RequirementTitle>Performance Metrics</RequirementTitle>
              <RequirementText>
                Demonstrated ability to drive quality conversions with reasonable conversion rates and customer lifetime value.
              </RequirementText>
            </RequirementCard>
            
            <RequirementCard>
              <RequirementIcon>
                <Shield size={28} />
              </RequirementIcon>
              <RequirementTitle>Brand Safety</RequirementTitle>
              <RequirementText>
                Content that aligns with advertiser brand safety requirements. No adult, illegal, or harmful content.
              </RequirementText>
            </RequirementCard>
            
            <RequirementCard>
              <RequirementIcon>
                <Clock size={28} />
              </RequirementIcon>
              <RequirementTitle>Consistent Activity</RequirementTitle>
              <RequirementText>
                Regular promotional activity and engagement with our platform to maintain active publisher status.
              </RequirementText>
            </RequirementCard>
            
            <RequirementCard>
              <RequirementIcon>
                <Target size={28} />
              </RequirementIcon>
              <RequirementTitle>Targeted Approach</RequirementTitle>
              <RequirementText>
                Ability to target specific demographics and audiences that match our advertiser requirements.
              </RequirementText>
            </RequirementCard>
          </RequirementsGrid>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section style={{ backgroundColor: '#ffffff' }}>
        <Container>
          <SectionTitle>Publisher Benefits</SectionTitle>
          <SectionSubtitle>
            Discover why thousands of publishers choose Adsfizz as their preferred affiliate marketing platform
          </SectionSubtitle>
          
          <Grid>
            <Card>
              <CardIconWrapper>
                <DollarSign size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Competitive Payouts</CardTitle>
              <CardDescription>
                Earn industry-leading commission rates with performance bonuses and volume incentives. Our transparent payout structure ensures you get paid what you deserve for quality traffic.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <BarChart3 size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>
                Access comprehensive real-time reporting with detailed conversion tracking, audience insights, and performance optimization recommendations to maximize your earnings.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <CreditCard size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Flexible Payments</CardTitle>
              <CardDescription>
                Choose from multiple payment methods including wire transfer, PayPal, and cryptocurrency. Weekly payment schedules with low minimum thresholds.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <Users size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Dedicated Support</CardTitle>
              <CardDescription>
                Work with experienced account managers who provide personalized support, optimization tips, and exclusive offer access to help grow your business.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <Globe size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Global Reach</CardTitle>
              <CardDescription>
                Access offers targeting audiences worldwide with localized campaigns, multiple languages, and region-specific promotions to maximize your global traffic potential.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <Shield size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Fraud Protection</CardTitle>
              <CardDescription>
                Advanced fraud detection systems protect both publishers and advertisers, ensuring fair attribution and maintaining the integrity of our network ecosystem.
              </CardDescription>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Traffic Types Section */}
      <Section as={BackgroundPattern2}>
        <PageContainer>
          <EnhancedContentCard>
            <ContentLayout>
              <ContentImageSection>
                <ContentImage 
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Traffic types and sources"
                />
                <ContentImageOverlay>
                  <IconWrapper>
                    <TrendingUp size={28} />
                  </IconWrapper>
                </ContentImageOverlay>
              </ContentImageSection>
              
              <ContentTextSection>
                <ContentBadge>
                  <TrendingUp size={16} />
                  Traffic Sources
                </ContentBadge>
                
                <ContentTitle>
                  <span>Accepted</span> Traffic Types
                </ContentTitle>
                
                <ContentText>
                  We welcome publishers with diverse traffic sources and marketing approaches. Our platform is designed to accommodate various promotional methods while maintaining quality standards.
                </ContentText>
                
                <FeatureList>
                  <FeatureItem>Search Engine Marketing (SEM/SEO)</FeatureItem>
                  <FeatureItem>Social Media Marketing & Influencer Content</FeatureItem>
                  <FeatureItem>Email Marketing & Newsletter Campaigns</FeatureItem>
                  <FeatureItem>Content Marketing & Blog Monetization</FeatureItem>
                  <FeatureItem>Display Advertising & Native Content</FeatureItem>
                  <FeatureItem>Mobile App Traffic & In-App Promotions</FeatureItem>
                </FeatureList>
                
                <StatsGrid>
                  <StatItem>
                    <StatNumber>50+</StatNumber>
                    <StatLabel>Traffic Sources</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>25+</StatNumber>
                    <StatLabel>Verticals</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>180+</StatNumber>
                    <StatLabel>Countries</StatLabel>
                  </StatItem>
                </StatsGrid>
              </ContentTextSection>
            </ContentLayout>
          </EnhancedContentCard>
        </PageContainer>
      </Section>

      {/* CTA Section */}
      <CtaSection>
        <PageContainer>
          <CtaContent>
            <CtaTitle>Ready to Start Earning?</CtaTitle>
            <CtaDescription>
              Join thousands of successful publishers who are already monetizing their traffic with Adsfizz. 
              Get access to premium offers, competitive payouts, and dedicated support to maximize your revenue potential.
            </CtaDescription>
            <ButtonGroup>
              <Button
                className="primary"
                as="a"
                href="https://adsfizzdigital.offer18.com/m/signup_self_adv?r=&am="
                target="_blank"
                rel="noopener noreferrer"
              >
                Join as Publisher
                <ArrowRight size={20} style={{ marginLeft: '12px' }} />
              </Button>
              {/* <Button
                className="secondary"
                as="a"
                href="#contact"
              >
                Contact Support
              </Button> */}
            </ButtonGroup>
          </CtaContent>
        </PageContainer>
      </CtaSection>
    </Layout>
  );
};

export default Publishers;