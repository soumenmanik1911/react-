
import { useState } from "react";
import useToggle from "./useToggle";

import Navbar from "./Navbar";
import { Suspense } from "react";
import React from "react";
import { lazy } from "react";

const Handel = React.lazy(() => import("./eveHandel"));

 




function App(){

  
  const [loading, setLoading] = useState(false);
 

  return(
    <div>
   <Navbar />
  {
    loading ? (
      <Suspense fallback={<div>Loading...</div>}>
        <Handel />
      </Suspense>
    ) : (
      <div className="text-center mt-4 text-xl font-bold text-gray-700">Click the button to load Handel component</div>
    )
  }
  
   <button onClick={() => setLoading(!loading)}>Toggle</button>


        
     

     
    </div>
  )
}


export default App;