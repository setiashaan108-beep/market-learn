import './Hero.css';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { FaArrowRight, RiInfinityLine, FiBookOpen, CiUser } from '../../../components/common/icons';

function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="container hero-container">
        {/* Left Content Area */}
        <div className="hero-info">
          <ul className="feat-badge">
            <li>LEARN</li>
            <li>GROW</li>
            <li>ACHIEVE</li>
          </ul>

          <h1 className="title">
            Build your future with <span className="highlighted-text">In-Demand Skills</span>
          </h1>

          <p className="hero-description">
            Discover expert-led courses, learn from industry professionals, and take the next step
            in your career with MarketLearn.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary">
              Browse Courses <FaArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/instructors" className="btn btn-secondary">
              Meet our Instructors
            </Link>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <FiBookOpen size={24} className="feat-item-icon" aria-hidden="true" />
              <div className="feature-text">
                <strong className="feature-title">Flexible Learning</strong>
                <p className="feature-description">Learn at your own pace</p>
              </div>
            </div>

            <div className="feature-item">
              <CiUser size={24} className="feat-item-icon" aria-hidden="true" />
              <div className="feature-text">
                <strong className="feature-title">Expert Instructors</strong>
                <p className="feature-description">Learn from industry pros</p>
              </div>
            </div>

            <div className="feature-item">
              <RiInfinityLine size={24} className="feat-item-icon" aria-hidden="true" />
              <div className="feature-text">
                <strong className="feature-title">Lifetime Access</strong>
                <p className="feature-description">Get access forever</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Image */}
        <div
          className="hero-visual"
          style={{ backgroundImage: `url(${hero})` }}
          role="img"
          aria-label="MarketLearn interactive learning dashboard illustration"
        />
      </div>
    </section>
  );
}

export default Hero;
