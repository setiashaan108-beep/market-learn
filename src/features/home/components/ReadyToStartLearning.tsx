import { RiGraduationCapLine, FaArrowRight } from '../../../components/common/icons';
import { Link } from 'react-router-dom';
import './ReadyToStartLearning.css';

function ReadyToStartLearning() {
  return (
    <section className="cta-section">
      <div className="container start-learning">
        <div className="start-learning-info">
          <RiGraduationCapLine size="2.5rem" aria-hidden="true" />
          <div className="start-learning-info-group">
            <h3 className="start-learning-title">Ready to start learning?</h3>
            <p className="start-learning-description">
              Explore our comprehensive course library and find the perfect course for your goals.
            </p>
          </div>
        </div>
        <div className="start-learning-action">
          <Link to="/courses" className="btn btn-secondary start-learning-btn">
            Browse Courses <FaArrowRight aria-hidden="true" className="start-learning-btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReadyToStartLearning;
