import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './G1CompStyle.css'

const PracticeExam = () => {
  const [resp, setResp] = useState([]);
  const [images, setImages] = useState("");
  const [score, setScore] = useState(0);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //When page loads, it retreives the all the data
  useEffect(() => {
    //response returns an array of objects and our data in db stored in response.data
    Axios.get(`${BASE_URL}/G1Data`).then((response) => {
      setResp(response.data.Exam3);
    });

    const type = 'E3';
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
    document.getElementById(event.target.name).style.display = "block";
    if (event.target.name === '539') {
      if (score > 32) {
        alert("Congrats, You have successfully cleared this test.");
      } else {
        alert( "You scored: " + score +"/40. " + "Let's review the answers and try it again.");
      }
    }
  }
  

  return (
    <div>
      <h6 className='mb-5'>Practice Exam #3</h6>
      <div className="container">
      <div className="row table">
          <table>
            <tbody>
            <tr>
              <td id={5000}>1</td>
              <td id={5010}>2</td>
              <td id={5020}>3</td>
              <td id={5030}>4</td>
              <td id={5040}>5</td>
              <td id={5050}>6</td>
              <td id={5060}>7</td>
              <td id={5070}>8</td>
              <td id={5080}>9</td>
              <td id={5090}>10</td>
              <td id={5100}>11</td>
              <td id={5110}>12</td>
              <td id={5120}>13</td>
              <td id={5130}>14</td>
              <td id={5140}>15</td>
              <td id={5150}>16</td>
              <td id={5160}>17</td>
              <td id={5170}>18</td>
              <td id={5180}>19</td>
              <td id={5190}>20</td>
            </tr>
            <tr>
              <td id={5200}>21</td>
              <td id={5210}>22</td>
              <td id={5220}>23</td>
              <td id={5230}>24</td>
              <td id={5240}>25</td>
              <td id={5250}>26</td>
              <td id={5260}>27</td>
              <td id={5270}>28</td>
              <td id={5280}>29</td>
              <td id={5290}>30</td>
              <td id={5300}>31</td>
              <td id={5310}>32</td>
              <td id={5320}>33</td>
              <td id={5330}>34</td>
              <td id={5340}>35</td>
              <td id={5350}>36</td>
              <td id={5360}>37</td>
              <td id={5370}>38</td>
              <td id={5380}>39</td>
              <td id={5390}>40</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="row score">
          <h6 className='py-2 px-2 '>Score: {score} / 40</h6>
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
                <h6 className='stmt' id={key + 1500}>{key + 1}: {stmt}</h6>
                {
                  (images.length) >= (key + 1) ?
                    `/uploads/${images[key].image}` !== '/uploads/ ' ?
                      //true if image available
                      <>
                        <img id={key + 1500} className='StmtImage' src={`/Exam3/${encodeURI(images[key].image)}`} alt={encodeURI(images[key].image)} />
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
                <h6 className='stmt'> <input type="checkbox" name={key + 500} id="A" onChange={(event) => handleOnChange(event)} value={op1} /> A: {op1} </h6>
                <h6 className='stmt'> <input type="checkbox" name={key + 500} id='B' onChange={(event) => handleOnChange(event)} value={op2} /> B: {op2} </h6>
                <h6 className='stmt'> <input type="checkbox" name={key + 500} id='C' onChange={(event) => handleOnChange(event)} value={op3} /> C: {op3} </h6>
                <h6 className='stmt4'> <input type="checkbox" name={key + 500} id='D' onChange={(event) => handleOnChange(event)} value={op4} /> D: {op4} </h6>
                <div className="ansPopUp">
                  {answer.toString() === 'A' ? <input type="text" id={key + 500} value={"Answer: " + answer + " " + op1} name={answer} readOnly /> :
                    answer.toString() === 'B' ? <input type="text" id={key + 500} value={"Answer: " + answer + " " + op2} name={answer} readOnly /> :
                      answer.toString() === 'C' ? <input type="text" id={key + 500} value={"Answer: " + answer + " " + op3} name={answer} readOnly /> :
                        <input type="text" id={key + 500} value={"Answer: " + answer + " " + op4} name={answer} readOnly />}

                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PracticeExam