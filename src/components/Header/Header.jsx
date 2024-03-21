import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
      return (
            <div>
                  <h2>Navbar</h2>
                  <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/users">Users</NavLink>
                        <NavLink to="/posts">Posts</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                  </nav>
            </div>
      );
};

export default Header;