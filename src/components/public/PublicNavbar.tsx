import { Link } from 'react-router-dom';
import './PublicNavbar.css';

function PublicNavbar() {
  return (
    <nav className="public-navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default PublicNavbar;