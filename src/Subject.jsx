import { use, useContext } from "react"
import context from "react-bootstrap/esm/AccordionContext"
import { ContextData } from "./ComtextData"

export default function Subject(){
    const subject =useContext(ContextData)
    return(
        <div className="p-6 bg-amber-200">
            <h1>Subject</h1>
            <h2>{subject}</h2>
        </div>
    )
}