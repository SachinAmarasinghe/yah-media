import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => {
    return (
        <Helmet htmlAttributes={{ lang: 'en', }}>
            <title>Yah</title>
            <meta name="description" content="Yah media is a complete suite of online solutions with well-experienced experts. We are the best at business branding, marketing, designing, and creating mobile applications." />

            {/* Google / Search Engine Tags */}
            <meta itemprop="name" content="Yah" />
            <meta itemprop="description" content="Yah media is a complete suite of online solutions with well-experienced experts. We are the best at business branding, marketing, designing, and creating mobile applications." />
            <meta itemprop="image" content="yah-ogimage.jpg" />

            {/* Facebook Meta Tags */}
            <meta property="og:url" content="http://yah.surge.sh" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Yah" />
            <meta property="og:description" content="Yah media is a complete suite of online solutions with well-experienced experts. We are the best at business branding, marketing, designing, and creating mobile applications." />
            <meta property="og:image" content="yah-ogimage.jpg" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Yah" />
            <meta name="twitter:description" content="Yah media is a complete suite of online solutions with well-experienced experts. We are the best at business branding, marketing, designing, and creating mobile applications." />
            <meta name="twitter:image" content="yah-ogimage.jpg"></meta>
        </Helmet>
    )
}

export default SEO