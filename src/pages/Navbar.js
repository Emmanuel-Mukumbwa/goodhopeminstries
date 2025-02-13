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
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand" to="/">
          GoodHopeMinistries<span style={{ color: "#ff6347" }}></span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            const navCollapse = document.getElementById('navbarNav');
            if (navCollapse) {
              navCollapse.classList.toggle('show');
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {['home', 'about', 'bible study groups', 'testimonies', 'prison ministry', 'sewing school', 'stories'].map((tab) => (
              <li className="nav-item" key={tab}>
                <Link
                  // Use custom routes for each tab
                  to={
                    tab === 'home'
                      ? '/'
                      : tab === 'about'
                      ? '/about'
                      : tab === 'bible study groups'
                      ? '/biblestudygroups'
                      : tab === 'testimonies'
                      ? '/testimonies'
                      : tab === 'prison ministry'
                      ? '/prisonministry'
                      : tab === 'sewing school'
                      ? '/sewingschool'
                      : tab === 'stories'
                      ? '/stories'
                      : `#${tab}`
                  }
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
