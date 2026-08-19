import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/page', label: 'Page' },
  { path: '/contact', label: 'Contact Us' },
];

export default function NavBar() {
  return (
    <nav className="nav-bar shell">
      <div className="nav-brand">
        <img
          className="nav-brand-icon"
          src="https://lotusexperiencedesign.com/assets/lotus_icon_strategy.png"
          alt="Lotus icon"
        />
        Lotus Strategic Solutions
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/register" className="button button-primary">
          Get Started
        </NavLink>
      </div>
    </nav>
  );
}
