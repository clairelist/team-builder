import React from 'react';

//name, contact, division drop, rank
//LOGIC / FUNCTION section
const AgentForm = (props)=>{
    // const {values,update,submit} = props;

    const handleChange = event => {
        const {name,value} = event.target;
        props.change(name,value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.submit(); //handle change above deals w the props so we do not pass in here
    }


    return(
    <form onSubmit={handleSubmit}>
        <label>Name
        <input
            placeholder='ENTER YOUR NAME'
            value={props.values.firstname}
            name='firstname'
            onChange={handleChange}
            />
            </label>
        <label>Contact
        <input 
            placeholder='ENTER YOUR CONTACT INFO'
            value={props.values.contact}
            name='contact'
            onChange={handleChange}
        />
        </label>
        <label>Division
         
          <select value={props.values.division} name="division" onChange={handleChange}>
            <option value="">-- Select your division --</option>
            <option value="Operations">Operations</option>
            <option value="Engineering">Engineering</option>
            <option value="Psychic">Psychic</option>
            <option value='Orbital'>Orbital</option>
          </select>
        </label>
        <label>Rank
        <input 
            placeholder='ENTER your RANK'
            value={props.values.rank}
            name='rank'
            onChange={handleChange}
        />
        </label>
        <input type='submit' value='CREATE YOUR TEAM.'></input>
    </form>
    )
 
}

export default AgentForm;