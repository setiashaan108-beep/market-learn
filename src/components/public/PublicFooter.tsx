import {
  RiGraduationCapFill,
  CiTwitter,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
} from '../common/icons/index';
import { Link } from 'react-router-dom';
import './PublicFooter.css';

function PublicFooter() {
  return (
    <div className="container footer-container">
      <div className="footer-main">
        <div className="company-info">
          <div className="company-logo">
            <RiGraduationCapFill size={30} aria-hidden="true" className="company-logo-icon" />
            <span className="company-logo-text">MarketLearn</span>
          </div>
          <p className="company-tag-line">Learn today. Build tomorrow.</p>
        </div>

        <nav aria-label="Quick Links" className="footer-column">
          <h3 className="subsection-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Account Links" className="footer-column">
          <h3 className="subsection-title">Account</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/forgot-password">Forgot Password</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Help Links" className="footer-column">
          <h3 className="subsection-title">Help</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2025 MarketLearn. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <CiTwitter aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook aria-hidden="true" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaDiscord aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PublicFooter;
