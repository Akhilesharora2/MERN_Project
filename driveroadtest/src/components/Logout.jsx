import React, {useEffect} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './componentsStyling.css'

const Logout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

   

    useEffect(() => {
        setLoading(true);
        const logout= async () =>{
            try {
                const res= await fetch('/logout/logout' , {
                    method: 'GET',
                    headers:{
                        Accept: "application/json",
                        "content-type": "application/json"
                    },
                    credentials: "include"
                });
                if(res.status === 401 || !res){
                    setLoading(false)
                    window.alert("Error Loggin you out.");
                    navigate('/');
                    window.location.reload()
                }else{
                    setLoading(false)
                    navigate('/');
                    window.location.reload()
                }
            } catch (error) {
                console.log(error);
            }
        }

      logout();
    }, [navigate]);
    
  return (
    <div>
        {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) :  
                    " "}
    </div>
  )
}

export default Logout