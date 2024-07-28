import Navbar from "./components/NavBar/NavBar"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
