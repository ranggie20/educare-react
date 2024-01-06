import React from 'react'
import './Events.css';
import eBanner from '../../assets/home3/e-banner1.png'
import e1 from '../../assets/home3/e1.png'
import e2 from '../../assets/home3/e2.png'
import e3 from '../../assets/home3/e3.png'
const EventsList = () => {
  return (
    <div>
      <section>
        <div class="container mt_130 mt-lg-5 pt-lg-5 mt-0 mb_130">
          <div class="upcoming_events_wrapper event_list_cards">

            <div class="events_card_wrapper " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <div class="row events_card p-3">
                <div class="col-lg-3 ps-0 pe-lg-2 pe-0">
                  <img class="img-fluid  w-100" src={eBanner} alt="" />
                </div>
                <div class="col-lg-7">
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <div>
                      <a href="EventsDetails.html">
                        <h2 class="events_title">Regional Chief Executive <br /> Network research</h2>
                      </a>
                      <div
                        class="d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center gap-4 mt_32 ">
                        <div class="d-flex align-items-center gap-2">
                          <img src={e1} alt="" />
                          <p class="grey_text_1">13th Dec 2023</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <img src={e2} alt="" />
                          <p class="grey_text_1">09:00 PM</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <img src={e3} alt="" />
                          <p class="grey_text_1">Washington DC, EK 3642</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-2 d-flex justify-content-lg-end justify-content-center align-items-center mt-lg-0 mt-3">
                  <button class="green_btn"><span>Book A Seat</span> <img
                    src="/assets/home3/arrow-right.png" alt="" /></button>
                </div>
              </div>
            </div>

            <div class="events_card_wrapper " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <div class="row events_card p-3">
                <div class="col-lg-3 ps-0 pe-lg-2 pe-0">
                  <img class="img-fluid  w-100" src={eBanner} alt="" />
                </div>
                <div class="col-lg-7">
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <div>
                      <a href="EventsDetails.html">
                        <h2 class="events_title">Regional Chief Executive <br /> Network research</h2>
                      </a>
                      <div
                        class="d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center gap-4 mt_32 ">
                        <div class="d-flex align-items-center gap-2">
                          <img src={e1} alt="" />
                          <p class="grey_text_1">13th Dec 2023</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <img src={e2} alt="" />
                          <p class="grey_text_1">09:00 PM</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <img src={e3} alt="" />
                          <p class="grey_text_1">Washington DC, EK 3642</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-2 d-flex justify-content-lg-end justify-content-center align-items-center mt-lg-0 mt-3">
                  <button class="green_btn"><span>Book A Seat</span> <img
                    src="/assets/home3/arrow-right.png" alt="" /></button>
                </div>
              </div>
            </div>

            <div class="events_card_wrapper " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <div class="row events_card p-3">
                <div class="col-lg-3 ps-0 pe-lg-2 pe-0">
                  <img class="img-fluid  w-100" src={eBanner} alt="" />
                </div>
                <div class="col-lg-7">
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <div>
                      <a href="EventsDetails.html">
                        <h2 class="events_title">Regional Chief Executive <br /> Network research</h2>
                      </a>
                      <div
                        class="d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center gap-4 mt_32 ">
                        <div class="d-flex align-items-center gap-2">
                          <img src={e1} alt="" />
                          <p class="grey_text_1">13th Dec 2023</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <img src={e2} alt="" />
                          <p class="grey_text_1">09:00 PM</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <img src={e3} alt="" />
                          <p class="grey_text_1">Washington DC, EK 3642</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-2 d-flex justify-content-lg-end justify-content-center align-items-center mt-lg-0 mt-3">
                  <button class="green_btn"><span>Book A Seat</span> <img
                    src="/assets/home3/arrow-right.png" alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventsList