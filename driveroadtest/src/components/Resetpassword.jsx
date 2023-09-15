import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import './componentsStyling.css';

const Resetpassword = () => {
    const Navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

   //handle input
   const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    if(name === "password"){
        setPassword(value);
    }else{
        setConfirm(value);
    }
}

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);
        const path = window.location.pathname;
        const segments = path.split('/');
        const token = segments[segments.length-1];
        if(password !== confirm){
            alert("Both password and confirm passwords should match!!");
        }else{
        try{
            const res = await fetch(`/Resetpassword/Resetpassword/${token}`, {
                method: "POST",
                headers:{
                    "content-type": "application/JSON"
                },
                credentials: 'include',
                body: JSON.stringify({
                    password
                })
            });

            if(res.status === 400|| !res){
                setLoading(false);
                window.alert("Invalid Credentials");                
            }else{
                setLoading(false);
                window.alert("Password updated successfully");
                Navigate('/Login');
                window.location.reload();
                // Token is generated when we logged in 
                // Now we need to create schema htmlFor the messages
            }
        }catch(error){
            console.log(error);
        }
    }
    } 

    return(
    <div>
        {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) :  
        
        <div className="container">
            <div className="row my-5">
                <div className="col-md text-center">
                    <h5>Reset Password</h5>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" name="confirm" value={confirm} onChange={handleChange} />
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

export default Resetpassword