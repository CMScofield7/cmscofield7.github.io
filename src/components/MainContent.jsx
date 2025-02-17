import About from './About'
import Projects from './Projects'
import Techs from './Techs'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Techs />
      <Projects />
    </main>
  )
}

export default MainContent