
import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #4F46E5, #7C3AED, #A78BFA);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  opacity: 0.9;
  max-width: 42rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Section = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #6B7280;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  line-height: 1.625;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid #E5E7EB;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const CardIconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #3B82F6, #6D28D9);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1rem;
  text-align: center;
`;

export const CardDescription = styled.p`
  color: #6B7280;
  text-align: center;
  line-height: 1.625;
`;

export const CtaSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #4F46E5, #7C3AED, #A78BFA);
`;

export const CtaContent = styled.div`
  text-align: center;
  color: white;
`;

export const CtaTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const CtaDescription = styled.p`
  font-size: 1.25rem;
  max-width: 56rem;
  margin: 0 auto 2rem;
  line-height: 1.625;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 9999px;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.primary {
    background-color: white;
    color: #4F46E5;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }

  &.secondary {
    border: 2px solid white;
    color: white;

    &:hover {
      background-color: white;
      color: #4F46E5;
    }
  }
`;

