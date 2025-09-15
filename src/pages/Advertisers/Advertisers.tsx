import React from 'react';
import { Layout, PageContainer } from '../../components/common/Layout';
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  ArrowRight,
  Shield,
  Users,
  CreditCard,
  Lightbulb,
  Zap,
  TrendingDown,
  CheckCircle
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
} from './Advertisers.styles';

export const Advertisers: React.FC = () => {
  return (
    <Layout>
      <HeroSection>
        <HeroContent>
          <div>
            <HeroTitle>Advertisers</HeroTitle>
            <HeroSubtitle>
              Transform your brand's digital presence with our cutting-edge advertising solutions and reach millions of potential customers
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

      {/* New to Affiliate Marketing Section */}
      <Section as={BackgroundPattern1}>
        <PageContainer>
          <EnhancedContentCard>
            <ContentLayout>
              <ContentImageSection>
                <ContentImage 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="New to affiliate marketing"
                />
                <ContentImageOverlay>
                  <IconWrapper>
                    <Lightbulb size={28} />
                  </IconWrapper>
                </ContentImageOverlay>
              </ContentImageSection>
              
              <ContentTextSection>
                <ContentBadge>
                  <Lightbulb size={16} />
                  Getting Started
                </ContentBadge>
                
                <ContentTitle>
                  New to <span>affiliate marketing</span>? No worries!
                </ContentTitle>
                
                <ContentText>
                  Adsfizz is committed to introducing new advertisers to the benefits of a thriving affiliate marketing program. From small businesses to large corporations, we manage millions of transactions for a diverse range of advertisers.
                </ContentText>
                
                <FeatureList>
                  <FeatureItem>Real-time bid optimization technology</FeatureItem>
                  <FeatureItem>Pay only for results - secure ROI environment</FeatureItem>
                  <FeatureItem>Access to high-quality, high-volume traffic</FeatureItem>
                  <FeatureItem>Performance-based marketing solutions</FeatureItem>
                </FeatureList>
                
                <StatsGrid>
                  <StatItem>
                    <StatNumber>3.8K+</StatNumber>
                    <StatLabel>Active Partners</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>98%</StatNumber>
                    <StatLabel>Success Rate</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>24/7</StatNumber>
                    <StatLabel>Support</StatLabel>
                  </StatItem>
                </StatsGrid>
              </ContentTextSection>
            </ContentLayout>
          </EnhancedContentCard>
        </PageContainer>
      </Section>

      {/* How It Works Section */}
      <Section as={BackgroundPattern2}>
        <PageContainer>
          <EnhancedContentCard>
            <ContentLayout style={{ gridTemplateColumns: '1.2fr 1fr' }}>
              <ContentTextSection>
                <ContentBadge>
                  <Zap size={16} />
                  Process Overview
                </ContentBadge>
                
                <ContentTitle>
                  <span>How It Works</span> - Simple & Effective
                </ContentTitle>
                
                <ContentText>
                  Affiliate marketing is one of the most effective methods to generate revenue for your website. By registering as an advertiser on Adsfizz, you connect with publishers eager to promote your products on their platforms.
                </ContentText>
                
                <FeatureList>
                  <FeatureItem>Connect with eager publishers instantly</FeatureItem>
                  <FeatureItem>Track clicks, impressions, and engagement</FeatureItem>
                  <FeatureItem>Leverage cutting-edge technology & expertise</FeatureItem>
                  <FeatureItem>Rigorous publisher screening process</FeatureItem>
                  <FeatureItem>Flexible and innovative service approach</FeatureItem>
                </FeatureList>
                
                <StatsGrid>
                  <StatItem>
                    <StatNumber>5M+</StatNumber>
                    <StatLabel>Transactions</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>150%</StatNumber>
                    <StatLabel>Avg ROI</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>99.9%</StatNumber>
                    <StatLabel>Uptime</StatLabel>
                  </StatItem>
                </StatsGrid>
              </ContentTextSection>
              
              <ContentImageSection>
                <ContentImage 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="How affiliate marketing works"
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

      {/* Discover Your Advantages Section */}
      <Section style={{ backgroundColor: '#ffffff' }}>
        <Container>
          <SectionTitle>Discover Your Advantages</SectionTitle>
          <SectionSubtitle>
            We are industry leaders in Web and Mobile Web (M-Web) based brand advertising solutions. 
            Our platform empowers you to reach your target audience through innovative and engaging campaigns.
          </SectionSubtitle>
          
          <Grid>
            <Card>
              <CardIconWrapper>
                <BarChart3 size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Intelligent Tracking & Real-time Reporting</CardTitle>
              <CardDescription>
                Access detailed and comprehensive analytics through our intuitive, screen-optimized dashboard. Monitor your performance and sales anytime while we optimize every performance indicator to maximize your digital investment returns, enabling informed, real-time decisions based on actionable data.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <Shield size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Anti-Fraud System</CardTitle>
              <CardDescription>
                We maintain a zero-tolerance policy for dishonest affiliates. Our advanced fraud prevention tools and real-time tracking systems closely monitor publishers to detect suspicious activity and halt commission transfers immediately upon identifying fraud, ensuring the highest quality traffic.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <Target size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>24/7 Support</CardTitle>
              <CardDescription>
                Our dedicated technical support team is always available to assist with any issues or questions. Since the internet never sleeps, you can reach out to us anytime for help. Our experienced staff will ensure you have the perfect account manager to enhance your company's unique identity.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <Shield size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Quality & Compliance</CardTitle>
              <CardDescription>
                We focus on lead quality, ensuring maximum assurance with minimal risk to boost both volume and quality. Our expert team ensures your content and creative assets are approved, accurate, well-targeted, up-to-date, and compliant with all advertiser guidelines.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <Users size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Extensive Network of Publishers</CardTitle>
              <CardDescription>
                With our network of over 3,800 reputable publishers, we help you reach millions of potential customers and increase sales. Our dedicated team works with select partners, ensuring we find publishers that meet your program's performance standards.
              </CardDescription>
            </Card>
            
            <Card>
              <CardIconWrapper>
                <CreditCard size={36} color="white" />
              </CardIconWrapper>
              <CardTitle>Payments Management</CardTitle>
              <CardDescription>
                We manage all aspects of commission handling and partner communication for you. Simply make one payment to us, and we'll handle the rest, including distributing payments to performance-based partners and individual affiliates seamlessly.
              </CardDescription>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <CtaSection>
        <PageContainer>
          <CtaContent>
            <CtaTitle>Join As An Advertiser</CtaTitle>
            <CtaDescription>
              Our Marketing & Planning team empowers brands to achieve their objectives through 
              strategic inventory management. We amplify your digital presence across web and mobile 
              platforms, guiding you to choose the most effective channels and maximize ROI while 
              acquiring new customers.
            </CtaDescription>
            <ButtonGroup>
              <Button
                className="primary"
                as="a"
                href="https://adsfizzdigital.offer18.com/m/signup_self_adv?r=&am="
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Today
                <ArrowRight size={20} style={{ marginLeft: '12px' }} />
              </Button>
            </ButtonGroup>
          </CtaContent>
        </PageContainer>
      </CtaSection>
    </Layout>
  );
};

export default Advertisers;