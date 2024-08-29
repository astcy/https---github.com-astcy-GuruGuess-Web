import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { database, ref, set } from "./firebase";
import "./Home.css"; // Import CSS for styling
import guru from './assets/Group 50.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    const handleClickOutsideMenu = (event) => {
      if (!event.target.closest('.full-page-menu') && !event.target.closest('.hamburger-menu')) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutsideMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

// Function to show or hide the header popup
const togglePopup = (show) => {
  const popup = document.querySelector('.popup');
  if (show) {
    popup.classList.add('show');
  } else {
    popup.classList.remove('show');
  }
};

// Function to show or hide the error message
const showErrorPopup = (message) => {
  const errorPopup = document.querySelector('.error-message');
  errorPopup.textContent = message;
  errorPopup.classList.add('show');
  setTimeout(() => {
    errorPopup.classList.remove('show');
  }, 2000); // Hide after 2 seconds
};


  useEffect(() => {
    const initialPopupTimer = setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Popup disappears after 2 seconds
    }, 500); // Delay before first showing the popup

    const regeneratePopupTimer = setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Popup disappears after 2 seconds
    }, 10500); // Popup reappears after 10 seconds on reload

    return () => {
      clearTimeout(initialPopupTimer);
      clearTimeout(regeneratePopupTimer);
    };
  }, []);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSmallMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);
    setMenuVisible(false);
    window.location.href = event.target.href;
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+91\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
    setError("");
  };

  const showError = (message) => {
    setError(message);

    // Automatically hide the error message after 2 seconds
    setTimeout(() => {
      setError('');
    }, 2000); // 2 seconds display time
  };

  const handleDownloadClick = () => {
    if (!phoneNumber) {
      showError("Please enter your mobile number");
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      showError("Please enter a valid 10-digit mobile number with +91");
      return;
    }

    const phoneRef = ref(database, 'phoneNumbers/' + phoneNumber);
    set(phoneRef, {
      phoneNumber: phoneNumber,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        const downloadLink = "http://your-download-link.com";
        window.location.href = downloadLink;
      })
      .catch((error) => {
        console.error("Error saving phone number:", error);
        showError("Failed to save phone number, try again later");
      });
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className={`header ${isHeaderScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <div className="logo-circle">
            <img src={guru} alt="Logo" className="logo-image" />
          </div>
          <div className="logo-text">GuruGuess</div>
           {/* Popup in the Header */}
           {showPopup && !isHeaderScrolled && (
            <div className="popup">
              <p>SwipeUp ⬆️ </p>
            </div>
          )}
        </div>
        <nav className="desktop-nav">
          <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/terms" className={window.location.pathname === '/terms' ? 'active' : ''}>Terms</Link></li>
            <li><Link to="/blogs" className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
          </ul>
          <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="full-page-menu active">
          <button className="close-menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <ul className="activeMenu">
            <li><Link to="/" onClick={handleLinkClick} className={window.location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li> <Link to="/about" onClick={handleLinkClick} className={window.location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/terms" onClick={handleLinkClick} className={window.location.pathname === '/terms' ? 'active' : ''}>Terms</Link></li>
            <li><Link to="/blogs" onClick={handleLinkClick} className={window.location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
          </ul>
        </div>
      )}

      {/* Small Screen Menu */}
      <div className="menu">
        <button className="hamburger" onClick={toggleSmallMenu}>☰</button>
        {isMenuVisible && (
          <nav className="nav-components">
            <ul>
              <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
              <li><a href="#about" onClick={handleLinkClick}>About</a></li>
              <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
              <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </nav>
        )}
      </div>

      {/* Main Section */}
      <main>
        <section className="home-section" id="home-section">
          <div className="hero-content">
            <h1>Turn Your Knowledge</h1>
            <h2>into <span className="currency-symbol">₹</span>ewards</h2>
            <div className="download-section">
              <input
                type="text"
                placeholder="+91"
                value={phoneNumber}
                onChange={handleInputChange}
                className="phone-input"
              />
              <button className="download-btn" onClick={handleDownloadClick}>
                Download
              </button>
              {error && <p className={`error-message ${error ? 'show' : 'hide'}`}>{error}</p>}
            </div>
          </div>
          <div className="hero-image">
            <img src={guru} alt="Hero" />
          </div>
        </section>

        {/* Quiz Categories Section */}
        <section className="quiz-categories" id="policies-section">
          <h2>Explore our quiz Categories</h2>
          <div className="categories-container">
            <div className="category-card">
              <h3>Science</h3>
              <p>Nothing can be created, nothing can be destroyed.</p>
            </div>
            <div className="category-card">
              <h3>Maths</h3>
              <p>The easiest and the toughest game is always of numbers.</p>
            </div>
            <div className="category-card">
              <h3>Tech</h3>
              <p>Thinking beyond the boundaries is called technology.</p>
            </div>
            <div className="category-card">
              <h3>English</h3>
              <p>Speaking is not enough to communicate, it's action that makes you.</p>
            </div>
            {/* Add other categories similarly */}
          </div>
        </section>
      </main>

      {/* Footer Section */}
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


export default Home;
