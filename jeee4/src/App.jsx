import './App.css';
import Home from './sections/Home/Home';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Qualification from './sections/Qualification/Qualification';
import Work from './sections/Work/Work';
import { Helmet } from 'react-helmet'
import ScrollUp from './sections/ScrollUp/ScrollUp';

function App() {
  return (
    <>
  <Helmet>
    <title>Je</title>
    <meta charSet="utf-8" />
    <meta name="description" content="Jerald Labalan's portfolio showcasing web development skills, projects, and expertise in React and front-end technologies." />
    <meta name="keywords" content="Jerald Labalan, web developer, portfolio, React developer, front-end projects" />
    <meta name="author" content="Jerald Labalan" />
    <link rel="icon" href="https://jeraldlabalanportfolio.vercel.app/favicon.ico" />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content="Jerald Labalan - Web Developer Portfolio" />
    <meta property="og:description" content="Discover Jerald Labalan's skills in React, web development, and project highlights." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jeraldlabalanportfolio.vercel.app/" />
    <meta property="og:image" content="https://jeraldlabalanportfolio.vercel.app/profile.jpg" />
    <meta property="og:site_name" content="Jerald Labalan Portfolio" />
    <meta property="og:locale" content="en_US" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jerald Labalan - Web Developer Portfolio" />
    <meta name="twitter:description" content="Discover Jerald Labalan's skills in React, web development, and project highlights." />
    <meta name="twitter:image" content="https://jeraldlabalanportfolio.vercel.app/profile.jpg" />
  </Helmet>

      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;