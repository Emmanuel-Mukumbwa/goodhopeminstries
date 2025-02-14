import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Array of quick links that will use the same route logic as Navbar
  const quickLinks = ['home', 'about', 'bible study groups', 'testimonies', 'prison ministry', 'sewing school', 'stories'];

  const getRouteForTab = (tab) => {
    if (tab === 'home') return '/';
    if (tab === 'about') return '/about';
    if (tab === 'bible study groups') return '/biblestudygroups';
    if (tab === 'testimonies') return '/testimonies';
    if (tab === 'prison ministry') return '/prisonministry';
    if (tab === 'sewing school') return '/sewingschool';
    if (tab === 'stories') return '/stories';
    return `#${tab}`;
  };

  return (
    <footer className="footer" style={{ backgroundColor: '#000000', color: '#f5f5f5', paddingTop: '2rem' }}>
      <div className="container">
        <div className="row g-4">
          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="mb-3" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((tab, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={getRouteForTab(tab)}
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
  );
};

export default Footer;
