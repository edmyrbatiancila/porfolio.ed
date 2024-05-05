import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
      <nav className="navbar">
        <img src={logo} alt="My Logo" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Portfolio
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <i className="fa-solid fa-address-book desktopMenuImg"></i>
          Contact Me
        </button>
        <i class="fa-solid fa-bars mobMenu" onClick={() => setShowMenu(!showMenu)}></i>
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
}

export default Navbar
