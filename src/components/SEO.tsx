import React from 'react';

import Head from 'next/head';

interface ISEOProps {
  title: string;
  description?: string;
  keywords?: 'default' | string;
  ogImage?: string | null;
  ogDescription?: string | null;
  shouldIndexPage?: boolean;
  shouldExcludeTitleSuffix?: boolean;
}

export const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogDescription,
  shouldIndexPage = true,
  shouldExcludeTitleSuffix = false
}: ISEOProps): JSX.Element => {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? '| vinicius rozendo' : ''
  }`;

  const getImage = (): string => {
    if (!ogImage) {
      return '';
    }
    if (ogImage.startsWith('http://') || ogImage.startsWith('https://')) {
      return ogImage;
    }
    return `${process.env.NEXT_PUBLIC_VERCEL_URL}/${ogImage}`;
  };

  const pageImage = getImage();

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && (
        <meta
          name="description"
          key="description"
          content={description}
        />
      )}
      {keywords && (
        keywords === 'default' ? (
          <meta
            name="keywords"
            key="keywords"
            content="default keywords"
          />
        ) : (
          <meta
            name="keywords"
            key="keywords"
            content={keywords}
          />
        )
      )}

      {pageImage && <meta name="image" key="image" content={pageImage} />}
      {!shouldIndexPage && <meta name="robots" key="robots" content="noindex,nofollow" />}

      <meta name="viewport" key="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="MobileOptimized" key="MobileOptimized" content="375" />
      <meta name="HandheldFriendly" key="HandheldFriendly" content="True" />
      <meta name="theme-color amkey=-color" content="#000000" />
      <meta name="msapplication-TileColor amkey=-TileColor" content="#000000" />
      <meta name="referrer" key="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" key="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      {(ogDescription || description) && <meta property="og:description" content={ogDescription || description} />}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      <meta name="twitter:title" key="twitter:title" content={pageTitle} />
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" key="twitter:site" content="@flukeoperadora" />
      <meta name="twitter:creator" key="twitter:creator" content="@flukeoperadora" />
      <meta name="twitter:image" key="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" key="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" key="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" key="twitter:image:width" content="300" />
      <meta name="twitter:image:height" key="twitter:image:height" content="300" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
  );
};

export default SEO;
