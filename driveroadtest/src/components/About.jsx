import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about.jpg" alt="About" className='w-75 mt-5' />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About us</h3>
                        <h1 className="display mb-2">Who <b>we</b> are!</h1>
                        <hr className='w-50'/>
                        <p className="lead mb-4">We are new leaning platform where you start your drivers license learning journey.
                        You will find all the content you need free of cost on this site. Hope you enjoy leaning on our site.</p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact us</button>
                    </div>                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default About