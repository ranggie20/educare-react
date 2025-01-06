import React from "react";
// import './NavBar.css';
import brandlogo from "../../assets/home2/brand-logo.png";
import user from "../../assets/home1/user-circle.png";

const Home2Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="img-fluid logoImg" src={brandlogo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="./assets/menu1.png" alt="Menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto text-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle d-flex align-items-center gap-2 justify-content-center"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Home</span> <i className="fa mt-1"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/home2">
                      Home 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/home3">
                      Home 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  d-flex align-items-center gap-2  "
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Course</span> <i className="fa mt-1"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/course1">
                      Course 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/course2">
                      Course 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/instructor">
                      Instructor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Pages</span> <i className="fa mt-1"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="eventsGrid">
                      Events Grid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/eventslist">
                      Events List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/eventsDetails">
                      Events Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/gallary">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contactUs">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/error">
                      404 page
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Blog</span> <i className="fa mt-1"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/blogDetails">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex gap-4 authBtn">
              <a href="/login" className type="submit">
                Login
              </a>
              <button className="signup_button">
                <a href="/signup" className type="submit">
                  <img src={user} alt />
                  Create Account
                </a>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home2Header;
