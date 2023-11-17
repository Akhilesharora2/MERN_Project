import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './G1CompStyle.css'

const TrafficSigns2 = () => {
  const [resp, setResp] = useState([]);
  const [images, setImages] = useState("");
  const BASE_URL = window.REACT_APP_BASE_URL;

  //When page loads, it retreives the all the data
  useEffect(() => {
    //response returns an array of objects and our data in db stored in response.data
    Axios.get(`${BASE_URL}/G1Data`).then((response) => {
      setResp(response.data.P2);
    });

    const type= 'P2';
    Axios.get(`${BASE_URL}/showImages?img=${type}`).then((response) => {
      setImages(response.data);
    })
  }, []);

  const handleOnChange = (event) => {
    if ((event.target.id) === (document.getElementById(event.target.name).name)) {
      console.log('Correct');
      document.getElementById(event.target.name).style.background = "green";
      // setScore(1 + score);
      // document.getElementById(event.target.name * 10).style.background = "green";
    }
    else {
      console.log('Incorrect');
      document.getElementById(event.target.name).style.background = "red";
      // document.getElementById(event.target.name * 10).style.background = "red";
    }
    // console.log(event.target.name);
    document.getElementsByName(event.target.name)[3].disabled = true;
    document.getElementsByName(event.target.name)[2].disabled = true;
    document.getElementsByName(event.target.name)[1].disabled = true;
    document.getElementsByName(event.target.name)[0].disabled = true;
    document.getElementById(event.target.name).style.display="block";
    // if(event.target.name === '219'){
    //   if(score > 16){
    //     alert("Congrats, You have successfully cleared this test.");
    //   }else{
    //   alert("Let's review the answers once and try it again.");
    //   }
    // }
  }

  return (
    <div>
      <h6 className='mb-5'>Traffic Signs #2</h6>
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
                <h6 className='stmt' id={key+1200}>{key + 1}: {stmt}</h6>
                {
                  (images.length) >= (key + 1) ?
                    `/uploads/${images[key].image}` !== '/uploads/ ' ?
                      //true if image available
                      <> 
                        { images.map((value,key2) => {
                          if (images[key2].code == (key +1)){
                            // console.log("val:" + value + "  key2:" + key2 + " code:" + images[key2].code + " key1:" + key);
                            return <img key={key} id={key+1200} className='StmtImage' src={`/TrafficSigns/${encodeURI(images[key2].image)}`} alt={encodeURI(images[key].image)} />
                          }                          
                        }) }
                        {/* <img id={key+1200} className='StmtImage' src={`/TrafficSigns/${encodeURI(images[key].image)}`} alt={encodeURI(images[key].image)} /> */}
                        <br></br>
                      </>
                      :
                      //If not available 
                      <>
                        <h6> </h6>
                        <br></br>
                      </>
                    : " "
                }
                <h6 className='stmt'> <input type="checkbox" name={key+200} id="A" onChange={(event) => handleOnChange(event)} value={op1} /> A: {op1} </h6>
                  <h6 className='stmt'> <input type="checkbox" name={key+200} id='B' onChange={(event) => handleOnChange(event)} value={op2} /> B: {op2} </h6>
                  <h6 className='stmt'> <input type="checkbox" name={key+200} id='C' onChange={(event) => handleOnChange(event)} value={op3} /> C: {op3} </h6>
                  <h6 className='stmt4'> <input type="checkbox" name={key+200} id='D' onChange={(event) => handleOnChange(event)} value={op4} /> D: {op4} </h6>
                  <div className="ansPopUp">
                  { answer.toString() === 'A'? <input type="text" id={key+200} value={"Answer: "+ answer+" " +op1} name={answer} readOnly />: 
                    answer.toString() === 'B'? <input type="text" id={key+200} value={"Answer: "+ answer+" " +op2} name={answer} readOnly />:
                    answer.toString() === 'C'? <input type="text" id={key+200} value={"Answer: "+ answer+" " +op3} name={answer} readOnly />:
                    <input type="text" id={key+200} value={"Answer: "+ answer+" " +op4} name={answer} readOnly />}
                  
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TrafficSigns2