import React from 'react';

import { Container } from './styles';

interface IBaseContainerProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

const BaseContainer = ({ children, className, id }: IBaseContainerProps): JSX.Element => (
  <Container className={className} id={id}>
    {children}
  </Container>
);

export default BaseContainer;
