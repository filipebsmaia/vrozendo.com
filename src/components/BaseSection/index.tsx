import React from 'react';

import { Container } from './styles';

interface IBaseSectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

const BaseSection = ({ children, className, id }: IBaseSectionProps): JSX.Element => (
  <Container className={className} id={id}>
    {children}
  </Container>
);

export default BaseSection;
