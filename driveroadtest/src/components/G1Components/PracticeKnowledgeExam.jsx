import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './G1CompStyle.css'
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle'

const PracticeKnowledgeExam = () => {
  const [resp, setResp] = useState([]);
  const [score, setScore] = useState(0);
  const BASE_URL = window.REACT_APP_BASE_URL;

  //When page loads, it retreives the all the data
  useEffect(() => {
    //response returns an array of objects and our data in db stored in response.data
    Axios.get(`${BASE_URL}/G1Data`).then((response) => {
      setResp(response.data.Exam1);
    });
  }, []);

  const handleOnChange = (event) => {
    if ((event.target.id) === (document.getElementById(event.target.name).name)) {
      document.getElementById(event.target.name).style.background = "green";
      setScore(1 + score);
      document.getElementById(event.target.name * 10).style.background = "green";
    }
    else {
      document.getElementById(event.target.name).style.background = "red";
      document.getElementById(event.target.name * 10).style.background = "red";
    }
    // console.log(event.target.name);
    document.getElementsByName(event.target.name)[3].disabled = true;
    document.getElementsByName(event.target.name)[2].disabled = true;
    document.getElementsByName(event.target.name)[1].disabled = true;
    document.getElementsByName(event.target.name)[0].disabled = true;
    document.getElementById(event.target.name).style.display = "block";

    if (event.target.name === '319') {
      if (score > 16) {
        alert("Congrats, You have successfully cleared this test.");
      } else {
        alert("Let's review the answers once and try it again.");
      }
    }
  }

  const scrollToStmt= (event) =>{
    var getId = event.target.id;
    let last2 = getId.substr(1,2);
    let scrollInto= "13" + last2;
    if(last2 != '19'){
    scrollInto = Number(scrollInto) + 1;
    }
    let scrollMargin = document.getElementById(scrollInto);
    scrollMargin.scrollIntoView({behavior: "smooth", block: "center"});
  }

  return (
    <div>
      <h6 className='mb-5'>Practice Knowledge Exam #1</h6>
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
                <h6 className='stmt' id={key + 1300}>{key + 1}: {stmt}</h6>
                <h6 className='stmt'> <input type="checkbox" name={key + 300} id="A" onChange={(event) => handleOnChange(event)} value={op1} /> A: {op1} </h6>
                <h6 className='stmt'> <input type="checkbox" name={key + 300} id='B' onChange={(event) => handleOnChange(event)} value={op2} /> B: {op2} </h6>
                <h6 className='stmt'> <input type="checkbox" name={key + 300} id='C' onChange={(event) => handleOnChange(event)} value={op3} /> C: {op3} </h6>
                <h6 className='stmt4'> <input type="checkbox" name={key + 300} id='D' onChange={(event) => handleOnChange(event)} value={op4} /> D: {op4} </h6>
                <div className="ansPopUp">
                  {answer.toString() === 'A' ? <input type="text" id={key + 300} value={"Answer: " + answer + " " + op1} name={answer} readOnly /> :
                    answer.toString() === 'B' ? <input type="text" id={key + 300} value={"Answer: " + answer + " " + op2} name={answer} readOnly /> :
                      answer.toString() === 'C' ? <input type="text" id={key + 300} value={"Answer: " + answer + " " + op3} name={answer} readOnly /> :
                        <input type="text" id={key + 300} value={"Answer: " + answer + " " + op4} name={answer} readOnly />}

                </div>
              </div>
            })
          }
        </div>
        <div className="row tableBar">
          <div className="col-md-9">
            <table onClick={(event) => scrollToStmt(event)}>
              <tbody>
                <tr>
                  <td id={3000}>1</td>
                  <td id={3010}>2</td>
                  <td id={3020}>3</td>
                  <td id={3030}>4</td>
                  <td id={3040}>5</td>
                  <td id={3050}>6</td>
                  <td id={3060}>7</td>
                  <td id={3070}>8</td>
                  <td id={3080}>9</td>
                  <td id={3090}>10</td>
                </tr>
                <tr>
                  <td id={3100}>11</td>
                  <td id={3110}>12</td>
                  <td id={3120}>13</td>
                  <td id={3130}>14</td>
                  <td id={3140}>15</td>
                  <td id={3150}>16</td>
                  <td id={3160}>17</td>
                  <td id={3170}>18</td>
                  <td id={3180}>19</td>
                  <td id={3190}>20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-3">
            <h6 className='py-2 px-2 score'>Score: {score} / 20</h6>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PracticeKnowledgeExam