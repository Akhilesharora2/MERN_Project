import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
const G1OverviewAd = () => {
  const [Response, setResponse] = useState("");
  const [G1Overview , setG1Overview] = useState("");
  const [loading, setLoading] = useState(false);
  const BASE_URL = window.REACT_APP_BASE_URL;
  useEffect(()=>{
    setLoading(true);
    Axios.get(`${BASE_URL}/G1Data`).then((response)=>{
      setResponse(response.data);
      setG1Overview(response.data.G1Overview);
    }).then(setLoading(false));
  }, []);

  const handleChange = async (event) =>{
      setG1Overview(event.target.value);      
  }

const handleSubmit =  (id) => {
  Axios.put(`${BASE_URL}/G1Update`, {
    id: id, 
    G1Overview: G1Overview,
    P1: Response.P1,
    P2: Response.P2,
    Exam1: Response.Exam1,
    Exam2: Response.Exam2,
    Exam3: Response.Exam3,
    Final: Response.Final
  });

}

  return (
    <section id="G1OverviewAd">
      <div className='h6'>G1OverviewAd</div>
      <p className="lead">Edit your G1 Overview here.</p>
      {
        loading ? ( <div className="loader-container"> <div className="spinner"></div> </div>) :
      <form onSubmit={() => handleSubmit(Response._id)} method="PUT">

        <textarea onChange={handleChange} value={G1Overview} name="Overview" cols="80" rows="10" className='border border-primary border-2'>
        </textarea>
        <button className='btn btn-outline-primary float-end' type="submit"> Submit</button>
      </form>
}
    </section>
  )
}

export default G1OverviewAd;