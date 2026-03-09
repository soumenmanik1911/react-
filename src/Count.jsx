import { useState } from "react";

import Hope from "./Hope";

function Count(){

    const[count,setCount] = useState(0);
    const[display,setdisplay]= useState(0);
    return(
        <div>goal
        <h1 className="text-3xl font-extralight">{count}</h1>
        <button className="p-8 bg-amber-700 size-5  border-r-2 " onClick={()=>setCount(count+1)}>count </button>
        <button onClick={()=>setdisplay(display+1)}>display</button>

        {
            display %2 ==0?<h1 className="text-2xl font-bold">{count}</h1> :null
        }

        {
            count==0?<h1>jj0</h1>:
            count==2?<h1>jj0</h1>:
            count==4?<h1>jj0</h1>:<h1>happy holi</h1>
        }
       <Hope value={count}/>
        
        </div>
    )
}
export default Count;