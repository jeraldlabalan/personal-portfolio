import './App.css';
import Home from './sections/Home/Home';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Qualification from './sections/Qualification/Qualification';
import Work from './sections/Work/Work';
import ScrollDown from './sections/Home/ScrollDown';
import ScrollUp from './sections/ScrollUp/ScrollUp';

function App() {
  return (
    <>
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