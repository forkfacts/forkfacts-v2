export type SeoProps = {
  title: string;
  description?: string;
  image?: string;
  siteUrl?: string;
  pathname?: string;
  children?: JSX.Element | JSX.Element[];
};
export type seoDataProps = {
  site: {
    siteMetadata: siteMetadata;
  };
};
