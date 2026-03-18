import { use, useContext } from "react"
import context from "react-bootstrap/esm/AccordionContext"
import { ContextData } from "./ComtextData"
import { useState } from "react"

export default function Subject(){
    const subject =useContext(ContextData)
    return(
        <div className="p-6 bg-amber-200">
            <h1>Subject</h1>
            <h2>{subject}</h2>
            <Color />
            
        </div>
    )
}


const Color = ()=>{

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    return( <>
    <h1>Color mixer</h1>
    <div className="flex flex-col gap-0.5 mx-auto w-1/6">
    <div className="w-full h-16"  style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`}}> </div>
         <label htmlFor="red">Red</label>
    <input id="red" type="range" min={0} max={255} onChange={(event)=>setRed(event.target.value)} />
    <br />
    <label htmlFor="green">Green</label>
    <input id="green" type="range" min={0} max={255} onChange={(e)=>setGreen(e.target.value)} />
    <br />
    <label htmlFor="blue">Blue</label>
    <input id="blue" type="range" min={0} max={255} onChange={(e)=>setBlue(e.target.value)} />
    <br />
    </div>

    </>
)

   
    
}

