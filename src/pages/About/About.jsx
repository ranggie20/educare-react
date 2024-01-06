import React from 'react'
import EstablishingACommunity from './../../components/EstablishingACommunity/EstablishingACommunity';
import HowItWorks from './../../components/HowItWorks/HowItWorks';
import FeaturesCourse from '../../components/FeaturesCourse/FeaturesCourse';
import Instructor from '../../components/Instructor/Instructor';
import StudentsFeedBack1 from '../../components/StudentsFeedBack1/StudentsFeedBack1';
import Membership from '../../components/Membership/Membership';
import PageHeader from '../PageHeader/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader title="About Us" />
      <EstablishingACommunity />
      <HowItWorks />
      <FeaturesCourse />
      <Instructor />
      <StudentsFeedBack1 />
      <Membership />
    </div>
  )
}

export default About