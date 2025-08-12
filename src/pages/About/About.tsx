import React from 'react';
import { Business, TrendingUp, Public, People, CheckCircle } from '@mui/icons-material';
import { Layout, PageContainer } from '../../components/common/Layout';
import { COMPANY_INFO } from '../../utils/constants';
import { PUBLIC_IMAGES } from '../../utils/publicImages';
import {
  AboutContainer,
  AboutHero,
  AboutSection,
  SectionContent,
  TextContent,
  SpecialtiesList,
  ImageContainer,
  CompanyInfo,
  InfoCard
} from './About.styled';

export const About: React.FC = () => {
  return (
    <Layout>
      <AboutContainer>
        <PageContainer>
          <AboutHero>
            <h1>
              About <span className="highlight">{COMPANY_INFO.name}</span>
            </h1>
            <p>
              {COMPANY_INFO.description} with a network of 200+ 
              trusted affiliates delivering exceptional results worldwide.
            </p>
          </AboutHero>
        </PageContainer>

        <AboutSection>
          <PageContainer>
            <SectionContent>
              <TextContent>
                <h2>Our Mission</h2>
                <p>
                  At {COMPANY_INFO.name}, we bridge the gap between advertisers and quality 
                  traffic sources. Founded in {COMPANY_INFO.founded}, we've built a reputation 
                  for delivering transparent, scalable, and performance-focused growth solutions.
                </p>
                <p>
                  Our expertise spans across multiple verticals including performance marketing, 
                  programmatic advertising, iGaming, and mobile gaming, ensuring we can meet 
                  diverse client needs with precision and effectiveness.
                </p>
              </TextContent>
              <ImageContainer>
                <img 
                  src={PUBLIC_IMAGES.team.office} 
                  alt="Adsfizz Digital Office"
                />
              </ImageContainer>
            </SectionContent>
          </PageContainer>
        </AboutSection>

        <AboutSection>
          <PageContainer>
            <SectionContent>
              <ImageContainer>
                <img 
                  src={PUBLIC_IMAGES.services.growth} 
                  alt="Performance Marketing Growth"
                />
              </ImageContainer>
              <TextContent>
                <h2>Our Specialties</h2>
                <p>
                  We specialize in performance-driven marketing solutions that deliver 
                  measurable results. Our comprehensive approach ensures maximum ROI 
                  across all digital channels.
                </p>
                {(() => {
                  const [showAll, setShowAll] = React.useState(false);
                  const specialtiesToShow = showAll ? COMPANY_INFO.specialties : COMPANY_INFO.specialties.slice(0, 4);
                  return (
                    <>
                      <SpecialtiesList>
                        {specialtiesToShow.map((specialty, index) => (
                          <li key={index}>
                            <CheckCircle className="icon" />
                            <span>{specialty}</span>
                          </li>
                        ))}
                      </SpecialtiesList>
                      {!showAll && (
                        <button
                          style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '999px',
                            background: 'linear-gradient(90deg, #10b981, #3b82f6)',
                            color: '#fff',
                            border: 'none',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                          onClick={() => setShowAll(true)}
                        >
                          View More
                        </button>
                      )}
                    </>
                  );
                })()}
              </TextContent>
            </SectionContent>
          </PageContainer>
        </AboutSection>

        <AboutSection>
          <PageContainer>
            <CompanyInfo>
              <InfoCard>
                <Business className="icon" />
                <h3>Industry</h3>
                <p>{COMPANY_INFO.industry}</p>
              </InfoCard>
              <InfoCard>
                <People className="icon" />
                <h3>Team Size</h3>
                <p>{COMPANY_INFO.employees} employees</p>
              </InfoCard>
              <InfoCard>
                <Public className="icon" />
                <h3>Headquarters</h3>
                <p>{COMPANY_INFO.headquarters}</p>
              </InfoCard>
              <InfoCard>
                <TrendingUp className="icon" />
                <h3>Founded</h3>
                <p>{COMPANY_INFO.founded}</p>
              </InfoCard>
            </CompanyInfo>
          </PageContainer>
        </AboutSection>
      </AboutContainer>
    </Layout>
  );
};