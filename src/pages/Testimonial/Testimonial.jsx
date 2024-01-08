import React from 'react'
import StudentsFeedBack1 from '../../components/StudentsFeedBack1/StudentsFeedBack1'
import PageHeader from './../PageHeader/PageHeader';
import StudentTestimonialCard from '../../components/StudentTestimonialCard/StudentTestimonialCard';

const Testimonial = () => {
  return (
    <div>
      <PageHeader title="Testimonial" />
      <StudentsFeedBack1 />
      <StudentTestimonialCard />
    </div>
  )
}

export default Testimonial