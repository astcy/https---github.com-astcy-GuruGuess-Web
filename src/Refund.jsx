import React, { useEffect, useState } from 'react';
import './Refund.css'; // Updated styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Refund = () => {
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
    <div className="refund-page">
      <header className="refund-header">
        <h1 className="refund-title">Refund Policy</h1>
        <nav className="refund-nav">
          <ul className={`refund-nav-list ${menuOpen ? 'active' : ''}`}>
            <li><a href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</a></li>
            <li><a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</a></li>
            <li><a href="/terms" className={window.location.pathname === '/terms' ? 'active' : ''}>Terms & Condition</a></li>
            <li><a href="/blogs" className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</a></li>
            <li><a href="/Refund" className={window.location.pathname === '/Refund' ? 'active' : ''}>Refund,Return & Cancellation</a></li>
            <li><a href="/Privacy" className={window.location.pathname === '/Privacy' ? 'active' : ''}>Privacy</a></li>
            <li><a href="/Contact" className={window.location.pathname === '/Contact' ? 'active' : ''}>Contact</a></li>



          </ul>

          <div className={`refund-hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`refund-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="refund-back-button" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="refund-cut-button" onClick={toggleMenu}>
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

      <div className="refund-content-wrapper">
        <main>
        <section>


          <section>
      <h2 className="section-title">Refund Policy</h2>
      <ul className="mission-points">
        <li className="animated-text">At GuruGuess, we strive to provide a fair and transparent experience for all our users. Our refund policy outlines the conditions under which refunds may be issued for contest entry fees.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">1. Eligibility for Refunds:</h2>
      <ul className="mission-points">
        <li className="animated-text">Contest Cancellations: If a quiz contest is canceled due to unforeseen circumstances, all participants will receive a full refund of their entry fees.
        </li>
        <li className="animated-text">Technical Issues: If a user experiences a technical issue that prevents them from participating in a contest (e.g., app crashes, payment failures), they may be eligible for a refund. Such cases will be reviewed individually.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">2. Non-Refundable Situations:</h2>
      <ul className="mission-points">
        <li className="animated-text">User Errors: Entry fees will not be refunded for user errors, such as selecting the wrong contest or failing to participate in a contest after entry.</li>
        <li className="animated-text">Completed Contests: No refunds will be issued for contests that have been completed, regardless of the outcome.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">3. Refund Process:</h2>
      <ul className="mission-points">
        <li className="animated-text">Request Submission: To request a refund, users must contact our support team within 24 hours of the issue. Provide relevant details such as contest ID, payment reference, and a brief description of the problem.
       </li>
        <li className="animated-text"> Review and Approval: All refund requests will be reviewed within 3-5 business days. Approved refunds will be processed within 7 business days via the original payment method.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">4. Chargebacks and Disputes:</h2>
      <ul className="mission-points">
        <li className="animated-text">Users are encouraged to contact our support team to resolve any issues before initiating a chargeback or payment dispute. Unauthorized chargebacks may result in account suspension.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">5. Changes to the Refund Policy:</h2>
      <ul className="mission-points">
        <li className="animated-text">GuruGuess reserves the right to modify this refund policy at any time. Changes will be communicated through the app and our website.
        By using GuruGuess, users agree to this Refund Policy. If you have any questions or concerns, please contact our support team at 
           
           <a href="mailto:contactus@guruguess.com">contactus@guruguess.com</a>.
        </li>
      </ul>
    </section>
          </section>
        </main>
      </div>

      <footer className="refund-footer">
        <div className="refund-footer-content">
          <div className="refund-footer-section contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:guruguesss@gmail.com">guruguesss@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/guruguesss" target="_blank" rel="noopener noreferrer">@guruguesss</a></p>
          </div>
          <div className="refund-footer-section">
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:9140293443">Contact Us 9140293443</a></p>
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:7460802449">For more queries contact on 7460802449</a></p>
          </div>
        </div>
        <div className="refund-footer-bottom">
          <p>© 2024 Guruguess. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Refund;
