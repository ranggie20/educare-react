import React from "react";
import arrow from "../../src/assets/arrow-right-circle.png";
const Membership = () => {
  return (
    <div>
      <section className="container mb_130 ps-0 pe-0">
        <div className="membership_wrapper home2_membership">
          <h1
            className="mb_12 wow fadeInUp"
            data-wow-duration="1.05s"
            data-wow-delay="100ms"
          >
            <span>Join Membership</span> And <br />
            Connect To Every Member
          </h1>
          <p
            className="wow fadeInUp"
            data-wow-duration="1.05s"
            data-wow-delay="200ms"
          >
            Learn how to take the right decission in critical time to get succes
            and how to overcome bad times.
          </p>
          <div
            className="position-relative wow fadeInUp"
            data-wow-duration="1.05s"
            data-wow-delay="300ms"
          >
            <input type="text" name id placeholder="Enter your email address" />
            <button className="email_arrow">
              <img src={arrow} alt />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
