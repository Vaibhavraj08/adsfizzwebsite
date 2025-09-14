import React from 'react';
import {
    HeroSection,
    HeroOverlay,
    HeroTitle,
    Section,
    CenteredText,
    SectionTitle,
    SectionDescription,
    Grid,
    Card,
    CardIconWrapper,
    CardTitle,
    CardDescription,
    TwoColumnSection,
    Column,
    ReversedTwoColumnSection,
    ColumnDescription,
    FeatureListContainer,
    FeatureItem,
    FeatureTitle,
    FeatureDescription,
    Image,
    OfferCard,
    OfferIconWrapper,
    OfferCardTitle,
    OfferCardDescription
} from './Services.styles';
import { Layout } from '../../components/common/Layout';
import { 
    Mail, 
    Monitor, 
    MapPin, 
    Video, 
    Megaphone, 
    Youtube, 
    CheckCircle, 
    Globe, 
    Smartphone, 
    Share2 
} from 'lucide-react';

export const Services: React.FC = () => {
    return (
        <Layout>
            <HeroSection>
                <HeroOverlay />
                <HeroTitle>Services</HeroTitle>
            </HeroSection>

            <Section>
                <CenteredText>
                    <SectionTitle>Explore Our Services</SectionTitle>
                    <SectionDescription>
                        Our company is renowned for its Web and Mobile Web (M-Web) based brand advertising solutions. We excel in delivering targeted advertising campaigns that effectively utilize both web and mobile platforms to enhance brand visibility and engagement.
                    </SectionDescription>
                </CenteredText>
                <Grid>
                    <Card>
                        <CardIconWrapper>
                            <Mail />
                        </CardIconWrapper>
                        <CardTitle>SMS & Email Marketing</CardTitle>
                        <CardDescription>
                            Our email marketing and SMS strategies provide personalized solutions to connect with the right audience, enabling your brand to engage effectively on these platforms.
                        </CardDescription>
                    </Card>
                    <Card>
                        <CardIconWrapper>
                            <Monitor />
                        </CardIconWrapper>
                        <CardTitle>Display Advertising</CardTitle>
                        <CardDescription>
                            Display advertising visually conveys commercial messages through animations, videos, and photos across various online platforms.
                        </CardDescription>
                    </Card>
                    <Card>
                        <CardIconWrapper>
                            <MapPin />
                        </CardIconWrapper>
                        <CardTitle>Local Marketing</CardTitle>
                        <CardDescription>
                            Target specific geographic areas to maximize your local business reach. Our local marketing services help you connect with nearby customers.
                        </CardDescription>
                    </Card>
                </Grid>
            </Section>

            <Section>
                <TwoColumnSection>
                    <Column>
                        <SectionTitle>Leveraging social media is key to a wide audience.</SectionTitle>
                        <ColumnDescription>
                            By optimizing social media marketing, we help your brand build a community, generate excitement for your services, and attract traffic to your website.
                        </ColumnDescription>
                        <FeatureListContainer>
                            <FeatureItem>
                                <CheckCircle />
                                <div>
                                    <FeatureTitle>Improved Brand Awareness</FeatureTitle>
                                    <FeatureDescription>
                                        Enhance your brand's presence on social media with our innovative strategies designed to increase awareness and ensure your business reaches a wider audience.
                                    </FeatureDescription>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <CheckCircle />
                                <div>
                                    <FeatureTitle>Increased Traffic and SEO Ranking</FeatureTitle>
                                    <FeatureDescription>
                                        Amplify your online presence by boosting website traffic and improving search engine rankings with our effective strategies.
                                    </FeatureDescription>
                                </div>
                            </FeatureItem>
                        </FeatureListContainer>
                    </Column>
                    <Column>
                        <Image src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Social Media Marketing" />
                    </Column>
                </TwoColumnSection>
            </Section>

            <Section>
                <ReversedTwoColumnSection>
                    <Column>
                        <SectionTitle>Digital Marketing Tactics for Businesses</SectionTitle>
                        <ColumnDescription>
                            The importance of establishing a strong online presence in today's digital world cannot be overstated. We are dedicated to helping businesses thrive in the virtual space. We manage your presence with our comprehensive web and mobile marketing services, reaching diverse demand sources, including Programmatic Selling, Direct Campaigns, Ad Networks, and Affiliates.
                        </ColumnDescription>
                    </Column>
                    <Column>
                        <Image src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Digital Marketing" />
                    </Column>
                </ReversedTwoColumnSection>
            </Section>

            <Section>
                <CenteredText>
                    <SectionTitle>What We Offer</SectionTitle>
                </CenteredText>
                <Grid>
                    <OfferCard>
                        <OfferIconWrapper>
                            <Video />
                        </OfferIconWrapper>
                        <OfferCardTitle>Video Engagement</OfferCardTitle>
                        <OfferCardDescription>
                            Our Video Engagement services produce captivating videos that connect with your audience, fostering meaningful interactions and driving brand growth.
                        </OfferCardDescription>
                    </OfferCard>
                    <OfferCard>
                        <OfferIconWrapper>
                            <Megaphone />
                        </OfferIconWrapper>
                        <OfferCardTitle>Campaign Management</OfferCardTitle>
                        <OfferCardDescription>
                            Our Campaign Management services deliver results by crafting customized campaigns, optimization, and providing comprehensive insights.
                        </OfferCardDescription>
                    </OfferCard>
                    <OfferCard>
                        <OfferIconWrapper>
                            <Youtube />
                        </OfferIconWrapper>
                        <OfferCardTitle>YouTube Video Views</OfferCardTitle>
                        <OfferCardDescription>
                            Elevate your YouTube videos through our targeted promotion and optimization services, ensuring maximum reach and engagement.
                        </OfferCardDescription>
                    </OfferCard>
                    <OfferCard>
                        <OfferIconWrapper>
                            <Globe />
                        </OfferIconWrapper>
                        <OfferCardTitle>Website Marketing</OfferCardTitle>
                        <OfferCardDescription>
                            Maximize your online presence with our Website Marketing services, driving targeted traffic and conversions tailored to your business.
                        </OfferCardDescription>
                    </OfferCard>
                    <OfferCard>
                        <OfferIconWrapper>
                            <Smartphone />
                        </OfferIconWrapper>
                        <OfferCardTitle>Mobile Marketing</OfferCardTitle>
                        <OfferCardDescription>
                            Leverage our Mobile Marketing services to expand your reach and enhance engagement through personalized campaigns designed for mobile devices, fostering growth and success for your business.
                        </OfferCardDescription>
                    </OfferCard>
                    <OfferCard>
                        <OfferIconWrapper>
                            <Share2 />
                        </OfferIconWrapper>
                        <OfferCardTitle>Social Media Marketing</OfferCardTitle>
                        <OfferCardDescription>
                            Achieve optimal reach and engagement with our Social Media Marketing services, strategically tailored for success across popular platforms.
                        </OfferCardDescription>
                    </OfferCard>
                </Grid>
            </Section>
        </Layout>
    );
};