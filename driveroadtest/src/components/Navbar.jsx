import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  // isNavOpen to toggle between navbar close/open bool
  const [isNavOpen, setIsNavOpen] = useState(false);

  // This fucntion toggle navbar true/false which is navbar open/collapse
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div style={{ paddingBottom: '60px' }}>
      <nav className="navbar navbar-expand-lg navbar-light shadow" style={{ position: 'fixed', top: '0px', width: '100%', background: 'rgba(255,255,255,1)', zIndex: '2'}}>
        <div className="container">

          {/* //Added onClick={toggleNav} in order to make navbar open/close when an item is clicked in small screens  */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNav}>
            <span className="navbar-toggler-icon" ></span>
          </button>
          <NavLink className="navbar-brand fw-bolder fs-4 mx-auto me-4" to="/"> Drive Road Test </NavLink>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} `} id="navbarSupportedContent">
            

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" end onClick={toggleNav}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={toggleNav}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services" onClick={toggleNav}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={toggleNav}>Contact_us</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  License type
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="nav-link dropdown-item" to="/G1" onClick={toggleNav}>G1</NavLink></li>
                  <li><NavLink className="nav-link dropdown-item" to="/G2" onClick={toggleNav}>G2</NavLink></li>
                  <li><NavLink className="nav-link dropdown-item" to="/G" onClick={toggleNav}>G</NavLink></li>
                  {/* <li><hr className="dropdown-divider w-100 text-primary" /></li> */}
                  {/* <li><NavLink className="nav-link dropdown-item" to="#">Other licensings</NavLink></li> */}
                </ul>
              </li>
            </ul>

            {props.auth ?
              <div className='buttons m-0'>
                <NavLink to="/login" className='btn btn-outline-primary ms-2 my-2 px-4 rounded-pill' onClick={toggleNav}>
                  <i className="fa  fa-sign-in me-2"></i> Login</NavLink>
                <NavLink to="/register" className='btn btn-outline-primary ms-2 my-2 px-4 rounded-pill' onClick={toggleNav}>
                  <i className="fa  fa-user-plus me-2"></i>Register</NavLink>
              </div>
              :
              <div className='buttons'>
                <NavLink to="/dashboard" className='btn btn-outline-primary ms-2 my-2 px-4 rounded-pill' onClick={toggleNav}>
                  <i className="fa  fa-user-plus me-2"></i>Dashboard</NavLink>
                {props.admin === true ?
                  <NavLink to="/adminDashboard" className='btn btn-outline-primary ms-2 my-2 px-4 rounded-pill' onClick={toggleNav}>
                    <i className="fa  fa-user-plus me-2"></i>AdminDashboard</NavLink> : ""}
                <NavLink to="/logout" className='btn btn-outline-primary ms-2 my-2 px-4 rounded-pill' onClick={toggleNav}>
                  <i className="fa  fa-sign-out me-2"></i>Logout</NavLink>
              </div>
            }
            
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
