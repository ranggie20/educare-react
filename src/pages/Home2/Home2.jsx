import React from 'react';
import Home2Banner from '../../components/Home2/Home2Banner/Home2Banner';
import InterestingQualities from '../../components/Home2/InterestingQualities/InterestingQualities';
import CourseCategories from '../../components/Home2/CourseCategories/CourseCategories';
import BestCarrierOffer from '../../components/Home2/BestCarrierOffer/BestCarrierOffer';
import OurPopularCourses from '../../components/Home2/OurPopularCourses/OurPopularCourses';
import FreeWorkShop from '../../components/Home2/FreeWorkShop/FreeWorkShop';
import OnlineClasses from '../../components/Home2/OnlineClasses/OnlineClasses';
import Home2Header from './Home2Header';
import Testimonials2 from '../../components/Testimonials2';
import Membership from '../../components/Membership';
import Footer from './Footer';
// import '../../css/hometwo.css';


const Home2 = () => {
    return (
        <div className='position-relative home2_wrapper' style={{
            backgroundColor:"#F7F6FF"
        }}>
            <Home2Header />
            <Home2Banner />
            <InterestingQualities />
            <CourseCategories />
            <BestCarrierOffer />
            <OurPopularCourses />
            <FreeWorkShop />
            <OnlineClasses />
            <Testimonials2/>
            <Membership/>
            <Footer/>
        </div>
    );
};

export default Home2;