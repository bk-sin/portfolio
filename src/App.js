import "./App.css"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import About from "./components/About"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
