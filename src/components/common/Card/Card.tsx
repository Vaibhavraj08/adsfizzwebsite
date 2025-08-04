import React from 'react';
import {
  StyledCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from './Card.styled';

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  footer,
  className,
  ...props
}) => {
  return (
    <StyledCard className={className} {...props}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
};