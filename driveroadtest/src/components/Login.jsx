import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router';
import './componentsStyling.css';
const Login = () => {
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    //handle input
    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        if(name == "email"){
            value = value.toLowerCase();
        }
        setUser({...user, [name]: value});
    }

    //handle submit
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);
        const{email, password} =  user;
        try {
            const res = await fetch('/login/login', {
                method: "POST",
                headers:{
                    "content-type": "application/JSON"
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,password
                })
            });
            if(res.status === 400|| !res){
                setLoading(false);
                window.alert("Invalid Credentials");                
            }else{
                setLoading(false);
                window.alert("Logged Inn...");
                window.location.reload();
                Navigate('/');
                // Token is generated when we logged in 
                // Now we need to create schema htmlFor the messages
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) : 
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-white form">
                        <h1 className="display-4 fw-bolder">Welcome back</h1>
                        <p className="lead text-center">Enter your credentials to login</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/register" className=" btn btn-outline-light rounded-pill pb-2 w-50"> Register </NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={user.email} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handleChange} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Login</button>
                        </form>
                        <NavLink to="/ForgotPassword" className="btn btn-primary w-100 mt-4 rounded-pill"> Forgot Password </NavLink>
                    </div>
                </div>
            </div>
}
        </div>
    )
}

export default Login