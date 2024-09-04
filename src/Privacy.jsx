import React, { useEffect, useState } from 'react';
import './Privacy.css'; // Updated styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Privacy = () => {
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
    <div className="privacy-page">
      <header className="privacy-header">
        <h1 className="privacy-title">Privacy Policy</h1>
        <nav className="privacy-nav">
          <ul className={`privacy-nav-list ${menuOpen ? 'active' : ''}`}>
            <li><a href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</a></li>
            <li><a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</a></li>
            <li><a href="/terms" className={window.location.pathname === '/terms' ? 'active' : ''}>Terms & Condition</a></li>
            <li><a href="/blogs" className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</a></li>
            <li><a href="/Refund" className={window.location.pathname === '/Refund' ? 'active' : ''}>Refund,Return & Cancellation</a></li>
            <li><a href="/Privacy" className={window.location.pathname === '/Privacy' ? 'active' : ''}>Privacy</a></li>
            <li><a href="/Contact" className={window.location.pathname === '/Contact' ? 'active' : ''}>Contact</a></li>


          </ul>

          <div className={`privacy-hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`privacy-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="privacy-back-button" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="privacy-cut-button" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <a href="/" onClick={handleLinkClick} className={window.location.pathname === '/' ? 'active' : ''}>Home</a>
        <a href="/about" onClick={handleLinkClick} className={window.location.pathname === '/about' ? 'active' : ''}>About</a>
        <a href="/terms" onClick={handleLinkClick} className={window.location.pathname === '/terms' ? 'active' : ''}>Terms</a>
        <a href="/blogs" onClick={handleLinkClick} className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</a>
        <a href="/Refund" onClick={handleLinkClick} className={window.location.pathname === '/Refund' ? 'active' : ''}>Refund</a>
        <a href="/Privacy" onClick={handleLinkClick} className={window.location.pathname === '/Privacy' ? 'active' : ''}>Privacy</a>
        <a href="/Contact" onClick={handleLinkClick} className={window.location.pathname === '/Contact' ? 'active' : ''}>Contact</a>


      </div>

      <div className="privacy-content-wrapper">
        <main>
        <section>


          <section>
          <h4 className="section-third ">At GuruGuess, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application, GuruGuess ("App"). By using the App, you agree to the terms of this Privacy Policy.</h4>
          <h2 className="section-title">1. Information We Collect</h2>
          <p className = "animated-text" >1.1. Personal Information We may collect personal information that you voluntarily provide to us when registering on the App, such as:</p>
          <li className = "animated-text" >Name</li>
          <li className = "animated-text" >Email address</li>
          <li className = "animated-text" >Phone number</li>
          <li className = "animated-text" >Payment information (for paid contests)</li>
          <li className = "animated-text" >Profile picture (if provided)</li>

          <p className = "animated-text" >1.2. Non-Personal Information We may collect non-personal information about your usage of the App, such as:</p>
          <li className = "animated-text" >Device information (e.g., device model, OS version)</li>
          <li className = "animated-text" >IP address</li>
          <li className = "animated-text" > App usage data (e.g., interactions, time spent on the App)</li>
          <li className = "animated-text" >Location data (if enabled) </li>

          <h2 className="section-title">2. How We Use Your Information. We use the information we collect to: </h2>
          <li className = "animated-text" >Provide, operate, and maintain the App Process contest entries and payments. Communicate with you regarding your account, contests, and updates
Pe sonalize your experience on the App. Improve our services and develop new features</li>
<li className = "animated-text" >Ensure the security and integrity of the App</li>
<h4 className="section-third ">Comply with legal obligations</h4>
<h2 className="section-title">3. Sharing Your Information  </h2>
<h4 className="section-third ">We do not share your personal information with third parties, except in the following cases:</h4>
<li className = "animated-text" >Service Providers: We may share information with third-party service providers who assist us in operating the App (e.g., payment processors, hosting services). These providers are required to protect your information.</li>
<li className = "animated-text" >Legal Compliance: We may disclose your information to comply with legal obligations, enforce our terms of service, or protect the rights, property, or safety of GuruGuess, our users, or others.</li>
<li className = "animated-text" >Business Transfers: In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred to the acquiring entity.</li>

<h2 className="section-title">4. Security  </h2>
<li className = "animated-text" >We take the security of your personal information seriously and implement industry-standard measures to protect it. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
</li>

<h2 className="section-title">5. Data Retention </h2>
<li className = "animated-text" >We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
</li>

<h2 className="section-title">6. Your Rights</h2>
<h4 className="section-third ">You have the right to:</h4>
<li className="animated-text">Access and update your personal information.</li>
<li className="animated-text">Request the deletion of your personal information.</li>
<p className = "animated-text" >Opt-out of marketing communications Restrict the processing of your information</p>
<p className = "animated-text" >Object to the use of your information in certain circumstances</p>
<li className = "animated-text" >To exercise these rights, please contact us at 
<a href="mailto:contactus@guruguess.com">contactus@guruguess.com</a>
</li>

<h2 className="section-title">7. Children's Privacy</h2>
<li className="animated-text">GuruGuess is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will take steps to delete it as soon as possible.</li>

<h2 className="section-title">8. Third-Party Links</h2>
<li className="animated-text">The App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</li>

<h2 className="section-title">9. Changes to This Privacy Policy</h2>
<li className="animated-text">We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top of this page and notify you of any significant changes through the App or by other means.</li>

<h2 className="section-title">10. Contact Us</h2>
<li className="animated-text">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
</li>
<p className = "animated-text" >Email: <a href="mailto:contactus@guruguess.com">contactus@guruguess.com</a>
Address: North Gate, Civil Gate,Jaunpur,UttarPradesh --222002</p>

<p className = "animated-text" >By using GuruGuess, you consent to the terms of this Privacy Policy. Please review it periodically for any updates.</p>

    </section>
          </section>
        </main>
      </div>

      <footer className="privacy-footer">
        <div className="privacy-footer-content">
          <div className="privacy-footer-section contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:guruguesss@gmail.com">guruguesss@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/guruguesss" target="_blank" rel="noopener noreferrer">@guruguesss</a></p>
          </div>
          <div className="privacy-footer-section">
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:9140293443">Contact Us 9140293443</a></p>
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:7460802449">For more queries contact on 7460802449</a></p>
          </div>
        </div>
        <div className="privacy-footer-bottom">
          <p>© 2024 Guruguess. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
