import { Outlet } from 'react-router-dom';

function LearnerLayout() {
  return (
    <>
      <header className="learner-layout-header">
        <h1>Learner</h1>
      </header>
      <main className="learner-layout">
        <Outlet />
      </main>
    </>
  );
}

export default LearnerLayout;
