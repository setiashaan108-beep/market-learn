import { Link } from 'react-router-dom';
import { RiGraduationCapFill, FiSearch, FiX } from '../common/icons';
import { useState, useEffect, useRef } from 'react';
import './PublicNavbar.css';
import { FiMenu } from 'react-icons/fi';

function PublicNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  // Close search on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <nav className="public-navbar container" aria-label="Main Navigation">
      <Link to="/" className="navbar-brand">
        <RiGraduationCapFill size={30} aria-hidden="true" className="brand-icon" />
        <span className="brand-text">MarketLearn</span>
      </Link>
      <ul className="navbar-links-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="header-action">
        <form role="search" className="header-search-desktop" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            name="search"
            placeholder="Search by courses, instructor"
            aria-label="Search courses and instructors"
            className="header-search"
          />
        </form>

        {/* Tablet/Mobile Search Trigger Icon Button */}
        <button
          type="button"
          className="search-toggle-btn"
          onClick={() => setIsSearchOpen(true)}
          aria-label="Open search bar"
          aria-expanded={isSearchOpen}
        >
          <FiSearch size={20} aria-hidden="true" />
        </button>
        {isSearchOpen && (
          <div className="search-overlay">
            <form
              role="search"
              className="search-overlay-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <FiSearch className="search-overlay-icon" size={20} aria-hidden="true" />
              <input
                ref={searchInputRef}
                name="search"
                type="search"
                placeholder="Search courses, instructors, topics..."
                aria-label="Search courses and instructors"
                className="header-search search-overlay-input"
              />
              <button
                type="button"
                className="btn search-close-btn"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search overlay"
              >
                <FiX size={22} aria-hidden="true" />
              </button>
            </form>
          </div>
        )}
        <div className="header-actions">
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
          <div className="mobile-menu-container">
            <button
              type="button"
              className="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMenuOpen ? (
                <FiX size={20} aria-hidden="true" />
              ) : (
                <FiMenu size={20} aria-hidden="true" />
              )}
            </button>
            {isMenuOpen && (
              <ul
                id="mobile-nav-menu"
                className="menu-dropdown"
                aria-label="Mobile Navigation Menu"
              >
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/instructors">Instructors</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PublicNavbar;
