import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './Blog.css'; // Updated styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (event) =>{
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
    <div className="blog-page">
      <header className="blog-header">
        <h1 className="blog-title">Our Blogs</h1>
        <nav className="blog-nav">
          <ul className={`blog-nav-list ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={window.location.hash === '#/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={window.location.hash === '#/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/terms" className={window.location.hash === '#/terms' ? 'active' : ''}>Terms & Condition</Link></li>
            <li><Link to="/blogs" className={window.location.hash === '#/blogs' ? 'active' : ''}>Blogs</Link></li>
            <li><Link to="/Refund" className={window.location.hash === '#/Refund' ? 'active' : ''}>Return,Refund & Cancellation</Link></li>
            <li><Link to="/Privacy" className={window.location.hash === '#/Privacy' ? 'active' : ''}>Privacy</Link></li>
            <li><Link to="/Contact" className={window.location.hash === '#/Contact' ? 'active' : ''}>Contact</Link></li>
          </ul>

          <div className={`blog-hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`blog-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="blog-back-button" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="blog-cut-button" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <li><Link to="/" onClick={handleLinkClick} className={window.location.hash === '#/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick} className={window.location.hash === '#/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/terms" onClick={handleLinkClick} className={window.location.hash === '#/terms' ? 'active' : ''}>Terms</Link></li>
            <li><Link to="/blogs" onClick={handleLinkClick} className={window.location.hash === '#/blogs' ? 'active' : ''}>Blogs</Link></li>
            <li><Link to="/Refund" onClick={handleLinkClick} className={window.location.hash === '#/Refund' ? 'active' : ''}>Refund</Link></li>
            <li><Link to="/Privacy" onClick={handleLinkClick} className={window.location.hash === '#/Privacy' ? 'active' : ''}>Privacy</Link></li>
            <li><Link to="/Contact" onClick={handleLinkClick} className={window.location.hash === '#/Contact' ? 'active' : ''}>Contact</Link></li>
      </div>

      <div className="blog-content-wrapper">
        <main>
        <section>
    <h4 className="section-third ">Unlock Your Potential with GuruGuess: Where Knowledge Meets Rewards</h4>
    <p className="animated-text">In the ever-evolving world of online gaming, finding a platform that truly combines fun, knowledge, and rewards can be a challenge. Enter GuruGuess – the ultimate destination for quiz enthusiasts looking to test their skills, compete with others, and win exciting prizes. Whether you’re a trivia master or just someone looking for a bit of brain-teasing entertainment, GuruGuess has something to offer.</p>
    <h2 className="section-title">Why Choose GuruGuess?</h2>
    <p className = "animated-text" >At GuruGuess, we believe that everyone has the potential to be a guru in their own right. Our platform is designed not just for entertainment, but for those who have a passion for learning and competition. Here’s why GuruGuess stands out from the rest:</p>
    <h4 className="section-third ">1. Engaging Quiz Contests</h4>
    <p className = "animated-text" >GuruGuess hosts a variety of quiz contests that cater to different interests and knowledge levels. From general knowledge to specialized topics, there’s always something new and exciting to explore. Each contest is time-bound, adding an extra layer of excitement as participants race against the clock to answer as many questions correctly as possible.</p>
    <p className = "animated-text" >But it’s not just about answering questions – it’s about doing so with speed and accuracy. At GuruGuess, both accuracy and speed are key factors in determining your score. The faster you answer correctly, the higher your score, giving you a competitive edge over your opponents.</p>
    <h4 className="section-third ">2. Win Exciting Prizes</h4>
    <p className = "animated-text" >Winning is not just about pride – at GuruGuess, it comes with real rewards. Our platform offers participants the opportunity to win cash prizes, gift vouchers, gadgets, and more. Each contest has its own set of rewards, clearly outlined before the contest begins. The more you play, the more chances you have to win.</p>
    <h4 className="section-third ">3. Refer and Earn</h4>
    <p className = " animated-text">GuruGuess is all about community. We believe that sharing the fun doubles the excitement, which is why we’ve introduced a referral program designed to reward you for bringing your friends into the GuruGuess family. When your friends sign up using your referral code and participate in contests, you earn rewards. Plus, you could even get free entries into select contests – a win-win for everyone!</p>
<h4 className="section-third">4. Fair Play and Transparency</h4>
<p className="animated-text">We take fair play seriously at GuruGuess. Our scoring system is transparent and designed to ensure that the best players rise to the top. We use advanced algorithms to calculate scores based on both the accuracy and speed of your responses, and all results are published in real-time. This means you can see exactly where you stand against other participants as the contest unfolds.</p>
<p className="animated-text">We also enforce strict rules to prevent cheating and ensure a level playing field for all. Any attempts to manipulate the system will result in immediate disqualification, so you can be confident that every win is well-deserved.</p>

<h4 className="section-third">5. Responsible Gaming</h4> 
<p className="animated-text">While the thrill of competition can be exhilarating, it’s important to remember that gaming should always be enjoyed in moderation. At GuruGuess, we are committed to promoting responsible gaming. Our platform is only open to users aged 18 and above, and we enforce strict age verification measures to protect younger audiences.</p>
<p className="animated-text">We also want our users to be aware of the potential risks associated with excessive gaming. The contests on GuruGuess are designed to be engaging, but it’s crucial to maintain a balanced approach. Play responsibly, and always remember to take breaks when needed. Your well-being is our top priority.</p>

<h4 className="section-third">6. Simple and Secure Sign-Up Process</h4>
<p className="animated-text ">Getting started with GuruGuess is a breeze. Our sign-up process is quick and straightforward, allowing you to jump right into the action. Simply create an account using your email address, verify your email, and you’re ready to start participating in contests. We offer a variety of secure payment methods, and once your payment is verified, you’ll receive instant confirmation and can start playing immediately.</p>

<h4 className="section-third">7. A Community of Learners and Competitors</h4>
<p className="animated-text">GuruGuess is more than just a quiz platform – it’s a growing community of like-minded individuals who share a passion for knowledge and friendly competition. Whether you’re here to learn, to compete, or to win, you’ll find a welcoming and supportive community at GuruGuess.</p>

<h2 className="section-title">Join the Fun at GuruGuess Today!</h2>
<p className="animated-text">GuruGuess is the place where knowledge meets rewards. Whether you’re in it for the thrill of competition, the joy of learning, or the excitement of winning, GuruGuess has something for everyone. So why wait? Sign up today, invite your friends, and start your journey to becoming a quiz master. The next big winner could be you!</p>

  </section>
        </main>
      </div>

      <footer className="blog-footer">
        <div className="blog-footer-content">
          <div className="blog-footer-section contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:guruguesss@gmail.com">guruguesss@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/guruguesss" target="_blank" rel="noopener noreferrer">@guruguesss</a></p>
          </div>
          <div className="blog-footer-section">
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:9140293443">Contact Us 9140293443</a></p>
            <p><FontAwesomeIcon icon={faPhone} /><a href="tel:7460802449">For more queries contact on 7460802449</a></p>
          </div>
        </div>
        <div className="blog-footer-bottom">
          <p>© 2024 Guruguess. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
