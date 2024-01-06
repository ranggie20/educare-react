import React from 'react';
import './NavBar.css';
import logo from '../../assets/home1/greenlogo1.png';
import user from '../../assets/home1/user-circle.png';

const NavBar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img class="img-fluid logoImg" src={logo} alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src="./assets/menu1.png" alt="Menu" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto text-center">
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle d-flex align-items-center gap-2 justify-content-center"
                                    href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>Home</span> <i class="fa mt-1">&#xf107;</i>

                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/">Home 1</a></li>
                                    <li><a class="dropdown-item" href="/home2">Home 2</a></li>
                                    <li><a class="dropdown-item" href="/home3">Home 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  d-flex align-items-center gap-2  " href="/about">
                                    About
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                                    href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>
                                        Course
                                    </span> <i class="fa mt-1">&#xf107;</i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/course1">Course 1</a></li>
                                    <li><a class="dropdown-item" href="/course2">Course 2</a></li>
                                    <li><a class="dropdown-item" href="/instructor">Instructor</a></li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                                    href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>
                                        Pages
                                    </span> <i class="fa mt-1">&#xf107;</i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="eventsGrid">Events Grid</a></li>
                                    <li><a class="dropdown-item" href="/eventslist">Events List</a></li>
                                    <li><a class="dropdown-item" href="/eventsDetails">Events Details</a></li>
                                    <li><a class="dropdown-item" href="/gallary">Gallery</a></li>
                                    <li><a class="dropdown-item" href="/testimonial">Testimonial</a></li>
                                    <li><a class="dropdown-item" href="/contactUs">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="/error">404 page</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle  d-flex align-items-center gap-2 justify-content-center"
                                    href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>
                                        Blog
                                    </span> <i class="fa mt-1">&#xf107;</i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/blog">Blog</a></li>
                                    <li><a class="dropdown-item" href="/blogDetails">Blog Details</a></li>

                                </ul>
                            </li>

                        </ul>
                        <form class="d-flex gap-4 authBtn">
                            <a href="/login" class="" type="submit">Login</a>
                            <button class="signup_button">
                                <a href="/signup" class="" type="submit"><img src={user}
                                    alt="" />
                                    Create Account</a>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar