import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

const GOverviewAd = () => {
  const [Response, setResponse] = useState("");
  const [GOverview , setGOverview] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(()=>{
    Axios.get(`${BASE_URL}/GData`).then((response)=>{
      setResponse(response.data);
      setGOverview(response.data.GOverview);
    });
  }, []);

  const handleChange = async (event) =>{
      setGOverview(event.target.value);      
  }

const handleSubmit =  (id) => {
  Axios.put(`${BASE_URL}/GUpdate`, {
    id: id, 
    GOverview: GOverview
  });

}

  return (
    <section id="GOverviewAd">
      <div className='h6'>G1OverviewAd</div>
      <p className="lead">Edit your G Overview here.</p>
      <form onSubmit={() => handleSubmit(Response._id)} method="PUT">

        <textarea onChange={handleChange} value={GOverview} name="Overview" cols="80" rows="10" className='border border-primary border-2'>
        </textarea>
        <button className='btn btn-outline-primary float-end' type="submit"> Submit</button>
      </form>
    </section>
  )
}

export default GOverviewAd;