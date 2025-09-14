import styled from 'styled-components';

// Hero Section Styles
export const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background: linear-gradient(135deg,rgba(102, 126, 234, 0.55) 0%,rgba(118, 75, 162, 0.22) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center/cover;
    opacity: 1;
    z-index: 0;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 131, 246, 0.24) 0%, rgba(139, 92, 246, 0.5) 100%);
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  position: relative;
  z-index: 3;
  font-size: 4rem;
  font-weight: 700;
  color: white;
  text-align: center;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Section Styles
export const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const CenteredText = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

// Grid and Card Styles
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: #3b82f6;
  }
`;

export const CardIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  svg {
    color: white;
    font-size: 1.5rem;
  }
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.95rem;
`;

// Two Column Section Styles
export const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ReversedTwoColumnSection = styled(TwoColumnSection)`
  @media (min-width: 769px) {
    direction: rtl;
    
    & > * {
      direction: ltr;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnDescription = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

// Feature List Styles
export const FeatureListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: #10b981;
    font-size: 1.5rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
`;

export const FeatureTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.95rem;
`;

// Image Styles
export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

// Offer Card Styles
export const OfferCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: #3b82f6;
    
    &::before {
      left: 100%;
    }
  }
`;

export const OfferIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  svg {
    color: white;
    font-size: 1.75rem;
  }
  
  ${OfferCard}:hover & {
    transform: rotate(10deg) scale(1.1);
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  }
`;

export const OfferCardTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

export const OfferCardDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  font-size: 1rem;
  position: relative;
  z-index: 1;
`;