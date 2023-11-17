import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './AdminStyling.css';
import { useNavigate } from 'react-router-dom';

const P1Ad = () => {
      //This const is sending our id back to find matching doc
      //It also store the document data(ID)
      const [Response, setResponse] = useState("");
      //This store updated statements 
      //It merges updated statement with the curren one and update it when submit is clicked 
      var newFinal = [];
      //This is to check if new statement have been created properly or not
      //Flagman for new statements
      const [stmt, setStmt] = useState(false);
      //This const is to make sure no unchanged data is being send back.(which results in erasing data).
      //Flagman for updates
      const [change, setChange] = useState(false);
      //It contains all the docs and sends updated doc back to the database
      //Stored P1 specific data only from G1 doc
      const [newelement, setNewelement] = useState([]);
      //It takes new statement temporarily
      //Adds a new statemtent data
      var [newStmt, setNewStmt] = useState([]);

  const navigate = useNavigate();
  const BASE_URL = window.REACT_APP_BASE_URL;
  //These var's contains New statement and it's all options
  var NS = "";
  var N1 = "";
  var N2 = "";
  var N3 = "";
  var N4 = "";
  var N5 = "";


  //When page loads, it retreives the all the data
  useEffect(() => {
    //response returns an array of objects and our data in db stored in response.data
    Axios.get(`${BASE_URL}/G1Data`).then((response) => {
      setResponse(response.data);
      setNewelement(response.data.P1);
    });
  }, []);


  //When a new statement is created, this function makes sure all data is set to the newelement so that no last letter will left
  //It triggers whenever stmt value is changed
  useEffect((event) => {
    if (change && stmt) {
      // console.log(newelement);
      handleSubmit(Response._id);
    }
  }, [stmt])


  const refresh = () => {
    window.alert("Deleted successfully");
    navigate('/AdminDashboard');
    window.location.reload()
  }
  //handleChange takes id value name and map the current data and based upon key(which is array index) then
  //split up the array we get and then target the specific element using name/ID and then change the value using V
  const handleChange = (event) => {
    const Id = event.target.id;
    const V = event.target.value;
    const N = event.target.name;
    newFinal = newelement.map((value, key) => {
      if (key == Id) {
        var stmt = (value.split('/*'))[0];
        var op1 = (value.split('/*'))[1];
        var op2 = (value.split('/*'))[2];
        var op3 = (value.split('/*'))[3];
        var op4 = (value.split('/*'))[4];
        var answer = (value.split('/*'))[5];
        switch (N) {
          case '0':
            stmt = V;
            break;
          case '1':
            op1 = V;
            break;
          case '2':
            op2 = V;
            break;
          case '3':
            op3 = V;
            break;
          case '4':
            op4 = V;
            break;
          case '5':
            answer = V;
            break;
          default:
            break;
        }
        return (stmt + "/*" + op1 + "/*" + op2 + "/*" + op3 + "/*" + op4 + "/*" + answer);
      }
      else {
        return value;
      }
    })
    setNewelement(newFinal);
    setChange(true);
  }


  // Handle change for the new statement 
  const handleChangeForNewStatement = (event) => {
    NS = document.getElementById("NS_P1").value;
    N1 = document.getElementById("N1_P1").value;
    N2 = document.getElementById("N2_P1").value;
    N3 = document.getElementById("N3_P1").value;
    N4 = document.getElementById("N4_P1").value;
    N5 = document.getElementById("N5_P1").value;
    if (NS && N1 && N2 && N3 && N4 && N5 !== "") {
      setNewStmt([NS + "/*" + N1 + "/*" + N2 + "/*" + N3 + "/*" + N4 + "/*" + N5]);
      setChange(true);
    }
  }
  // Add a new Statement into the DB
  const newStatement = (id) => {
    if (change) {
      setNewelement([...newelement, ...newStmt]);
      setStmt(true);
      document.getElementById("NS_P1").value = '';
      document.getElementById("N1_P1").value = '';
      document.getElementById("N2_P1").value = '';
      document.getElementById("N3_P1").value = '';
      document.getElementById("N4_P1").value = '';
      document.getElementById("N5_P1").value = '';
    } else {
      alert("All Fields must have a value");
    }
  }


  // Show/Hide our new statement block
  function toggleNewStatement() {
    var stmt = document.getElementById('NewStatementP1');
    if (stmt) {
      if (stmt.style.display === 'block') {
        stmt.style.display = 'none';
      } else {
        stmt.style.display = 'block';
      }
    }
  }


  //Delete
  const Delete = (id, key) => {
    // const imgId = images[key]._id;
    const index = key;
    newFinal = newelement;
    newFinal.splice(index, 1);
    const rqst3 = Axios.put(`${BASE_URL}/G1Update`, {
      id: id,
      G1Overview: Response.G1Overview,
      P1: newFinal,
      P2: Response.P2,
      Exam1: Response.Exam1,
      Exam2: Response.Exam2,
      Exam3: Response.Exam3,
      Final: Response.Final
    });
    Axios.all([rqst3])
      .then(
        refresh()
      )
      .catch((error) => {
        console.error('Error making Axios.all requests: ', error);
      });
  }

  //make all changes 
  const handleSubmit = (id) => {
    // localStorage.setItem('lastUrl' , window.location.href);
    if (change) {
      Axios.put(`${BASE_URL}/G1Update`, {
        id: id,
        G1Overview: Response.G1Overview,
        P1: newelement,
        P2: Response.P2,
        Exam1: Response.Exam1,
        Exam2: Response.Exam2,
        Exam3: Response.Exam3,
        Final: Response.Final
      });
    } else {
      alert("No Changes were made!!");
    }
  }

  return (
    <>
      <h6>Knowledge Test 1(P1Ad)</h6>
      {/* toggle new statement form button and form */}
      <p>Add a new Statement<button onClick={toggleNewStatement} className='NewStatementButton fa fa-plus ms-1 p-1 text-center bg-primary'></button></p>
      <form onSubmit={() => newStatement(Response._id)} method="PUT" id='NewStatementP1' encType='multipart/form-data'>
        <h6>Add a new Statement: {newelement.length + 1}</h6>
        <h6 className='stmt'>Statement {newelement.length + 1}: <input type="text" onChange={handleChangeForNewStatement} id='NS_P1' name="NS" placeholder="Enter a new statement..." /> </h6>
        <h6 className='stmt'>Option 1: <input type="text" onChange={handleChangeForNewStatement} id="N1_P1" name="N1" placeholder='Option A' /> </h6>
        <h6 className='stmt'>Option 2: <input type="text" onChange={handleChangeForNewStatement} id="N2_P1" name="N2" placeholder='Option B' /> </h6>
        <h6 className='stmt'>Option 3: <input type="text" onChange={handleChangeForNewStatement} id="N3_P1" name="N3" placeholder='Option C' /> </h6>
        <h6 className='stmt'>Option 4: <input type="text" onChange={handleChangeForNewStatement} id="N4_P1" name="N4" placeholder='Option D' /> </h6>
        <select
          onChange={handleChangeForNewStatement}
          id="N5_P1"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <button type="submit"> Submit </button>
        <hr />
      </form>

      {/* Displays all the statements from db and we can make changes into them */}
      <h6 className='mt-5 mb-4 text-center'>Final</h6> <hr />
      {
        newelement.map((value, key) => {
          const stmt = (value.split('/*'))[0];
          const op1 = (value.split('/*'))[1];
          const op2 = (value.split('/*'))[2];
          const op3 = (value.split('/*'))[3];
          const op4 = (value.split('/*'))[4];
          const answer = (value.split('/*'))[5];
          return <form onSubmit={() => handleSubmit(Response._id)} method="PUT" key={key}>
            <h6 className='stmt'> <p className='display-4'>{key + 1}:</p> <textarea id={key} type="text" rows="5" cols="60" name="0" placeholder={stmt} onChange={handleChange} /> </h6>
            <h6 className='stmt'>Option A: <textarea id={key} type="text" rows="3" cols="30" name="1" placeholder={op1} onChange={handleChange} /> </h6>
            <h6 className='stmt'>Option B: <textarea id={key} type="text" rows="3" cols="30" name="2" placeholder={op2} onChange={handleChange} /> </h6>
            <h6 className='stmt'>Option C: <textarea id={key} type="text" rows="3" cols="30" name="3" placeholder={op3} onChange={handleChange} /> </h6>
            <h6 className='stmt'>Option D: <textarea id={key} type="text" rows="3" cols="30" name="4" placeholder={op4} onChange={handleChange} /> </h6>
            <select
              onChange={handleChange}
              id={key}
              name='5'
              className='stmt'
            >
              <option value={answer}>Ans: {answer}</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <button type="submit"> Update </button>
            <button type="button" onClick={() => Delete(Response._id, key)}>Delete</button>
            <hr />
          </form>
        })
      }
    </>
  )

}

export default P1Ad