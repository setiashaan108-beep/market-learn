import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <>
      <header className="public-layout-header">
        <h1>Public</h1>
      </header>
      <main className="public-layout">
        <Outlet />
      </main>
    </>
  );
}

export default PublicLayout;
