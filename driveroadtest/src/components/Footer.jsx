import React, { useState } from 'react'
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';
const Footer = () => {

  const [subscriber, setSubscriber] = useState("");

  const handleChange = (event) => {
    setSubscriber(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (subscriber === "") {
      window.alert("Please fill in the required email field to subscribe!!");
    } else {

      try {
        //It is submitted on PORT 3000
        // Which is Front end but we need to 
        // Submit it on back end which is PORT 3001.
        // So we need Proxy
        const res = await fetch('/subscribe', {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            subscriber
          })
        })
        if (res.status === 400 || !res) {
          window.alert("Looks like you have already been registered.")
        } else {
          //You need to restart the server to work with Proxy.
          document.getElementById("newsletter").value = "You are a subscriber now.";
          setSubscriber("  ");
          window.alert("Subscription Success");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }


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
                <li className='my-2'> <NavLink to="/" className='text-white'>Home </NavLink> <br /> </li>
                <li className='my-2'><NavLink to="/About" className='text-white'>About</NavLink> <br /> </li>
                <li className='my-2'><NavLink to="/Services" className='text-white'>Service</NavLink> <br /> </li>
                <li className='my-2'><NavLink to="/Contact" className='text-white'>Contact</NavLink> <br /> </li>
              </ul>
            </div>
            <div className="col-md-4 mt-4 text-white">
              <h5 className=''>Subscribe to our news channel!</h5>
              <p className="lead fs-6" >keep updated on what changes or new rules are coming out!</p>
              <form onSubmit={handleSubmit} method="POST">
                <div className='input-group'>
                  <input id="newsletter" className='form-control input-sm rounded-pill' type="email" placeholder='Enter your email...' name="name" value={subscriber.value} onChange={handleChange} />
                  <button className="btn btn-primary rounded-pill border-primary px-2 mx-2" style={{ "zIndex": "0" }}>Submit</button>
                </div>
              </form>
              {/* <a href="#"> <i className="fa fa-twitter mx-2 px- 5 my-2 py-5 text-info"></i> </a>
              <a href="#"> <i className="fa fa-facebook mx-2 px- 5 my-2 py-5 text-info"></i> </a>
              <a href="#"> <i className="fa fa-instagram mx-2 px- 5 my-2 py-5 text-info"></i> </a>
              <a href="#"> <i className="fa fa-envelope mx-2 px- 5 my-2 py-5 text-info"></i> </a> */}
            </div>
          </div>
          <div className="row"> <hr className='w-100' />
            <div className="col justify-content-center text-center text-white mb-2">
              © 2023 Drive Road Test
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer