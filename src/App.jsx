import Navbar from "./components/NavBar/NavBar"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
// import Resume from "./components/routes/Resume"

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      {/* <Resume /> */}
      <Footer />
    </div>
  )
}

export default App
