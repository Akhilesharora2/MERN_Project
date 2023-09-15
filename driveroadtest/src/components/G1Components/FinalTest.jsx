import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './G1CompStyle.css'

const FinalTest = () => {
  const [resp, setResp] = useState([]);
  const [images, setImages] = useState("");
  const [score, setScore] = useState(0);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //When page loads, it retreives the all the data
  useEffect(() => {
    //response returns an array of objects and our data in db stored in response.data
    Axios.get(`${BASE_URL}/G1Data`).then((response) => {
      setResp(response.data.Final);
    });

    const type= 'Final';
    Axios.get(`${BASE_URL}/showImages?img=${type}`).then((response) => {
      setImages(response.data);
    })
  }, []);

  const handleOnChange = (event) => {
    if ((event.target.id) === (document.getElementById(event.target.name).name)) {
      console.log('Correct');
      document.getElementById(event.target.name).style.background = "green";
      setScore(1 + score);
      document.getElementById(event.target.name * 10).style.background = "green";
    }
    else {
      console.log('Incorrect');
      document.getElementById(event.target.name).style.background = "red";
      document.getElementById(event.target.name * 10).style.background = "red";
    }
    // console.log(event.target.name);
    document.getElementsByName(event.target.name)[3].disabled = true;
    document.getElementsByName(event.target.name)[2].disabled = true;
    document.getElementsByName(event.target.name)[1].disabled = true;
    document.getElementsByName(event.target.name)[0].disabled = true;
    document.getElementById(event.target.name).style.display="block";
    if(event.target.name === '639'){
      if(score > 36){
        alert("Congrats, You have successfully cleared this test.");
      }else{
        alert("Let's review the answers once and try it again.");
      }
    }
  }

  return (
    <div>
      <h6 className='mb-5'>Final Test</h6>
      <div className="container">
      <div className="row table">
          <table>
            <tbody>
            <tr>
              <td id={6000}>1</td>
              <td id={6010}>2</td>
              <td id={6020}>3</td>
              <td id={6030}>4</td>
              <td id={6040}>5</td>
              <td id={6050}>6</td>
              <td id={6060}>7</td>
              <td id={6070}>8</td>
              <td id={6080}>9</td>
              <td id={6090}>10</td>
              <td id={6100}>11</td>
              <td id={6110}>12</td>
              <td id={6120}>13</td>
              <td id={6130}>14</td>
              <td id={6140}>15</td>
              <td id={6150}>16</td>
              <td id={6160}>17</td>
              <td id={6170}>18</td>
              <td id={6180}>19</td>
              <td id={6190}>20</td>
            </tr>
            <tr>
              <td id={6200}>21</td>
              <td id={6210}>22</td>
              <td id={6220}>23</td>
              <td id={6230}>24</td>
              <td id={6240}>25</td>
              <td id={6250}>26</td>
              <td id={6260}>27</td>
              <td id={6270}>28</td>
              <td id={6280}>29</td>
              <td id={6290}>30</td>
              <td id={6300}>31</td>
              <td id={6310}>32</td>
              <td id={6320}>33</td>
              <td id={6330}>34</td>
              <td id={6340}>35</td>
              <td id={6350}>36</td>
              <td id={6360}>37</td>
              <td id={6370}>38</td>
              <td id={6380}>39</td>
              <td id={6390}>40</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="row score">
          <h6 className='py-2 px-2 '>Score: {score} / 20</h6>
        </div>
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
                <h6 className='stmt' id={key+1600}>{key + 1}: {stmt}</h6>
                {
                  (images.length) >= (key + 1) ?
                    `/uploads/${images[key].image}` !== '/uploads/ ' ?
                      //true if image available
                      <>
                        <img id={key+1600} className='StmtImage' src={`/uploads/${encodeURI(images[key].image)}`} alt={encodeURI(images[key].image)} />
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
                
                <h6 className='stmt'> <input type="checkbox" name={key+600} id="A" onChange={(event) => handleOnChange(event)} value={op1} /> A: {op1} </h6>
                  <h6 className='stmt'> <input type="checkbox" name={key+600} id='B' onChange={(event) => handleOnChange(event)} value={op2} /> B: {op2} </h6>
                  <h6 className='stmt'> <input type="checkbox" name={key+600} id='C' onChange={(event) => handleOnChange(event)} value={op3} /> C: {op3} </h6>
                  <h6 className='stmt4'> <input type="checkbox" name={key+600} id='D' onChange={(event) => handleOnChange(event)} value={op4} /> D: {op4} </h6>
                  <div className="ansPopUp">
                  { answer.toString() === 'A'? <input type="text" id={key+600} value={"Answer: "+ answer+" " +op1} name={answer} readOnly />: 
                    answer.toString() === 'B'? <input type="text" id={key+600} value={"Answer: "+ answer+" " +op2} name={answer} readOnly />:
                    answer.toString() === 'C'? <input type="text" id={key+600} value={"Answer: "+ answer+" " +op3} name={answer} readOnly />:
                    <input type="text" id={key+600} value={"Answer: "+ answer+" " +op4} name={answer} readOnly />}
                  
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FinalTest