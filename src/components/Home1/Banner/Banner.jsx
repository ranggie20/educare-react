import React from 'react'
import banner from '../../../assets/home1/banner1.png';
import bannerrotate from '../../../assets/home1/bannerround.png';
import playVideoIcon from "../../../assets/home1/banner_playvideoicon.png"

const Banner = () => {
  
  return (
    <>
     <section className="shadow_green">
  <div className="banner_wrapper">
    <div className="container ">
      <div className="row gap-lg-0 gap-5 align-items-center">
        <div className="col-lg-7">
          <h1 className="banner_title text-lg-start text-center">Find the
            <span>Perfect</span>
            <br className="d-lg-block d-none" />
            Course and develop <br className="d-lg-block d-none" />
            your skills</h1>
          <p className="mt_14 mb_56 fw_400 fs_18 grey2 text-lg-start text-center">Want to raise your grade
            point average? To
            increase
            your success at school, <br className="d-lg-block d-none" />
            you must study more diligently with the assistance of a superb teacher.</p>
          <div className="d-flex gap-4 justify-content-lg-start justify-content-center">
            <button className="greenButton">Become a Student</button>
            <button type="button" className="bannerWatchBtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={playVideoIcon} alt="" />
              Watch  Demo</button>
          </div>
        </div>
        <div className="col-lg-5 position-relative">
          <img className="img-fluid " src={banner} alt="banner" />
          <img className="img_rotate" src={bannerrotate} alt />
        </div>
      </div>
    </div>
  </div>
</section>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered  modal-xl">
          <div class="modal-content position-relative">
            <div class="modal-header p-0">
              <button type="button" class=" video_close_btn" data-bs-dismiss="modal" aria-label="Close"><i
                class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="modal-body p-0 modal_video_h">
              <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/TjPFZaMe2yw?si=yejP3jrWfR9Ff6OI"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Banner