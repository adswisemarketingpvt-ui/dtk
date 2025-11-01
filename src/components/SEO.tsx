import React from "react";
import { Helmet } from "react-helmet-async";

type MetaItem = {
  name?: string;
  property?: string;
  content: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  lang?: string;
  author?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  robots?: string; // e.g. "index, follow" or "noindex, nofollow"
  meta?: MetaItem[];
  siteName?: string; // optional site-wide name
};

/**
 * SEO
 *
 * Usage:
 * 1. Wrap your app with <HelmetProvider> from 'react-helmet-async'.
 * 2. Import and use this component in pages:
 *
 * <SEO
 *   title="Page title"
 *   description="Short page description"
 *   canonical="https://example.com/current-page"
 *   image="https://example.com/og-image.jpg"
 *   keywords={["marketing", "react", "seo"]}
 * />
 *
 * The component adds standard meta tags, OpenGraph and Twitter Card tags.
 */

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  lang = "en",
  author = "",
  keywords = [],
  canonical,
  image,
  robots = "index, follow",
  meta = [],
  siteName,
}) => {
  const defaultTitle = siteName || process.env.REACT_APP_SITE_NAME || "";
  const fullTitle = title && defaultTitle ? `${title} | ${defaultTitle}` : title || defaultTitle;

  const metaKeywords = keywords.length ? [{ name: "keywords", content: keywords.join(", ") }] : [];

  const baseMeta: MetaItem[] = [
    { name: "description", content: description || "" },
    { name: "robots", content: robots },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description || "" },
    { property: "og:type", content: "website" },
    ...(image ? [{ property: "og:image", content: image }] : []),
    ...(siteName ? [{ property: "og:site_name", content: siteName }] : []),
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:creator", content: author },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description || "" },
    ...(image ? [{ name: "twitter:image", content: image }] : []),
  ];

  const allMeta = [...baseMeta, ...metaKeywords, ...meta].filter((m) => m && m.content);

  return (
    <Helmet htmlAttributes={{ lang }} title={fullTitle}>
      {canonical && <link rel="canonical" href={canonical} />}

      {allMeta.map((m, i) => {
        if ((m as any).name) return <meta key={i} name={(m as any).name} content={m.content} />;
        if ((m as any).property) return <meta key={i} property={(m as any).property} content={m.content} />;
        return null;
      })}
    </Helmet>
  );
};

export default SEO;
