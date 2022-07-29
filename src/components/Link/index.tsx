import React from 'react';

import NextLink from 'next/link';

export type LinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<LinkProps> = ({ children, href, ...rest }) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a {...rest}>{children}</a>
  </NextLink>
);
