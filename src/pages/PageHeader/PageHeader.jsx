import React from 'react'
import arrow from '../../assets/about/arrow-right.png'
const PageHeader = ({ title }) => {
    return (
        <div>
            <section class="">
                <div class="sectionHeader_wrapper shadow_wrapper">
                    <h3>{title}</h3>
                    <div class="d-flex align-items-center justify-content-center ">
                        <p>Home</p>
                        <img src={arrow} class="sectinHeader_arrow" alt="" />
                        <p>{title}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageHeader