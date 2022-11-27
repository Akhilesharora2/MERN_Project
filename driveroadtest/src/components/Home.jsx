import React from 'react'
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <section id="home">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                            Welcome to the new License lerning content page for Ontario Canada.
                        </h1>
                        <p className="lead text-center fs-4 mb-5 text-white">
                            It is a new way to learn and succedd.
                        </p>
                        <div className="buttons d-flex justify-content-center">
                            <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">
                                G1
                            </NavLink>
                            <NavLink to="/services" className="btn btn-outline-light rounded-pill px-4 py-2">
                                Login 
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About />
        <Services />
        <Contact />
    </div>
  )
}

export default Home;