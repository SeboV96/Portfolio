import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = () => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>Sebastian Villa - Full Stack Developer | Portfolio</title>
      <meta name="description" content="Desarrollador Full Stack con 2.5 años de experiencia. Especializado en React, Node.js, PHP, Laravel, MongoDB y PostgreSQL. Desarrollo de soluciones web innovadoras, plataformas de gestión y aplicaciones full-stack. ¡Conectemos y creemos algo increíble juntos!" />
      <meta name="keywords" content="desarrollador full stack, react, nodejs, javascript, php, laravel, mongodb, postgresql, express, portfolio, web development, desarrollo web, freelancer, argentina" />
      <meta name="author" content="Sebastian Villa" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sebastianvilla.dev/" />
      <meta property="og:title" content="Sebastian Villa - Full Stack Developer | Portfolio" />
      <meta property="og:description" content="Desarrollador Full Stack con 2.5 años de experiencia. Especializado en React, Node.js, PHP, Laravel, MongoDB y PostgreSQL. Desarrollo de soluciones web innovadoras." />
      <meta property="og:image" content="https://sebastianvilla.dev/logo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://sebastianvilla.dev/" />
      <meta name="twitter:title" content="Sebastian Villa - Full Stack Developer | Portfolio" />
      <meta name="twitter:description" content="Desarrollador Full Stack con 2.5 años de experiencia. Especializado en React, Node.js, PHP, Laravel, MongoDB y PostgreSQL." />
      <meta name="twitter:image" content="https://sebastianvilla.dev/logo.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://sebastianvilla.dev/" />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}

export default SEO
