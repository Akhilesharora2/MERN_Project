import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Register = () => {

    const navigate= useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
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
        //Object Destructuring
        // Store object data into variables
        const { username, email, password } = user;
        try {
            //It is submitted on PORT 3000
            // Which is Front end but we need to 
            // Submit it on back end which is PORT 3001.
            // So we need Proxy
            const res = await fetch('/register', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })
            if(res.status === 400 || !res){
                window.alert("These credentials are already in use!!")
            }else{
                //You need to restart the server to work with Proxy.
                window.alert("Registered Successfully");
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
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
                            <div class="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="text" class="form-control" id="name" name="username" value={user.username} onChange={handleInput} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleInput} />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleInput} />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Terms & Conditions</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary rounded-pill mt-4 w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register