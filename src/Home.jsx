import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { database, ref, set } from "./firebase";
import "./Home.css"; // Import CSS for styling
import guru from './assets/Group 50.png';

const Home = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
    setError("");
  };

  const handleDownloadClick = () => {
    if (!phoneNumber) {
      setError("Please enter your mobile number");
      return;
    }

    const phoneRef = ref(database, 'phoneNumbers/' + phoneNumber);
    set(phoneRef, {
      phoneNumber: phoneNumber,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        // Generate download link
        const downloadLink = "http://your-download-link.com";
        window.location.href = downloadLink;
      })
      .catch((error) => {
        console.error("Error saving phone number:", error);
        setError("Failed to save phone number, try again later");
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
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Policies">Terms</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="main-section" id="about-section">
        <div className="hero-content">
          <h1>Turn Your Knowledge</h1>
          <h2>into <span className="currency-symbol">₹</span>ewards</h2>
          <p>Download and join the fastest growing community</p>
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
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
        <div className="hero-image">
          {/* Add hero image or illustration */}
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
          <div className="category-card">
            <h3>Politics</h3>
            <p>The one who can make change in society is known as a leader.</p>
          </div>
        </div>
        <p className="more-categories">And Many More Categories to Explore!</p>
      </section>

      {/* How to Play Section */}
      <section className="how-to-play" id="blogs-section">
        <h2>How to Play</h2>
        {/* Add content for this section */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Guruguess. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
