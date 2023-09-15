import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import './componentsStyling.css';

const Dashboard = () => {

    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);

        Axios.get('/userData').then((response) =>{
            setResponse(response.data);
        }).then(setLoading(false));
    },[]);

    return (
        <div>
            {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) : 
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-4 my-5 ">
                        <h5 className="display-6"> Welcome </h5>
                        <hr className='w-50'/>
                        <h5 className="display-6">  {response.username} </h5>
                        <hr className='w-50'/>
                        {/* <i className="fa fa-star">Mock Tests</i> */}
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-2">Dashboard</h1>
                        <hr className='w-100' />
                        <table>
                            <thead>
                                <tr>
                                    <th>Email: {response.email}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>
            </div>
}
        </div>
    )
}

export default Dashboard