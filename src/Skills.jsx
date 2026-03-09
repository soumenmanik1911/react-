import { useState } from "react";
export function Skills(){
    const[skills,setSkills] = useState ([]);
    const [city,setCity] = useState ("howrah");   

    const handelSkills =(event) =>{
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills(skills.filter((skill)=> skill !== event.target.value))    
        }
    }
    return(
        <div className="p-7 flex-col justify-around">
            <h1>select skills</h1>
            <input type="checkbox"  id="java" onChange={handelSkills} value="java"/>
            <label htmlFor="java">java</label>
            <br />
            <input type="checkbox"  id="python" onChange={handelSkills} value="python"  />
            <label htmlFor="python">python</label>
            <br />
            <input type="checkbox"  id="javascript" onChange={handelSkills} value="javascript"/>
            <label htmlFor="javascript">javascript</label>
            <h1>{skills.join(", ")}</h1>

           <select onChange={(event) =>setCity(event.target.value)} name="cityes" id="" defaultValue={city} className="bg-gray-300 p-8 rounded-md border-4 m-5">
            <option value="hi">hi</option>
            <option value="hi1">hi1</option>
            <option value="hi22">hi222</option>
            </select>
<h1 className="bg-green-700 font-extrabold">{city}</h1>

        </div>
    )
}
export default Skills;