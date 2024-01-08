import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import g1 from '../../assets/gallary/g1.png'
import g2 from '../../assets/gallary/g2.png'
import g3 from '../../assets/gallary/g3.png'
import g4 from '../../assets/gallary/g4.png'
import g5 from '../../assets/gallary/g5.png'
import './Gallary.css';
const Gallary = () => {
  return (
    <div>
      <PageHeader title="Gallary Grid" />

      <section>
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-between">
            <div>
              <h3>Gallery Grid</h3>
            </div>
            <div class="gallary">
              <div class="featured_buttons">
                <button data-filter="*" class="grey_btn feature_green_btn">All</button>
                <button data-filter=".trending" class="grey_btn ">Trending</button>
                <button data-filter=".popularity" class="grey_btn">Popularity</button>
                <button data-filter=".feature" class="grey_btn ">Featured</button>
              </div>
            </div>
          </div>

          <div class="gallary_wrapper ">
            <div class="row gallaryAll">
              <div class="col-lg-4 feature popularity trending " data-aos="fade-right"
                data-aos-duration="1000" data-aos-delay="200">
                <img class="img-fluid  gap-4 " src={g1} alt="" />
              </div>
              <div class="col-lg-4 feature popularity trending ">
                <img data-aos="fade-top" data-aos-duration="1000" data-aos-delay="200"
                  class="img-fluid  gap-4" src={g2} alt="" />
                <img data-aos="fade-bottom" data-aos-duration="1000" data-aos-delay="200" class="img-fluid"
                  src={g4} alt="" />
              </div>
              <div class="col-lg-4 feature ">
                <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="img-fluid  gap-4" src={g3} alt="" />
                <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="img-fluid" src={g5} alt="" />
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

export default Gallary