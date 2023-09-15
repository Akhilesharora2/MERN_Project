import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './G1CompStyle.css'

const KnowledgeTest1 = () => {
  //Resp is used to store the data coming from database
  //It contains the statement/options/Answer in a single line sepetated by '*/'
  const [resp, setResp] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //When page loads, it retreives the all the data
  useEffect(() => {
    //response returns an array of objects and our data in db stored in response.data
    Axios.get(`${BASE_URL}/G1Data`).then((response) => {
      setResp(response.data.P1);
    });
  }, []);


  //handleOnChange is triggered when user selects an option
  //It pop'us the result by making it green/red
  //It also disables all other options so that user can make only 1 selection
  const handleOnChange = (event) => {
    if ((event.target.id) === (document.getElementById(event.target.name).name)) {
      console.log('Correct');
      document.getElementById(event.target.name).style.background = "green";
    }
    else {
      console.log('Incorrect');
      document.getElementById(event.target.name).style.background = "red";
    }
    document.getElementsByName(event.target.name)[3].disabled = true;
    document.getElementsByName(event.target.name)[2].disabled = true;
    document.getElementsByName(event.target.name)[1].disabled = true;
    document.getElementsByName(event.target.name)[0].disabled = true;
    document.getElementById(event.target.name).style.display = "block";
  }

  return (
    <div>
      <h6 className='mb-5'>knowledge Test #1</h6>
      <div className="container">
        <div className="row">
          {

            resp.map((value, key) => {
              const stmt = (value.split('/*'))[0];
              const op1 = (value.split('/*'))[1];
              const op2 = (value.split('/*'))[2];
              const op3 = (value.split('/*'))[3];
              const op4 = (value.split('/*'))[4];
              const answer = (value.split('/*'))[5];
              return <div key={key}>
                <h6 className='stmt' id={key + 1100}>{key + 1}: {stmt}</h6>
                
                <h6 className='stmt'> <input type="checkbox" name={key + 100} id="A" onChange={(event) => handleOnChange(event)} value={op1} /> A: {op1} </h6>
                <h6 className='stmt'> <input type="checkbox" name={key + 100} id='B' onChange={(event) => handleOnChange(event)} value={op2} /> B: {op2} </h6>
                <h6 className='stmt'> <input type="checkbox" name={key + 100} id='C' onChange={(event) => handleOnChange(event)} value={op3} /> C: {op3} </h6>
                <h6 className='stmt4'> <input type="checkbox" name={key + 100} id='D' onChange={(event) => handleOnChange(event)} value={op4} /> D: {op4} </h6>
                <div className="ansPopUp">
                  {answer.toString() === 'A' ? <input type="text" id={key + 100} value={"Answer: " + answer + " " + op1} name={answer} readOnly /> :
                    answer.toString() === 'B' ? <input type="text" id={key + 100} value={"Answer: " + answer + " " + op2} name={answer} readOnly /> :
                      answer.toString() === 'C' ? <input type="text" id={key + 100} value={"Answer: " + answer + " " + op3} name={answer} readOnly /> :
                        <input type="text" id={key + 100} value={"Answer: " + answer + " " + op4} name={answer} readOnly />}

                </div>
              </div>
            })
          }
        </div>

      </div>
    </div>
  )
}

export default KnowledgeTest1