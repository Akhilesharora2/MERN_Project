import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './componentsStyling.css';
const Register = () => {

    const navigate= useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    });

    //Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        //Object Destructuring
        // Store object data into variables
        const { username, email, password, confirm } = user;
        if(password !== confirm){
            alert("Both password and confirm passwords should match!!");
        }else{

        try {
            //It is submitted on PORT 3000
            // Which is Front end but we need to 
            // Submit it on back end which is PORT 3001.
            // So we need Proxy
            const res = await fetch('/register/register', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })
            if(res.status === 400 || !res){
                setLoading(false);
                window.alert("These credentials are already in use!!")
            }else{
                setLoading(false);
                //You need to restart the server to work with Proxy.
                window.alert("Registered Successfully");
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }}

    return (
        <div>
            {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) :  
        
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-white form order-2">
                        <h1 className="display-4 fw-bolder">Hello, Friend</h1>
                        <p className="lead text-center">Enter your Details to Register</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/login" className=" btn btn-outline-light rounded-pill pb-2 w-50"> Login </NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Register</h1>
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Username</label>
                                <input type="text" className="form-control" id="name" name="username" value={user.username} onChange={handleInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleInput} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" name="confirm" value={user.confirm} onChange={handleInput} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Terms & Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary rounded-pill mt-4 w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
}
        </div>
    )
}

export default Register