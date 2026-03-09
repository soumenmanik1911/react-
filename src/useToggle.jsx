
import { useState } from "react";

const useToggle=(defaltvalue)=>{
    const[value,setvalue]=useState(defaltvalue)

    const toggle=()=>{
        if(typeof value === "boolean"){
            setvalue(prev=>!prev)
        }
        else{
            setvalue(prev=>!prev)
        }
    }
    return [value,toggle]


    

}
export default useToggle;