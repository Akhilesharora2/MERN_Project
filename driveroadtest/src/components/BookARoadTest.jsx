import React from 'react';

const BookARoadTest = () => {

    return (
        <div>
            <section id="BookARoadTest">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                        <h1 className="display-6 text-center mb-4">Ready for <b><i>Drivers Road Test</i></b>?</h1>
                        <a target="_blank" rel='noreferrer' className="btn btn-outline-primary rounded-pill px-4 mb-4 py-2 ms-2" href="https://drivetest.ca/book-a-road-test/overview/" >Book A Road Test</a>
                            <h3 className="fs-5 text-center mb-0">Important reminders before booking!</h3>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 mb-4">
                        <h5 className=" text-center ">G1</h5>
                        <hr className='w-25 mx-auto' />
                            <ul className='mb-1'>
                                <li className='my-1 fst-italic'>There will be a vision test and total of 40 Question in the set of 2, 20's.</li>
                                <li className='my-1 fst-italic'>Set 1 is knowledge based/ Set 2 is Road signs.</li>
                                <li className='my-1 fst-italic'>You need to score 16 out of 20 in each individual section</li>                                
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4">
                        <h5 className=" text-center ">G2</h5>
                        <hr className='w-25 mx-auto' />
                        <ul className='mb-1'>
                                <li className='my-1 fst-italic'>Did you check the weather,route and traffic in you test area?</li>
                                <li className='my-1 fst-italic'>Practice sessions are important with an instructor before test.</li>
                                <li className='my-1 fst-italic'>If you have trouble finding a good instructor please leave your message in contact us page.</li>                                
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4">
                        <h5 className="text-center">G</h5>
                        <hr className='w-25 mx-auto' />
                        <ul className='mb-1'>
                                <li className='my-1 fst-italic'>G requires proficient driving skills.</li>
                                <li className='my-1 fst-italic'>There are major differences between G2 and G Test.</li>
                                <li className='my-1 fst-italic'>Double check the route with an instructor and check in our G section for more.</li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookARoadTest