import React from 'react';
import whitemenu from "../../assets/whitemenu.png"
import logo from "../../assets/home3/home3logo.png"
import user from '../../assets/home1/user-circle.png';
const HomeHeader3 = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img className="img-fluid logoImg" src={logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <img src={whitemenu} alt="Menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto text-center">
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle d-flex align-items-center gap-2 justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Home</span> <i className="fa mt-1"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">Home 1</a></li>
                    <li><a className="dropdown-item" href="/home2">Home 2</a></li>
                    <li><a className="dropdown-item" href="/home3">Home 3</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link  d-flex align-items-center gap-2  " href="About.html">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link  dropdown-toggle  d-flex align-items-center gap-2 justify-content-center" href="Course.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>
                      Course
                    </span> <i className="fa mt-1"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="Course1.html">Course 1</a></li>
                    <li><a className="dropdown-item" href="Course2.html">Course 2</a></li>
                    <li><a className="dropdown-item" href="instructor.html">Instructor</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>
                      Pages
                    </span> <i className="fa mt-1"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/EventsGrid.html">Events Grid</a></li>
                    <li><a className="dropdown-item" href="/EventsList.html">Events List</a></li>
                    <li><a className="dropdown-item" href="/EventsDetails.html">Events Details</a></li>
                    <li><a className="dropdown-item" href="Gallary.html">Gallery</a></li>
                    <li><a className="dropdown-item" href="/Testimonial.html">Testimonial</a></li>
                    <li><a className="dropdown-item" href="/ContactUs.html">Contact Us</a></li>
                    <li><a className="dropdown-item" href="/404.html">404 page</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>
                      Blog
                    </span> <i className="fa mt-1"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/Blog.html">Blog</a></li>
                    <li><a className="dropdown-item" href="/BlogDetails.html">Blog Details</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex gap-4 authBtn">
                <a href="login.html" className type="submit">Login</a>
                <button className="signup_button " style={{ border: '1px solid #fff' }}>
                  <a href="signup.html" className type="submit"><img src={user} alt />
                    Create Account</a>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

    </div>
  );
};

export default HomeHeader3;