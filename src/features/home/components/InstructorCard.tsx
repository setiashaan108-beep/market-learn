import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import type { Instructor } from '../types/instructor';
import './InstructorCard.css';

function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <article className="ui-card ui-card--bordered instructor-card flex-row">
      <img
        src={instructor.avatarUrl}
        alt={instructor.name}
        className="instructor-card-image"
        loading="lazy"
      />
      <div className="instructor-card-body">
        <h3 className="instructor-name">
          <Link to={`/instructors/${instructor.id}`} className="instructor-link">
            {instructor.name}
          </Link>
        </h3>
        <p className="instructor-role">{instructor.role}</p>

        <div className="instructor-meta">
          <span className="instructor-rating">
            <FaStar aria-hidden="true" color={'#ffc107'} />
            &nbsp;
            {instructor.rating}
          </span>
          <span className="instructor-students">({instructor.totalStudents} students)</span>
        </div>
        <p className="instructor-courses">{instructor.coursesCount} courses</p>
      </div>
    </article>
  );
}

export default InstructorCard;
