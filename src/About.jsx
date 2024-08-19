import React, {useEffect} from 'react';
import './About.css'; // You'll style your component here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {


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
        <h1 className="about-title">About us</h1>
        <nav className="about-nav">
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/policies">Terms</a></li>
            <li><a href="/blogs">Blogs</a></li> 
          </ul>
        </nav>
      </header>

      <div className="content-wrapper">
     <main>
  <section>
    <h2 className="section-title">Our Mission</h2>
    <p className="animated-text">Our mission is to empower individuals to turn their knowledge into rewards. We strive to create a platform that not only challenges but also enriches our users' understanding of the world.</p>
  </section>
  <section>
    <h2 className="section-title">Our Vision</h2>
    <p className="animated-text">We envision a world where knowledge is rewarded, and curiosity is celebrated. Our goal is to be the leading platform where users can explore, learn, and earn in an engaging and meaningful way.</p>
  </section>
  <section>
    <h2 className="section-title">Our Values</h2>
    <p className="animated-text">Integrity, innovation, and inclusivity are at the heart of everything we do. We believe in creating a space where everyone has the opportunity to succeed, regardless of their background or expertise.</p>
  </section>
  <section>
    <h2 className="section-title">Join Us</h2>
    <p className="animated-text">Become part of our growing community and start your journey towards knowledge and rewards today. We're excited to have you with us!</p>
  </section>
</main>

      </div>
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-section contact-info">
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> 
        Email: <a href="mailto:guruguesss@gmail.com">guruguesss@gmail.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faInstagram} />
        Instagram: <a href="https://www.instagram.com/guruguesss" target="_blank" rel="noopener noreferrer">@guruguesss</a>
      </p>
    </div>
    <div className="footer-section">
      <p>
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:9140293443">Contact Us 9140293443</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:7460802449">For more queries contact on 7460802449</a>
      </p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2024 Guruguess. All rights reserved.</p>
  </div>
</footer>


</div>
);

};

export default About;
