import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
  }
`;

// Hero Section
export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea8a 0%, #764ba282 100%);
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
    background-image: url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.15;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.54), rgba(118, 75, 162, 0.54));
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    min-height: 70vh;
    &::before {
      background-attachment: scroll;
    }
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 60px 20px;
  max-width: 1200px;
  width: 100%;
  animation: ${fadeInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
  background: linear-gradient(45deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

// Section Components
export const Section = styled.section`
  padding: 120px 0;
  position: relative;
  
  @media (max-width: 1024px) {
    padding: 80px 0;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: -0.01em;
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  color: #4a5568;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

// Ad Formats Section
export const AdFormatsSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25px 25px, rgba(102, 126, 234, 0.03) 2px, transparent 2px);
    background-size: 50px 50px;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const AdFormatsContainer = styled.div`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 60px 40px;
  margin: 0 auto;
  max-width: 1200px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 1s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px;
    border-radius: 20px;
  }
`;

export const TabNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 8px;
  margin-bottom: 40px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0;
  overflow-x: auto;
  
  @media (max-width: 968px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  min-width: 140px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${props => props.isActive 
    ? 'linear-gradient(145deg, #ffffff, #f8fafc)' 
    : 'transparent'};
  border: none;
  border-radius: 16px 16px 0 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${props => props.isActive ? '#1a202c' : '#4a5568'};
  box-shadow: ${props => props.isActive 
    ? '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)' 
    : 'none'};
  border-bottom: ${props => props.isActive ? '4px solid #667eea' : '4px solid transparent'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    opacity: ${props => props.isActive ? 1 : 0};
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    background: linear-gradient(145deg, #ffffff, #f8fafc);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1), 0 6px 16px rgba(0, 0, 0, 0.06);
    color: #1a202c;
    
    &::before {
      opacity: 0.7;
    }
  }
  
  &:active {
    transform: translateY(-3px);
  }
  
  svg {
    margin-bottom: 8px;
    transition: all 0.3s ease;
    color: ${props => props.isActive ? '#667eea' : '#6b7280'};
  }
  
  &:hover svg {
    color: #667eea;
    transform: scale(1.1);
  }
  
  @media (max-width: 968px) {
    min-width: 120px;
    padding: 16px 12px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 640px) {
    min-width: unset;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    padding: 16px 20px;
    border-radius: 12px;
    border-bottom: none;
    
    svg {
      margin-bottom: 0;
      margin-right: 12px;
    }
  }
`;

export const TabContent = styled.div`
  padding: 40px 0;
  background: linear-gradient(145deg, #f8fafc, #ffffff);
  border-radius: 24px;
  margin-top: 20px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.06);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
  }
`;

export const TabContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

export const TabImageSection = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media (max-width: 968px) {
    order: -1;
  }
`;

export const TabImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.6s ease;
  
  ${TabImageSection}:hover & {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    height: 240px;
  }
`;

export const TabTextSection = styled.div`
  padding: 20px 0;
`;

export const TabTitle = styled.h3`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  line-height: 1.2;
  
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TabDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #4a5568;
  line-height: 1.8;
  font-weight: 400;
  margin: 0;
`;

// Enhanced Content Cards
export const EnhancedContentCard = styled.div`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95));
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 0;
  margin: 60px auto;
  max-width: 1200px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: ${fadeInUp} 1s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.12),
      0 20px 40px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }
  
  @media (max-width: 768px) {
    margin: 30px auto;
    border-radius: 20px;
    
    &:hover {
      transform: translateY(-6px) scale(1.01);
    }
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 0;
  align-items: center;
  min-height: 400px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const ContentImageSection = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  border-radius: 32px 0 0 32px;
  
  @media (max-width: 968px) {
    border-radius: 20px 20px 0 0;
    min-height: 280px;
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  ${EnhancedContentCard}:hover & {
    transform: scale(1.08);
  }
`;

export const ContentImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(118, 75, 162, 0.15) 50%,
    rgba(102, 126, 234, 0.1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  
  ${EnhancedContentCard}:hover & {
    opacity: 1;
  }
`;

export const ContentTextSection = styled.div`
  padding: clamp(2rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  
  @media (max-width: 968px) {
    padding: clamp(1.5rem, 4vw, 2.5rem);
  }
`;

export const ContentBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 20px;
  width: fit-content;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ContentTitle = styled.h3`
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 20px;
  text-align: left;
  letter-spacing: -0.01em;
  line-height: 1.3;
  
  span {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

export const ContentText = styled.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #2d3748;
  line-height: 1.8;
  text-align: left;
  font-weight: 400;
  margin: 0;
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    margin-top: 8px;
    flex-shrink: 0;
  }
  
  @media (max-width: 968px) {
    justify-content: center;
    text-align: center;
    
    &::before {
      display: none;
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 24px;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
`;

export const StatItem = styled.div`
  text-align: center;
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

export const StatNumber = styled.div`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  margin-top: 4px;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  transition: all 0.3s ease;
  
  ${EnhancedContentCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  }
`;

// Grid and Cards
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Card = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 24px;
  padding: 40px 32px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.06),
    0 4px 12px rgba(0, 0, 0, 0.04);
  animation: ${fadeInUp} 0.6s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 28px 56px rgba(0, 0, 0, 0.12),
      0 16px 32px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e0;
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
    border-radius: 20px;
    
    &:hover {
      transform: translateY(-6px) scale(1.01);
    }
  }
`;

export const CardIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, #667eea, #764ba2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${Card}:hover & {
    transform: scale(1.15) rotate(10deg);
    animation: ${float} 3s ease-in-out infinite;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.375rem, 3vw, 1.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: -0.01em;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  color: #4a5568;
  text-align: center;
  line-height: 1.7;
  font-size: clamp(0.9375rem, 2vw, 1rem);
  font-weight: 400;
`;

// CTA Section
export const CtaSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    animation: ${float} 20s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const CtaContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const CtaTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const CtaDescription = styled.p`
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  max-width: 800px;
  margin: 0 auto 48px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 1.125rem;
  padding: 20px 40px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  min-width: 220px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
  
  &.primary {
    background: linear-gradient(135deg, #ffffff, #f7fafc);
    color: #667eea;
    box-shadow: 
      0 12px 28px rgba(0, 0, 0, 0.15),
      0 6px 14px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.25),
        0 10px 20px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #ffffff, #ffffff);
      animation: ${glow} 2s ease-in-out infinite;
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-2px) scale(1.02);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 3px solid rgba(255, 255, 255, 0.8);
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: white;
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-2px) scale(1.02);
    }
  }
  
  @media (max-width: 768px) {
    padding: 18px 36px;
    font-size: 1rem;
    min-width: 200px;
  }
`;

// Background Patterns
export const BackgroundPattern1 = styled.div`
  background: linear-gradient(120deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25px 25px, rgba(102, 126, 234, 0.05) 2px, transparent 2px);
    background-size: 50px 50px;
    opacity: 0.6;
  }
`;

export const BackgroundPattern2 = styled.div`
  background: linear-gradient(120deg, #e2e8f0 0%, #f8fafc 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, rgba(118, 75, 162, 0.03) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(118, 75, 162, 0.03) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(118, 75, 162, 0.03) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(118, 75, 162, 0.03) 75%);
    background-size: 30px 30px;
    background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
    opacity: 0.4;
  }
`;

// Requirements Section
export const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
  }
`;

export const RequirementCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 24px;
  padding: 32px 28px;
  border: 1px solid #e2e8f0;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.06),
    0 4px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.06);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 768px) {
    padding: 24px 20px;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const RequirementIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #667eea;
  transition: all 0.3s ease;
  
  ${RequirementCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  }
`;

export const RequirementTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const RequirementText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`;

// Process Steps
export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 40px;
  }
`;

export const ProcessStep = styled.div<{ delay?: string }>`
  text-align: center;
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
`;

export const ProcessNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 auto 24px;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const ProcessTitle = styled.h4`
  font-size: 1.375rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
  line-height: 1.4;
`;

export const ProcessDescription = styled.p`
  color: #4a5568;
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
`;