import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import PromoSection from './components/PromoSection';
import SubContent from './components/SubContent';
import MyCarousel from './components/Carousel';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import HealthPartnerSection from './components/head';
import CalendlyComponent from './components/CalendlyComponent';

const App = () => {
  const calRef = useRef(null);
  const contactRef = useRef(null);

  const handleButtonClick = (sectionRef) => {
    switch (sectionRef) {
      case 'cal':
        window.scrollTo({ top: calRef.current.offsetTop, behavior: 'smooth' });
        break;

      case 'contact':
        window.scrollTo({ top: contactRef.current.offsetTop, behavior: 'smooth' });
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HealthPartnerSection handleButtonClick={handleButtonClick} />
      <PromoSection />
      <SubContent />
      <div className='spacer layer1'></div>
      <MyCarousel />
      <div className='spacer layer2'></div>
      <Contact ref={contactRef} />
      <MapSection />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
