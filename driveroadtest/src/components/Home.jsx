import React, { useEffect } from 'react'
import About from './About';
import Contact from './Contact';
import Services from './Services';
import BookARoadTest from './BookARoadTest';
import { NavLink } from 'react-router-dom';

const Home = ({auth}) => {
    useEffect(()=>{
        if(window.twttr){
            window.twttr.widgets.load();
        }
    },[]);

    return (
        <div>
            <section id="home">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-7 mt-5">
                            <p className="display-6 mb-4 text-center text-white">
                                There are millions of licensed drivers in Ontario and every one of them had started by visiting driveTest center and starting with a G1.
                            </p>
                            <p className="lead text-center fs-4 mb-5 text-white">
                                Jump in by selecting any one of the options below
                            </p>
                            <div className="HomeButtons d-flex justify-content-center">
                                <NavLink to="/G1" className="btn btn-light me-4 rounded-pill px-4 py-2">
                                    G1
                                </NavLink>

                                {auth ? (
                            <NavLink to="/Login" className="btn btn-outline-light rounded-pill px-4 py-2">
                                Login 
                            </NavLink>
                        )
                                    :
                                    (<NavLink to="/Dashboard" className="btn btn-outline-light rounded-pill px-4 py-2">
                        Dashboard 
                    </NavLink>)
                                }
                            </div>
                        </div>
                        <div className="col-md-5 mt-5 wrapper">
                            <div className="box-wrap">
                                <div className="box">
                                    <div className="box1 box-top h4">AZ/DZ</div>
                                    <div className="box1 box-right h4">M</div>
                                    <div className="box1 box-left h4">G2</div>
                                    <div className="box1 box-front h4">G1</div>
                                    <div className="box1 box-back h4">G</div>
                                    <div className="box1 box-bottom h4">B/C</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BookARoadTest />
            <About />
            <Services />
            <Contact />
            <div className=' d-flex justify-content-center'>
                        <a className="twitter-timeline" data-width="660" data-height="513" href="https://twitter.com/ONtransport?ref_src=twsrc%5Etfw">Tweets by ONtransport</a>
                        </div> 
        </div>
    )
}

export default Home;