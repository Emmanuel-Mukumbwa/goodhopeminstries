import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ activeTab, setActiveTab }) {
  // Handler to collapse the navbar after clicking a nav item
  const handleNavItemClick = (tab) => {
    setActiveTab(tab);
    // Manually collapse the navbar if it is open
    const navCollapse = document.querySelector('.navbar-collapse');
    if (navCollapse && navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#2A5C82' }}>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {['home', 'about', 'mission', 'activities', 'gallery', 'contact'].map((tab) => (
              <li className="nav-item" key={tab}>
                <Link
                  to={`#${tab}`}
                  className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                  aria-label={tab.charAt(0).toUpperCase() + tab.slice(1)}
                  onClick={() => handleNavItemClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
