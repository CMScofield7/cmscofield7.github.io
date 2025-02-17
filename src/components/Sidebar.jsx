import SocialMedia from './SocialMedia'
import Contact from './Contact'

import Eu from '../img/Eu, só que em JPEG.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Eu} alt="CM Scofield" />
      <p className="title" style={{ color: '#FFD100' }}>Desenvolvedor Backend</p>
      <SocialMedia />
      <Contact />
      <a href="" className="btn">Aqui está meu currículo!</a>
    </aside>
  )
}

export default Sidebar