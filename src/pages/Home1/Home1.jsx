import React from 'react';
import Banner from './../../components/Home1/Banner/Banner';
import TrustedBrands from '../../components/TrustedBrands/TrustedBrands';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import EstablishingACommunity from './../../components/EstablishingACommunity/EstablishingACommunity';
import TopCategories from '../../components/Home1/TopCategories/TopCategories';
import FeaturesCourse from '../../components/FeaturesCourse/FeaturesCourse';
import Instructor from '../../components/Instructor/Instructor';
import StudentsFeedBack1 from '../../components/StudentsFeedBack1/StudentsFeedBack1';
import LatestBlog from './../../components/Home1/LatestBlog/LatestBlog';
import Membership from '../../components/Membership/Membership';
import '../../css/style.css'
const Home1 = () => {
    return (
        <div>
            <Banner />
            <TrustedBrands />
            <HowItWorks />
            <EstablishingACommunity />
            <TopCategories />
            <FeaturesCourse />
            <Instructor />
            <StudentsFeedBack1 />
            <LatestBlog />
            <Membership />
        </div>
    );
};

export default Home1;