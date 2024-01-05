import React from 'react';
import Home2Banner from '../../components/Home2/Home2Banner/Home2Banner';
import InterestingQualities from '../../components/Home2/InterestingQualities/InterestingQualities';
import CourseCategories from '../../components/Home2/CourseCategories/CourseCategories';
import BestCarrierOffer from '../../components/Home2/BestCarrierOffer/BestCarrierOffer';
import OurPopularCourses from '../../components/Home2/OurPopularCourses/OurPopularCourses';
import FreeWorkShop from '../../components/Home2/FreeWorkShop/FreeWorkShop';
import OnlineClasses from '../../components/Home2/OnlineClasses/OnlineClasses';

const Home2 = () => {
    return (
        <>
            <Home2Banner />
            <InterestingQualities />
            <CourseCategories />
            <BestCarrierOffer />
            <OurPopularCourses />
            <FreeWorkShop />
            <OnlineClasses />
        </>
    );
};

export default Home2;