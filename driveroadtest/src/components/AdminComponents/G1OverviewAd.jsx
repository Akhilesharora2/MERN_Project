import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
const G1OverviewAd = () => {
  const [Response, setResponse] = useState("");
  const [G1Overview , setG1Overview] = useState("");
  
  useEffect(()=>{
    Axios.get("http://localhost:3001/G1Data").then((response)=>{
      setResponse(response.data);
      setG1Overview(response.data.G1Overview);
    });
  }, []);

  const handleChange = async (event) =>{
      setG1Overview(event.target.value);      
  }

const handleSubmit =  (id) => {
  Axios.put("http://localhost:3001/G1Update", {
    id: id, 
    G1Overview: G1Overview,

  });

}

  return (
    <section id="G1OverviewAd">
      <div className='h6'>G1OverviewAd</div>
      <p className="lead">Edit your G1 Overview here.</p>
      <form onSubmit={() => handleSubmit(Response._id)} method="POST">

        <textarea onChange={handleChange} value={G1Overview} name="Overview" cols="80" rows="10" className='border border-primary border-2'>
        </textarea>
        <button className='btn btn-outline-primary float-end' type="submit"> Submit</button>
      </form>
    </section>
  )
}

export default G1OverviewAd;