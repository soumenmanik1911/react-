import Action from "./AcionState";
import Change from "./Change";
import { useState } from "react";
import useToggle from "./useToggle";
import Student from "./Student";



function App(){

  const [value, toggle] = useToggle(false);
 

  return(
    <div>
      <Action/>
        <Change/>
        <div>
          <button className="bg-blue-500 p-4" onClick={toggle}>toggle</button>
          <button className="bg-green-500 p-4" onClick={() => setvalue(false)}>show</button>
          <button>hide</button>

          {
            value?<h1>show</h1>:null
          }
        </div>
        <Student/>


        
     

     
    </div>
  )
}


export default App;