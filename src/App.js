import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about'
            element={<About />} />
          <Route path='/skills'
            element={<Skills />} />
          <Route path='/contact'
            element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
