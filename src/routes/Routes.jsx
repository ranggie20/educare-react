import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home1 from './../pages/Home1/Home1';
import About from "../pages/About/About";
import Course1 from './../pages/Course/Course1';
import Course2 from './../pages/Course/Course2';
import EventsGrid from './../pages/Events/EventsGrid';
import EventsList from './../pages/Events/EventsList';
import EventsDetails from "../pages/Events/EventsDetails";
import Gallary from './../pages/Gallary/Gallary';
import Testimonial from "../pages/Testimonial/Testimonial";
import ContactUs from "../pages/ContactUs/ContactUs";
import Error404 from "../pages/Error404";
import BlogDetails from './../pages/Blog/BlogDetails';
import Blog from "../pages/Blog/Blog";
import Instructor from './../pages/Instructor/Instructor';
import Home2 from "../pages/Home2/Home2";
import Home3 from "../pages/Home3/Home3";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home1 />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/course1',
                element: <Course1 />
            },
            {
                path: '/course2',
                element: <Course2 />
            },
            {
                path: '/instructor',
                element: <Instructor />
            },
            {
                path: '/eventsGrid',
                element: <EventsGrid />
            },
            {
                path: '/eventslist',
                element: <EventsList />
            },
            {
                path: '/eventsDetails',
                element: <EventsDetails />
            },
            {
                path: '/gallary',
                element: <Gallary />
            },
            {
                path: '/testimonial',
                element: <Testimonial />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/error',
                element: <Error404 />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blogDetails',
                element: <BlogDetails />
            },
        ]
    },
    {
        path: '/home2',
        element: <Home2 />
    },
    {
        path: '/home3',
        element: <Home3 />
    }


])