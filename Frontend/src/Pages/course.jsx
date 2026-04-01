import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import CourseConent from '../components/CourseContent.jsx';

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