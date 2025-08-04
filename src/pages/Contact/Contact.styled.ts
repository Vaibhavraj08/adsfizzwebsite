// Contact.styled.ts
import styled from 'styled-components';
import { Section, PageContainer } from '../../styles/GlobalStyles';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export const ContactSection = styled(Section)`
  padding: 8rem 0;
  background-color: #f8f9fa; /* A light grey background for a clean look */
`;

export const ContactPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
    color: #212529;
    font-weight: 700;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: #6c757d;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactFormCard = styled(Card)`
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* A subtle, modern shadow */
  border: none;
  background-color: #ffffff;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #495057;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 0.2rem rgba(25, 118, 210, 0.25);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 0.2rem rgba(25, 118, 210, 0.25);
  }
`;

export const ContactInfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: none;
  background-color: #ffffff;
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const IconWrapper = styled.div`
  padding: 1rem;
  border-radius: 50%;
  background-color: #e3f2fd;
  color: #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 1.5rem;
  }
`;

export const ContactInfoDetails = styled.div`
  h4 {
    margin: 0;
    color: #343a40;
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    color: #6c757d;
    font-size: 1rem;
  }
`;

export const HoursCard = styled(Card)`
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: none;
  background-color: #ffffff;
`;

export const HoursList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }

  span {
    font-size: 1rem;
    &:first-child {
      font-weight: 600;
      color: #343a40;
    }
    &:last-child {
      color: #6c757d;
    }
  }
`;