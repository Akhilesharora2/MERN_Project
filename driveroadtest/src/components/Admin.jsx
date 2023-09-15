import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router';

const Admin = () => {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    //handle input
    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]: value});
    }

//handle submit
const handleSubmit = async (event) =>{
    event.preventDefault();
    setLoading(true);

    const{email, password} =  user;
    try {
        const res = await fetch('/admin/admin', {
            method: "POST",
            headers:{
                "content-type": "application/JSON"
            },
            body: JSON.stringify({
                email,password
            })
        });
        if(res.status === 400|| !res){
            setLoading(false);
            window.alert("Invalid Credentials");                
        }else{
            setLoading(false);
            window.alert("Admin Inn");
            window.location.reload();
            Navigate('/AdminDashboard');
            // Token is generated when we logged in 
            // Now we need to create schema htmlFor the messages
        }
    } catch (error) {
        console.log(error);
    }
}




  return (
      <>
        {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) :  
        <div className="container">
            <div className="row">
                <div className="col">
                <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="Email1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" name='email' value={user.email} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="Password1" name='password' value={user.password} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Login</button>
                        </form>
                </div>
            </div>
        </div>
}
    </>
  )
}

export default Admin