import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Resume from "./components/routes/Resume"

function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Skills />
              <Intro />
              <Portfolio />
              <Contact />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
