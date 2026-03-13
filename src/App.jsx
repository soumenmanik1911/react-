
import { useState } from "react";
import useToggle from "./useToggle";

import Navbar from "./Navbar";
 




function App(){

  const [value, toggle] = useToggle(false);
 

  return(
    <div>
   <Navbar />


        
     

     
    </div>
  )
}


export default App;