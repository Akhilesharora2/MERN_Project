import React from 'react';
import { NavLink } from 'react-router-dom';


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
                        <p className="lead mb-4">This website provides free open source content and meant solely for education purposes only.
                        We provide information on G1, G2 and G exams for now and will be updating expanding our content as soon as posibble.
                        If you notice something that's incorrect, any opportunity for us, please leave us a comment in the contact page.
                        Your feedback is extremely important to us. </p>
                        <NavLink className="btn btn-primary rounded-pill px-4 py-2" to="/G1" >Get Started</NavLink>
                        <NavLink className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2" to="/Contact">Contact us</NavLink>
                    </div>                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default About