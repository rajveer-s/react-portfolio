import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
