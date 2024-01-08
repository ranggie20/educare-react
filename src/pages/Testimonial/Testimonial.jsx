import React from 'react'
import StudentsFeedBack1 from '../../components/StudentsFeedBack1/StudentsFeedBack1'
import PageHeader from './../PageHeader/PageHeader';
import StudentTestimonialCard from '../../components/StudentTestimonialCard/StudentTestimonialCard';
import Testimonial3 from '../../components/Testimonial3/Testimonial3';

const Testimonial = () => {
  return (
    <div>
      <PageHeader title="Testimonial" />
      <StudentsFeedBack1 />
      <StudentTestimonialCard />
      <Testimonial3 />
    </div>
  )
}

export default Testimonial