import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="footer" className='bg-primary'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4 text-white">
              <h2>Drive Road Test</h2>
            </div>
            <div className="col-md-4 flex-column mt-4 text-white">
              <ul className='footer_a my-2'>
                <li className='my-2'> <a href="#" className='text-white'>Home </a> <br /> </li>
                <li className='my-2'><a href="#" className='text-white'>About</a> <br /> </li>
                <li className='my-2'><a href="#" className='text-white'>Service</a> <br /> </li>
                <li className='my-2'><a href="#" className='text-white'>Contact</a> <br /> </li>
              </ul>
            </div>
            <div className="col-md-4 mt-4 text-white">
              <h5 className=''>Subscribe to our news channel!</h5>
              <p className="lead fs-6" >keep updated on what changes or new rules are coming out!</p>
              <form action="#">
                <div className='input-group'>
                  <input id="newsletter" className='form-control input-sm rounded-pill' type="text" placeholder='Enter your email' />
                  <button className="btn btn-primary rounded-pill border-primary px-2 mx-2">Submit</button>
                </div>
              </form>
              <a href="#"> <i className="fa fa-twitter mx-2 px- 5 my-2 py-5 text-info"></i> </a>
              <a href="#"> <i className="fa fa-facebook mx-2 px- 5 my-2 py-5 text-info"></i> </a>
              <a href="#"> <i className="fa fa-instagram mx-2 px- 5 my-2 py-5 text-info"></i> </a>
              <a href="#"> <i className="fa fa-envelope mx-2 px- 5 my-2 py-5 text-info"></i> </a>
            </div>
          </div>
          <div className="row"> <hr className='w-100' />
            <div className="col justify-content-center text-center text-white mb-2">
              © All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer