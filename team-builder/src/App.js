//DATA section
import './App.css';
import React, {useState} from 'react';
import axios from 'axios'; //useful the fake grepping below

//import Agent from './Agent';
//import AgentForm from './AgentForm';
//import Data from '../data/Data';
//we will create dummy data of different agents

//'shape' of the data -- inputs

const initFormVals = {
  firstname: '',
  lastname: '',
  contact: '',

  //DROP DOWN
  division:'',
  rank:''
}

//LOGIC AKA RENDER SECTION
function App() {
  const [formValues,setFormValues] = useState(initFormVals);

  return (
    <div className="App">
      <header className='App-header'>
    <h1>Agents Form App. If you do not have authorization to access this site, TERMINATE ACCESS NOW.</h1>
    {/* <AgentForm 
    values={formValues}
    update={updateForm}
    submit={submitForm}
    /> */}
      </header>
    </div>
  );
}

export default App; //'RENDER' IS IN INDEX.JS OF COURSE...
