import React, { useState,useEffect } from 'react';
import './Contact.css'; // Updated styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { getDatabase, ref, push } from 'firebase/database'; // Import Firebase functions

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);
    window.location.href = event.target.href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
          section.classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1 className="contact-title">Privacy Policy</h1>
        <nav className="contact-nav">
          <ul className={`contact-nav-list ${menuOpen ? 'active' : ''}`}>
            <li><a href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</a></li>
            <li><a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</a></li>
            <li><a href="/terms" className={window.location.pathname === '/terms' ? 'active' : ''}>Terms & Condition</a></li>
            <li><a href="/blogs" className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</a></li>
            <li><a href="/Refund" className={window.location.pathname === '/Refund' ? 'active' : ''}>Refund,Return & Cancellation</a></li>
            <li><a href="/Privacy" className={window.location.pathname === '/Privacy' ? 'active' : ''}>Privacy</a></li>
            <li><a href="/Contact" className={window.location.pathname === '/Contact' ? 'active' : ''}>Contact</a></li> {/* Added Contact page link */}
          </ul>

          <div className={`contact-hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`contact-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="contact-back-button" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="contact-cut-button" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <a href="/" onClick={handleLinkClick} className={window.location.pathname === '/' ? 'active' : ''}>Home</a>
        <a href="/about" onClick={handleLinkClick} className={window.location.pathname === '/about' ? 'active' : ''}>About</a>
        <a href="/terms" onClick={handleLinkClick} className={window.location.pathname === '/terms' ? 'active' : ''}>Terms</a>
        <a href="/blogs" onClick={handleLinkClick} className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</a>
        <a href="/Refund" onClick={handleLinkClick} className={window.location.pathname === '/Refund' ? 'active' : ''}>Refund</a>
        <a href="/Privacy" onClick={handleLinkClick} className={window.location.pathname === '/Privacy' ? 'active' : ''}>Privacy</a>
        <a href="/Contact" onClick={handleLinkClick} className={window.location.pathname === '/Contact' ? 'active' : ''}>Contact</a> {/* Added Contact page link */}
      </div>

      <div className="contact-content-wrapper">
        <main>
          <section>
            {/* Contact Section */}
            <div className="contact-page">
              <h2>Contact Us</h2>
              <p>Email: guruguesss@gmail.com</p>
              <p>Office: 1234 Office St., City, Country</p>
              <ContactForm />
            </div>
          </section>
        </main>
      </div>

      <footer className="contact-footer">
        <div className="contact-footer-content">
          <div className="contact-footer-section contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:guruguesss@gmail.com">guruguesss@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/guruguesss" target="_blank" rel="noopener noreferrer">@guruguesss</a></p>
          </div>
          <div className="contact-footer-section">
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:9140293443">Contact Us 9140293443</a></p>
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:7460802449">For more queries contact on 7460802449</a></p>
          </div>
        </div>
        <div className="contact-footer-bottom">
          <p>© 2024 Guruguess. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getDatabase();
    const messageRef = ref(db, 'Messages');
    push(messageRef, {
      name,
      email,
      phone,
      message,
    });

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    alert('Message sent successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Mobile Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
