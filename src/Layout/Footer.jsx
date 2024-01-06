import React from 'react'
import FOOTERLOGO from '../assets/home1/FOOTERLOGO.png';
import finsta from '../assets/home1/finsta.png';
import facebook from '../assets/home1/f-facebook.png';
import twitter from '../assets/home1/ftwitter.png';
import linkdin from '../assets/home1/flinkdin.png';
import youtube from '../assets/home1/fyoutube.png';
import gmail from '../assets/home1/gmail.png';
import location from '../assets/home1/location.png';
import call from '../assets/home1/call.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="row gy-3">
                        <div class="col-lg-3">
                            <div class="text-center text-lg-start">
                                <a href="index.html">
                                    <img class="img-fluid" src={FOOTERLOGO} alt="Logo" />
                                </a>
                                <p class="mt-3 mb-4">
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                    The point of using Lorem Ipsum.
                                </p>
                                <div class="footerEnd text-center text-md-startF">
                                    <div
                                        class="socialLink d-flex justify-content-center justify-content-md-start align-items-center ">
                                        <a href="#" class="footer_icon d-block overflow-hidden">
                                            <img
                                                src={finsta} alt="instagram" />
                                        </a>
                                        <a href="#" class="footer_icon d-block overflow-hidden">
                                            <img
                                                src={facebook} alt="facebook" />
                                        </a>
                                        <a href="#" class="footer_icon d-block overflow-hidden">
                                            <img
                                                src={twitter} alt="Twitter" />
                                        </a>
                                        <a href="#" class="footer_icon d-block overflow-hidden">
                                            <img
                                                src={linkdin} alt="Linkdin" /></a>
                                        <a href="#" class="footer_icon d-block overflow-hidden">
                                            <img
                                                src={youtube} alt="Youtube" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-md-3 col-lg-2">
                            <ul class="text-center text-md-start">
                                <li>Links</li>
                                <li><a href="About.html">About Us</a></li>
                                <li><a href="EventsGrid.html">Upcoming Events</a></li>
                                <li><a href="#">FAQ Question</a></li>
                                <li><a href="Testimonial.html">Testimonial</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 col-lg-2">
                            <ul class="text-center text-md-start">
                                <li>Uselink</li>
                                <li><a href="ContactUs.html">Contact Us</a></li>
                                <li><a href="#">Pricing Plan</a></li>
                                <li><a href="Gallary.html">Gallery</a></li>
                                <li><a href="instructor.html">Instructor</a></li>
                                <li><a href="#">Pruchese</a></li>
                            </ul>
                        </div>
                        <div class="col-md-5 col-lg-4">
                            <ul class="footerEnd text-center text-md-start">
                                <li class="d-block mb-3">Contact Info</li>
                                <li>
                                    <a href="#" class="d-flex flex-lg-row flex-column gap-2 align-items-center"><img
                                        src={location} alt="location" /> 275 Quadra Street Victoria <br />
                                        Road, New York</a>
                                </li>
                                <li class="d-flex flex-lg-row flex-column align-items-center gap-2">
                                    <img src={call} alt="call" />
                                    <div>
                                        <a href="#">+1 (237) 382-2839</a>
                                        <a href="#">+1(237) 382-2840</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="d-flex flex-lg-row flex-column gap-2 align-items-center"> <img
                                        src={gmail} alt="gmail" /> youremailaddress@example.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p class="text-center">Copyright 2023 Educare | Developed By Opedia Technologies Limited, All Rights
                        Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
