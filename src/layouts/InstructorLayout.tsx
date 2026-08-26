import { Outlet } from 'react-router-dom';

function InstructorLayout() {
  return (
    <>
      <header className="instructor-layout-header">
        <h1>Instructor</h1>
      </header>
      <main className="instructor-layout">
        <Outlet />
      </main>
    </>
  );
}

export default InstructorLayout;
