import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const logout= async () =>{
        try {
            const res= await fetch('/logout' , {
                method: 'GET',
                headers:{
                    Accept: "application/json",
                    "content-type": "application/json"
                },
                credentials: "include"
            });
            window.location.reload();
            if(res.status === 401 || !res){
                window.alert("Please logout later")
            }else{
                navigate('/');
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      logout();
    }, []);
    
  return (
    <div>
        
    </div>
  )
}

export default Logout