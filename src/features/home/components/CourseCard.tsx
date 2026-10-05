import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import type { Course } from '../types/course';
import './Course.css';

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="ui-card ui-card--bordered">
      <img src={course.thumbnail.src} alt={course.thumbnail.alt} className="courses-item-image" />
      <div className="courses-item-body">
        <h2 className="courses-item-title">
          <Link to={`courses/${course.id}`} className="courses-link">
            {course.title}
          </Link>
        </h2>
        <div className="course-instructor">
          <img
            src={course.instructor.avatar}
            alt="instructor name"
            className="course-instructor-img"
          />
          <span className="instructor-name">{course.instructor.name}</span>
        </div>
        <footer className="course-footer">
          <div className="course-rating">
            <FaStar color={'#ffc107'} />
            <small>
              {course.metrics.rating} ({course.metrics.reviewCount / 1000}K students)
            </small>
          </div>
          <strong>
            {course.currency} {course.price}
          </strong>
        </footer>
      </div>
    </article>
  );
}

export default CourseCard;
