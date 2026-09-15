import { Outlet, Link } from 'react-router-dom';

function LearnerLayout() {
  return (
    <>
      <header className="learner-layout-header">
        <h1>Learner</h1>
        <Link to="/app/profile">Profile</Link>
        <Link to="/app">Dashboard</Link>
        <Link to="/admin">Admin</Link>
      </header>
      <main className="learner-layout">
        <Outlet />
      </main>
    </>
  );
}

export default LearnerLayout;
