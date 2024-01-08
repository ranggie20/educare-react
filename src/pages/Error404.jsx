import React from 'react'
import PageHeader from './PageHeader/PageHeader'
import error from '../assets/404.png'
const Error404 = () => {
  return (
    <div>
      <PageHeader title="Error Page" />
      <section>
        <div class="text-center mt_130" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img src={error} alt="404" />
        </div>
      </section>
    </div>
  )
}

export default Error404