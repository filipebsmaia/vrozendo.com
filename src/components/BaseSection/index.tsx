import React, {
  ForwardedRef, forwardRef, HTMLAttributes
} from 'react';

import { Container } from './styles';

interface IBaseSectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

const BaseSection = ({ children, className, id, ...rest }: IBaseSectionProps, ref: ForwardedRef<HTMLElement>): JSX.Element => (
  <Container className={className} id={id} ref={ref} {...rest}>
    {children}
  </Container>
);

export default forwardRef<HTMLElement, IBaseSectionProps>(BaseSection);
