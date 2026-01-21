import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, image, url }) => {
    const siteTitle = "Ayactarts"; // Your base brand name
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = "Discover unique digital and physical art at Ayactarts.";
    const siteUrl = "https://ayactarts.com"; // Replace with your domain

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description || defaultDescription} />
            <link rel="canonical" href={url || siteUrl} />

            {/* Facebook / Open Graph tags */}
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || '/default-og-image.jpg'} />
            <meta property="og:url" content={url || siteUrl} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name || 'Ayactarts'} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || '/default-og-image.jpg'} />
        </Helmet>
    );
};

export default SEO;