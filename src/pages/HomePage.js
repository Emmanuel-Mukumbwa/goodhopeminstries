// src/pages/HomePage.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import GallerySlider from './GallerySlider';
import Navbar from '../pages/Navbar'; // Adjust the path as necessary
import goodhopelogo from './goodhopelogo.jpg'; // Your logo image
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const [activeTab, setActiveTab] = useState('home');

  // IntersectionObserver to fade in the hero image
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
    };
  }, []);

  // Update active tab on scroll
  const handleScroll = () => {
    const sections = ['home', 'about', 'mission', 'activities', 'gallery', 'contact'];
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        // Offset a little to account for the navbar height
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveTab(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters for Members & Reach section
  const [northCount, setNorthCount] = useState(0);
  const [southCount, setSouthCount] = useState(0);
  const [centralCount, setCentralCount] = useState(0);

  useEffect(() => {
    const animateCounter = (target, setter) => {
      let count = 0;
      const increment = Math.ceil(target / 50);
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(count);
        }
      }, 50);
    };
    animateCounter(500, setNorthCount);
    animateCounter(300, setSouthCount);
    animateCounter(200, setCentralCount);
  }, []);

  return (
    <div className="HomePage">
            {/* Navigation Bar */}
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <header id="home" className="header" ref={heroRef}>
              {/* Overlay for better readability */}
              <div className="header-overlay">
                <img src={goodhopelogo} alt="Good Hope Ministries Logo" className="header-logo" />
                <h1 className="header-title">GOOD HOPE MINISTRIES</h1>
                <p className="header-subtitle">Malawi, Africa</p>
              </div>
            </header>

      {/* Mission Section */}
      <section
  id="mission"
  className="mission-section py-5"
  style={{ background: 'linear-gradient(135deg, #f9f9f9, #e8c54720)' }}
>
  <div className="container">
    <div className="row align-items-center">
      {/* Mission Statement */}
      <div className="col-md-6">
        <h2>Sharing God's Word</h2>
        <ul className="mission-list list-unstyled">
          <li>DISTRIBUTING NEW TESTAMENTS into 100 villages a year</li>
          <li>SHOW the 'JESUS' film in every village</li>
          <li>TEACH "Living Your Role, God's Way" to all ages</li>
          <li>DISTRIBUTING BIBLE LESSONS TO ALL those who would like one in their own language</li>
        </ul>
      </div>
      {/* Embedded YouTube Video */}
      <div className="col-md-6">
        <div className="video-container">
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/ty-MTbBolVs?vq=hd1080"
            title="Founder’s Vision"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Current Activities Section */}
      <section
  id="activities"
  className="activities-section py-5"
  style={{ background: 'linear-gradient(135deg, #e8c54720, #f9f9f9)' }}
>
  <div className="container">
    <div className="row align-items-center">
    <h2 className="mb-4">TEACHING DEVELOPMENT PROGRAM</h2>
      {/* Reverse column order on desktop */}
      <div className="col-md-6 order-md-2">
        <h2>Showing God's Love</h2>
        <ul className="activities-list list-unstyled">
          <li>REPAIR ALL BROKEN BOREHOLES</li>
          <li>TREATED over 200,000 with SKIN DISEASES AND SORES</li>
          <li>DISTRIBUTE READING GLASSES (70,000 so far)</li>
          <li>DISTRIBUTE 1,000s of BLANKETS to the very poor</li>
          <li>
            EMPOWERING WOMEN with our Tailoring Project for underprivileged
            women and ex-prostitutes (over 900 have completed the program)
          </li>
          <li>
            GIVE FREE HOT LUNCH of rice and vegetables to all those who come
            to our programs as we teach and train leaders (have given appr. 1.5
            million meals)
          </li>
        </ul>
      </div>
      <div className="col-md-6 order-md-1">
        <div className="video-container">
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/NttR4Hy6sWE?vq=hd1080"
            title="Activities Video"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* TEACHING DEVELOPMENT PROGRAM Section */}
       <section
        id="mission"
        className="mission-section py-5"
        style={{ background: 'linear-gradient(135deg, #f9f9f9, #e8c54720)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* TThe Role of a Woman, God's Way */}
            <div className="col-md-6">
              <h2>The Role of a Woman, God's Way</h2>
              <p>
              We strive to teach in ways they can treasure what they have learned to better their 
              living conditions and so give themselves good hope for the future here and for all of eternity.
            </p>

        </div>
            {/* image */}
            <div className="col-md-6 order-md-1">
                <div className="video-container">
                    <img
                    src="/therole2.jpg"
                    alt="Role Image"
                    width="500"
                    height="250"
                    style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </div>
          </div>
        </div>
      </section>

       {/* TThe Role of a man, God's Way */}
       <section
        id="activities"
        className="activities-section py-5"
        style={{ background: 'linear-gradient(135deg, #e8c54720, #f9f9f9)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Reverse column order on desktop */}
            <div className="col-md-6 order-md-2">
              <h2>The Role of a Man, God's Way</h2>
              <p>
              Men are taught how to provide for their family. Villages 
              are taught how they save for the improvements they need for their village 
              to thrive.<br></br><br></br>
                Many men sign a resolution, promising they will care for their family, protecting 
                and serving them, and be faithful to their wives, loving and honouring them.
                Upon our follow up, we find that change has come to many families.   
                </p>
            </div>
            <div className="col-md-6 order-md-1">
            <div className="video-container">
                <img
                src="/therole1.jpg"
                alt="Role Image"
                width="500"
                height="250"
                style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            </div>

          </div>
        </div>
      </section>


{/* Photo Album Section */}
<section id="gallery" className="gallery-section">
        <GallerySlider />
    </section>


      {/*Reach Section */}
        <section
        id="members"
        className="members-section py-5 text-white"
        style={{
            backgroundImage: "url('/image1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
        <div className="container">
            <div className="row justify-content-center text-center">
            <div className="col-md-8">
                <h2 className="mb-4">Our Reach</h2>
                <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded bg-dark bg-opacity-75">
                    <h3 className="mb-1">2,100,000</h3>
                    <p className="mb-0">Tumbuka People</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded bg-dark bg-opacity-75">
                    <h3 className="mb-1">1,200,000</h3>
                    <p className="mb-0">Children Under 16</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded bg-dark bg-opacity-75">
                    <h3 className="mb-1">1,500</h3>
                    <p className="mb-0">Villages</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded bg-dark bg-opacity-75">
                    <h3 className="mb-1">900</h3>
                    <p className="mb-0">Boreholes</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* Footer Section */}
<footer className="footer" style={{ backgroundColor: '#000000', color: '#f5f5f5', paddingTop: '2rem' }}>
  <div className="container">
    <div className="row g-4">
      {/* Quick Links */}
      <div className="col-md-4">
        <h5 className="mb-3" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Quick Links</h5>
        <ul className="list-unstyled">
          {['home', 'about', 'bible study groups', 'testimonies', 'prisonn ministry', 'sewing school'].map((tab, index) => (
            <li key={index} className="mb-2">
              <Link
                to={`#${tab}`}
                className="footer-link"
                style={{
                  color: '#e0e0e0',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact & Address */}
      <div className="col-md-4">
        <h5 className="mb-3" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Contact Information</h5>
        <div style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
          <p>
            Good Hope Ministries<br />
            46-9 Ailsa Place<br />
            London, ON<br />
            Canada N5Z 4Z6
          </p>
          <p className="mt-3">
            Dzengo Mzengeza<br />
            <a href="tel:+12266632578" className="footer-link" style={{ color: '#e0e0e0' }}>
              1 226 663 2578
            </a><br />
            <a href="mailto:dmzengeza@gmail.com" className="footer-link" style={{ color: '#e0e0e0' }}>
              dmzengeza@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Donation Information */}
      <div className="col-md-4">
        <h5 className="mb-3" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Transform Lives</h5>
        <div style={{ fontSize: '0.95rem' }}>
          <p><strong>E-transfer to:</strong></p>
          <p>
            <a href="mailto:donations@msccanada.org" className="footer-link" style={{ color: '#e0e0e0' }}>
              donations@msccanada.org
            </a><br />
            <small>Include your name, address, and "Good Hope" in the message</small>
          </p>
          
          <p className="mt-4"><strong>Or by cheque:</strong></p>
          <p>
            MSC Canada<br />
            16-101 Amber St<br />
            Markham ON<br />
            Canada L3R 3B2<br />
            <em>Designate to project: "Good Hope - Malawi"</em>
          </p>
        </div>
      </div>
    </div>

    {/* Logo Section */}
    <div className="row mt-5">
      <div className="col text-center">
        <a href="https://msccanada.org/donee/good-hope-malawi/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/logo1.png" 
            alt="Good Hope Ministries Logo" 
            style={{ maxWidth: '200px', height: 'auto', filter: 'brightness(0) invert(1)' }} 
          />
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-top mt-4 pt-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
      <div className="text-center">
        <p className="mb-0" style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>
          © 2025 Good Hope Ministries. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default HomePage;
