import React from 'react'
import arrow from '../../assets/home1/arrow-right-circle.png'
const Membership = () => {
  return (
    <>
 <div className="shadow_green1 
  ">
  <section className="home1 container mb_130 ps-0 pe-0">
    <div className="membership_wrapper">
      <h1 className="mb_12">Join Membership And <br className="d-lg-block d-none" />
        Connect To Every Member</h1>
      <p>Learn how to take the right decission in critical time to get succes and how to overcome bad
        times.
      </p>
      <div className="position-relative">
        <input type="text" name id placeholder="Enter your email address" />
        <button className="email_arrow">
          <img src={arrow} alt />
        </button>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Membership