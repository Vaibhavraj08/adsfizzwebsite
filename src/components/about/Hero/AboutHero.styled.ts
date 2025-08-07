import styled, { keyframes } from 'styled-components';

// Animations
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-15px) rotate(8deg); 
  }
`;

const floatDelayed = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-12px) rotate(-6deg); 
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main Container
export const AboutHeroContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%);
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const BackgroundBlur = styled.div<{ $position: 'top-left' | 'bottom-right' }>`
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  filter: blur(4rem);
  ${({ $position }) => $position === 'top-left' ? `
    top: 0;
    left: 0;
    background: rgba(16, 185, 129, 0.1);
  ` : `
    bottom: 0;
    right: 0;
    background: rgba(99, 102, 241, 0.1);
  `}
`;

export const FloatingElement = styled.div<{ 
  $position: 'top-right' | 'top-left' | 'bottom-left'; 
  $delay: number;
}>`
  position: absolute;
  animation: ${({ $delay }) => $delay > 1 ? floatDelayed : float} 
    ${({ $delay }) => $delay > 1 ? '7s' : '5s'} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  
  ${({ $position }) => {
    switch ($position) {
      case 'top-right':
        return 'top: 8rem; right: 6rem;';
      case 'top-left':
        return 'top: 12rem; left: 4rem;';
      case 'bottom-left':
        return 'bottom: 8rem; left: 8rem;';
      default:
        return '';
    }
  }}
`;

export const MainContent = styled.div`
  position: relative;
  z-index: 10;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// Left Content
export const LeftContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${slideUp} 0.8s ease-out;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  color: rgb(167, 243, 208);
  font-size: 0.875rem;
  font-weight: 500;
  width: fit-content;
`;

export const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const MainHeadline = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const GradientText = styled.span`
  display: block;
  background: linear-gradient(to right, #10b981, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: rgb(203, 213, 225);
  line-height: 1.7;
  max-width: 36rem;
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FeatureIcon = styled.div`
  color: #10b981;
  flex-shrink: 0;
`;

export const FeatureText = styled.span`
  color: rgb(203, 213, 225);
  font-size: 0.95rem;
`;

export const CTASection = styled.div`
  padding-top: 1rem;
`;

export const CTAButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(to right, #10b981, #3b82f6);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
  
  &:hover {
    background: linear-gradient(to right, #059669, #2563eb);
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.25);
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  ${CTAButton}:hover & {
    transform: translateX(0.25rem);
  }
`;

// Right Content
export const RightContent = styled.div`
  position: relative;
  animation: ${slideUp} 0.8s ease-out 0.2s both;
`;

export const VisualContainer = styled.div`
  position: relative;
  width: 100%;
  height: 28rem;
  
  @media (min-width: 1024px) {
    height: 32rem;
  }
`;

export const TeamCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  transform: rotate(-2deg);
  transition: transform 0.5s ease;
  
  &:hover {
    transform: rotate(0deg);
  }
`;

export const TeamHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const TeamTitle = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TeamMember = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MemberAvatar = styled.div<{ $color: 'blue' | 'purple' | 'green' }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ $color }) => {
    switch ($color) {
      case 'blue': return 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
      case 'purple': return 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
      case 'green': return 'linear-gradient(135deg, #10b981, #059669)';
      default: return 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MemberName = styled.div`
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
`;

export const MemberRole = styled.div`
  color: rgb(148, 163, 184);
  font-size: 0.875rem;
`;

export const ValuesGrid = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  transform: rotate(3deg);
  transition: transform 0.5s ease;
  
  &:hover {
    transform: rotate(1deg);
  }
`;

export const ValueCard = styled.div<{ $color: 'emerald' | 'blue' | 'purple' }>`
  background: ${({ $color }) => {
    switch ($color) {
      case 'emerald': return 'linear-gradient(135deg, #10b981, #059669)';
      case 'blue': return 'linear-gradient(135deg, #3b82f6, #2563eb)';
      case 'purple': return 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
      default: return 'linear-gradient(135deg, #10b981, #059669)';
    }
  }};
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-0.25rem);
  }
`;

export const ValueIcon = styled.div`
  color: white;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const ValueTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const ValueDescription = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
`;

// Stats Section
export const StatsSection = styled.div`
  animation: ${slideUp} 0.8s ease-out 0.4s both;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const StatIcon = styled.div<{ $color: 'blue' | 'emerald' | 'purple' | 'orange' }>`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${({ $color }) => {
    switch ($color) {
      case 'blue': return '#3b82f6';
      case 'emerald': return '#10b981';
      case 'purple': return '#8b5cf6';
      case 'orange': return '#f97316';
      default: return '#3b82f6';
    }
  }};
`;

export const StatNumber = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StatDescription = styled.div`
  color: rgb(148, 163, 184);
  font-size: 0.875rem;
`;