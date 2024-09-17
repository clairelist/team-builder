//DATA section
import './App.css';
import React, {useState} from 'react';
import AgentForm from './AgentForm';

//'shape' of the data -- inputs

const initFormVals = {
  firstname: '',
  lastname: '',
  contact: '',

  //DROP DOWN
  division:'',
  rank:''
}

//LOGIC / FUNCTION SECTION
function App() {
  const [values,setValues] = useState(initFormVals);
  const [members,setMembers] = useState([]);

 const onSubmit = () => {
    setMembers([values, ...members]);
    setValues(initFormVals);
  }

 const onChange = (name,value) =>{
    setValues({...values, [name]:value});
  }

  return (
    <div className="App">
     
    <h1>If you do not have authorization to access this site, TERMINATE ACCESS NOW.</h1>
    <AgentForm values={values}
    change={onChange}
    submit={onSubmit}
    />
    {members.map((member,idx) => {
      return (
        <div key={idx}>
          <h2>NAME: {member.firstname}</h2>
          <p>CONTACT THEM VIA: {member.contact}</p>
          <p>DIVISION: {member.division}</p>
          <p>THEIR RANK/CLEARANCE LEVEL: {member.rank}</p>
        </div>
      )
    })}
    </div>
  );
}

export default App; //'RENDER' IS IN INDEX.JS OF COURSE...
