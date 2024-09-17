import React from 'react'
import Header from './Components/Header'
import 'react-multi-carousel/lib/styles.css'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <p id="about"></p>
      <Header></Header>
      <main className="hero">
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
