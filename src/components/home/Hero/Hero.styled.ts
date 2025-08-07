import styled, { keyframes } from 'styled-components';

// Animations
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(10deg); 
  }
`;

const floatDelayed = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-15px) rotate(-5deg); 
  }
`;

const pulse = keyframes`
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.5; 
  }
`;

// Main Container
export const HeroContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%);
  position: relative;
  overflow: hidden;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export const BackgroundBlur = styled.div<{ $position: 'top-right' | 'bottom-left' }>`
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  filter: blur(3rem);
  ${({ $position }) => $position === 'top-right' ? `
    top: 0;
    right: 0;
    background: rgba(59, 130, 246, 0.1);
  ` : `
    bottom: 0;
    left: 0;
    background: rgba(147, 51, 234, 0.1);
  `}
`;

export const FloatingElement = styled.div<{ 
  $position: 'top-right' | 'top-left' | 'bottom-right'; 
  $delay: number;
}>`
  position: absolute;
  animation: ${({ $delay }) => $delay > 0 ? floatDelayed : float} 
    ${({ $delay }) => $delay > 0 ? '8s' : '6s'} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  
  ${({ $position }) => {
    switch ($position) {
      case 'top-right':
        return 'top: 5rem; right: 5rem;';
      case 'top-left':
        return 'top: 10rem; left: 5rem;';
      case 'bottom-right':
        return 'bottom: 10rem; right: 10rem;';
      default:
        return '';
    }
  }}
`;

export const MainContent = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
  display: flex;
  align-items: center;
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
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  color: rgb(191, 219, 254);
  font-size: 0.875rem;
  font-weight: 500;
  width: fit-content;
`;

export const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const MainHeadline = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

export const GradientText = styled.span`
  display: block;
  background: linear-gradient(to right, #60a5fa, #a78bfa, #34d399);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: rgb(203, 213, 225);
  line-height: 1.6;
  max-width: 32rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: rgb(148, 163, 184);
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
  
  &:hover {
    background: linear-gradient(to right, #2563eb, #7c3aed);
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.25);
  }
`;

export const SecondaryButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  ${PrimaryButton}:hover & {
    transform: translateX(0.25rem);
  }
`;

export const TrustIndicators = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
  flex-wrap: wrap;
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgb(203, 213, 225);
  font-size: 0.875rem;
`;

export const TrustIcon = styled.div<{ $color: 'green' | 'blue' | 'purple' }>`
  display: flex;
  align-items: center;
  color: ${({ $color }) => {
    switch ($color) {
      case 'green': return '#34d399';
      case 'blue': return '#60a5fa';
      case 'purple': return '#a78bfa';
      default: return '#60a5fa';
    }
  }};
`;

// Right Content
export const RightContent = styled.div`
  position: relative;
`;

export const VisualContainer = styled.div`
  position: relative;
  width: 100%;
  height: 24rem;
  
  @media (min-width: 1024px) {
    height: 31.25rem;
  }
`;

export const DashboardPreview = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  transform: rotate(3deg);
  transition: transform 0.5s ease;
  
  &:hover {
    transform: rotate(1deg);
  }
`;

export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const DashboardTitle = styled.h3`
  color: white;
  font-weight: 600;
`;

export const StatusIndicator = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background: #34d399;
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const MetricCard = styled.div<{ $color: 'blue' | 'purple' }>`
  background: ${({ $color }) => 
    $color === 'blue' 
      ? 'rgba(59, 130, 246, 0.2)' 
      : 'rgba(147, 51, 234, 0.2)'
  };
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MetricIcon = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
`;

export const MetricLabel = styled.span`
  font-size: 0.875rem;
  color: inherit;
`;

export const MetricValue = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const MetricChange = styled.div`
  color: #34d399;
  font-size: 0.75rem;
`;

export const ChartSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ChartRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ChartDot = styled.div<{ $color: 'blue' | 'green' | 'yellow' }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${({ $color }) => {
    switch ($color) {
      case 'blue': return '#60a5fa';
      case 'green': return '#34d399';
      case 'yellow': return '#fbbf24';
      default: return '#60a5fa';
    }
  }};
`;

export const ChartBar = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  height: 0.5rem;
`;

export const ChartFill = styled.div<{ 
  $width: number; 
  $color: 'blue-purple' | 'green-teal' | 'yellow-orange';
}>`
  height: 100%;
  border-radius: 9999px;
  width: ${({ $width }) => $width}%;
  background: ${({ $color }) => {
    switch ($color) {
      case 'blue-purple': return 'linear-gradient(to right, #60a5fa, #8b5cf6)';
      case 'green-teal': return 'linear-gradient(to right, #34d399, #14b8a6)';
      case 'yellow-orange': return 'linear-gradient(to right, #fbbf24, #f97316)';
      default: return 'linear-gradient(to right, #60a5fa, #8b5cf6)';
    }
  }};
`;

export const ChartLabel = styled.span`
  color: white;
  font-size: 0.875rem;
`;

export const FloatingCard = styled.div<{ 
  $position: 'top-right' | 'bottom-left';
  $color: 'green-teal' | 'purple-pink';
}>`
  position: absolute;
  background: ${({ $color }) => 
    $color === 'green-teal' 
      ? 'linear-gradient(135deg, #34d399, #14b8a6)' 
      : 'linear-gradient(135deg, #8b5cf6, #ec4899)'
  };
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
  
  ${({ $position }) => $position === 'top-right' ? `
    top: -1rem;
    right: -1rem;
    transform: rotate(12deg);
    
    &:hover {
      transform: rotate(6deg);
    }
  ` : `
    bottom: -1rem;
    left: -1rem;
    transform: rotate(-6deg);
    
    &:hover {
      transform: rotate(-3deg);
    }
  `}
`;

export const FloatingCardIcon = styled.div`
  color: white;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const FloatingCardTitle = styled.div`
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
`;