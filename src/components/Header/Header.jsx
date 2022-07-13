import { NavLink } from 'react-router-dom';

import s from './header.module.css';

const getActiveLink = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : `${s.link}`;
};

function Header() {
  return (
    <header className={s.header}>
      <ul className={s.navlist}>
        <li>
          <NavLink className={getActiveLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getActiveLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
