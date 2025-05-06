import './App.css'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import posterImage from '/poster.jpg'; // Import the image

function App() {
  return (
    <div className="App">
      <header className="header hero-section">
        <div className="hero-content">
          <h1 className="brand">Techy Crew Innovations</h1>
          <h2 className="tagline">Unleash Innovation with Techy Crew Innovations</h2>
          <p className="subtitle">Your Trusted Partner for Digital Transformation</p>
          <nav>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <img src={posterImage} alt="Techy Crew Innovations Poster" className="home-poster" />
      </header>
      <main>
        <section id="dashboard"><Dashboard /></section>
        <section id="about"><AboutUs /></section>
        <section id="services"><Services /></section>
        <section id="technologies"><Technologies /></section>
        <section id="achievements"><Achievements /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="footer">
        <p>Contact us: <a href="mailto:contact@techycrewinnovations.com">contact@techycrewinnovations.com</a> | +91 1234567890</p>
        <p>&copy; {new Date().getFullYear()} Techy Crew Innovations. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
