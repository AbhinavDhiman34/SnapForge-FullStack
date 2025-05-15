import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import AboutPage from './pages/About';
import Programes from './pages/Programes';



function App() {
  return (
   
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/programes" element={<Programes />} />

      <Route path="/sustainability" element={<Tools />} />
      <Route path="/contact" element={ <Contact/>} />

      
    </Routes>
  )
}

export default App;