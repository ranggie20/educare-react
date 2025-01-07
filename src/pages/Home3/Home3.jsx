import React from 'react'
import HomeHeader3 from './HomeHeader3'
import Home3Banner from './Banner'
import Trusted from './Trusted'
import Home3AbousUs from './Home3AbousUs'
import Home3PopularCourse from './Home3PopularCourse'
import UpcomingEducationEvemt from './UpcomingEducationEvemt'
import Home3Testimonial from './Home3Testimonial'
import Home3OurLatestBlog from './Home3OurLatestBlog'
import Home3MemberShip from './Home3MemberShip'
import Home3Footer from './Home3Footer'

const Home3 = () => {
    return (
        <div className='home3_wrapper' style={{
            backgroundColor:"#131c1e"
        }}>
            <HomeHeader3/>
            <Home3Banner/>
            <Trusted/>
            <Home3AbousUs/>
            <Home3PopularCourse/>
            <UpcomingEducationEvemt/>
            <Home3Testimonial/>
            <Home3OurLatestBlog/>
            <Home3MemberShip/>
            <Home3Footer/>
        </div>
    )
}

export default Home3
