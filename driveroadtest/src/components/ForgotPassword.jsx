import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import './componentsStyling.css';

const ForgotPassword = () =>{

    const Navigate = useNavigate();
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);

   //handle input
   const handleChange = (event) =>{
    let value = event.target.value;
    setUser(value);
}

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);

        try{   
            const res = await fetch('/forgot-password/forgot-password', {
                method: "POST",
                headers:{
                    "content-type": "application/JSON"
                },
                credentials: 'include',
                body: JSON.stringify({
                    user
                })
            });

            if(res.status === 400|| !res){
                setLoading(false);
                window.alert("Invalid Credentials");                
            }else{
                setLoading(false);
                window.alert("Email Submitted Successfully");
                window.location.reload();
                Navigate('/');
                // Token is generated when we logged in 
                // Now we need to create schema htmlFor the messages
            }
        }catch(error){
            console.log(error);
        }
    } 

    return(
    <div>
        {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) :  
        
        <div className="container">
            <div className="row my-5">
                <div className="col-md text-center">
                    <h5>Forgot Password</h5>
                    <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={user.email} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">Password reset link will be sent if registered email found!</div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Reset</button>
                    </form>
                </div>
            </div>
        </div>
}
    </div>
    )
}

export default ForgotPassword