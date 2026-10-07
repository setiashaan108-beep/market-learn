import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useGetFeaturedInstructorsQuery } from '../services/instructorsAPI';
import InstructorCard from './InstructorCard';

function FeaturedInstructors() {
  const { data: instructors, isLoading, error, isError } = useGetFeaturedInstructorsQuery();

  return (
    <section className="featured-instructors" aria-label="Featured Instructors">
      <div className="container">
        {isLoading && (
          <div className="status-container" aria-live="polite">
            <p>Loading featured instructors...</p>
          </div>
        )}

        {isError && (
          <div className="status-container error" aria-live="assertive">
            <p>Failed to load instructors. Please try again later.</p>
            <small>
              {' '}
              {error && typeof error === 'object' && 'message' in error
                ? String((error as Record<string, unknown>).message)
                : JSON.stringify(error)}
            </small>
          </div>
        )}

        <div className="section-info-with-action">
          <header className="section-info">
            <h2 className="section-title">Featured Instructors</h2>
            <p className="section-description">
              Learn from passionate experts who are dedicated to your success.
            </p>
          </header>
          <div className="section-info-action">
            <Link to="/instructors" className="action-link">
              View All Instructors
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="card-grid">
          {instructors?.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedInstructors;
