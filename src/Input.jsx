import { useState } from "react";
function Input(){
    const[name,setName] = useState ("ss")
    const[mail,setMail] = useState ("ss")
    const[phone,setPhone] = useState ("")
    return(
        <div>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="enter your name"/>
            <input type="text" value={mail} onChange={(event)=>setMail(event.target.value)} placeholder="enter your mail"/>
            <input type="text" value={phone} onChange={(event)=>setPhone(event.target.value)} placeholder="enter your phone"/>
           <h1>{name}</h1>
              <h1>{mail}</h1>
                <h1>{phone}</h1>
                <button onClick={()=>{setName("");setMail("");setPhone("")}}>clear</button>
        </div>
    )
}
export default Input;