import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import '../G1Components/G1CompStyle.css'

const Overview = () => {
  const [lineBreaker, setLineBreaker] = useState([]);
  const BASE_URL = window.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    Axios.get(`${BASE_URL}/G2Data`).then((response)=>{      
      setLineBreaker((response.data.G2Overview).split('/*'));  
    }).then(setLoading(false));
  }, []);

  return (
    <section id="Overview">
      <div className='h6'>Overview</div>
      {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) :  
        lineBreaker.map((value, key) => {
          return <p key={key} className="lead fw-normal">{value}</p>
        })
      }    </section>
  )
}

export default Overview