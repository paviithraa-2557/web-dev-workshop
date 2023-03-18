import React, { useEffect, useState } from "react";
import "./App.css";
function Form()
{ 
  const [name,setName]= useState('')
  const [age,setAge]= useState(null)

  const onNameChange=(e)=>{setName(e.target.value)}
  const onAgeChange=(e)=>{setAge(e.target.value)}

  const onSubmit=() => {
    console.log("Name: "+name)
    console.log("Age: "+age)


  const data={name:name, age:age};
  fetch("http://localhost:3500/submit",{
    method:"POST",
    headers:
    {
      "Content-Type":"application/json",
    },
      body:JSON.stringify(data)
    })
  }
  return <div>
    Name:<input type='text' onChange={onNameChange}></input><br/>
    Age:<input type='number' onChange={onAgeChange}></input>
    <button type={'button'} onClick={onSubmit}>Submit</button> 
    </div>
}
function App() {

  const [message, setMessage] = useState("fetching data..");
  function test(data) 
  {
    console.log(data);
  }
  useEffect(() => {
    fetch("http://localhost:3500/app")
      .then((data) => data.text())
      .then((data) => setMessage(data))
  })
  return (
    <div>
       <Form/>
      
    </div>
  );
}

export default App;
