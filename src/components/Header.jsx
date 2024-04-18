import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/User";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleCloseSidebar = () => {
    setShowNavbar(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <button className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </button>
        <h1 className="header-welcome">
          <span className="header-wrapper">N</span>
          <span className="header-wrapper">C</span>News
        </h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/articles" className="nav-item">
          Articles
        </Link>
        <Link to="/topics" className="nav-item">
          Topics
        </Link>
        <div className="nav-item nav-account">
          <Link to="/users">
            <img
              src={loggedInUser.avatar_url}
              height="35px"
              width="35px"
              className="nav-account-img"
            />
          </Link>
          <p className="nav-log-in">
            {loggedInUser.username ? `${loggedInUser.username}` : "Login"}
          </p>
        </div>
        <Link to="/articles/:article" className="nav-item"></Link>
      </nav>
      <div className={`sidebar ${showNavbar ? "active" : ""}`}>
        <div className="sidebar-backdrop" onClick={handleCloseSidebar}>
          <ul className="sidebar-nav">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <div>
                <Link to="/users">
                  <img
                    src={loggedInUser.avatar_url}
                    height="35px"
                    width="35px"
                    className="sidebar-account-icon"
                  />
                </Link>
                <p className="sidebar-log-in">
                  {loggedInUser.username ? `${loggedInUser.username}` : "Login"}
                </p>
              </div>
            </li>
            <li className="hide-link">
              <Link to="/articles/:article"></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
