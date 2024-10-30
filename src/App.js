import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import CustomParticles from './utils/Particles'; // Renamed import
import About from './containers/about/About';
import Home from './containers/Home/Home';
import Resume from './containers/resume/Resume';
import Skills from './containers/skills/Skills';
import Portfolio from './containers/portfolio/Portfolio';
import Contact from './containers/contact/Contact';
import Navbar from './components/navbar/Navbar';
import { loadFull } from 'tsparticles';
import Footer from './components/footer/Footer';

function App() {
  const location = useLocation();
  console.log(location);

const handleInit = async (main)=>{
  await loadFull(main)
}

const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className='App'>
      {/* particles js */}
        {
          renderParticlesJsInHomePage &&  <CustomParticles />
        }

      
      {/* navbar */}
      <Navbar />
      {/* main page container */}
      <div className='App__main-page-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
<Footer/>
    </div>
  );
}

export default App;
