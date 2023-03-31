import { graphql, useStaticQuery } from "gatsby";
import { seoDataProps } from "../models";

const useSiteMetadata = () => {
  const data = useStaticQuery<seoDataProps>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
