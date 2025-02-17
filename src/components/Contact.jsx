import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/contact.sass'

const Contact = () => {
  return (
    <section id="contact">
        <div className="contact-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(11) 9 9999-9999</p>
            </div>
        </div>
        <div className="contact-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <p>email@email.com</p>
            </div>
        </div>
        <div className="contact-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Camaçari, Bahia</p>
            </div>
        </div>
    </section>
  )
}

export default Contact;