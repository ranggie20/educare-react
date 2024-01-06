import React from 'react'
import plus from '../../assets/events/plus.png'
import facebook from '../../assets/events/facebook 01.png'
import insta from '../../assets/events/insta.png'
import twitter from '../../assets/events/twitter.png'
import linkdin from '../../assets/events/linkdin.png'
import pinterest from '../../assets/events/pinterest.png'
import date from '../../assets/events/date.png'
import time  from '../../assets/events/time.png'
import whatsapp from '../../assets/events/whatsapp.png'
import loca from '../../assets/events/loca.png'
import event1 from '../../assets/events/event1.png'
import event2 from '../../assets/events/event2.png'
import event3 from '../../assets/events/event3.png'
import tick from '../../assets/events/tick.png'


const EventsDetails = () => {
  return (
    <>
      <section class="container p-0 event_details_padding">

        <div class="container">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <img class="img-fluid" src={event1} alt="" />
          </div>
          <div class="events_parent" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="event_details_wrapper">
              <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Education with equity
                and <br />
                high standards</h1>
              <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="details_txt mb_48">
                Education is a fundamental pillar of any society, serving as a
                pathway to
                individual growth,
                societal progress, and economic
                development. To ensure that education truly fulfills its potential, it must be characterized
                by
                both equity and high standards.
                This combination creates an educational system that is fair, inclusive, and effective in
                preparing all students for success in
                an ever-changing world.</p>
              <div class="row">
                <div class="col-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  <img class="img-fluid w-100 mt_48" src={event2} alt="" />
                </div>
                <div class="col-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  <img class="img-fluid w-100 mt_48" src={event3} alt="" />
                </div>
              </div>

              <div>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Four major elements
                  that we offer:</h3>
                <div class="d-flex flex-column gap_24 mb_32 elements">
                  <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
                    class="d-flex gap-2"><img src={tick} alt="tick" /> Cutting-Edge
                    Products
                    and
                    Services</p>
                  <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
                    class="d-flex gap-2"><img src={tick} alt="tick" />Exceptional Customer
                    Support
                  </p>
                  <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
                    class="d-flex gap-2"><img src={tick} alt="tick" />Sustainable Practices
                  </p>
                  <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
                    class="d-flex gap-2 align-items-center"><img src={tick}
                      alt="tick" />Innovation and
                    Research &
                    Development</p>
                </div>

                <p class="details_txt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">These four major elements reflect our organization's dedication to
                  excellence,
                  sustainability, and customer satisfaction.
                  We are committed to providing you with top-notch products, outstanding support,
                  eco-friendly
                  practices, and innovative
                  solutions that will help you thrive in your endeavors.</p>
              </div>
              <hr class="hr_design" />

              <div class="vanue_timing" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h4>Venue</h4>
                <p class="d-flex gap-2 align-items-center"><img src={loca} alt="" />
                  <span>Washington DC, EK 3642</span>
                </p>
              </div>
              <hr class="hr_design" />

              <div class="row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" >
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="vanue_timing">
                    <h4>Date</h4>
                    <p class="d-flex gap-2 align-items-center"><img src={date}
                      alt="" />
                      <span>Nov 10th, 2023 to Nov 11th, 2018</span>
                    </p>
                  </div>
                </div>
                <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div class="vanue_timing">
                    <h4>Time</h4>
                    <p class="d-flex gap-2 align-items-center"><img src={time}
                      alt="" />
                      <span>13th Dec 2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <button class="add_calender_btn"><img src={plus} alt="" /> Add to
                Calendar</button>
              <hr class="hr_design" />

              <div class="row align-items-center">

                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="vanue_timing mb_24">
                    <h4>Share</h4>
                    <div class="social_links">
                      <a href="#"> <img src={facebook} alt="" /></a>
                      <a href="#"> <img src={whatsapp} alt="" /></a>
                      <a href="#"> <img src={twitter} alt="" /></a>
                      <a href="#"> <img src={linkdin} alt="" /></a>
                      <a href="#"> <img src={insta} alt="" /></a>
                      <a href="#"> <img src={pinterest} alt="" /></a>
                    </div>

                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex justify-content-lg-start justify-content-center gap_24 flex-wrap">
                    <button class="price_border_btn">Price: $80.00</button>
                    <button class="price_btn">Book Your Seat Now <img
                      src="/assets/events/rightarrow.png" alt="" /></button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>

    </>
  )
}

export default EventsDetails