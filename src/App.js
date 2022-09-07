import './App.css';
import React,{useState} from 'react';
import axios from 'axios';

const App=()=> {
  const [search,setSearch]= useState("");
  const changeHandler = e =>{
      setSearch(e.target.value);
    }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(search);
  }
  return (
    <div>
      <center>
        <h2>Gallery Snapshot</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler}/> <br />
          <input type="Submit" name="search"/>
        </form>
      </center>
    </div> 
  );
}

export default App;
