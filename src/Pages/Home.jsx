import React, { useEffect } from 'react'
import bg from '../assets/images/bg.jpg'
import Skills from '../Components/Skills'
import WorkSamples from '../Components/WorkSamples'
import Contact from '../Components/Contact'
import AOS from 'aos'


const Home = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'90vh'
    }

    useEffect(()=>{
        AOS.init()
    },[])

    return (
        <div className='main bg-dark'>
            <div className='d-flex align-items-center background' style={backgroundStyle}>
                <div className="container">
                <div >
                    <h3 className='text-light ' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Hello, my name is</h3>
                    <h1 className='text-light my-4 fw-bold' style={{fontSize:'5rem'}} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Atul <span className='text-danger'>Shinde</span></h1>
                    <button  className='btn btn-danger  my-2' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000"><a className='text-light text-decoration-none' href="https://drive.google.com/file/d/1mjtgPtUkzof5Sks8U3VCq2KYFrenbLOU/view" target="_blank" rel="noopener noreferrer">Hire Me</a></button>
                </div>
                </div>
            </div>
            <Skills/>
            <WorkSamples/>
            <Contact/>
        </div>
    )
}

export default Home