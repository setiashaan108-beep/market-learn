import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
      <header className="admin-layout-header">
        <h1>Admin</h1>
      </header>
      <main className="admin-layout">
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
