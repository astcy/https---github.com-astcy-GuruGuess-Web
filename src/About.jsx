import React from 'react';
import './About.css'; // You'll style your component here

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">About us</h1>
        <nav className="about-nav">
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/policies">Terms & Conditions</a></li>
            <li><a href="/blogs">Blogs</a></li> 
          </ul>
        </nav>
      </header>
      <main>
        {/* Add more content here */}
      </main>
      <footer className="footer">
<p>© 2024 Guruguess. All rights reserved.</p>
</footer>
</div>
);

};

export default About;
