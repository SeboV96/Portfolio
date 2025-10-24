import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = () => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>Sebastian Villa - Full Stack Developer | Portfolio</title>
      <meta name="description" content="Desarrollador Full Stack apasionado por la tecnología. Especializado en React, Node.js, MongoDB y más. ¡Conectemos y creemos algo increíble juntos!" />
      <meta name="keywords" content="desarrollador full stack, react, nodejs, javascript, portfolio, web development, mongodb, express" />
      <meta name="author" content="Sebastian Villa" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sebastianvilla.dev/" />
      <meta property="og:title" content="Sebastian Villa - Full Stack Developer" />
      <meta property="og:description" content="Desarrollador Full Stack apasionado por la tecnología. Especializado en React, Node.js, MongoDB y más." />
      <meta property="og:image" content="https://sebastianvilla.dev/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sebastianvilla.dev/" />
      <meta property="twitter:title" content="Sebastian Villa - Full Stack Developer" />
      <meta property="twitter:description" content="Desarrollador Full Stack apasionado por la tecnología. Especializado en React, Node.js, MongoDB y más." />
      <meta property="twitter:image" content="https://sebastianvilla.dev/og-image.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://sebastianvilla.dev/" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}

export default SEO
