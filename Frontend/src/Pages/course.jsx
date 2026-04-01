import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import CourseConent from '../components/CourseContent'

const course = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <CourseConent />
    </div>
    <Footer />
    </>
  )
}

export default course