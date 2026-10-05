import './MarketLearn.css';
import {
  RiGraduationCapLine,
  LuBookOpenText,
  LuAlarmClock,
  HiOutlineUsers,
} from '../../../components/common/icons';

function MarketLearn() {
  return (
    <section className="market-learn">
      <div className="container">
        <header className="section-info mb-10">
          <h2 className="section-title">Why MarketLearn?</h2>
          <p className="section-description">
            We're more than just a learning platform. We're your partner in growth.
          </p>
        </header>
        <div className="card-grid">
          <article className="ui-card">
            <div className="feature-icon-badge feature-icon-badge--blue">
              <RiGraduationCapLine />
            </div>
            <div className="ui-card-body">
              <h3 className="ui-card__title">Expert Instructors</h3>
              <p className="ui-card__description">
                Learn from industry professionals with real world experience.
              </p>
            </div>
          </article>
          <article className="ui-card">
            <div className="feature-icon-badge feature-icon-badge--green">
              <LuBookOpenText />
            </div>
            <div className="ui-card-body">
              <h3 className="ui-card__title">Wide Range of Courses</h3>
              <p className="ui-card__description">
                From beginner to advanced, find courses for every level.
              </p>
            </div>
          </article>
          <article className="ui-card">
            <div className="feature-icon-badge feature-icon-badge--purple">
              <LuAlarmClock />
            </div>
            <div className="ui-card-body">
              <h3 className="ui-card__title">Learn at Your Pace</h3>
              <p className="ui-card__description">Flexible learning designed for your schedule.</p>
            </div>
          </article>
          <article className="ui-card">
            <div className="feature-icon-badge feature-icon-badge--red">
              <HiOutlineUsers />
            </div>
            <div className="ui-card-body">
              <h3 className="ui-card__title">Supportive Community</h3>
              <p className="ui-card__description">
                Join a community of learners and grow together.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MarketLearn;
