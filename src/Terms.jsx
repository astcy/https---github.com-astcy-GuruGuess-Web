import React, { useEffect, useState } from 'react';
import './Terms.css'; // Updated styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Terms = () => {
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
    <div className="terms-page">
      <header className="terms-header">
        <h1 className="terms-title">Terms and Conditions</h1>
        <nav className="terms-nav">
          <ul className={`terms-nav-list ${menuOpen ? 'active' : ''}`}>
            <li><a href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</a></li>
            <li><a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</a></li>
            <li><a href="/terms" className={window.location.pathname === '/terms' ? 'active' : ''}>Terms & Condition</a></li>
            <li><a href="/blogs" className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</a></li>
            <li><a href= "/Refund" className = {window.location.pathname ==='/Refund'?'active':''}>Refund,Return & Cancellation</a></li>
            <li><a href= "/Privacy" className = {window.location.pathname ==='/Privacy'?'active':''}>Privacy</a></li>
            <li><a href= "/Contact" className={window.location.pathname==='/Contact'?'active':''}>Contact</a></li>



          </ul>

          <div className={`terms-hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`terms-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="terms-back-button" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="terms-cut-button" onClick={toggleMenu}>
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

      <div className="terms-content-wrapper">
        <main>
        <section>

          <section>
      <h2 className="section-title">1. Introduction</h2>
      <ul className="mission-points">
        <li className="animated-text">Welcome to GuruGuess, an online platform that hosts contests based on speed and accuracy of responses.</li>
        <li className="animated-text"> By participating in any contest on GuruGuess, you agree to abide by the following terms and conditions. These terms apply to all users of the platform.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">2. Eligibility</h2>
      <ul className="mission-points">
        <li className="animated-text">Participants must be at least 18 years old or the age of legal majority in their jurisdiction to enter contests that involve monetary transactions.</li>
        <li className="animated-text">By entering a contest, you confirm that all registration information you submit is truthful and accurate.</li>
        <li className="animated-text">Important Notice: The contests on GuruGuess may be engaging and could potentially cause addiction. It is the responsibility of the users to ensure they are 18+ and to participate at their own risk. GuruGuess will not be held liable for any negative impact related to the overuse of the platform.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">3. Payment and Verification</h2>
      <ul className="mission-points">
        <li className="animated-text">To participate in a contest, users must complete the payment process as outlined on the platform. Payment methods accepted include credit/debit cards, digital wallets, and other methods as specified.</li>
        <li className="animated-text">Payment verification is mandatory before users can join any contest. GuruGuess reserves the right to withhold access to contests until payment is verified.</li>
        <li className="animated-text">Once payment is verified, a confirmation will be sent to the registered email, and the user will be able to join the contest.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">4. Contest,Slots and Timing</h2>
      <ul className="mission-points">
        <li className="animated-text">Contests on GuruGuess are time-bound and have a limited number of slots available.</li>
        <li className="animated-text">Users must join the contest within the time frame specified on the contest details page. Late entries will not be accepted.</li>
        <li className="animated-text">Contest timing, including start and end times, will be strictly adhered to, and any technical issues should be reported to customer support immediately.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">5. Question Marking and Scoring</h2>
      <ul className="mission-points">
        <li className="animated-text">Contest scoring is based on both the accuracy of answers and the speed at which they are submitted. Each contest may have different scoring criteria, which will be clearly mentioned before the contest begins.</li>
        <li className="animated-text">Speed of response will be a key factor in determining the final score. Faster correct responses will be awarded more points.</li>
        <li className="animated-text">Any attempt to manipulate the speed of response, such as using bots or automated systems, is strictly prohibited and will result in disqualification and forfeiture of any prizes.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">6. Prizes and Payouts</h2>
      <ul className="mission-points">
        <li className="animated-text">Prizes for contests will be clearly stated before the contest begins.</li>
        <li className="animated-text">Payouts will be processed within a specified time frame after the contest ends, subject to verification of results.</li>
        <li className="animated-text">GuruGuess reserves the right to delay or withhold payments if fraudulent activity is suspected.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">7. Cancellation and Refunds</h2>
      <ul className="mission-points">
        <li className="animated-text">Contest entry fees are non-refundable unless the contest is canceled by GuruGuess. In such cases, refunds will be processed within a specified time frame.</li>
        <li className="animated-text">GuruGuess reserves the right to cancel or modify any contest at any time without prior notice. In the event of cancellation, entry fees will be refunded.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">8. User Conduct</h2>
      <ul className="mission-points">
        <li className="animated-text">Users must engage in fair play and refrain from any activity that may disrupt the contest or give an unfair advantage.</li>
        <li className="animated-text">Any form of cheating, collusion, or other unethical behavior is prohibited and will result in disqualification.</li>
      </ul>
    </section>
    <section>
      <h2 className="section-title">9. Privacy and Data Protection</h2>
      <ul className="mission-points">
        <li className="animated-text">GuruGuess is committed to protecting user privacy. Personal information collected during registration and contest participation will be used in accordance with our Privacy Policy.</li>
        <li className="animated-text">Payment information will be processed securely and will not be stored on our servers.</li>
      </ul>
    </section>

    <section>
      <h2 className="section-title">10. Limitation of Liability</h2>
      <ul className="mission-points">
        <li className="animated-text">GuruGuess will not be liable for any loss or damage arising from participation in contests, including but not limited to technical issues, loss of data, or unauthorized access to user accounts.</li>
        <li className="animated-text">Users participate in contests at their own risk, and GuruGuess makes no warranties or guarantees regarding the accuracy, reliability, or performance of the platform.</li>
      </ul>
    </section>

    <section>
      <h2 className="section-title">11. Amendments to Terms</h2>
      <ul className="mission-points">
        <li className="animated-text">GuruGuess reserves the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued participation in contests will be considered acceptance of the revised terms.</li>
      </ul>
    </section>

    <section>
      <h2 className="section-title">12. Contact Information</h2>
      <ul className="mission-points">
        <li className="animated-text">For any questions or concerns regarding these terms and conditions, please contact our support team at contactus@guruguess.com</li>
        <li className="animated-text">Address:26,Kaweli,Pahitiyapur,Jaunpur,UttarPradesh, 222175</li>
        <li className="animated-text">OPERATED BY: Prajjwal Dubey</li>


      </ul>
    </section>
          </section>
        </main>
      </div>

      <footer className="terms-footer">
        <div className="terms-footer-content">
          <div className="terms-footer-section contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:guruguesss@gmail.com">guruguesss@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/guruguesss" target="_blank" rel="noopener noreferrer">@guruguesss</a></p>
          </div>
          <div className="terms-footer-section">
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:9140293443">Contact Us 9140293443</a></p>
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:7460802449">For more queries contact on 7460802449</a></p>
          </div>
        </div>
        <div className="terms-footer-bottom">
          <p>© 2024 Guruguess. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
