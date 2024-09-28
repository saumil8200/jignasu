import './App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {

  return (
    <>
      <Hero />
      <div className='mx-auto container-s'>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <footer className='mt-12 text-center px-8 py-12 bg-white'>
        Jignasu Pathak
      </footer>
    </>
  )
}

export default App
