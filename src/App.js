import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import Work from './pages/work/Work';
import Invalid404Page from './pages/Invalid404Page/Invalid404Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'
            element={<About />} />
          <Route path='/skills'
            element={<Skills />} />
          <Route path='/contact'
            element={<Contact />} />
          <Route path='/work'
            element={<Work />} />
          <Route path='*'
            element={<Invalid404Page />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
