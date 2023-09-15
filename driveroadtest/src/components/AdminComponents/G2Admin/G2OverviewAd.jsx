import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

const G2OverviewAd = () => {
  const [Response, setResponse] = useState("");
  const [G2Overview , setG2Overview] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(()=>{
    Axios.get(`${BASE_URL}/G2Data`).then((response)=>{
      setResponse(response.data);
      setG2Overview(response.data.G2Overview);
    });
  }, []);

  const handleChange = async (event) =>{
      setG2Overview(event.target.value);      
  }

const handleSubmit =  (id) => {
  Axios.put(`${BASE_URL}/G2Update`, {
    id: id, 
    G2Overview: G2Overview
  });

}

  return (
    <section id="G2OverviewAd">
      <div className='h6'>G2OverviewAd</div>
      <p className="lead">Edit your G2 Overview here.</p>
      <form onSubmit={() => handleSubmit(Response._id)} method="PUT">

        <textarea onChange={handleChange} value={G2Overview} name="Overview" cols="80" rows="10" className='border border-primary border-2'>
        </textarea>
        <button className='btn btn-outline-primary float-end' type="submit"> Submit</button>
      </form>
    </section>
  )
}

export default G2OverviewAd;