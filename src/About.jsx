import React, { useEffect, useState } from 'react';
import './About.css'; // Create this file for the updated styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
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
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">About Us</h1>
        <nav className="about-nav">
          <ul className={`about-nav-list ${menuOpen ? 'active' : ''}`}>
            <li><a href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</a></li>
            <li><a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</a></li>
            <li><a href="/terms" className={window.location.pathname === '/terms' ? 'active' : ''}>Terms</a></li>
            <li><a href="/blogs" className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</a></li>
            <li><a href= "/Refund" className={window.location.pathname==='/Refund'?'active':''}>Refund</a></li>
            <li><a href= "/Privacy" className={window.location.pathname==='/Privacy'?'active':''}>Privacy</a></li>
            <li><a href= "/Contact" className={window.location.pathname==='/Contact'?'active':''}>Contact</a></li>


          </ul>

          <div className={`about-hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`about-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="about-back-button" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="about-cut-button" onClick={toggleMenu}>
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

      <div className="about-content-wrapper">
        <main>
        <section>
    <h2 className="section-title">Welcome to GuruGuess</h2>
    <p className="animated-text">At GuruGuess, we're passionate about creating an engaging and competitive platform where knowledge meets excitement. Whether you're a trivia enthusiast, a seasoned quizzer, or someone looking for a fun way to test your knowledge, GuruGuess offers something for everyone. Our platform is designed to bring people together through the thrill of quizzing, where you can challenge yourself, compete with others, and win amazing prizes.</p>
  </section>

  <section>
    <h2 className="section-title">Our Mission</h2>
    <p className="animated-text">Our mission is simple: to provide a fun, fair, and rewarding experience for all our users. We believe that everyone has the potential to be a guru in their own right, and GuruGuess is the platform where you can showcase your skills. We aim to create a community of learners, competitors, and winners who share a love for knowledge and friendly competition.</p>
  </section>
    
  <section>
  <h2 className="section-title">What We Offer </h2>
  <h3 className="section-second-title">1. Quiz Contests</h3>
  <p className="animated-text">GuruGuess hosts a variety of quiz contests that cater to different interests and knowledge levels. From general knowledge to specialized topics, there’s always a contest for everyone. Our contests are designed to be both challenging and rewarding, ensuring that every participant has the chance to shine.</p>
      <ul className="mission-points">
        <li className="animated-text">Variety of Topics: We offer quizzes on a wide range of subjects, including science, history, sports, entertainment, and more. Each contest is carefully crafted to test your knowledge and speed.</li>
        <li className="animated-text">Time-Bound Contests: Each quiz contest is time-bound, adding an extra layer of excitement as you race against the clock to answer as many questions correctly as possible.</li>
      </ul>
  <h3 className="sectionsecond-title">2. Win Exciting Prizes</h3>
  <p className="animated-text">At GuruGuess, winning is not just about the bragging rights – it's about earning real rewards. Our platform offers participants the opportunity to win exciting prizes by participating in our quiz contests.</p>
  <ul className="mission-points">
        <li className="animated-text">Cash Prizes: Compete in contests and win cash prizes directly credited to your account.</li>
        <li className="animated-text">Exclusive Rewards: Apart from cash, winners can also receive exclusive rewards, such as gift vouchers, gadgets, and more.</li>
      </ul>
 <h3 className="sectionsecond-title">3. Referral Program</h3>
  <p className="animated-text">We believe that sharing the fun doubles the excitement! Our referral program is designed to reward you for bringing your friends into the GuruGuess community.</p>
  <ul className="mission-points">
        <li className="animated-text">Refer and Earn: Invite your friends to join GuruGuess using your unique referral code. For every friend who signs up and participates in a contest, you'll earn rewards.</li>
        <li className="animated-text">Free Contest Entries: Referring friends can also earn you free entries into select contests, giving you more chances to win without spending a dime.</li>
      </ul>     
  <h3 className="sectionsecond-title">4. Fair Play and Speed Scoring</h3>
  <p className="animated-text">GuruGuess prides itself on maintaining a fair and competitive environment. Our scoring system is designed to reward both accuracy and speed, making sure that the best players rise to the top.</p>
  <ul className="mission-points">
        <li className="animated-text">Accuracy Matters: While correct answers are crucial, the speed at which you answer also plays a significant role in your overall score.</li>
        <li className="animated-text">Real-Time Results: Scores are calculated in real-time, allowing you to see where you stand against your competitors as the contest progresses.</li>
      </ul>     
    </section>

    <section>
  <h2 className="section-title">Responsible Gaming</h2>
  <h3 className="section-second-title">1. Play Responsibly</h3>
  <p className="animated-text">While we strive to provide a fun and engaging experience, we also recognize the importance of responsible gaming. The thrill of winning can be exhilarating, but it's important to play in moderation and within your limits.</p>
      <ul className="mission-points">
        <li className="animated-text">Age Verification: To ensure a safe environment, GuruGuess is only open to users aged 18 and above. We strictly enforce age verification to protect younger audiences.</li>
        <li className="animated-text">Self-Control: We encourage our users to play responsibly and to be aware of the potential for addictive behavior. Remember, it’s all about having fun and enjoying the experience.</li>
      </ul>
 <h3 className="sectionsecond-title">2. Risk Awareness</h3>
  <p className="animated-text">We want our users to be fully aware of the risks associated with excessive gaming. While our platform is designed for enjoyment, it’s crucial to maintain a balanced approach to participation.</p>
      <ul className="mission-points">
        <li className="animated-text">User Safety: Your safety and well-being are our top priorities. If you ever feel that gaming is becoming overwhelming, we urge you to take a break or seek help.</li>
        <li className="animated-text">Play at Your Own Risk: All users participate in contests at their own risk. GuruGuess is not liable for any negative consequences related to excessive gaming or financial loss.</li>
      </ul>
      </section>

      <section>
  <h2 className="section-title">How It Works</h2>
  <h3 className="section-second-title">1. Simple Sign-Up</h3>
  <p className="animated-text">Getting started with GuruGuess is easy! Simply create an account using your email address, complete the verification process, and you're ready to begin your journey.</p>
      <ul className="mission-points">
        <li className="animated-text">User-Friendly Interface: Our platform is designed with simplicity in mind, ensuring that even first-time users can navigate with ease.</li>
        <li className="animated-text">Quick Verification: After signing up, verify your email to unlock full access to our contests and features.</li>
      </ul>
 <h3 className="sectionsecond-title">2. Choose Your Contest</h3>
  <p className="animated-text">Once you're signed up, browse through our list of available contests and choose the one that interests you the most.</p>
      <ul className="mission-points">
        <li className="animated-text">Multiple Contests: Participate in as many contests as you like, with each offering unique challenges and rewards.</li>
        <li className="animated-text">Contest Details: Before joining, you can view contest details, including entry fees, prize pools, and the number of available slots.</li>
      </ul>
 <h3 className="sectionsecond-title">3. Payment and Participation</h3>
  <p className="animated-text">To join a contest, simply complete the payment process, and you’re in! We offer a variety of secure payment methods to make the process as seamless as possible.</p>
      <ul className="mission-points">
        <li className="animated-text">Secure Transactions: Your payment information is securely processed, and we do not store any sensitive data on our servers.</li>
        <li className="animated-text">Instant Confirmation: Once your payment is verified, you will receive instant confirmation and can start participating in the contest.</li>
      </ul>
      </section>

      <section>
  <h2 className="section-title">Our Community</h2>
  <h3 className="section-second-title">1. Join a Growing Community</h3>
  <p className="animated-text">GuruGuess is more than just a quiz platform – it’s a community of like-minded individuals who share a passion for knowledge and competition.</p>
      <ul className="mission-points">
        <li className="animated-text">Connect with Others: Engage with fellow quizzers, share strategies, and celebrate each other’s successes.</li>
        <li className="animated-text">Stay Updated: Follow us on social media and subscribe to our newsletter for the latest updates, tips, and announcements.</li>
      </ul>
 <h3 className="sectionsecond-title">2. Support and Feedback</h3>
  <p className="animated-text">We value your feedback and are committed to providing the best possible experience. Our support team is always available to assist you with any questions or concerns.</p>
      <ul className="mission-points">
        <li className="animated-text">24/7 Support: Reach out to us anytime through our support channels, and we’ll be happy to help.</li>
        <li className="animated-text">Continuous Improvement: Your feedback helps us improve the platform, so don’t hesitate to share your thoughts.</li>
      </ul>
      </section>


  <section>
    <h2 className="section-title">Conclusion</h2><p className="animated-text">At Hinduverse Innovation pvt. ltd.</p>
    <p className="animated-text">we believe that knowledge is power, and we’re here to help you unleash your full potential. Whether you’re in it for the thrill of competition, the joy of learning, or the excitement of winning, GuruGuess is the place for you. So, what are you waiting for? Join us today and start your journey to becoming a quiz master!</p>
  </section>
        </main>
      </div>

      <footer className="about-footer">
        <div className="about-footer-content">
          <div className="about-footer-section contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:guruguesss@gmail.com">guruguesss@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/guruguesss" target="_blank" rel="noopener noreferrer">@guruguesss</a></p>
          </div>
          <div className="about-footer-section">
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:9140293443">Contact Us 9140293443</a></p>
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:7460802449">For more queries contact on 7460802449</a></p>
          </div>
        </div>
        <div className="about-footer-bottom">
          <p>© 2024 Guruguess. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
