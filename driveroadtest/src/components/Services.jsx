import React from 'react'

const Services = () => {
  return (
    <div> 
        <section id="services">
            <div className="contaier mx-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Our Services</h3>
                        <h1 className="display-6 text-center mb-4">Our <b>awesome</b> Services!</h1>
                        <hr className='w-25 mx-auto'/>

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card p-3">                 
                            <div className="card-body text-center">
                                <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Super Easy</h5>
                                <p className="card-text lead">Just visit DriversRoadTest.com and go, it's that simple. You find everything you need to get started.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">                 
                            <div className="card-body text-center">
                                <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Phone accessible</h5>
                                <p className="card-text lead">Access it anytime, anywhere with your smartphone. Easy load no wait time and less data consumption.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">                 
                            <div className="card-body text-center">
                                <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">User Experience</h5>
                                <p className="card-text lead"> No page refreshes again and again. No need to go dig for content, everything you need is available in our menu.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card p-3">                 
                            <div className="card-body text-center">
                                <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Creative way</h5>
                                <p className="card-text lead">We are continously working on our R&D to find more creative ways to keep users engaged and have fun while they learn.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">                 
                            <div className="card-body text-center">
                                <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Unique & Clean</h5>
                                <p className="card-text lead">Precisely to the point content available. Everything users need is in right front of them readily available.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">                 
                            <div className="card-body text-center">
                                <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Stay Updated</h5>
                                <p className="card-text lead">Do not forget to subscribe our page if you want to stay updated with news and changes coming. Stay Updated as you go.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services