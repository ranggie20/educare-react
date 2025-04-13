import React from 'react';
import './NavBar.css';
import logo from '../../assets/home1/greenlogo1.png';
import user from '../../assets/home1/user-circle.png';

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className="img-fluid logoImg" src={logo} alt="Logo" />
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
                        {/* <img src={menuIcon} alt="Menu" /> */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto text-center d-flex gap-4">
                            <li className="nav-item mx-3">

                                <a className="nav-link" href="/">HOME</a>
                            </li>
                            <li className="nav-item mx-3">

                                <a className="nav-link d-flex align-items-center gap-2" href="/about">
                                    PROFIL
                                </a>
                            </li>
                            <li className="nav-item mx-3">

                                <a className="nav-link" href="/course">SERTIFIKASI</a>
                            </li>

                            {/*<li className="nav-item dropdown mx-3">
                                <a
                                    className="nav-link dropdown-toggle d-flex align-items-center gap-2 justify-content-center"
                                    href="#"
                                    id="navbarDropdownGallery"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>GALERI</span> <i className="fa mt-1">&#xf107;</i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownGallery">
                                    <li><a className="dropdown-item" href="/galeri-foto">Foto</a></li>
                                    <li><a className="dropdown-item" href="/galeri-vidio"> Video</a></li>
                                </ul>
                            </li>*/}

                            <li className="nav-item mx-3">

                                <a className="nav-link" href="/blog">BLOG</a>
                            </li>

                        </ul>
                        <form className="d-flex gap-2 authBtn">
                            <button className="signup_button">
                                <a href="/signup" type="submit" className="signup_button">
                                    <img src={user} alt="" />
                                    REGISTER
                                </a>
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar