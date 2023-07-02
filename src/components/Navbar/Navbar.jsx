import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <Router> {/* Envuelve tu aplicación con el componente Router */}
      <nav className={style.container}>
        <Link to="/" className={style.link}>Who I am?</Link>
        <Link to="/desired-future" className={style.link}>Who would like to be?</Link>
        <Link to="/studies" className={style.link}>My studies</Link>
        <Link to="/projects" className={style.link}>My projects</Link>
      </nav>
    </Router>
  );
}

export default Navbar;

