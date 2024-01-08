import React from 'react'
import contacty from '../../assets/contacty.png'
import contactSmall from '../../assets/home1/contact-small.png'
const ContactUs = () => {
  return (
    <>

      <section>
        <div class="container-fluid mb_130 mt_130" style={{ marginBottom: "500px" }}>
          <div class="position-relative" style={{ height: "100vh" }}>
            <div class="row mb_130 flex-lg-column flex-column-reverse">
              <div class="col-lg-7 contact_form_parent" style={{ zIndex: "1" }}>
                <div class="contact_wrapper">
                  <div class="contact_heading">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Get in touch today</h2>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"> Ipsum dolor sit amet consectetur adipiscing elit tortor eu dolorol egestas morbi
                      sem vulputate etiam facilisis pellentesque ut quis. ipsum dolor sit amet consectetur adipiscing
                      elit tortor eu dolorol egestas morbi sem vulputate etiam facilisis pellentesque ut quis. </p>
                    <form action="" class="contact_form">
                      <div class="row">
                        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">First
                              Name</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone Number
                            </label>
                            <input type="number" class="form-control" />

                          </div>
                        </div>
                        <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                          <label for="exampleFormControlTextarea1"
                            class="form-label">Subject</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                          <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example
                              textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1"
                              rows="3"></textarea>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>

              </div>
              <div class="col-lg-4 ps-0 pe-0">
                <div class="contact_bg">
                  <img class="large_contact w-100" src={contacty} alt="" />
                  <img class="w-100 contact_bg_small" src={contactSmall} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ >
  )
}

export default ContactUs