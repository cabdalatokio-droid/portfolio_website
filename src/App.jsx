import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hoppies from './components/Hoppies'
import Contacts from './components/Contacts'

function App() {
  return (
    <>
      <Header />
      <main id="home">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Hoppies />
        <Contacts />
      </main>
    </>
  )
}

export default App
