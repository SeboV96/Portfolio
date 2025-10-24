import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import './i18n/i18n'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import SEO from './components/seo/SEO'
import Toggle from './components/theme/Toggle'
import LanguageSelector from './components/language/LanguageSelector'

export const App = () => {
  return (
    <Router>
      <HelmetProvider>
        <ThemeProvider>
          <SEO />
          <Toggle />
          <LanguageSelector />
          <Header/>
          <Nav/>
          <About/>
          <Experience/>
          <Services/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </ThemeProvider>
      </HelmetProvider>
    </Router>
  )
}



export default App