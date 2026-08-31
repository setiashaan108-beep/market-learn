import { Outlet } from 'react-router-dom';
import PublicNavbar from '../components/public/PublicNavbar';
import PublicFooter from '../components/public/PublicFooter';
import './PublicLayout.css';

function PublicLayout() {
  return (
    <>
      <div className="public-layout">
         <header>
          <PublicNavbar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <PublicFooter />
        </footer>
      </div>
    </>
  );
}

export default PublicLayout;
