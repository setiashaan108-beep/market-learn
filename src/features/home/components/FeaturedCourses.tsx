import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CourseCard from './CourseCard';
import { useGetFeaturedCoursesQuery } from '../services/courseAPI';

function FeaturedCourses() {
  const { data, isLoading, isError, error } = useGetFeaturedCoursesQuery();

  if (isLoading) {
    return (
      <div className="status-container" aria-live="polite">
        <p>Loading featured courses...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="status-container error" aria-live="assertive">
        <p>Failed to load courses. Please try again later.</p>
        <small>
          {' '}
          {error && typeof error === 'object' && 'message' in error
            ? String((error as Record<string, unknown>).message)
            : JSON.stringify(error)}
        </small>
      </div>
    );
  }

  return (
    <section className="featured-courses">
      <div className="container">
        <div className="section-info-with-action">
          <header className="section-info">
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-description">
              Pick from our most popular courses and start your learning journey today.
            </p>
          </header>
          <div className="featured-courses-action">
            <Link to="/courses" className="action-link">
              View All Courses
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="card-grid">
          {data?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
