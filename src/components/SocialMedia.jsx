import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialmedia.sass'

const socialMedia = [
    { name: 'LinkedIn', icon: <FaLinkedin />, },
    { name: 'GitHub', icon: <FaGithub />, },
    { name: 'Twitter', icon: <FaTwitter />, },
    { name: 'Instagram', icon: <FaInstagram />, },
]

const SocialMedia = () => {
  return (
    <section id="social-media">
        {socialMedia.map((media) => ( 
            <a href="link" className="social-btn" id={media.name} key={media.name}>
                { media.icon }
            </a>
        ))}
    </section>
  )
}

export default SocialMedia